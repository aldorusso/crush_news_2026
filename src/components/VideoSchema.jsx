import React from "react"

/**
 * Componente para Schema.org VideoObject
 *
 * Genera structured data para videos embebidos en artículos
 * Permite rich snippets en Google con thumbnail y duración del video
 *
 * Uso:
 * <VideoSchema
 *   name="Tutorial de maquillaje Gen Z"
 *   description="Aprende los mejores trucos de maquillaje"
 *   thumbnailUrl="https://crush.news/images/video-thumbnail.jpg"
 *   uploadDate="2024-03-18T10:00:00Z"
 *   duration="PT5M30S"  // ISO 8601: 5 minutos 30 segundos
 *   contentUrl="https://crush.news/videos/tutorial-maquillaje.mp4"
 *   embedUrl="https://www.youtube.com/embed/abc123"
 * />
 */
const VideoSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  publisherName = "crush.news",
  publisherLogoUrl = "https://crush.news/logo.png",
}) => {
  if (!name || !description || !thumbnailUrl || !uploadDate) {
    console.warn("VideoSchema: Faltan datos requeridos (name, description, thumbnailUrl, uploadDate)")
    return null
  }

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    contentUrl: contentUrl || undefined,
    embedUrl: embedUrl || undefined,
    duration: duration || undefined,
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogoUrl,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  )
}

export default VideoSchema
