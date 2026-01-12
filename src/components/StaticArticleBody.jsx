import React from "react"
import { autoLinkHTML } from "../utils/autoLinking"

/**
 * Static Article Body - HTML Puro sin JavaScript
 *
 * Este componente renderiza el contenido del artículo como HTML estático
 * sin cargar ningún JavaScript, lo que mejora drásticamente:
 * - TBT (Total Blocking Time): 0ms para el contenido principal
 * - FCP (First Contentful Paint): Renderizado inmediato
 * - TTI (Time to Interactive): No hay JS que parsear
 *
 * IMPORTANTE: NO uses React state, effects, o event handlers aquí
 * El contenido debe ser puramente declarativo
 */

const StaticArticleBody = ({
  content,
  enableAutoLinking = true,
  autoLinkOptions = {},
}) => {
  // Aplicar auto-linking si está habilitado
  const processedContent = enableAutoLinking
    ? autoLinkHTML(sanitizeHTML(content), {
        maxLinksPerEntity: 2,
        className: "auto-link text-[#ff3750] hover:underline",
        ...autoLinkOptions,
      })
    : sanitizeHTML(content)

  return (
    <article className="static-article-body">
      {/* Contenido del artículo - HTML estático con auto-linking */}
      <div
        className="article-content prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />

      {/* Estilos para el contenido (sin JS) */}
      <style jsx>{`
        .article-content {
          font-size: 18px;
          line-height: 1.8;
          color: #374151;
        }

        .article-content p {
          margin-bottom: 1.5em;
        }

        .article-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2em;
          margin-bottom: 1em;
          color: #111827;
        }

        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5em;
          margin-bottom: 0.75em;
          color: #111827;
        }

        .article-content ul,
        .article-content ol {
          margin-bottom: 1.5em;
          padding-left: 1.5em;
        }

        .article-content li {
          margin-bottom: 0.5em;
        }

        .article-content blockquote {
          border-left: 4px solid #ff3750;
          padding-left: 1.5em;
          margin: 2em 0;
          font-style: italic;
          color: #4b5563;
        }

        .article-content a {
          color: #ff3750;
          text-decoration: underline;
        }

        .article-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 2em 0;
        }

        .article-content code {
          background-color: #f3f4f6;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.9em;
          font-family: 'Courier New', monospace;
        }

        .article-content pre {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1.5em;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 2em 0;
        }

        .article-content pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
        }

        /* Dark mode support (media query, no JS) */
        @media (prefers-color-scheme: dark) {
          .article-content {
            color: #e5e7eb;
          }

          .article-content h2,
          .article-content h3 {
            color: #f9fafb;
          }

          .article-content blockquote {
            color: #d1d5db;
          }
        }

        /* Print styles */
        @media print {
          .article-content {
            font-size: 12pt;
            line-height: 1.6;
          }
        }
      `}</style>
    </article>
  )
}

/**
 * Formatea fecha de forma estática (sin JS client-side)
 */
function formatDate(dateString) {
  const date = new Date(dateString)
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return date.toLocaleDateString("es-ES", options)
}

/**
 * Sanitiza HTML básico para evitar XSS
 * IMPORTANTE: En producción, usa una librería como DOMPurify
 */
function sanitizeHTML(html) {
  // Esta es una sanitización BÁSICA
  // En producción, usa DOMPurify o similar del lado del servidor
  if (typeof html !== "string") return ""

  // Permitir solo tags seguros
  const allowedTags = [
    "p", "br", "strong", "em", "u", "a", "h2", "h3", "h4",
    "ul", "ol", "li", "blockquote", "img", "code", "pre"
  ]

  // Remover scripts y eventos
  let sanitized = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .replace(/on\w+='[^']*'/gi, "")

  return sanitized
}

/**
 * Calcula tiempo de lectura automáticamente
 * Basado en promedio de 200 palabras por minuto
 */
export function calculateReadTime(content) {
  if (!content) return 1

  // Remover HTML tags para contar solo texto
  const text = content.replace(/<[^>]*>/g, "")
  const wordCount = text.trim().split(/\s+/).length
  const readTime = Math.ceil(wordCount / 200)

  return readTime
}

/**
 * Extrae el primer párrafo como excerpt
 */
export function extractExcerpt(content, maxLength = 160) {
  if (!content) return ""

  const text = content.replace(/<[^>]*>/g, "")
  const excerpt = text.substring(0, maxLength)

  return excerpt.length < text.length ? `${excerpt}...` : excerpt
}

export default StaticArticleBody
