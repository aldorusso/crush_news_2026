import React from "react"

/**
 * Componente para slots de publicidad con espacio reservado
 * Evita CLS (Cumulative Layout Shift) al cargar anuncios
 *
 * IMPORTANTE: El espacio se reserva ANTES de que el anuncio cargue
 * para que el contenido no "salte" cuando aparezca el anuncio
 */

/**
 * Tamaños estándar de anuncios IAB
 */
const AD_SIZES = {
  // Display Ads
  leaderboard: { width: 728, height: 90 },       // 728x90 - Top banner
  mediumRectangle: { width: 300, height: 250 },  // 300x250 - Sidebar
  largeRectangle: { width: 336, height: 280 },   // 336x280 - Sidebar
  skyscraper: { width: 160, height: 600 },       // 160x600 - Sidebar tall
  wideSkyscraper: { width: 300, height: 600 },   // 300x600 - Sidebar tall
  halfPage: { width: 300, height: 600 },         // 300x600 - Half page

  // Mobile Ads
  mobileBanner: { width: 320, height: 50 },      // 320x50 - Mobile banner
  mobileLarge: { width: 320, height: 100 },      // 320x100 - Mobile large

  // Responsive
  billboard: { width: 970, height: 250 },        // 970x250 - Large top
  portrait: { width: 300, height: 1050 },        // 300x1050 - Portrait
}

const AdSlot = ({
  id,
  size = "mediumRectangle",
  customSize = null,
  className = "",
  label = "Publicidad",
  showLabel = true,
}) => {
  // Obtener dimensiones del anuncio
  const dimensions = customSize || AD_SIZES[size] || AD_SIZES.mediumRectangle

  return (
    <div
      className={`ad-container ${className}`}
      style={{
        minHeight: `${dimensions.height}px`,
        minWidth: `${dimensions.width}px`,
        maxWidth: '100%',
        margin: '1rem auto',
        position: 'relative',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {showLabel && (
        <div
          style={{
            position: 'absolute',
            top: '4px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '10px',
            color: '#9ca3af',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: '500',
          }}
        >
          {label}
        </div>
      )}

      {/* Aquí iría el código del anuncio (Google AdSense, etc.) */}
      <div
        id={id}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Placeholder mientras carga el anuncio */}
        <div
          className="ad-placeholder"
          style={{
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#d1d5db',
            fontSize: '14px',
          }}
        >
          <span>{dimensions.width}x{dimensions.height}</span>
        </div>
      </div>
    </div>
  )
}

/**
 * Componente específico para anuncios en sidebar
 */
export const SidebarAd = ({ id = "sidebar-ad-1" }) => {
  return (
    <AdSlot
      id={id}
      size="mediumRectangle"
      className="sidebar-ad"
    />
  )
}

/**
 * Componente específico para anuncios en el contenido (in-article)
 */
export const InArticleAd = ({ id = "in-article-ad", position = "middle" }) => {
  return (
    <div className={`my-8 ${position === 'middle' ? 'md:float-right md:ml-6 md:mb-6' : ''}`}>
      <AdSlot
        id={id}
        size="mediumRectangle"
        className="in-article-ad"
      />
    </div>
  )
}

/**
 * Componente para anuncios móviles sticky
 */
export const MobileStickyAd = ({ id = "mobile-sticky-ad" }) => {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <AdSlot
        id={id}
        size="mobileBanner"
        className="mobile-sticky-ad"
        showLabel={false}
      />
    </div>
  )
}

/**
 * Componente para banner superior (Leaderboard)
 */
export const LeaderboardAd = ({ id = "leaderboard-ad" }) => {
  return (
    <div className="hidden md:block w-full">
      <AdSlot
        id={id}
        size="leaderboard"
        className="leaderboard-ad mx-auto"
      />
    </div>
  )
}

/**
 * Componente para anuncios responsivos con tamaño dinámico
 */
export const ResponsiveAd = ({ id = "responsive-ad" }) => {
  return (
    <div className="responsive-ad-container">
      {/* Mobile */}
      <div className="md:hidden">
        <AdSlot id={`${id}-mobile`} size="mobileBanner" />
      </div>

      {/* Tablet */}
      <div className="hidden md:block lg:hidden">
        <AdSlot id={`${id}-tablet`} size="mediumRectangle" />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <AdSlot id={`${id}-desktop`} size="leaderboard" />
      </div>
    </div>
  )
}

export default AdSlot
