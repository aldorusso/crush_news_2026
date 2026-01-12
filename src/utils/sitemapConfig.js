/**
 * Configuración avanzada de Sitemap
 *
 * Mejoras sobre gatsby-plugin-sitemap básico:
 * - Prioridades dinámicas según tipo de página
 * - Changefreq dinámico según frecuencia de actualización
 * - Soporte para image sitemap
 * - Fecha de última modificación real
 */

import { posts } from '../common/data/siteData'

/**
 * Calcula la prioridad según el tipo de página
 */
export function calculatePriority(path) {
  // Homepage: máxima prioridad
  if (path === '/') {
    return 1.0
  }

  // Categorías principales: alta prioridad
  if (path.match(/^\/category\/[^/]+\/?$/)) {
    return 0.9
  }

  // Artículos recientes (últimos 7 días): alta prioridad
  if (isRecentArticle(path)) {
    return 0.9
  }

  // Artículos: prioridad media-alta
  if (path.includes('/single-post') || path.match(/\/[^/]+-\d+\/?$/)) {
    return 0.8
  }

  // Páginas de contenido estático (about, contact, etc.)
  if (path.match(/^\/(about|contact|privacy|terms)\/?$/)) {
    return 0.6
  }

  // Subcategorías
  if (path.match(/^\/category\/.+\/.+/)) {
    return 0.7
  }

  // Archivo/tag pages
  if (path.includes('/tag/') || path.includes('/archive/')) {
    return 0.5
  }

  // Default
  return 0.7
}

/**
 * Calcula changefreq según el tipo de página
 */
export function calculateChangefreq(path) {
  // Homepage: se actualiza constantemente
  if (path === '/') {
    return 'hourly'
  }

  // Categorías principales: se actualizan diariamente
  if (path.match(/^\/category\/[^/]+\/?$/)) {
    return 'daily'
  }

  // Artículos de noticias: se actualizan frecuentemente
  if (path.includes('/single-post') || isRecentArticle(path)) {
    return 'daily'
  }

  // Artículos antiguos: se actualizan ocasionalmente
  if (path.match(/\/[^/]+-\d+\/?$/)) {
    return 'weekly'
  }

  // Páginas estáticas: raramente cambian
  if (path.match(/^\/(about|contact|privacy|terms)\/?$/)) {
    return 'monthly'
  }

  // Default
  return 'weekly'
}

/**
 * Obtiene la fecha de última modificación
 */
export function getLastModified(path) {
  // Para artículos, buscar en los datos reales
  const article = findArticleByPath(path)
  if (article && article.publishDate) {
    return new Date(article.publishDate).toISOString()
  }

  // Para otras páginas, usar fecha actual (en producción, esto debería venir de CMS)
  return new Date().toISOString()
}

/**
 * Verifica si un artículo es reciente (últimos 7 días)
 */
function isRecentArticle(path) {
  const article = findArticleByPath(path)
  if (!article || !article.publishDate) {
    return false
  }

  const articleDate = new Date(article.publishDate)
  const now = new Date()
  const daysDiff = (now - articleDate) / (1000 * 60 * 60 * 24)

  return daysDiff <= 7
}

/**
 * Encuentra un artículo por su path
 */
function findArticleByPath(path) {
  // Implementación simple - en producción, esto debería buscar en la base de datos
  const slug = path.split('/').pop()
  return posts.find(post => {
    const postSlug = post.title.toLowerCase().replace(/\s+/g, '-')
    return slug.includes(postSlug)
  })
}

/**
 * Extrae imágenes de un artículo para image sitemap
 */
export function getArticleImages(path, siteUrl) {
  const article = findArticleByPath(path)
  if (!article) {
    return []
  }

  const images = []

  // Imagen principal
  if (article.image) {
    images.push({
      url: article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`,
      title: article.title,
      caption: article.excerpt || article.title,
    })
  }

  // En producción, extraer todas las imágenes del contenido HTML
  // Por ahora, solo retornamos la imagen principal

  return images
}

/**
 * Serializa una entrada del sitemap
 */
export function serializeSitemapEntry(page, siteUrl) {
  const { path } = page

  const entry = {
    url: path,
    changefreq: calculateChangefreq(path),
    priority: calculatePriority(path),
    lastmod: getLastModified(path),
  }

  // Agregar imágenes si es un artículo
  const images = getArticleImages(path, siteUrl)
  if (images.length > 0) {
    entry.images = images
  }

  return entry
}

/**
 * Filtra páginas que no deberían estar en el sitemap
 */
export function shouldIncludeInSitemap(path) {
  // Excluir páginas de desarrollo
  if (path.includes('/dev-404-page') || path.includes('/404')) {
    return false
  }

  // Excluir páginas de administración
  if (path.includes('/admin') || path.includes('/draft')) {
    return false
  }

  // Excluir páginas con parámetros de query
  if (path.includes('?')) {
    return false
  }

  return true
}

/**
 * Genera entrada de sitemap para Google News
 * Google News requiere formato específico
 */
export function serializeGoogleNewsSitemap(article, siteUrl) {
  if (!article || !article.publishDate) {
    return null
  }

  // Google News solo indexa artículos de los últimos 2 días
  const articleDate = new Date(article.publishDate)
  const now = new Date()
  const hoursDiff = (now - articleDate) / (1000 * 60 * 60)

  if (hoursDiff > 48) {
    return null // Demasiado antiguo para Google News
  }

  return {
    url: `${siteUrl}${article.path || article.url}`,
    publication: {
      name: 'crush.news',
      language: 'es',
    },
    publication_date: articleDate.toISOString(),
    title: article.title,
    keywords: article.tags ? article.tags.join(', ') : '',
  }
}

export default {
  calculatePriority,
  calculateChangefreq,
  getLastModified,
  getArticleImages,
  serializeSitemapEntry,
  shouldIncludeInSitemap,
  serializeGoogleNewsSitemap,
}
