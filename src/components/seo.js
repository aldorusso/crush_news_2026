/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * OPTIMIZADO CON:
 * - Open Graph completo
 * - Twitter Card completo
 * - Canonical tags
 * - Meta tags adicionales para SEO
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { validateTitle, validateMetaDescription, logSEOReport } from "../utils/seoValidation"

function Seo({
  description,
  title,
  image,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630,
  article = false,
  publishedTime,
  modifiedTime,
  author,
  category,
  tags = [],
  canonical,
  noindex = false,
  keyword,
  enableSEOValidation = process.env.NODE_ENV === 'development',
  children
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl || "https://crush.news"

  // URL canónica
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl)

  // Imagen para redes sociales
  const ogImage = image
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
    : `${siteUrl}/images/og-default.jpg`

  const twitterUsername = "@crushnews" // Actualizar con tu username real

  // Validación SEO en desarrollo
  React.useEffect(() => {
    if (enableSEOValidation && typeof window !== 'undefined') {
      // Validar título
      const titleValidation = validateTitle(title)
      if (titleValidation.severity === 'error' || titleValidation.severity === 'warning') {
        console.warn(`[SEO] Título: ${titleValidation.message}`)
      }

      // Validar meta description
      const descValidation = validateMetaDescription(metaDescription)
      if (descValidation.severity === 'error' || descValidation.severity === 'warning') {
        console.warn(`[SEO] Meta Description: ${descValidation.message}`)
      }

      // Log en consola para debugging
      if (process.env.NODE_ENV === 'development') {
        console.group('🔍 SEO Validation')
        console.log('Title:', titleValidation.message, `(${titleValidation.score}/100)`)
        console.log('Meta Description:', descValidation.message, `(${descValidation.score}/100)`)
        console.groupEnd()
      }
    }
  }, [title, metaDescription, enableSEOValidation])

  return (
    <>
      {/* Título de la página */}
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>

      {/* Meta tags básicos */}
      <meta name="description" content={metaDescription} />
      <meta name="author" content={author || site.siteMetadata.author} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Keywords (si tags están disponibles) */}
      {tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />}

      {/* Open Graph - General */}
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="es_ES" />

      {/* Open Graph - Imagen */}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta property="og:image:alt" content={imageAlt || title} />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Open Graph - Article (si es artículo) */}
      {article && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {author && <meta property="article:author" content={author} />}
          {category && <meta property="article:section" content={category} />}
          {tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt || title} />

      {/* Alternate links para RSS */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${defaultTitle} - RSS Feed`}
        href={`${siteUrl}/rss.xml`}
      />
      <link
        rel="alternate"
        type="application/atom+xml"
        title={`${defaultTitle} - Atom Feed`}
        href={`${siteUrl}/atom.xml`}
      />

      {/* DNS Prefetch para mejorar performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      {/* Preconnect para recursos críticos */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Mobile meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=no" />

      {/* Theme color (ya en manifest, pero también aquí para compatibilidad) */}
      <meta name="theme-color" content="#ff3750" />
      <meta name="msapplication-TileColor" content="#ff3750" />

      {children}
    </>
  )
}

export default Seo
