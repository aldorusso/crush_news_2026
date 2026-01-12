import React from "react"
import { Helmet } from "react-helmet"

/**
 * Speculation Rules API - Instant Loading
 *
 * Tecnología de vanguardia para 2026 que permite precargar páginas
 * antes de que el usuario haga clic, resultando en navegación instantánea (0ms)
 *
 * Cómo funciona:
 * 1. Cuando el usuario pasa el cursor sobre un enlace (hover), el navegador
 *    empieza a renderizar esa página en memoria invisible
 * 2. Al hacer clic, la página aparece instantáneamente
 * 3. Google mide esto y mejora drásticamente la puntuación de UX
 *
 * Requisitos:
 * - Navegadores Chrome/Edge 109+ y Safari 17.2+
 * - Servidor con HTTPS
 * - Links con rutas relativas (mismo origen)
 */
const SpeculationRules = ({ mode = "moderate" }) => {
  /**
   * Modos de precarga:
   * - "conservative": Solo precarga links explícitos (especificados por selector)
   * - "moderate": Precarga al hover con un delay (600ms)
   * - "eager": Precarga inmediatamente todos los links visibles
   */

  const speculationRulesConfig = {
    // PRERENDER: Renderiza la página completa en segundo plano
    prerender: mode === "eager"
      ? [
          {
            // Modo agresivo: prerenderiza todos los links de artículos visibles
            source: "document",
            where: {
              and: [
                { href_matches: "/*" },
                { not: { href_matches: "/admin*" } },
                { not: { href_matches: "/draft*" } },
                { not: { selector_matches: ".no-prerender" } }
              ]
            },
            eagerness: "immediate"
          }
        ]
      : [
          {
            // Modo moderado: prerenderiza al hover con delay
            source: "document",
            where: {
              and: [
                { href_matches: "/single-post*" },
                { href_matches: "/category/*" },
                { not: { selector_matches: ".no-prerender" } }
              ]
            },
            eagerness: "moderate" // Espera 200ms de hover antes de precargar
          }
        ],

    // PREFETCH: Solo descarga el HTML (más ligero que prerender)
    prefetch: [
      {
        source: "document",
        where: {
          and: [
            { href_matches: "/*" },
            { not: { href_matches: "http*" } }, // Solo rutas internas
            { not: { href_matches: "/admin*" } },
            { not: { selector_matches: ".no-prefetch" } }
          ]
        },
        eagerness: "moderate"
      }
    ]
  }

  // Configuración conservadora (solo links específicos)
  const conservativeConfig = {
    prerender: [
      {
        source: "list",
        urls: [
          "/",
          "/about",
          "/contact"
        ]
      }
    ]
  }

  const finalConfig = mode === "conservative" ? conservativeConfig : speculationRulesConfig

  return (
    <Helmet>
      <script type="speculationrules">
        {JSON.stringify(finalConfig, null, 2)}
      </script>
    </Helmet>
  )
}

/**
 * Hook para detectar si el navegador soporta Speculation Rules
 */
export const useSpeculationRulesSupport = () => {
  const [isSupported, setIsSupported] = React.useState(false)

  React.useEffect(() => {
    if (typeof HTMLScriptElement !== "undefined") {
      setIsSupported(HTMLScriptElement.supports &&
                     HTMLScriptElement.supports("speculationrules"))
    }
  }, [])

  return isSupported
}

/**
 * Componente para links con precarga optimizada
 *
 * Uso:
 * <PreloadLink to="/single-post" preload="hover">
 *   Leer artículo
 * </PreloadLink>
 */
export const PreloadLink = ({
  to,
  children,
  className = "",
  preload = "hover", // "hover" | "visible" | "none"
  ...props
}) => {
  const linkRef = React.useRef(null)
  const [shouldPreload, setShouldPreload] = React.useState(false)

  React.useEffect(() => {
    if (preload === "none") return

    const link = linkRef.current
    if (!link) return

    if (preload === "visible") {
      // Precarga cuando el link es visible en viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShouldPreload(true)
              observer.disconnect()
            }
          })
        },
        { rootMargin: "50px" }
      )

      observer.observe(link)
      return () => observer.disconnect()
    }

    if (preload === "hover") {
      // Precarga al hover (ya manejado por Speculation Rules)
      // Este código es fallback para navegadores sin soporte
      let timeoutId

      const handleMouseEnter = () => {
        timeoutId = setTimeout(() => {
          setShouldPreload(true)
        }, 200)
      }

      const handleMouseLeave = () => {
        clearTimeout(timeoutId)
      }

      link.addEventListener("mouseenter", handleMouseEnter)
      link.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter)
        link.removeEventListener("mouseleave", handleMouseLeave)
        clearTimeout(timeoutId)
      }
    }
  }, [preload])

  return (
    <>
      <a
        ref={linkRef}
        href={to}
        className={className}
        {...props}
      >
        {children}
      </a>

      {/* Fallback: preload manual si el navegador no soporta Speculation Rules */}
      {shouldPreload && (
        <link rel="prefetch" href={to} />
      )}
    </>
  )
}

export default SpeculationRules
