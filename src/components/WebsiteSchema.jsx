import React from "react"
import { Helmet } from "react-helmet"

/**
 * Componente para Schema.org a nivel de sitio web
 * Se usa en páginas que NO son artículos (home, about, contact, etc.)
 */
const WebsiteSchema = ({
  name = "crush.news",
  description = "Noticias y cultura digital para la Generación Z",
  url = "https://crush.news",
  logoUrl = "https://crush.news/logo.png",
  socialProfiles = [
    "https://www.facebook.com/crushnews",
    "https://twitter.com/crushnews",
    "https://www.instagram.com/crushnews",
  ],
}) => {
  // Schema para WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: name,
    url: url,
    description: description,
    publisher: {
      "@type": "Organization",
      name: name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  // Schema para Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name,
    url: url,
    logo: logoUrl,
    description: description,
    sameAs: socialProfiles,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@crush.news",
      availableLanguage: ["Spanish", "English"],
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  )
}

export default WebsiteSchema
