import React from "react"

/**
 * PUBLISHER SCHEMA
 *
 * Schema.org/Organization para el Publisher del sitio
 * Requerido para NewsArticle y mejorar E-E-A-T
 *
 * @see https://schema.org/Organization
 * @see https://developers.google.com/search/docs/appearance/structured-data/logo
 */
const PublisherSchema = ({
  name = "crush.news",
  url = "https://crush.news",
  logo = "https://crush.news/logo.png",
  description = "Tu fuente de noticias, tendencias y cultura para la Generación Z. Mantente informado con las últimas novedades en moda, entretenimiento y estilo de vida.",
  foundingDate = "2024-01-01",
  sameAs = [
    "https://twitter.com/crushnews",
    "https://facebook.com/crushnews",
    "https://instagram.com/crushnews",
    "https://tiktok.com/@crushnews",
  ],
  contactPoint = {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contacto@crush.news",
    availableLanguage: ["Spanish", "English"],
  },
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: name,
    url: url,
    logo: {
      "@type": "ImageObject",
      url: logo,
      width: 600,
      height: 60,
    },
    description: description,
    foundingDate: foundingDate,
    sameAs: sameAs.filter(Boolean), // Filtrar valores vacíos
    contactPoint: contactPoint,
    // Información adicional para mejorar E-E-A-T
    publisher: {
      "@type": "Organization",
      name: name,
      logo: {
        "@type": "ImageObject",
        url: logo,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default PublisherSchema
