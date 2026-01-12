import React from "react"

/**
 * Componente para Schema.org ImageGallery
 *
 * Genera structured data para galerías de imágenes
 * Permite rich snippets en Google Images
 *
 * Uso:
 * <ImageGallerySchema
 *   name="Galería: Met Gala 2024"
 *   description="Los mejores looks de la Met Gala"
 *   images={[
 *     {
 *       url: "https://crush.news/images/met-gala-1.jpg",
 *       caption: "Dua Lipa en la alfombra roja",
 *       width: 1920,
 *       height: 1080
 *     },
 *     ...
 *   ]}
 * />
 */
const ImageGallerySchema = ({
  name,
  description,
  images = [],
  publisherName = "crush.news",
}) => {
  if (!name || !images || images.length === 0) {
    return null
  }

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: name,
    description: description || undefined,
    associatedMedia: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: img.url,
      caption: img.caption || undefined,
      width: img.width || undefined,
      height: img.height || undefined,
      encodingFormat: img.format || "image/jpeg",
    })),
    publisher: {
      "@type": "Organization",
      name: publisherName,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
    />
  )
}

/**
 * Componente simple para una sola imagen con metadata
 */
export const ImageObjectSchema = ({
  url,
  caption,
  width = 1200,
  height = 630,
  author,
}) => {
  if (!url) {
    return null
  }

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: url,
    caption: caption || undefined,
    width: width,
    height: height,
    author: author ? {
      "@type": "Person",
      name: author,
    } : undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
    />
  )
}

export default ImageGallerySchema
