/**
 * Sistema de Validación SEO
 *
 * Valida que los meta tags cumplan con las mejores prácticas de SEO
 * similar a Yoast SEO pero optimizado para sitios de noticias
 */

/**
 * Límites recomendados por Google
 */
export const SEO_LIMITS = {
  title: {
    min: 50,
    max: 60,
    optimal: 55,
  },
  metaDescription: {
    min: 150,
    max: 160,
    optimal: 155,
  },
  headlineSchema: {
    max: 110, // Google trunca después de 110 caracteres
  },
  url: {
    max: 75, // URLs más cortas son mejores
  },
  excerpt: {
    min: 120,
    max: 160,
  },
  content: {
    min: 300, // Mínimo de palabras para SEO
    optimal: 1500,
  },
  imageAlt: {
    min: 5,
    max: 125,
  },
}

/**
 * Niveles de severidad
 */
export const SEO_SEVERITY = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
  INFO: 'info',
}

/**
 * Valida la longitud del título
 */
export function validateTitle(title) {
  if (!title) {
    return {
      severity: SEO_SEVERITY.ERROR,
      message: 'El título es obligatorio',
      score: 0,
    }
  }

  const length = title.length

  if (length < SEO_LIMITS.title.min) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: `Título demasiado corto (${length} caracteres). Recomendado: ${SEO_LIMITS.title.min}-${SEO_LIMITS.title.max}`,
      score: 50,
    }
  }

  if (length > SEO_LIMITS.title.max) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: `Título demasiado largo (${length} caracteres). Google lo truncará. Recomendado: ${SEO_LIMITS.title.min}-${SEO_LIMITS.title.max}`,
      score: 70,
    }
  }

  return {
    severity: SEO_SEVERITY.SUCCESS,
    message: `Longitud de título óptima (${length} caracteres)`,
    score: 100,
  }
}

/**
 * Valida la meta descripción
 */
export function validateMetaDescription(description) {
  if (!description) {
    return {
      severity: SEO_SEVERITY.ERROR,
      message: 'La meta descripción es obligatoria',
      score: 0,
    }
  }

  const length = description.length

  if (length < SEO_LIMITS.metaDescription.min) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: `Meta descripción demasiado corta (${length} caracteres). Recomendado: ${SEO_LIMITS.metaDescription.min}-${SEO_LIMITS.metaDescription.max}`,
      score: 50,
    }
  }

  if (length > SEO_LIMITS.metaDescription.max) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: `Meta descripción demasiado larga (${length} caracteres). Google la truncará. Recomendado: ${SEO_LIMITS.metaDescription.min}-${SEO_LIMITS.metaDescription.max}`,
      score: 70,
    }
  }

  return {
    severity: SEO_SEVERITY.SUCCESS,
    message: `Longitud de meta descripción óptima (${length} caracteres)`,
    score: 100,
  }
}

/**
 * Valida el URL (slug)
 */
export function validateURL(url) {
  if (!url) {
    return {
      severity: SEO_SEVERITY.ERROR,
      message: 'URL es obligatoria',
      score: 0,
    }
  }

  const length = url.length

  // Validar caracteres especiales
  const hasSpecialChars = /[^a-z0-9-/]/.test(url.toLowerCase())
  if (hasSpecialChars) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: 'URL contiene caracteres especiales. Usa solo letras, números y guiones',
      score: 60,
    }
  }

  // Validar stop words en español
  const stopWords = ['el', 'la', 'los', 'las', 'un', 'una', 'de', 'del', 'y', 'o', 'en']
  const urlParts = url.split('/').pop().split('-')
  const hasStopWords = urlParts.some(part => stopWords.includes(part))

  if (hasStopWords) {
    return {
      severity: SEO_SEVERITY.INFO,
      message: 'URL contiene stop words (el, la, de, etc.). Considera eliminarlas para mejor SEO',
      score: 80,
    }
  }

  if (length > SEO_LIMITS.url.max) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: `URL demasiado larga (${length} caracteres). Recomendado: menos de ${SEO_LIMITS.url.max}`,
      score: 70,
    }
  }

  return {
    severity: SEO_SEVERITY.SUCCESS,
    message: 'URL optimizada para SEO',
    score: 100,
  }
}

/**
 * Valida alt text de imágenes
 */
export function validateImageAlt(altText, keyword = null) {
  if (!altText) {
    return {
      severity: SEO_SEVERITY.ERROR,
      message: 'Falta texto alternativo (alt text) en la imagen',
      score: 0,
    }
  }

  const length = altText.length

  if (length < SEO_LIMITS.imageAlt.min) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: `Alt text demasiado corto (${length} caracteres). Recomendado: ${SEO_LIMITS.imageAlt.min}-${SEO_LIMITS.imageAlt.max}`,
      score: 50,
    }
  }

  if (length > SEO_LIMITS.imageAlt.max) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: `Alt text demasiado largo (${length} caracteres). Recomendado: ${SEO_LIMITS.imageAlt.min}-${SEO_LIMITS.imageAlt.max}`,
      score: 70,
    }
  }

  // Si hay keyword, verificar que esté en el alt text
  if (keyword) {
    const hasKeyword = altText.toLowerCase().includes(keyword.toLowerCase())
    if (!hasKeyword) {
      return {
        severity: SEO_SEVERITY.INFO,
        message: `Alt text no contiene la palabra clave "${keyword}". Considera incluirla.`,
        score: 80,
      }
    }
  }

  return {
    severity: SEO_SEVERITY.SUCCESS,
    message: 'Alt text optimizado',
    score: 100,
  }
}

/**
 * Valida la longitud del contenido
 */
export function validateContentLength(content) {
  if (!content) {
    return {
      severity: SEO_SEVERITY.ERROR,
      message: 'El contenido está vacío',
      score: 0,
    }
  }

  // Contar palabras (aproximado)
  const words = content.trim().split(/\s+/).length

  if (words < SEO_LIMITS.content.min) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: `Contenido demasiado corto (${words} palabras). Recomendado: mínimo ${SEO_LIMITS.content.min} palabras`,
      score: 40,
    }
  }

  if (words < SEO_LIMITS.content.optimal) {
    return {
      severity: SEO_SEVERITY.INFO,
      message: `Contenido aceptable (${words} palabras). Óptimo: ${SEO_LIMITS.content.optimal} palabras`,
      score: 70,
    }
  }

  return {
    severity: SEO_SEVERITY.SUCCESS,
    message: `Contenido extenso (${words} palabras). Excelente para SEO.`,
    score: 100,
  }
}

/**
 * Valida presencia de keyword en el contenido
 */
export function validateKeywordPresence(content, keyword) {
  if (!keyword || !content) {
    return {
      severity: SEO_SEVERITY.INFO,
      message: 'No se especificó palabra clave para analizar',
      score: 0,
    }
  }

  const contentLower = content.toLowerCase()
  const keywordLower = keyword.toLowerCase()

  // Verificar en primer párrafo (primeros 150 caracteres)
  const firstParagraph = contentLower.substring(0, 150)
  const inFirstParagraph = firstParagraph.includes(keywordLower)

  // Contar ocurrencias
  const regex = new RegExp(keywordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
  const matches = content.match(regex)
  const occurrences = matches ? matches.length : 0

  // Calcular densidad
  const words = content.trim().split(/\s+/).length
  const density = ((occurrences / words) * 100).toFixed(2)

  // Densidad óptima: 0.5% - 2.5%
  const densityNum = parseFloat(density)

  let result = {
    occurrences,
    density: `${density}%`,
    inFirstParagraph,
  }

  if (occurrences === 0) {
    return {
      ...result,
      severity: SEO_SEVERITY.ERROR,
      message: `La palabra clave "${keyword}" no aparece en el contenido`,
      score: 0,
    }
  }

  if (!inFirstParagraph) {
    return {
      ...result,
      severity: SEO_SEVERITY.WARNING,
      message: `La palabra clave "${keyword}" no aparece en el primer párrafo`,
      score: 50,
    }
  }

  if (densityNum < 0.5) {
    return {
      ...result,
      severity: SEO_SEVERITY.WARNING,
      message: `Densidad de palabra clave muy baja (${density}%). Recomendado: 0.5%-2.5%`,
      score: 60,
    }
  }

  if (densityNum > 2.5) {
    return {
      ...result,
      severity: SEO_SEVERITY.WARNING,
      message: `Densidad de palabra clave muy alta (${density}%). Puede parecer spam. Recomendado: 0.5%-2.5%`,
      score: 70,
    }
  }

  return {
    ...result,
    severity: SEO_SEVERITY.SUCCESS,
    message: `Densidad de palabra clave óptima (${density}%)`,
    score: 100,
  }
}

/**
 * Valida presencia de keyword en elementos clave
 */
export function validateKeywordInElements(data, keyword) {
  if (!keyword) {
    return {
      severity: SEO_SEVERITY.INFO,
      message: 'No se especificó palabra clave',
      score: 0,
    }
  }

  const keywordLower = keyword.toLowerCase()
  const checks = {
    title: data.title?.toLowerCase().includes(keywordLower) || false,
    metaDescription: data.metaDescription?.toLowerCase().includes(keywordLower) || false,
    url: data.url?.toLowerCase().includes(keywordLower) || false,
    h1: data.h1?.toLowerCase().includes(keywordLower) || false,
  }

  const passedChecks = Object.values(checks).filter(Boolean).length
  const totalChecks = Object.keys(checks).length
  const score = Math.round((passedChecks / totalChecks) * 100)

  const missingIn = Object.entries(checks)
    .filter(([_, value]) => !value)
    .map(([key]) => key)

  if (score === 100) {
    return {
      severity: SEO_SEVERITY.SUCCESS,
      message: `La palabra clave "${keyword}" aparece en todos los elementos clave`,
      score: 100,
      checks,
    }
  }

  if (score >= 75) {
    return {
      severity: SEO_SEVERITY.INFO,
      message: `La palabra clave "${keyword}" falta en: ${missingIn.join(', ')}`,
      score: score,
      checks,
    }
  }

  return {
    severity: SEO_SEVERITY.WARNING,
    message: `La palabra clave "${keyword}" falta en elementos clave: ${missingIn.join(', ')}`,
    score: score,
    checks,
  }
}

/**
 * Valida estructura de encabezados (H1, H2, H3)
 */
export function validateHeadings(html) {
  if (!html) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: 'No se pudo analizar la estructura de encabezados',
      score: 0,
    }
  }

  // Contar H1
  const h1Count = (html.match(/<h1/gi) || []).length
  const h2Count = (html.match(/<h2/gi) || []).length
  const h3Count = (html.match(/<h3/gi) || []).length

  const issues = []

  if (h1Count === 0) {
    issues.push('Falta H1 (título principal)')
  } else if (h1Count > 1) {
    issues.push(`Múltiples H1 detectados (${h1Count}). Recomendado: solo 1`)
  }

  if (h2Count === 0) {
    issues.push('No hay subtítulos H2. Agrega secciones para mejor estructura')
  }

  if (issues.length > 0) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: issues.join('. '),
      score: 50,
      counts: { h1: h1Count, h2: h2Count, h3: h3Count },
    }
  }

  return {
    severity: SEO_SEVERITY.SUCCESS,
    message: 'Estructura de encabezados correcta',
    score: 100,
    counts: { h1: h1Count, h2: h2Count, h3: h3Count },
  }
}

/**
 * Valida enlaces internos y externos
 */
export function validateLinks(html) {
  if (!html) {
    return {
      severity: SEO_SEVERITY.WARNING,
      message: 'No se pudo analizar los enlaces',
      score: 0,
    }
  }

  // Contar enlaces
  const allLinks = html.match(/<a\s+[^>]*href="([^"]*)"[^>]*>/gi) || []
  const internalLinks = allLinks.filter(link => !link.includes('http') || link.includes('crush.news'))
  const externalLinks = allLinks.filter(link => link.includes('http') && !link.includes('crush.news'))

  const internalCount = internalLinks.length
  const externalCount = externalLinks.length

  const issues = []

  if (internalCount < 3) {
    issues.push(`Pocos enlaces internos (${internalCount}). Recomendado: mínimo 3`)
  }

  if (externalCount === 0) {
    issues.push('No hay enlaces externos. Considera agregar fuentes o referencias')
  }

  if (issues.length > 0) {
    return {
      severity: SEO_SEVERITY.INFO,
      message: issues.join('. '),
      score: 70,
      counts: { internal: internalCount, external: externalCount },
    }
  }

  return {
    severity: SEO_SEVERITY.SUCCESS,
    message: `Buenos enlaces: ${internalCount} internos, ${externalCount} externos`,
    score: 100,
    counts: { internal: internalCount, external: externalCount },
  }
}

/**
 * Análisis SEO completo
 * Retorna un score de 0-100 y lista de problemas/sugerencias
 */
export function analyzeSEO(data) {
  const {
    title,
    metaDescription,
    url,
    content,
    html,
    keyword,
    images = [],
  } = data

  const results = {
    title: validateTitle(title),
    metaDescription: validateMetaDescription(metaDescription),
    url: validateURL(url),
    contentLength: validateContentLength(content),
    headings: validateHeadings(html),
    links: validateLinks(html),
  }

  // Validaciones de keyword (si se especificó)
  if (keyword) {
    results.keywordPresence = validateKeywordPresence(content, keyword)
    results.keywordInElements = validateKeywordInElements({
      title,
      metaDescription,
      url,
      h1: title, // Asumimos que H1 es el título
    }, keyword)
  }

  // Validar imágenes
  if (images.length > 0) {
    const imageValidations = images.map((img, index) =>
      validateImageAlt(img.alt, keyword)
    )
    const imagesWithoutAlt = imageValidations.filter(v => v.score === 0).length

    results.images = {
      total: images.length,
      withoutAlt: imagesWithoutAlt,
      score: imagesWithoutAlt === 0 ? 100 : Math.max(0, 100 - (imagesWithoutAlt * 20)),
      severity: imagesWithoutAlt === 0 ? SEO_SEVERITY.SUCCESS : SEO_SEVERITY.WARNING,
      message: imagesWithoutAlt === 0
        ? `Todas las imágenes (${images.length}) tienen alt text`
        : `${imagesWithoutAlt} de ${images.length} imágenes sin alt text`,
    }
  }

  // Calcular score general (promedio ponderado)
  const weights = {
    title: 15,
    metaDescription: 15,
    url: 10,
    contentLength: 10,
    headings: 10,
    links: 10,
    images: 10,
    keywordPresence: 10,
    keywordInElements: 20,
  }

  let totalScore = 0
  let totalWeight = 0

  Object.entries(results).forEach(([key, result]) => {
    const weight = weights[key] || 0
    totalScore += (result.score || 0) * weight
    totalWeight += weight
  })

  const overallScore = Math.round(totalScore / totalWeight)

  // Determinar nivel general
  let overallSeverity = SEO_SEVERITY.SUCCESS
  let overallMessage = 'SEO excelente'

  if (overallScore < 50) {
    overallSeverity = SEO_SEVERITY.ERROR
    overallMessage = 'SEO necesita mejoras críticas'
  } else if (overallScore < 70) {
    overallSeverity = SEO_SEVERITY.WARNING
    overallMessage = 'SEO puede mejorarse significativamente'
  } else if (overallScore < 90) {
    overallSeverity = SEO_SEVERITY.INFO
    overallMessage = 'SEO bueno, con espacio para mejorar'
  }

  return {
    score: overallScore,
    severity: overallSeverity,
    message: overallMessage,
    results,
  }
}

/**
 * Genera reporte en consola para desarrollo
 */
export function logSEOReport(analysis) {
  console.group('🔍 SEO Analysis Report')
  console.log(`Overall Score: ${analysis.score}/100`)
  console.log(`Status: ${analysis.message}`)
  console.log('---')

  Object.entries(analysis.results).forEach(([key, result]) => {
    const emoji = {
      error: '❌',
      warning: '⚠️',
      success: '✅',
      info: 'ℹ️',
    }[result.severity]

    console.log(`${emoji} ${key}: ${result.message} (${result.score}/100)`)
  })

  console.groupEnd()
}

export default {
  validateTitle,
  validateMetaDescription,
  validateURL,
  validateImageAlt,
  validateContentLength,
  validateKeywordPresence,
  validateKeywordInElements,
  validateHeadings,
  validateLinks,
  analyzeSEO,
  logSEOReport,
  SEO_LIMITS,
  SEO_SEVERITY,
}
