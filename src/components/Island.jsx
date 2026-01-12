import React, { Suspense, lazy } from "react"

/**
 * Island Architecture - Componente Wrapper
 *
 * Implementa el patrón de "islas de interactividad":
 * - El contenido principal es HTML estático (0 JS)
 * - Solo los componentes interactivos cargan JavaScript
 * - Reduce drásticamente el TBT (Total Blocking Time)
 *
 * Beneficio para Google News:
 * - Tu sitio se considera "ligero" en conexiones 4G/5G
 * - Mejora FID (First Input Delay) y TTI (Time to Interactive)
 * - Páginas más rápidas = mejor ranking en Google Discover
 *
 * Uso:
 * <Island
 *   component={() => import('./CommentSection')}
 *   skeleton={<CommentSkeleton />}
 *   trigger="visible"
 * />
 */

const Island = ({
  component,
  skeleton = null,
  trigger = "visible", // "visible" | "idle" | "interaction" | "immediate"
  threshold = 0.1,
  rootMargin = "50px",
  fallback = null,
  ...props
}) => {
  const [shouldLoad, setShouldLoad] = React.useState(trigger === "immediate")
  const islandRef = React.useRef(null)

  // Lazy load del componente
  const LazyComponent = React.useMemo(
    () => lazy(component),
    [component]
  )

  React.useEffect(() => {
    if (trigger === "immediate") {
      setShouldLoad(true)
      return
    }

    // Trigger: visible - Cargar cuando el componente es visible
    if (trigger === "visible") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShouldLoad(true)
              observer.disconnect()
            }
          })
        },
        { threshold, rootMargin }
      )

      if (islandRef.current) {
        observer.observe(islandRef.current)
      }

      return () => observer.disconnect()
    }

    // Trigger: idle - Cargar cuando el navegador está inactivo
    if (trigger === "idle") {
      if ("requestIdleCallback" in window) {
        const idleCallback = window.requestIdleCallback(() => {
          setShouldLoad(true)
        })

        return () => window.cancelIdleCallback(idleCallback)
      } else {
        // Fallback para navegadores sin soporte
        const timeout = setTimeout(() => setShouldLoad(true), 2000)
        return () => clearTimeout(timeout)
      }
    }

    // Trigger: interaction - Cargar al primer hover/touch
    if (trigger === "interaction") {
      const handleInteraction = () => {
        setShouldLoad(true)
      }

      const element = islandRef.current
      if (element) {
        element.addEventListener("mouseenter", handleInteraction, { once: true })
        element.addEventListener("touchstart", handleInteraction, { once: true })
        element.addEventListener("focus", handleInteraction, { once: true })

        return () => {
          element.removeEventListener("mouseenter", handleInteraction)
          element.removeEventListener("touchstart", handleInteraction)
          element.removeEventListener("focus", handleInteraction)
        }
      }
    }
  }, [trigger, threshold, rootMargin])

  // Skeleton por defecto si no se proporciona
  const DefaultSkeleton = () => (
    <div
      className="animate-pulse bg-gray-200 rounded"
      style={{ minHeight: "200px" }}
      aria-label="Cargando contenido interactivo"
    />
  )

  const SkeletonComponent = skeleton || <DefaultSkeleton />

  return (
    <div ref={islandRef} data-island={trigger}>
      {shouldLoad ? (
        <Suspense fallback={fallback || SkeletonComponent}>
          <LazyComponent {...props} />
        </Suspense>
      ) : (
        SkeletonComponent
      )}
    </div>
  )
}

/**
 * Componentes de Skeleton pre-diseñados
 */
export const CommentSkeleton = () => (
  <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
    <div className="space-y-2">
      <div className="h-3 bg-gray-200 rounded animate-pulse" />
      <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse" />
    </div>
    <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
  </div>
)

export const CarouselSkeleton = () => (
  <div className="relative overflow-hidden rounded-lg bg-gray-200 animate-pulse" style={{ aspectRatio: "16/9" }}>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
)

export const SocialShareSkeleton = () => (
  <div className="flex gap-3">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
    ))}
  </div>
)

/**
 * Islands pre-configurados para casos de uso comunes
 */
export const CommentIsland = (props) => (
  <Island
    component={() => import("./interactive/CommentSection")}
    skeleton={<CommentSkeleton />}
    trigger="visible"
    {...props}
  />
)

export const CarouselIsland = (props) => (
  <Island
    component={() => import("./interactive/ImageCarousel")}
    skeleton={<CarouselSkeleton />}
    trigger="visible"
    threshold={0.25}
    {...props}
  />
)

export const SocialShareIsland = (props) => (
  <Island
    component={() => import("./interactive/SocialShare")}
    skeleton={<SocialShareSkeleton />}
    trigger="interaction"
    {...props}
  />
)

export const RelatedArticlesIsland = (props) => (
  <Island
    component={() => import("./interactive/RelatedArticles")}
    skeleton={<div className="h-64 bg-gray-100 rounded-lg animate-pulse" />}
    trigger="idle"
    {...props}
  />
)

export default Island
