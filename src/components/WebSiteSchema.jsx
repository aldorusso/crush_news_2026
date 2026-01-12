import React from "react"

/**
 * WEBSITE SCHEMA COMPLETO
 *
 * Schema.org/WebSite con SearchAction y Organization completa
 * Incluye todos los elementos necesarios para E-E-A-T y Rich Results
 *
 * @see https://schema.org/WebSite
 * @see https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox
 */
const WebSiteSchema = ({
  name = "crush.news",
  url = "https://crush.news",
  description = "Tu fuente de noticias, tendencias y cultura para la Generación Z",
  inLanguage = "es",
  // Logo information
  logo = {
    url: "https://crush.news/logo.png",
    width: 600,
    height: 60,
  },
  // Search functionality
  searchUrl = "https://crush.news/search?q={search_term_string}",
  // Social media profiles
  sameAs = [
    "https://twitter.com/crushnews",
    "https://facebook.com/crushnews",
    "https://instagram.com/crushnews",
    "https://tiktok.com/@crushnews",
  ],
  // Publisher information
  publisher = {
    name: "crush.news",
    email: "contacto@crush.news",
  },
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite Schema
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url: url,
        name: name,
        description: description,
        inLanguage: inLanguage,
        publisher: {
          "@id": `${url}#organization`,
        },
        // Search Box para Google Sitelinks Search Box
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: searchUrl,
          },
          "query-input": "required name=search_term_string",
        },
      },
      // 2. Organization Schema Completo
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: publisher.name,
        url: url,
        logo: {
          "@type": "ImageObject",
          "@id": `${url}#logo`,
          url: logo.url,
          width: logo.width,
          height: logo.height,
          caption: name,
        },
        image: {
          "@id": `${url}#logo`,
        },
        description: description,
        sameAs: sameAs.filter(Boolean),
        // Contact information
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: publisher.email,
            availableLanguage: ["Spanish", "English"],
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default WebSiteSchema
