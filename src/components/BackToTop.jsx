import React, { useState, useEffect } from "react"

/**
 * BACK TO TOP BUTTON
 *
 * Botón flotante que aparece después de hacer scroll
 * y permite volver al inicio de la página suavemente.
 *
 * Especialmente útil en artículos largos.
 */
const BackToTop = ({
  showAfter = 300, // Píxeles de scroll antes de mostrar el botón
  scrollDuration = 500, // Duración de la animación en ms
  position = "right", // "right" o "left"
  bottom = 80, // Distancia desde el bottom en px
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false)

  // Detectar scroll para mostrar/ocultar el botón
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [showAfter])

  // Scroll suave al top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`back-to-top ${className}`}
          style={{
            position: "fixed",
            bottom: `${bottom}px`,
            [position]: "20px",
            zIndex: 1000,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#ff3750",
            color: "white",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            transition: "all 0.3s ease",
            opacity: isVisible ? "1" : "0",
            visibility: isVisible ? "visible" : "hidden",
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e62f45"
            e.currentTarget.style.transform = "translateY(-4px) scale(1.05)"
            e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ff3750"
            e.currentTarget.style.transform = "translateY(0) scale(1)"
            e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }}
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <i className="ri-arrow-up-line"></i>
        </button>
      )}

      {/* Inline styles for dark mode support */}
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          .back-to-top {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
          }
        }

        @media (max-width: 768px) {
          .back-to-top {
            width: 45px !important;
            height: 45px !important;
            font-size: 20px !important;
          }
        }
      `}</style>
    </>
  )
}

/**
 * VERSIÓN CON TAILWIND CSS (alternativa)
 *
 * <button
 *   onClick={scrollToTop}
 *   className="fixed bottom-20 right-5 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#ff3750] hover:bg-[#e62f45] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
 *   aria-label="Volver arriba"
 * >
 *   <i className="ri-arrow-up-line text-2xl"></i>
 * </button>
 */

export default BackToTop
