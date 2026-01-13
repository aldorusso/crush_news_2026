// Avatar generator using DiceBear API
// Style: Adventurer - https://www.dicebear.com/styles/adventurer/

/**
 * Genera una URL de avatar usando DiceBear API
 * @param {string} seed - Nombre o identificador para generar avatar único
 * @returns {string} URL del avatar SVG
 */
export const getAvatar = (seed = "default") => {
  // Sanitizar el seed para URL
  const sanitizedSeed = encodeURIComponent(seed.toLowerCase().replace(/\s+/g, '-'))
  return `https://api.dicebear.com/7.x/adventurer/svg?seed=${sanitizedSeed}`
}

/**
 * Genera avatar con opciones personalizadas
 * @param {string} seed - Nombre o identificador
 * @param {object} options - Opciones adicionales
 * @returns {string} URL del avatar SVG
 */
export const getAvatarWithOptions = (seed = "default", options = {}) => {
  const sanitizedSeed = encodeURIComponent(seed.toLowerCase().replace(/\s+/g, '-'))
  const baseUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=${sanitizedSeed}`

  // Opciones disponibles: backgroundColor, size, radius, etc.
  const params = new URLSearchParams()

  if (options.backgroundColor) {
    params.append('backgroundColor', options.backgroundColor)
  }
  if (options.size) {
    params.append('size', options.size)
  }
  if (options.radius) {
    params.append('radius', options.radius)
  }

  const extraParams = params.toString()
  return extraParams ? `${baseUrl}&${extraParams}` : baseUrl
}

export default getAvatar
