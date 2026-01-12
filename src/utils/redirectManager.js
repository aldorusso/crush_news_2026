/**
 * Sistema de Gestión de Redirects 301
 *
 * Gestiona redirecciones 301 para evitar errores 404
 * y preservar PageRank cuando cambias URLs
 */

const fs = require('fs')
const path = require('path')

/**
 * Carga las redirecciones desde redirects.json
 */
function loadRedirects() {
  const redirectsPath = path.join(__dirname, '../../redirects.json')

  if (!fs.existsSync(redirectsPath)) {
    console.warn('⚠️ No se encontró redirects.json. Creando archivo vacío...')
    const emptyRedirects = {
      redirects: [],
      wildcards: []
    }
    fs.writeFileSync(redirectsPath, JSON.stringify(emptyRedirects, null, 2))
    return emptyRedirects
  }

  const data = fs.readFileSync(redirectsPath, 'utf8')
  return JSON.parse(data)
}

/**
 * Genera archivo _redirects para Netlify/Gatsby Cloud
 */
function generateNetlifyRedirects() {
  const config = loadRedirects()
  const lines = [
    '# Redirects 301 para Netlify/Gatsby Cloud',
    '# Generado automáticamente desde redirects.json',
    '# NO EDITAR MANUALMENTE',
    '',
  ]

  // Wildcard redirects primero
  if (config.wildcards && config.wildcards.length > 0) {
    lines.push('# Wildcard redirects')
    config.wildcards.forEach(redirect => {
      const status = redirect.status || 301
      const force = redirect.force ? '!' : ''
      lines.push(`${redirect.from}  ${redirect.to}  ${status}${force}`)
      if (redirect.note) {
        lines.push(`# ${redirect.note}`)
      }
    })
    lines.push('')
  }

  // Direct redirects
  if (config.redirects && config.redirects.length > 0) {
    lines.push('# Direct redirects')
    config.redirects.forEach(redirect => {
      const status = redirect.status || 301
      const force = redirect.force ? '!' : ''
      lines.push(`${redirect.from}  ${redirect.to}  ${status}${force}`)
      if (redirect.note) {
        lines.push(`# ${redirect.note}`)
      }
    })
  }

  const outputPath = path.join(__dirname, '../../public/_redirects')
  fs.writeFileSync(outputPath, lines.join('\n'))
  console.log('✅ Archivo _redirects generado para Netlify')
}

/**
 * Genera configuración de redirects para Vercel
 */
function generateVercelRedirects() {
  const config = loadRedirects()
  const vercelRedirects = []

  // Agregar wildcards
  if (config.wildcards) {
    config.wildcards.forEach(redirect => {
      vercelRedirects.push({
        source: redirect.from,
        destination: redirect.to,
        permanent: redirect.status === 301,
      })
    })
  }

  // Agregar redirects directos
  if (config.redirects) {
    config.redirects.forEach(redirect => {
      vercelRedirects.push({
        source: redirect.from,
        destination: redirect.to,
        permanent: redirect.status === 301,
      })
    })
  }

  // Leer vercel.json existente
  const vercelConfigPath = path.join(__dirname, '../../vercel.json')
  let vercelConfig = {}

  if (fs.existsSync(vercelConfigPath)) {
    const data = fs.readFileSync(vercelConfigPath, 'utf8')
    vercelConfig = JSON.parse(data)
  }

  // Agregar redirects a la configuración
  vercelConfig.redirects = vercelRedirects

  fs.writeFileSync(vercelConfigPath, JSON.stringify(vercelConfig, null, 2))
  console.log('✅ Redirects agregados a vercel.json')
}

/**
 * Genera configuración para Nginx
 */
function generateNginxRedirects() {
  const config = loadRedirects()
  const lines = [
    '# Redirects 301 para Nginx',
    '# Agregar dentro del bloque server {}',
    '',
  ]

  // Wildcards
  if (config.wildcards) {
    lines.push('# Wildcard redirects')
    config.wildcards.forEach(redirect => {
      const status = redirect.status || 301
      // Convertir wildcard de Netlify a regex de Nginx
      const from = redirect.from.replace('/*', '/(.*)').replace(':splat', '$1')
      const to = redirect.to.replace(':splat', '$1')

      lines.push(`rewrite ^${from}$ ${to} permanent; # ${status}`)
      if (redirect.note) {
        lines.push(`# ${redirect.note}`)
      }
    })
    lines.push('')
  }

  // Direct redirects
  if (config.redirects) {
    lines.push('# Direct redirects')
    config.redirects.forEach(redirect => {
      const status = redirect.status === 301 ? 'permanent' : 'redirect'
      lines.push(`rewrite ^${redirect.from}$ ${redirect.to} ${status};`)
      if (redirect.note) {
        lines.push(`# ${redirect.note}`)
      }
    })
  }

  const outputPath = path.join(__dirname, '../../nginx-redirects.conf')
  fs.writeFileSync(outputPath, lines.join('\n'))
  console.log('✅ Archivo nginx-redirects.conf generado')
}

/**
 * Agrega un nuevo redirect
 */
function addRedirect(from, to, options = {}) {
  const config = loadRedirects()

  const redirect = {
    from,
    to,
    status: options.status || 301,
    force: options.force || false,
    note: options.note || '',
  }

  // Verificar si ya existe
  const exists = config.redirects.find(r => r.from === from)
  if (exists) {
    console.warn(`⚠️ Ya existe un redirect desde ${from}. Actualizando...`)
    Object.assign(exists, redirect)
  } else {
    config.redirects.push(redirect)
  }

  // Guardar
  const redirectsPath = path.join(__dirname, '../../redirects.json')
  fs.writeFileSync(redirectsPath, JSON.stringify(config, null, 2))

  console.log(`✅ Redirect agregado: ${from} → ${to}`)

  // Regenerar archivos
  generateAllRedirects()
}

/**
 * Agrega un wildcard redirect
 */
function addWildcardRedirect(from, to, options = {}) {
  const config = loadRedirects()

  const redirect = {
    from,
    to,
    status: options.status || 301,
    note: options.note || '',
  }

  // Verificar si ya existe
  const exists = config.wildcards.find(r => r.from === from)
  if (exists) {
    console.warn(`⚠️ Ya existe un wildcard redirect desde ${from}. Actualizando...`)
    Object.assign(exists, redirect)
  } else {
    config.wildcards.push(redirect)
  }

  // Guardar
  const redirectsPath = path.join(__dirname, '../../redirects.json')
  fs.writeFileSync(redirectsPath, JSON.stringify(config, null, 2))

  console.log(`✅ Wildcard redirect agregado: ${from} → ${to}`)

  // Regenerar archivos
  generateAllRedirects()
}

/**
 * Elimina un redirect
 */
function removeRedirect(from) {
  const config = loadRedirects()

  config.redirects = config.redirects.filter(r => r.from !== from)
  config.wildcards = config.wildcards.filter(r => r.from !== from)

  // Guardar
  const redirectsPath = path.join(__dirname, '../../redirects.json')
  fs.writeFileSync(redirectsPath, JSON.stringify(config, null, 2))

  console.log(`✅ Redirect eliminado: ${from}`)

  // Regenerar archivos
  generateAllRedirects()
}

/**
 * Lista todos los redirects
 */
function listRedirects() {
  const config = loadRedirects()

  console.log('\n📋 Redirects configurados:\n')

  if (config.wildcards && config.wildcards.length > 0) {
    console.log('🔀 Wildcard Redirects:')
    config.wildcards.forEach((r, i) => {
      console.log(`  ${i + 1}. ${r.from} → ${r.to} (${r.status})`)
      if (r.note) console.log(`     Note: ${r.note}`)
    })
    console.log('')
  }

  if (config.redirects && config.redirects.length > 0) {
    console.log('➡️  Direct Redirects:')
    config.redirects.forEach((r, i) => {
      console.log(`  ${i + 1}. ${r.from} → ${r.to} (${r.status})`)
      if (r.note) console.log(`     Note: ${r.note}`)
    })
  }

  if ((!config.redirects || config.redirects.length === 0) &&
      (!config.wildcards || config.wildcards.length === 0)) {
    console.log('  (No hay redirects configurados)')
  }

  console.log('')
}

/**
 * Genera todos los archivos de redirects
 */
function generateAllRedirects() {
  try {
    generateNetlifyRedirects()
    generateVercelRedirects()
    generateNginxRedirects()
    console.log('\n🎉 Todos los archivos de redirects generados correctamente\n')
  } catch (error) {
    console.error('❌ Error generando redirects:', error.message)
  }
}

/**
 * Valida que no haya redirects en cadena (A→B→C)
 */
function validateRedirects() {
  const config = loadRedirects()
  const issues = []

  // Crear mapa de redirects
  const redirectMap = new Map()
  config.redirects.forEach(r => {
    redirectMap.set(r.from, r.to)
  })

  // Verificar cadenas
  config.redirects.forEach(redirect => {
    let current = redirect.to
    let chain = [redirect.from]
    let depth = 0
    const maxDepth = 10

    while (redirectMap.has(current) && depth < maxDepth) {
      chain.push(current)
      current = redirectMap.get(current)
      depth++
    }

    if (depth > 0) {
      issues.push({
        type: 'chain',
        chain: [...chain, current],
        message: `Redirect en cadena detectado: ${chain.join(' → ')} → ${current}`
      })
    }

    if (depth >= maxDepth) {
      issues.push({
        type: 'loop',
        chain: chain,
        message: `Posible loop infinito detectado: ${chain.join(' → ')}`
      })
    }
  })

  // Verificar redirects a URLs que ya no existen
  // (En producción, esto debería verificar contra el sitemap)

  if (issues.length > 0) {
    console.warn('\n⚠️ Problemas detectados en redirects:\n')
    issues.forEach((issue, i) => {
      console.warn(`  ${i + 1}. ${issue.message}`)
    })
    console.warn('\n💡 Recomendación: Actualiza los redirects para que apunten directamente al destino final.\n')
  } else {
    console.log('\n✅ No se detectaron problemas en los redirects\n')
  }

  return issues
}

/**
 * Importa redirects desde un archivo CSV
 * Formato: from,to,status,note
 */
function importFromCSV(csvPath) {
  const csvData = fs.readFileSync(csvPath, 'utf8')
  const lines = csvData.split('\n').filter(line => line.trim())

  // Skip header if exists
  const startIndex = lines[0].toLowerCase().includes('from') ? 1 : 0

  const config = loadRedirects()
  let added = 0

  for (let i = startIndex; i < lines.length; i++) {
    const [from, to, status = '301', note = ''] = lines[i].split(',').map(s => s.trim())

    if (!from || !to) continue

    config.redirects.push({
      from,
      to,
      status: parseInt(status),
      force: false,
      note
    })
    added++
  }

  // Guardar
  const redirectsPath = path.join(__dirname, '../../redirects.json')
  fs.writeFileSync(redirectsPath, JSON.stringify(config, null, 2))

  console.log(`✅ ${added} redirects importados desde CSV`)

  // Regenerar archivos
  generateAllRedirects()
}

module.exports = {
  loadRedirects,
  generateNetlifyRedirects,
  generateVercelRedirects,
  generateNginxRedirects,
  generateAllRedirects,
  addRedirect,
  addWildcardRedirect,
  removeRedirect,
  listRedirects,
  validateRedirects,
  importFromCSV,
}

// CLI support
if (require.main === module) {
  const command = process.argv[2]

  switch (command) {
    case 'generate':
      generateAllRedirects()
      break

    case 'list':
      listRedirects()
      break

    case 'validate':
      validateRedirects()
      break

    case 'add':
      const from = process.argv[3]
      const to = process.argv[4]
      const note = process.argv[5]
      if (!from || !to) {
        console.error('❌ Uso: node redirectManager.js add <from> <to> [note]')
        process.exit(1)
      }
      addRedirect(from, to, { note })
      break

    case 'remove':
      const path = process.argv[3]
      if (!path) {
        console.error('❌ Uso: node redirectManager.js remove <from>')
        process.exit(1)
      }
      removeRedirect(path)
      break

    case 'import':
      const csvPath = process.argv[3]
      if (!csvPath) {
        console.error('❌ Uso: node redirectManager.js import <csv-path>')
        process.exit(1)
      }
      importFromCSV(csvPath)
      break

    default:
      console.log(`
📋 Redirect Manager - Comandos disponibles:

  node redirectManager.js generate       - Genera todos los archivos de redirects
  node redirectManager.js list           - Lista todos los redirects
  node redirectManager.js validate       - Valida redirects (detecta cadenas y loops)
  node redirectManager.js add <from> <to> [note] - Agrega un redirect
  node redirectManager.js remove <from>  - Elimina un redirect
  node redirectManager.js import <csv>   - Importa redirects desde CSV

Ejemplos:
  node redirectManager.js add /old-url /new-url "Artículo renombrado"
  node redirectManager.js validate
      `)
  }
}
