import React from "react"

/**
 * Sistema de Enlazado Interno Automático por Entidades
 *
 * Este sistema detecta automáticamente entidades (personas, lugares, temas)
 * en el texto de los artículos y crea enlaces internos a sus páginas
 * correspondientes en el sitio.
 *
 * Beneficios SEO:
 * - Mejora el crawling de Google (descubre más páginas)
 * - Fortalece la estructura de enlaces internos
 * - Aumenta el tiempo en sitio (más navegación interna)
 * - Distribuye PageRank entre páginas relacionadas
 */

/**
 * Base de datos de entidades conocidas
 * En producción, esto vendría de una base de datos o CMS
 */
export const ENTITIES_DATABASE = {
  // Celebridades y personalidades
  personas: [
    {
      name: "Ester Expósito",
      aliases: ["Ester Exposito", "Ester"],
      url: "/personajes/ester-exposito",
      category: "Actrices Españolas",
      wikidataId: "https://www.wikidata.org/wiki/Q28494040",
      priority: 1, // 1 = alta, 2 = media, 3 = baja
    },
    {
      name: "Can Yaman",
      aliases: ["Can"],
      url: "/personajes/can-yaman",
      category: "Actores Turcos",
      wikidataId: "https://www.wikidata.org/wiki/Q28513569",
      priority: 1,
    },
    {
      name: "Georgina Rodríguez",
      aliases: ["Georgina Rodriguez", "Georgina"],
      url: "/personajes/georgina-rodriguez",
      category: "Influencers",
      wikidataId: "https://www.wikidata.org/wiki/Q28513123",
      priority: 1,
    },
    {
      name: "Dua Lipa",
      aliases: ["Dua"],
      url: "/personajes/dua-lipa",
      category: "Cantantes",
      wikidataId: "https://www.wikidata.org/wiki/Q21503428",
      priority: 1,
    },
    {
      name: "Rosalía",
      aliases: ["Rosalia"],
      url: "/personajes/rosalia",
      category: "Cantantes Españolas",
      wikidataId: "https://www.wikidata.org/wiki/Q29169371",
      priority: 1,
    },
  ],

  // Temas y categorías
  temas: [
    {
      name: "Generación Z",
      aliases: ["Gen Z", "GenZ", "Generacion Z"],
      url: "/temas/generacion-z",
      category: "Cultura",
      priority: 2,
    },
    {
      name: "Moda Sostenible",
      aliases: ["moda sustentable", "fashion sostenible"],
      url: "/temas/moda-sostenible",
      category: "Moda",
      priority: 2,
    },
    {
      name: "K-pop",
      aliases: ["Kpop", "K pop"],
      url: "/temas/kpop",
      category: "Música",
      priority: 2,
    },
  ],

  // Lugares
  lugares: [
    {
      name: "España",
      aliases: ["español", "española", "españoles"],
      url: "/lugares/espana",
      category: "Países",
      priority: 3,
    },
    {
      name: "Madrid",
      aliases: ["madrileño", "madrileña"],
      url: "/lugares/madrid",
      category: "Ciudades",
      priority: 3,
    },
  ],
}

/**
 * Construye un índice de búsqueda rápida
 */
function buildEntityIndex() {
  const index = new Map()

  Object.values(ENTITIES_DATABASE).forEach((entityType) => {
    entityType.forEach((entity) => {
      // Agregar nombre principal
      const mainKey = entity.name.toLowerCase()
      if (!index.has(mainKey)) {
        index.set(mainKey, entity)
      }

      // Agregar aliases
      entity.aliases?.forEach((alias) => {
        const aliasKey = alias.toLowerCase()
        if (!index.has(aliasKey)) {
          index.set(aliasKey, entity)
        }
      })
    })
  })

  return index
}

const ENTITY_INDEX = buildEntityIndex()

/**
 * Encuentra todas las entidades en un texto
 *
 * @param {string} text - Texto donde buscar entidades
 * @returns {Array} Lista de entidades encontradas con su posición
 */
export function findEntitiesInText(text) {
  const foundEntities = []
  const textLower = text.toLowerCase()

  // Ordenar entidades por longitud (más largas primero)
  // para evitar que "Ester" coincida antes que "Ester Expósito"
  const sortedEntities = Array.from(ENTITY_INDEX.entries()).sort(
    (a, b) => b[0].length - a[0].length
  )

  sortedEntities.forEach(([searchTerm, entity]) => {
    // Buscar todas las ocurrencias del término
    let position = 0
    while (true) {
      position = textLower.indexOf(searchTerm, position)
      if (position === -1) break

      // Verificar que sea una palabra completa (no parte de otra palabra)
      const beforeChar = position > 0 ? text[position - 1] : " "
      const afterChar =
        position + searchTerm.length < text.length
          ? text[position + searchTerm.length]
          : " "

      const isWordBoundary =
        /[\s.,;:!?¿¡()[\]{}"""''`\-—]/.test(beforeChar) &&
        /[\s.,;:!?¿¡()[\]{}"""''`\-—]/.test(afterChar)

      if (isWordBoundary) {
        foundEntities.push({
          text: text.substring(position, position + searchTerm.length),
          position,
          length: searchTerm.length,
          entity,
        })
      }

      position += searchTerm.length
    }
  })

  // Eliminar duplicados y entidades solapadas
  return removeDuplicateEntities(foundEntities)
}

/**
 * Elimina entidades duplicadas o solapadas
 * Prioriza entidades de mayor prioridad y más largas
 */
function removeDuplicateEntities(entities) {
  // Ordenar por prioridad y longitud
  const sorted = entities.sort((a, b) => {
    if (a.entity.priority !== b.entity.priority) {
      return a.entity.priority - b.entity.priority // Menor número = mayor prioridad
    }
    return b.length - a.length // Más largo primero
  })

  const result = []
  const usedPositions = new Set()

  sorted.forEach((entity) => {
    // Verificar si esta posición ya está ocupada
    let isOverlapping = false
    for (let i = entity.position; i < entity.position + entity.length; i++) {
      if (usedPositions.has(i)) {
        isOverlapping = true
        break
      }
    }

    if (!isOverlapping) {
      result.push(entity)
      // Marcar posiciones como usadas
      for (let i = entity.position; i < entity.position + entity.length; i++) {
        usedPositions.add(i)
      }
    }
  })

  return result.sort((a, b) => a.position - b.position)
}

/**
 * Convierte texto plano en HTML con enlaces automáticos
 *
 * @param {string} text - Texto original
 * @param {Object} options - Opciones de configuración
 * @returns {string} HTML con enlaces automáticos
 */
export function autoLinkText(text, options = {}) {
  const {
    maxLinksPerEntity = 2, // Máximo de enlaces por entidad en el mismo artículo
    noFollowExternal = true,
    openInNewTab = false,
    className = "auto-link",
  } = options

  const entities = findEntitiesInText(text)

  // Limitar enlaces por entidad
  const entityCounts = new Map()
  const filteredEntities = entities.filter((item) => {
    const entityUrl = item.entity.url
    const count = entityCounts.get(entityUrl) || 0

    if (count >= maxLinksPerEntity) {
      return false
    }

    entityCounts.set(entityUrl, count + 1)
    return true
  })

  // Construir HTML con enlaces
  let result = ""
  let lastPosition = 0

  filteredEntities.forEach((item) => {
    // Agregar texto antes del enlace
    result += text.substring(lastPosition, item.position)

    // Agregar enlace
    const attrs = [
      `href="${item.entity.url}"`,
      `class="${className}"`,
      `data-entity="${item.entity.name}"`,
      `title="Ver más sobre ${item.entity.name}"`,
    ]

    if (openInNewTab && item.entity.url.startsWith("http")) {
      attrs.push('target="_blank"')
      attrs.push('rel="noopener noreferrer"')
    }

    result += `<a ${attrs.join(" ")}>${item.text}</a>`

    lastPosition = item.position + item.length
  })

  // Agregar texto restante
  result += text.substring(lastPosition)

  return result
}

/**
 * Procesa contenido HTML completo y agrega enlaces automáticos
 * Evita agregar enlaces dentro de elementos <a>, <code>, <pre>, etc.
 *
 * @param {string} html - HTML original
 * @param {Object} options - Opciones de configuración
 * @returns {string} HTML con enlaces automáticos
 */
export function autoLinkHTML(html, options = {}) {
  // Parsear HTML de forma simple (en producción, usar un parser real)
  // Esta implementación básica busca solo dentro de <p> tags

  const paragraphRegex = /<p([^>]*)>(.*?)<\/p>/gs
  let result = html

  result = result.replace(paragraphRegex, (match, attrs, content) => {
    // No procesar si ya contiene enlaces
    if (content.includes("<a ")) {
      return match
    }

    // Aplicar auto-linking
    const linkedContent = autoLinkText(content, options)
    return `<p${attrs}>${linkedContent}</p>`
  })

  return result
}

/**
 * Genera un reporte de entidades encontradas en un artículo
 * Útil para sugerencias de enlaces en el CMS
 *
 * @param {string} text - Texto del artículo
 * @returns {Object} Reporte con entidades encontradas
 */
export function generateEntityReport(text) {
  const entities = findEntitiesInText(text)

  // Agrupar por entidad
  const grouped = {}
  entities.forEach((item) => {
    const key = item.entity.url
    if (!grouped[key]) {
      grouped[key] = {
        entity: item.entity,
        count: 0,
        positions: [],
      }
    }
    grouped[key].count++
    grouped[key].positions.push(item.position)
  })

  return {
    totalMentions: entities.length,
    uniqueEntities: Object.keys(grouped).length,
    entities: Object.values(grouped).sort((a, b) => b.count - a.count),
  }
}

/**
 * Agrega una nueva entidad a la base de datos
 * En producción, esto guardaría en la base de datos
 *
 * @param {Object} entity - Datos de la entidad
 * @param {string} type - Tipo de entidad (personas, temas, lugares)
 */
export function addEntity(entity, type = "personas") {
  if (!ENTITIES_DATABASE[type]) {
    ENTITIES_DATABASE[type] = []
  }

  ENTITIES_DATABASE[type].push(entity)

  // Reconstruir índice
  Object.assign(ENTITY_INDEX, buildEntityIndex())
}

/**
 * Obtiene todas las entidades de un tipo
 *
 * @param {string} type - Tipo de entidad
 * @returns {Array} Lista de entidades
 */
export function getEntitiesByType(type) {
  return ENTITIES_DATABASE[type] || []
}

/**
 * Busca una entidad por nombre o alias
 *
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Object|null} Entidad encontrada o null
 */
export function findEntity(searchTerm) {
  return ENTITY_INDEX.get(searchTerm.toLowerCase()) || null
}

/**
 * Componente React para auto-linking
 * Ejemplo de uso en React
 */
export function AutoLinkedContent({ html, ...options }) {
  const linkedHTML = autoLinkHTML(html, options)

  return React.createElement("div", {
    dangerouslySetInnerHTML: { __html: linkedHTML },
  })
}

export default {
  autoLinkText,
  autoLinkHTML,
  findEntitiesInText,
  generateEntityReport,
  addEntity,
  getEntitiesByType,
  findEntity,
  ENTITIES_DATABASE,
}
