/**
 * Validador de Structured Data (Schema.org)
 *
 * Valida que los schemas JSON-LD estén correctos antes de publicar
 * Similar a Google Rich Results Test pero en desarrollo
 */

/**
 * Esquemas requeridos para cada tipo
 */
const REQUIRED_FIELDS = {
  NewsArticle: [
    '@context',
    '@type',
    'headline',
    'image',
    'datePublished',
    'author',
    'publisher',
  ],
  WebSite: [
    '@context',
    '@type',
    'name',
    'url',
  ],
  Organization: [
    '@context',
    '@type',
    'name',
    'url',
  ],
  BreadcrumbList: [
    '@context',
    '@type',
    'itemListElement',
  ],
  FAQPage: [
    '@context',
    '@type',
    'mainEntity',
  ],
  VideoObject: [
    '@context',
    '@type',
    'name',
    'description',
    'thumbnailUrl',
    'uploadDate',
  ],
  ImageGallery: [
    '@context',
    '@type',
    'name',
    'associatedMedia',
  ],
  ImageObject: [
    '@context',
    '@type',
    'contentUrl',
  ],
}

/**
 * Recomendaciones opcionales para cada tipo
 */
const RECOMMENDED_FIELDS = {
  NewsArticle: [
    'dateModified',
    'mainEntityOfPage',
    'articleSection',
    'keywords',
  ],
  Organization: [
    'logo',
    'sameAs',
    'contactPoint',
  ],
  VideoObject: [
    'duration',
    'contentUrl',
    'embedUrl',
  ],
}

/**
 * Reglas de validación específicas
 */
const VALIDATION_RULES = {
  headline: {
    maxLength: 110,
    message: 'El headline debe tener máximo 110 caracteres para Google',
  },
  'image[]': {
    minItems: 1,
    message: 'Debe incluir al menos una imagen',
  },
  datePublished: {
    format: 'ISO 8601',
    message: 'datePublished debe estar en formato ISO 8601 (ej: 2024-03-18T10:00:00Z)',
  },
  dateModified: {
    format: 'ISO 8601',
    message: 'dateModified debe estar en formato ISO 8601',
  },
}

/**
 * Valida un schema JSON-LD
 */
export function validateSchema(schema) {
  if (!schema || typeof schema !== 'object') {
    return {
      valid: false,
      errors: ['Schema debe ser un objeto JSON válido'],
      warnings: [],
      score: 0,
    }
  }

  const errors = []
  const warnings = []
  const type = schema['@type']

  if (!type) {
    errors.push('Falta el campo @type')
    return { valid: false, errors, warnings, score: 0 }
  }

  // Verificar campos requeridos
  const requiredFields = REQUIRED_FIELDS[type] || []
  const missingRequired = []

  requiredFields.forEach(field => {
    if (!schema[field] || (Array.isArray(schema[field]) && schema[field].length === 0)) {
      missingRequired.push(field)
    }
  })

  if (missingRequired.length > 0) {
    errors.push(`Faltan campos requeridos: ${missingRequired.join(', ')}`)
  }

  // Verificar campos recomendados
  const recommendedFields = RECOMMENDED_FIELDS[type] || []
  const missingRecommended = []

  recommendedFields.forEach(field => {
    if (!schema[field]) {
      missingRecommended.push(field)
    }
  })

  if (missingRecommended.length > 0) {
    warnings.push(`Campos recomendados ausentes: ${missingRecommended.join(', ')}`)
  }

  // Validaciones específicas por campo
  Object.entries(VALIDATION_RULES).forEach(([field, rule]) => {
    const value = schema[field]

    if (value) {
      // Validar longitud máxima
      if (rule.maxLength && value.length > rule.maxLength) {
        warnings.push(`${field}: ${rule.message} (actual: ${value.length} caracteres)`)
      }

      // Validar formato de fecha
      if (rule.format === 'ISO 8601' && !isValidISO8601(value)) {
        errors.push(`${field}: ${rule.message}`)
      }
    }

    // Validar array mínimo
    if (field.endsWith('[]')) {
      const arrayField = field.replace('[]', '')
      const arrayValue = schema[arrayField]
      if (rule.minItems && (!arrayValue || arrayValue.length < rule.minItems)) {
        errors.push(`${arrayField}: ${rule.message}`)
      }
    }
  })

  // Validaciones específicas por tipo
  if (type === 'NewsArticle') {
    errors.push(...validateNewsArticle(schema))
  } else if (type === 'FAQPage') {
    errors.push(...validateFAQPage(schema))
  } else if (type === 'VideoObject') {
    errors.push(...validateVideoObject(schema))
  }

  // Calcular score
  const totalRequired = requiredFields.length
  const totalRecommended = recommendedFields.length
  const missingRequiredCount = missingRequired.length
  const missingRecommendedCount = missingRecommended.length

  let score = 100

  // Penalizar por campos requeridos faltantes (50% del score)
  if (totalRequired > 0) {
    score -= (missingRequiredCount / totalRequired) * 50
  }

  // Penalizar por campos recomendados faltantes (20% del score)
  if (totalRecommended > 0) {
    score -= (missingRecommendedCount / totalRecommended) * 20
  }

  // Penalizar por errores adicionales (30% del score)
  score -= Math.min(errors.length * 10, 30)

  score = Math.max(0, Math.round(score))

  const valid = errors.length === 0

  return {
    valid,
    errors,
    warnings,
    score,
    type,
  }
}

/**
 * Validaciones específicas para NewsArticle
 */
function validateNewsArticle(schema) {
  const errors = []

  // Validar author
  if (schema.author) {
    if (!schema.author['@type'] || !schema.author.name) {
      errors.push('author debe tener @type y name')
    }
  }

  // Validar publisher
  if (schema.publisher) {
    if (!schema.publisher['@type'] || !schema.publisher.name) {
      errors.push('publisher debe tener @type y name')
    }
    if (!schema.publisher.logo || !schema.publisher.logo.url) {
      errors.push('publisher debe tener logo con url')
    }
  }

  // Validar imagen
  if (schema.image) {
    const images = Array.isArray(schema.image) ? schema.image : [schema.image]
    if (images.length === 0) {
      errors.push('Debe incluir al menos una imagen')
    }

    // Google recomienda imágenes de al menos 1200px de ancho
    // (No podemos validar esto sin cargar la imagen, solo advertir)
  }

  return errors
}

/**
 * Validaciones específicas para FAQPage
 */
function validateFAQPage(schema) {
  const errors = []

  if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
    errors.push('mainEntity debe ser un array de Question')
    return errors
  }

  schema.mainEntity.forEach((question, index) => {
    if (question['@type'] !== 'Question') {
      errors.push(`mainEntity[${index}]: @type debe ser "Question"`)
    }
    if (!question.name) {
      errors.push(`mainEntity[${index}]: Falta el campo "name" (la pregunta)`)
    }
    if (!question.acceptedAnswer) {
      errors.push(`mainEntity[${index}]: Falta el campo "acceptedAnswer"`)
    } else {
      if (question.acceptedAnswer['@type'] !== 'Answer') {
        errors.push(`mainEntity[${index}].acceptedAnswer: @type debe ser "Answer"`)
      }
      if (!question.acceptedAnswer.text) {
        errors.push(`mainEntity[${index}].acceptedAnswer: Falta el campo "text" (la respuesta)`)
      }
    }
  })

  return errors
}

/**
 * Validaciones específicas para VideoObject
 */
function validateVideoObject(schema) {
  const errors = []

  // Al menos uno de contentUrl o embedUrl debe estar presente
  if (!schema.contentUrl && !schema.embedUrl) {
    errors.push('Debe incluir contentUrl o embedUrl')
  }

  // Si hay duration, validar formato ISO 8601
  if (schema.duration && !isValidISO8601Duration(schema.duration)) {
    errors.push('duration debe estar en formato ISO 8601 (ej: PT5M30S para 5 min 30 seg)')
  }

  return errors
}

/**
 * Valida formato de fecha ISO 8601
 */
function isValidISO8601(dateString) {
  const iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/
  return iso8601Regex.test(dateString)
}

/**
 * Valida formato de duración ISO 8601 (PT5M30S)
 */
function isValidISO8601Duration(duration) {
  const iso8601DurationRegex = /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/
  return iso8601DurationRegex.test(duration)
}

/**
 * Extrae todos los schemas JSON-LD de una página HTML
 */
export function extractSchemasFromHTML(html) {
  if (!html || typeof html !== 'string') {
    return []
  }

  const schemas = []
  const scriptTagRegex = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi

  let match
  while ((match = scriptTagRegex.exec(html)) !== null) {
    try {
      const jsonString = match[1].trim()
      const schema = JSON.parse(jsonString)
      schemas.push(schema)
    } catch (error) {
      console.error('Error parseando schema JSON-LD:', error.message)
    }
  }

  return schemas
}

/**
 * Valida todos los schemas de una página
 */
export function validatePage(html) {
  const schemas = extractSchemasFromHTML(html)

  if (schemas.length === 0) {
    return {
      valid: false,
      message: 'No se encontraron schemas JSON-LD en la página',
      schemas: [],
      overallScore: 0,
    }
  }

  const results = schemas.map(schema => validateSchema(schema))

  const allValid = results.every(r => r.valid)
  const overallScore = Math.round(
    results.reduce((sum, r) => sum + r.score, 0) / results.length
  )

  return {
    valid: allValid,
    message: allValid ? 'Todos los schemas son válidos' : 'Algunos schemas tienen errores',
    schemas: results,
    overallScore,
  }
}

/**
 * Genera reporte de validación
 */
export function generateValidationReport(results) {
  console.group('🔍 Schema.org Validation Report')

  console.log(`Overall Score: ${results.overallScore}/100`)
  console.log(`Status: ${results.valid ? '✅ Valid' : '❌ Invalid'}`)
  console.log('---')

  results.schemas.forEach((result, index) => {
    const icon = result.valid ? '✅' : '❌'
    console.log(`\n${icon} Schema ${index + 1}: ${result.type} (${result.score}/100)`)

    if (result.errors.length > 0) {
      console.log('  Errors:')
      result.errors.forEach(error => console.log(`    ❌ ${error}`))
    }

    if (result.warnings.length > 0) {
      console.log('  Warnings:')
      result.warnings.forEach(warning => console.log(`    ⚠️ ${warning}`))
    }

    if (result.valid && result.warnings.length === 0) {
      console.log('  ✅ Schema perfecto')
    }
  })

  console.groupEnd()
}

/**
 * Hook de React para validar schemas en desarrollo
 */
export function useSchemaValidation(schema, enableValidation = process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined' || !enableValidation) {
    return null
  }

  const result = validateSchema(schema)

  if (!result.valid) {
    console.group(`❌ Schema ${result.type} inválido`)
    result.errors.forEach(error => console.error(`  ❌ ${error}`))
    console.groupEnd()
  } else if (result.warnings.length > 0) {
    console.group(`⚠️ Schema ${result.type} con advertencias`)
    result.warnings.forEach(warning => console.warn(`  ⚠️ ${warning}`))
    console.groupEnd()
  }

  return result
}

export default {
  validateSchema,
  validatePage,
  extractSchemasFromHTML,
  generateValidationReport,
  useSchemaValidation,
  REQUIRED_FIELDS,
  RECOMMENDED_FIELDS,
}
