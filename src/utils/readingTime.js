/**
 * READING TIME CALCULATOR
 *
 * Calcula el tiempo estimado de lectura basado en:
 * - Promedio de 200-250 palabras por minuto (español)
 * - Análisis de contenido HTML
 * - Imágenes, videos y código
 *
 * @version 1.0.0
 */

/**
 * Elimina etiquetas HTML y obtiene texto plano
 */
function stripHTML(html) {
  if (!html) return ''

  // Eliminar scripts y styles
  let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')

  // Eliminar etiquetas HTML
  text = text.replace(/<[^>]+>/g, ' ')

  // Decodificar entidades HTML
  text = text.replace(/&nbsp;/g, ' ')
  text = text.replace(/&amp;/g, '&')
  text = text.replace(/&lt;/g, '<')
  text = text.replace(/&gt;/g, '>')
  text = text.replace(/&quot;/g, '"')
  text = text.replace(/&#39;/g, "'")

  // Normalizar espacios
  text = text.replace(/\s+/g, ' ').trim()

  return text
}

/**
 * Cuenta palabras en un texto
 */
function countWords(text) {
  if (!text) return 0

  // Eliminar espacios múltiples y contar palabras
  const words = text.trim().split(/\s+/)
  return words.filter(word => word.length > 0).length
}

/**
 * Cuenta imágenes en HTML
 */
function countImages(html) {
  if (!html) return 0

  const imgMatches = html.match(/<img[^>]+>/gi)
  return imgMatches ? imgMatches.length : 0
}

/**
 * Cuenta videos en HTML
 */
function countVideos(html) {
  if (!html) return 0

  const videoMatches = html.match(/<video[^>]+>/gi)
  const iframeMatches = html.match(/<iframe[^>]+>/gi)

  return (videoMatches ? videoMatches.length : 0) + (iframeMatches ? iframeMatches.length : 0)
}

/**
 * Cuenta bloques de código
 */
function countCodeBlocks(html) {
  if (!html) return 0

  const codeMatches = html.match(/<pre[^>]*>[\s\S]*?<\/pre>/gi)
  return codeMatches ? codeMatches.length : 0
}

/**
 * Calcula el tiempo de lectura
 *
 * @param {string} content - HTML content del artículo
 * @param {Object} options - Opciones de configuración
 * @param {number} options.wordsPerMinute - Palabras por minuto (default: 225)
 * @param {number} options.imageTime - Segundos por imagen (default: 12)
 * @param {number} options.videoTime - Segundos por video (default: 30)
 * @param {number} options.codeBlockTime - Segundos por bloque de código (default: 20)
 * @returns {Object} - { minutes, words, images, videos, codeBlocks }
 */
export function calculateReadingTime(content, options = {}) {
  const config = {
    wordsPerMinute: options.wordsPerMinute || 225, // Promedio español
    imageTime: options.imageTime || 12, // 12 segundos por imagen
    videoTime: options.videoTime || 30, // 30 segundos por video
    codeBlockTime: options.codeBlockTime || 20, // 20 segundos por bloque de código
  }

  if (!content || typeof content !== 'string') {
    return {
      minutes: 0,
      words: 0,
      images: 0,
      videos: 0,
      codeBlocks: 0,
    }
  }

  // Extraer texto y contar elementos
  const text = stripHTML(content)
  const words = countWords(text)
  const images = countImages(content)
  const videos = countVideos(content)
  const codeBlocks = countCodeBlocks(content)

  // Calcular tiempo de lectura
  let totalSeconds = 0

  // Tiempo de lectura del texto
  totalSeconds += (words / config.wordsPerMinute) * 60

  // Tiempo de visualización de imágenes
  totalSeconds += images * config.imageTime

  // Tiempo de videos
  totalSeconds += videos * config.videoTime

  // Tiempo de lectura de código
  totalSeconds += codeBlocks * config.codeBlockTime

  // Convertir a minutos y redondear
  const minutes = Math.ceil(totalSeconds / 60)

  return {
    minutes: Math.max(1, minutes), // Mínimo 1 minuto
    words,
    images,
    videos,
    codeBlocks,
    text: formatReadingTime(minutes),
  }
}

/**
 * Formatea el tiempo de lectura en texto legible
 *
 * @param {number} minutes - Minutos de lectura
 * @returns {string} - Texto formateado
 */
export function formatReadingTime(minutes) {
  if (minutes < 1) return '1 min de lectura'
  if (minutes === 1) return '1 min de lectura'
  return `${minutes} min de lectura`
}

/**
 * Hook de React para calcular tiempo de lectura
 *
 * NOTA: Este hook no está siendo usado actualmente.
 * Para usar, necesitas importar React:
 * import { useState, useEffect } from 'react'
 *
 * @param {string} content - HTML content
 * @param {Object} options - Opciones
 * @returns {Object} - Reading time data
 */
// export function useReadingTime(content, options = {}) {
//   const [readingTime, setReadingTime] = useState(() =>
//     calculateReadingTime(content, options)
//   )
//
//   useEffect(() => {
//     setReadingTime(calculateReadingTime(content, options))
//   }, [content, options])
//
//   return readingTime
// }

/**
 * Calcula tiempo de lectura desde markdown
 *
 * @param {string} markdown - Contenido markdown
 * @param {Object} options - Opciones
 * @returns {Object} - Reading time data
 */
export function calculateReadingTimeFromMarkdown(markdown, options = {}) {
  if (!markdown) {
    return {
      minutes: 0,
      words: 0,
      text: '0 min de lectura',
    }
  }

  // Remover bloques de código
  let text = markdown.replace(/```[\s\S]*?```/g, '')

  // Remover imágenes markdown
  text = text.replace(/!\[.*?\]\(.*?\)/g, '')

  // Remover links markdown
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')

  // Remover headers markdown
  text = text.replace(/^#+\s/gm, '')

  // Remover formateo
  text = text.replace(/[*_~`]/g, '')

  const words = countWords(text)
  const wordsPerMinute = options.wordsPerMinute || 225
  const minutes = Math.ceil(words / wordsPerMinute)

  return {
    minutes: Math.max(1, minutes),
    words,
    text: formatReadingTime(minutes),
  }
}

/**
 * Exportar para CLI (testing)
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateReadingTime,
    formatReadingTime,
    calculateReadingTimeFromMarkdown,
  }
}

/**
 * CLI USAGE:
 *
 * const { calculateReadingTime } = require('./readingTime.js')
 *
 * const html = '<p>Tu contenido aquí...</p>'
 * const result = calculateReadingTime(html)
 * console.log(result.text) // "5 min de lectura"
 */
