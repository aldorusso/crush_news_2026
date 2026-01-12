import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

/**
 * Breadcrumbs Dinámicos con Schema.org
 *
 * Componente que genera migas de pan (breadcrumbs) automáticamente
 * basándose en la ruta actual, con structured data para Google.
 *
 * Beneficios SEO:
 * - Google entiende la jerarquía del sitio
 * - Breadcrumbs aparecen en resultados de búsqueda
 * - Mejora la navegación y UX
 * - Reduce bounce rate
 *
 * Ejemplo en resultados de Google:
 * crush.news › Famosos › Actrices Españolas › Ester Expósito
 */

/**
 * Configuración de breadcrumbs por categoría
 */
const BREADCRUMB_CONFIG = {
  // Categorías de contenido
  famosos: {
    label: "Famosos",
    path: "/category/famosos",
    subcategories: {
      "actrices-espanolas": {
        label: "Actrices Españolas",
        path: "/category/famosos/actrices-espanolas",
      },
      "actores-turcos": {
        label: "Actores Turcos",
        path: "/category/famosos/actores-turcos",
      },
      cantantes: {
        label: "Cantantes",
        path: "/category/famosos/cantantes",
      },
      influencers: {
        label: "Influencers",
        path: "/category/famosos/influencers",
      },
    },
  },
  moda: {
    label: "Moda",
    path: "/category/moda",
    subcategories: {
      tendencias: {
        label: "Tendencias",
        path: "/category/moda/tendencias",
      },
      "street-style": {
        label: "Street Style",
        path: "/category/moda/street-style",
      },
      "alta-costura": {
        label: "Alta Costura",
        path: "/category/moda/alta-costura",
      },
    },
  },
  entretenimiento: {
    label: "Entretenimiento",
    path: "/category/entretenimiento",
    subcategories: {
      series: {
        label: "Series",
        path: "/category/entretenimiento/series",
      },
      peliculas: {
        label: "Películas",
        path: "/category/entretenimiento/peliculas",
      },
      musica: {
        label: "Música",
        path: "/category/entretenimiento/musica",
      },
    },
  },
  lifestyle: {
    label: "Lifestyle",
    path: "/category/lifestyle",
    subcategories: {
      bienestar: {
        label: "Bienestar",
        path: "/category/lifestyle/bienestar",
      },
      viajes: {
        label: "Viajes",
        path: "/category/lifestyle/viajes",
      },
      tecnologia: {
        label: "Tecnología",
        path: "/category/lifestyle/tecnologia",
      },
    },
  },
  cultura: {
    label: "Cultura",
    path: "/category/cultura",
    subcategories: {
      "generacion-z": {
        label: "Generación Z",
        path: "/category/cultura/generacion-z",
      },
      arte: {
        label: "Arte",
        path: "/category/cultura/arte",
      },
    },
  },
}

/**
 * Genera breadcrumbs automáticamente basándose en la ruta
 *
 * @param {string} pathname - Ruta actual (ej. "/category/famosos/actrices-espanolas")
 * @param {string} currentPageTitle - Título de la página actual
 * @returns {Array} Lista de breadcrumbs
 */
export function generateBreadcrumbs(pathname, currentPageTitle = null) {
  const breadcrumbs = [
    {
      label: "Inicio",
      path: "/",
      position: 1,
    },
  ]

  // Limpiar pathname
  const cleanPath = pathname.replace(/^\/|\/$/g, "")
  const segments = cleanPath.split("/").filter(Boolean)

  if (segments.length === 0) {
    return breadcrumbs // Solo "Inicio" para homepage
  }

  let currentPath = ""
  let position = 2

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === segments.length - 1

    // Intentar obtener label de la configuración
    let label = segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

    // Buscar en configuración
    if (segment === "category" && segments[index + 1]) {
      // Saltar "category" en la ruta
      return
    }

    if (index > 0 && segments[index - 1] === "category") {
      // Es una categoría principal
      const categoryConfig = BREADCRUMB_CONFIG[segment]
      if (categoryConfig) {
        label = categoryConfig.label
        currentPath = categoryConfig.path
      }
    } else if (index > 1 && segments[index - 2] === "category") {
      // Es una subcategoría
      const parentCategory = segments[index - 1]
      const categoryConfig = BREADCRUMB_CONFIG[parentCategory]
      if (categoryConfig?.subcategories?.[segment]) {
        label = categoryConfig.subcategories[segment].label
        currentPath = categoryConfig.subcategories[segment].path
      }
    }

    // Si es la última página y tenemos un título personalizado
    if (isLast && currentPageTitle) {
      label = currentPageTitle
    }

    breadcrumbs.push({
      label,
      path: isLast ? null : currentPath, // Última página no tiene enlace
      position,
    })

    position++
  })

  return breadcrumbs
}

/**
 * Genera Schema.org BreadcrumbList
 *
 * @param {Array} breadcrumbs - Lista de breadcrumbs
 * @param {string} baseUrl - URL base del sitio
 * @returns {Object} Schema.org JSON-LD
 */
export function generateBreadcrumbSchema(breadcrumbs, baseUrl = "https://crush.news") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb) => ({
      "@type": "ListItem",
      position: crumb.position,
      name: crumb.label,
      item: crumb.path ? `${baseUrl}${crumb.path}` : undefined,
    })),
  }
}

/**
 * Componente Breadcrumbs con Schema.org
 */
const Breadcrumbs = ({
  pathname,
  currentPageTitle = null,
  className = "",
  separator = "›",
  showHome = true,
  baseUrl = "https://crush.news",
}) => {
  const breadcrumbs = generateBreadcrumbs(pathname, currentPageTitle)

  // Filtrar "Inicio" si showHome es false
  const displayBreadcrumbs = showHome
    ? breadcrumbs
    : breadcrumbs.filter((crumb) => crumb.position > 1)

  const schema = generateBreadcrumbSchema(breadcrumbs, baseUrl)

  return (
    <>
      {/* Schema.org JSON-LD */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Breadcrumbs visibles */}
      <nav
        className={`breadcrumbs ${className}`}
        aria-label="Breadcrumb"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          {displayBreadcrumbs.map((crumb, index) => (
            <li
              key={crumb.position}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {crumb.path ? (
                <>
                  <Link
                    to={crumb.path}
                    className="hover:text-[#ff3750] transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                  <meta itemProp="position" content={crumb.position} />
                </>
              ) : (
                <>
                  <span
                    className="font-semibold text-gray-900 dark:text-white"
                    itemProp="name"
                  >
                    {crumb.label}
                  </span>
                  <meta itemProp="position" content={crumb.position} />
                </>
              )}

              {/* Separador */}
              {index < displayBreadcrumbs.length - 1 && (
                <span className="text-gray-400" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Estilos */}
      <style jsx>{`
        .breadcrumbs {
          margin-bottom: 1.5rem;
          padding: 0.75rem 0;
        }

        .breadcrumbs ol {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .breadcrumbs a {
          text-decoration: none;
        }

        .breadcrumbs a:hover {
          text-decoration: underline;
        }

        /* Mobile */
        @media (max-width: 640px) {
          .breadcrumbs {
            font-size: 0.875rem;
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
          }

          .breadcrumbs::-webkit-scrollbar {
            display: none;
          }
        }

        /* Print */
        @media print {
          .breadcrumbs {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

/**
 * Breadcrumbs compactos (solo iconos en móvil)
 */
export const CompactBreadcrumbs = ({
  pathname,
  currentPageTitle,
  baseUrl = "https://crush.news",
}) => {
  const breadcrumbs = generateBreadcrumbs(pathname, currentPageTitle)
  const schema = generateBreadcrumbSchema(breadcrumbs, baseUrl)

  // Mostrar solo primer y último breadcrumb en móvil
  const firstCrumb = breadcrumbs[0]
  const lastCrumb = breadcrumbs[breadcrumbs.length - 1]
  const middleCount = breadcrumbs.length - 2

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <nav className="breadcrumbs-compact" aria-label="Breadcrumb">
        {/* Desktop: Full breadcrumbs */}
        <div className="hidden md:block">
          <Breadcrumbs pathname={pathname} currentPageTitle={currentPageTitle} baseUrl={baseUrl} />
        </div>

        {/* Mobile: Compact */}
        <div className="md:hidden flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 py-3">
          <Link to={firstCrumb.path} className="hover:text-[#ff3750]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>

          {middleCount > 0 && (
            <>
              <span className="text-gray-400">›</span>
              <span className="text-gray-400">···</span>
            </>
          )}

          <span className="text-gray-400">›</span>
          <span className="font-semibold text-gray-900 dark:text-white truncate max-w-[200px]">
            {lastCrumb.label}
          </span>
        </div>
      </nav>
    </>
  )
}

/**
 * Hook para obtener breadcrumbs de la ruta actual
 */
export function useBreadcrumbs(currentPageTitle = null) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/"
  return generateBreadcrumbs(pathname, currentPageTitle)
}

export default Breadcrumbs
