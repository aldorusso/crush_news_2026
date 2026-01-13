/**
 * Configuración avanzada de Sitemap
 * CommonJS para compatibilidad con gatsby-config.js
 */

/**
 * Calcula la prioridad según el tipo de página
 */
function calculatePriority(path) {
  if (path === '/') return 1.0
  if (path.match(/^\/category\/[^/]+\/?$/)) return 0.9
  if (path.includes('/post/') || path.includes('/single-post')) return 0.8
  if (path.match(/^\/(about|contact|privacy|terms)\/?$/)) return 0.6
  if (path.includes('/glosario')) return 0.7
  return 0.7
}

/**
 * Calcula changefreq según el tipo de página
 */
function calculateChangefreq(path) {
  if (path === '/') return 'hourly'
  if (path.match(/^\/category\/[^/]+\/?$/)) return 'daily'
  if (path.includes('/post/') || path.includes('/single-post')) return 'weekly'
  if (path.match(/^\/(about|contact|privacy|terms)\/?$/)) return 'monthly'
  return 'weekly'
}

/**
 * Obtiene la fecha de última modificación
 */
function getLastModified() {
  return new Date().toISOString()
}

/**
 * Filtra páginas que no deberían estar en el sitemap
 */
function shouldIncludeInSitemap(path) {
  if (path.includes('/dev-404-page') || path.includes('/404')) return false
  if (path.includes('/admin') || path.includes('/draft')) return false
  if (path.includes('?')) return false
  return true
}

module.exports = {
  calculatePriority,
  calculateChangefreq,
  getLastModified,
  shouldIncludeInSitemap,
}
