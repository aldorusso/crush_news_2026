import React from "react"
import { validateImageAlt } from "../utils/seoValidation"

/**
 * Componente de imagen con validación SEO automática
 *
 * Valida que la imagen tenga alt text apropiado y muestra warnings en desarrollo
 *
 * Uso:
 * <SEOImage
 *   src="/images/article.jpg"
 *   alt="Ester Expósito en la alfombra roja"
 *   keyword="Ester Expósito"
 *   width={1200}
 *   height={675}
 * />
 */
const SEOImage = ({
  src,
  alt,
  keyword,
  width,
  height,
  className = "",
  loading = "lazy",
  enableValidation = process.env.NODE_ENV === 'development',
  ...props
}) => {
  // Validar alt text en desarrollo
  React.useEffect(() => {
    if (enableValidation && typeof window !== 'undefined') {
      const validation = validateImageAlt(alt, keyword)

      if (validation.severity === 'error' || validation.severity === 'warning') {
        console.warn(
          `[SEO Image] ${src}: ${validation.message}`,
          {
            severity: validation.severity,
            score: validation.score,
            alt: alt,
            keyword: keyword,
          }
        )
      }
    }
  }, [src, alt, keyword, enableValidation])

  // Warning si no hay alt text
  if (!alt) {
    console.error(`[SEO Image] Imagen sin alt text: ${src}`)
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      width={width}
      height={height}
      loading={loading}
      className={className}
      {...props}
    />
  )
}

/**
 * Hook para validar todas las imágenes de un artículo
 *
 * Uso:
 * const imageValidation = useImageValidation(articleHTML, keyword)
 *
 * useEffect(() => {
 *   if (imageValidation.imagesWithoutAlt > 0) {
 *     console.warn(`${imageValidation.imagesWithoutAlt} imágenes sin alt text`)
 *   }
 * }, [imageValidation])
 */
export function useImageValidation(html, keyword) {
  const [validation, setValidation] = React.useState({
    totalImages: 0,
    imagesWithAlt: 0,
    imagesWithoutAlt: 0,
    imagesWithKeyword: 0,
    score: 100,
  })

  React.useEffect(() => {
    if (!html) {
      return
    }

    // Parsear HTML y extraer todas las imágenes
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html

    const images = tempDiv.querySelectorAll('img')
    const totalImages = images.length

    let imagesWithAlt = 0
    let imagesWithoutAlt = 0
    let imagesWithKeyword = 0

    images.forEach((img) => {
      const alt = img.getAttribute('alt')

      if (alt && alt.trim().length > 0) {
        imagesWithAlt++

        if (keyword && alt.toLowerCase().includes(keyword.toLowerCase())) {
          imagesWithKeyword++
        }
      } else {
        imagesWithoutAlt++
      }
    })

    // Calcular score (100 si todas tienen alt, 0 si ninguna)
    const score = totalImages > 0 ? Math.round((imagesWithAlt / totalImages) * 100) : 100

    setValidation({
      totalImages,
      imagesWithAlt,
      imagesWithoutAlt,
      imagesWithKeyword,
      score,
    })

    // Log en desarrollo
    if (process.env.NODE_ENV === 'development' && imagesWithoutAlt > 0) {
      console.warn(
        `[SEO] ${imagesWithoutAlt} de ${totalImages} imágenes sin alt text`,
        { score, imagesWithKeyword }
      )
    }
  }, [html, keyword])

  return validation
}

export default SEOImage
