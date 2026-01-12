/**
 * Generador de XML Image Sitemap
 *
 * Crea un sitemap específico para imágenes para mejorar
 * la indexación en Google Images
 */

const fs = require('fs')
const path = require('path')

/**
 * Extrae todas las imágenes de los artículos
 */
function extractImagesFromArticles(posts) {
  const images = []

  posts.forEach(post => {
    const baseUrl = 'https://crush.news'
    const articleUrl = post.url || `${baseUrl}/single-post`

    // Imagen principal
    if (post.image) {
      const imageUrl = post.image.startsWith('http')
        ? post.image
        : `${baseUrl}${post.image}`

      images.push({
        loc: articleUrl,
        image: {
          loc: imageUrl,
          title: post.title,
          caption: post.excerpt || post.title,
        },
      })
    }

    // Extraer imágenes del contenido HTML (si existe)
    if (post.content) {
      const imgMatches = post.content.matchAll(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/gi)

      for (const match of imgMatches) {
        const imgSrc = match[1]
        const imgAlt = match[2]

        if (!imgSrc) continue

        const imageUrl = imgSrc.startsWith('http')
          ? imgSrc
          : `${baseUrl}${imgSrc}`

        images.push({
          loc: articleUrl,
          image: {
            loc: imageUrl,
            title: imgAlt || post.title,
            caption: imgAlt || '',
          },
        })
      }
    }
  })

  return images
}

/**
 * Genera XML para image sitemap
 */
function generateImageSitemap(images, options = {}) {
  const {
    siteUrl = 'https://crush.news',
  } = options

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'

  // Agrupar imágenes por página
  const pageImages = new Map()

  images.forEach(item => {
    if (!pageImages.has(item.loc)) {
      pageImages.set(item.loc, [])
    }
    pageImages.get(item.loc).push(item.image)
  })

  // Generar XML
  pageImages.forEach((imgs, url) => {
    xml += '  <url>\n'
    xml += `    <loc>${escapeXml(url)}</loc>\n`

    imgs.forEach(img => {
      xml += '    <image:image>\n'
      xml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`

      if (img.title) {
        xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`
      }

      if (img.caption) {
        xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`
      }

      xml += '    </image:image>\n'
    })

    xml += '  </url>\n'
  })

  xml += '</urlset>'

  return xml
}

/**
 * Escapa caracteres especiales para XML
 */
function escapeXml(str) {
  if (!str) return ''

  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Genera image sitemap desde datos de posts
 */
function generateImageSitemapFromPosts(posts, outputPath) {
  const images = extractImagesFromArticles(posts)

  if (images.length === 0) {
    console.warn('⚠️ No se encontraron imágenes para el image sitemap')
    return
  }

  const xml = generateImageSitemap(images)

  fs.writeFileSync(outputPath, xml)

  console.log(`✅ Image Sitemap generado: ${outputPath}`)
  console.log(`   Total de imágenes: ${images.length}`)
  console.log(`   Total de páginas con imágenes: ${new Set(images.map(i => i.loc)).size}`)
}

/**
 * Genera sitemap index que incluye sitemap principal + image sitemap
 */
function generateSitemapIndex(sitemaps, options = {}) {
  const {
    siteUrl = 'https://crush.news',
  } = options

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  sitemaps.forEach(sitemap => {
    xml += '  <sitemap>\n'
    xml += `    <loc>${escapeXml(siteUrl)}/${escapeXml(sitemap.file)}</loc>\n`

    if (sitemap.lastmod) {
      xml += `    <lastmod>${sitemap.lastmod}</lastmod>\n`
    }

    xml += '  </sitemap>\n'
  })

  xml += '</sitemapindex>'

  return xml
}

/**
 * Crea sitemap index con todos los sitemaps
 */
function createSitemapIndex(publicDir) {
  const sitemaps = [
    {
      file: 'sitemap-0.xml',
      lastmod: new Date().toISOString(),
    },
    {
      file: 'sitemap-images.xml',
      lastmod: new Date().toISOString(),
    },
  ]

  // Verificar si existen feeds por categoría
  const rssDir = path.join(publicDir, 'rss')
  if (fs.existsSync(rssDir)) {
    const categoryFiles = fs.readdirSync(rssDir)
    // Opcionalmente agregar sitemaps por categoría
  }

  const xml = generateSitemapIndex(sitemaps)

  const indexPath = path.join(publicDir, 'sitemap-index.xml')
  fs.writeFileSync(indexPath, xml)

  console.log('✅ Sitemap Index generado: sitemap-index.xml')
}

/**
 * Análisis de imágenes para reporte
 */
function analyzeImages(posts) {
  const report = {
    totalPosts: posts.length,
    postsWithImages: 0,
    postsWithoutImages: 0,
    totalImages: 0,
    imagesWithAlt: 0,
    imagesWithoutAlt: 0,
    averageImagesPerPost: 0,
    largestImageCount: 0,
  }

  const imageCounts = []

  posts.forEach(post => {
    let imageCount = 0

    // Imagen principal
    if (post.image) {
      imageCount++
      report.totalImages++
    }

    // Imágenes en contenido
    if (post.content) {
      const imgMatches = post.content.matchAll(/<img[^>]+>/gi)
      const imgs = Array.from(imgMatches)

      imageCount += imgs.length
      report.totalImages += imgs.length

      // Contar alt text
      imgs.forEach(match => {
        const hasAlt = /alt="([^"]+)"/i.test(match[0])
        if (hasAlt) {
          report.imagesWithAlt++
        } else {
          report.imagesWithoutAlt++
        }
      })
    }

    imageCounts.push(imageCount)

    if (imageCount > 0) {
      report.postsWithImages++
    } else {
      report.postsWithoutImages++
    }
  })

  report.averageImagesPerPost = report.totalPosts > 0
    ? (report.totalImages / report.totalPosts).toFixed(2)
    : 0

  report.largestImageCount = Math.max(...imageCounts, 0)

  return report
}

/**
 * Genera reporte de análisis de imágenes
 */
function generateImageReport(posts) {
  const report = analyzeImages(posts)

  console.log('\n📊 Análisis de Imágenes\n')
  console.log(`Total de artículos: ${report.totalPosts}`)
  console.log(`Artículos con imágenes: ${report.postsWithImages} (${((report.postsWithImages / report.totalPosts) * 100).toFixed(1)}%)`)
  console.log(`Artículos sin imágenes: ${report.postsWithoutImages}`)
  console.log(`\nTotal de imágenes: ${report.totalImages}`)
  console.log(`Promedio de imágenes por artículo: ${report.averageImagesPerPost}`)
  console.log(`Máximo de imágenes en un artículo: ${report.largestImageCount}`)

  if (report.totalImages > 0) {
    const altPercentage = ((report.imagesWithAlt / report.totalImages) * 100).toFixed(1)
    console.log(`\nImágenes con alt text: ${report.imagesWithAlt} (${altPercentage}%)`)
    console.log(`Imágenes sin alt text: ${report.imagesWithoutAlt}`)

    if (report.imagesWithoutAlt > 0) {
      console.log(`\n⚠️ ${report.imagesWithoutAlt} imágenes necesitan alt text para mejor SEO`)
    } else {
      console.log('\n✅ Todas las imágenes tienen alt text')
    }
  }

  console.log('')

  return report
}

module.exports = {
  extractImagesFromArticles,
  generateImageSitemap,
  generateImageSitemapFromPosts,
  generateSitemapIndex,
  createSitemapIndex,
  analyzeImages,
  generateImageReport,
}

// CLI support
if (require.main === module) {
  const command = process.argv[2]

  if (command === 'generate') {
    const { posts } = require('../common/data/siteData.js')
    const publicDir = path.join(__dirname, '../../public')
    const outputPath = path.join(publicDir, 'sitemap-images.xml')

    generateImageSitemapFromPosts(posts, outputPath)
    createSitemapIndex(publicDir)
  } else if (command === 'analyze') {
    const { posts } = require('../common/data/siteData.js')
    generateImageReport(posts)
  } else {
    console.log(`
📊 Image Sitemap Generator

Comandos:
  node imageSitemap.js generate  - Genera image sitemap XML
  node imageSitemap.js analyze   - Analiza imágenes de artículos

Ejemplo:
  node imageSitemap.js generate
    `)
  }
}
