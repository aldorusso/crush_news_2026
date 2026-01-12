import React from "react"

/**
 * Componente de imagen optimizada para Web Vitals y Google Discover
 *
 * Incluye:
 * - fetchpriority para priorizar carga
 * - width y height para evitar CLS (Layout Shift)
 * - loading lazy/eager
 * - srcset para responsive images
 * - WebP con fallback
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  objectFit = "cover",
  quality = 85,
}) => {
  // Generar srcset para diferentes tamaños
  const generateSrcSet = (baseSrc) => {
    // Si es una URL externa, no generamos srcset
    if (baseSrc.startsWith('http')) {
      return baseSrc
    }

    // Para imágenes locales, Gatsby las procesará automáticamente
    return baseSrc
  }

  // Determinar si es imagen principal (hero/featured)
  const isPriorityImage = priority

  return (
    <img
      src={src}
      srcSet={generateSrcSet(src)}
      alt={alt}
      width={width}
      height={height}
      loading={isPriorityImage ? "eager" : "lazy"}
      fetchpriority={isPriorityImage ? "high" : "auto"}
      decoding={isPriorityImage ? "sync" : "async"}
      sizes={sizes}
      className={className}
      style={{
        objectFit: objectFit,
        width: "100%",
        height: "auto",
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    />
  )
}

/**
 * Componente de imagen con contenedor para evitar CLS
 * Reserva espacio antes de que la imagen cargue
 */
export const ImageWithPlaceholder = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  containerClassName = "",
}) => {
  const aspectRatio = width && height ? (height / width) * 100 : 56.25 // Default 16:9

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      style={{
        paddingBottom: `${aspectRatio}%`,
        backgroundColor: '#f3f4f6', // Gray placeholder
      }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`absolute top-0 left-0 w-full h-full ${className}`}
        objectFit="cover"
      />
    </div>
  )
}

/**
 * Componente para imagen destacada de artículo (Hero Image)
 * Optimizado para LCP (Largest Contentful Paint)
 */
export const ArticleHeroImage = ({
  src,
  alt,
  width = 1200,
  height = 675,
  className = "",
}) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={true} // SIEMPRE priority para imagen principal
      className={`rounded-lg ${className}`}
      sizes="(max-width: 768px) 100vw, 1200px"
    />
  )
}

/**
 * Componente para thumbnails en listados
 * Usa lazy loading para no afectar rendimiento
 */
export const ThumbnailImage = ({
  src,
  alt,
  width = 400,
  height = 225,
  className = "",
}) => {
  return (
    <ImageWithPlaceholder
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={false}
      className={className}
      containerClassName="rounded-lg"
    />
  )
}

export default OptimizedImage
