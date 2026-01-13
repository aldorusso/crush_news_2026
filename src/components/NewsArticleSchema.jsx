import React from "react"
import { Helmet } from "react-helmet"

/**
 * Componente para generar Schema.org JSON-LD para artículos de noticias
 * Implementa NewsArticle según las especificaciones de Google News
 */
const NewsArticleSchema = ({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  publisherName = "crush.news",
  publisherLogoUrl = "https://crush.news/logo.png",
  images = [],
  category,
  tags = [],
  entities = [], // IDs de Wikidata para entidades mencionadas
}) => {
  // Validar que tenemos los datos mínimos requeridos
  if (!headline || !url || !datePublished || !authorName) {
    console.warn("NewsArticleSchema: Faltan datos requeridos para Schema.org")
    return null
  }

  // Asegurar que las imágenes tengan formato correcto
  const imageUrls = images.map(img => {
    if (typeof img === 'string') return img
    return img.url || img
  }).filter(Boolean)

  // Construir el schema NewsArticle
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: headline.substring(0, 110), // Google requiere max 110 caracteres
    description: description,
    image: imageUrls.length > 0 ? imageUrls : undefined,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl || undefined,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogoUrl,
      },
    },
  }

  // Agregar categoría si existe
  if (category) {
    newsArticleSchema.articleSection = category
  }

  // Agregar keywords (tags)
  if (tags.length > 0) {
    newsArticleSchema.keywords = tags.join(", ")
  }

  // Agregar entidades relacionadas (Wikidata, etc.)
  if (entities.length > 0) {
    newsArticleSchema.about = entities.map(entity => ({
      "@type": "Thing",
      "@id": entity.wikidataId || undefined,
      name: entity.name,
      sameAs: entity.wikidataId || undefined,
    }))
  }

  // Schema para BreadcrumbList (navegación)
  const breadcrumbSchema = category ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://crush.news",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category,
        item: `https://crush.news/${category.toLowerCase().replace(/\s+/g, '-')}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: headline,
      },
    ],
  } : null

  // Schema para Organization (información del sitio)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: publisherName,
    url: "https://crush.news",
    logo: publisherLogoUrl,
    sameAs: [
      "https://www.facebook.com/crushnewsES/",
      "https://x.com/crushnews_es",
      "https://www.instagram.com/crushnews_es/",
      "https://www.youtube.com/@crushnews_es",
      "https://www.tiktok.com/@crushnews_es",
    ],
  }

  return (
    <Helmet>
      {/* NewsArticle Schema */}
      <script type="application/ld+json">
        {JSON.stringify(newsArticleSchema)}
      </script>

      {/* BreadcrumbList Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  )
}

export default NewsArticleSchema
