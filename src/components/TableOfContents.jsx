import React, { useState, useEffect } from "react"

/**
 * TABLE OF CONTENTS (TOC)
 *
 * Genera automáticamente una tabla de contenidos
 * a partir de los encabezados (H2, H3) del artículo.
 *
 * Features:
 * - Scroll suave a las secciones
 * - Resalta la sección activa
 * - Sticky/fijo durante el scroll
 * - Colapsa en móviles
 */
const TableOfContents = ({
  content,
  minHeadings = 3, // Mínimo de encabezados para mostrar TOC
  levels = [2, 3], // Niveles de encabezado a incluir (H2, H3)
  title = "Contenido del artículo",
  className = "",
}) => {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState("")
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Extraer encabezados del HTML
  useEffect(() => {
    if (!content) return

    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = content

    const headingElements = Array.from(
      tempDiv.querySelectorAll(levels.map(level => `h${level}`).join(", "))
    )

    const extractedHeadings = headingElements.map((heading, index) => {
      const text = heading.textContent || heading.innerText
      const id = heading.id || `heading-${index}`
      const level = parseInt(heading.tagName.replace("H", ""))

      return { id, text, level }
    })

    setHeadings(extractedHeadings)
  }, [content, levels])

  // Agregar IDs a los encabezados reales en el DOM
  useEffect(() => {
    if (headings.length === 0) return

    // Esperar a que el componente se monte completamente
    const timer = setTimeout(() => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (!element) {
          // Si el elemento no tiene ID, buscar por texto
          const allHeadings = document.querySelectorAll(
            levels.map(level => `h${level}`).join(", ")
          )
          const match = Array.from(allHeadings).find(
            (el) => el.textContent.trim() === heading.text.trim()
          )
          if (match && !match.id) {
            match.id = heading.id
          }
        }
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [headings, levels])

  // Detectar el encabezado activo durante el scroll
  useEffect(() => {
    if (headings.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        const element = document.getElementById(heading.id)

        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(heading.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Llamar inmediatamente

    return () => window.removeEventListener("scroll", handleScroll)
  }, [headings])

  // Scroll suave al hacer clic
  const scrollToHeading = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Offset para el header fijo
      const elementPosition = element.offsetTop - offset

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })

      // Actualizar active ID
      setActiveId(id)
    }
  }

  // No mostrar TOC si no hay suficientes encabezados
  if (headings.length < minHeadings) {
    return null
  }

  return (
    <nav
      className={`table-of-contents ${className}`}
      aria-label="Tabla de contenidos"
    >
      {/* Header del TOC */}
      <div
        className="toc-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          borderBottom: "2px solid #ff3750",
          cursor: "pointer",
        }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "#1f2937",
          }}
          className="dark:text-white"
        >
          <i className="ri-list-unordered mr-2"></i>
          {title}
        </h3>
        <button
          className="lg:hidden"
          aria-label={isCollapsed ? "Expandir" : "Colapsar"}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.25rem",
            cursor: "pointer",
            color: "#6b7280",
          }}
        >
          <i className={`ri-arrow-${isCollapsed ? "down" : "up"}-s-line`}></i>
        </button>
      </div>

      {/* Lista de encabezados */}
      <ul
        className={`toc-list ${isCollapsed ? "hidden lg:block" : ""}`}
        style={{
          listStyle: "none",
          margin: 0,
          padding: "1rem 0",
        }}
      >
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              paddingLeft: `${(heading.level - 2) * 1}rem`,
            }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToHeading(heading.id)
              }}
              className={`toc-link ${activeId === heading.id ? "active" : ""}`}
              style={{
                display: "block",
                padding: "0.5rem 1rem",
                fontSize: heading.level === 2 ? "0.9375rem" : "0.875rem",
                fontWeight: heading.level === 2 ? "500" : "400",
                color: activeId === heading.id ? "#ff3750" : "#4b5563",
                textDecoration: "none",
                borderLeft: activeId === heading.id ? "3px solid #ff3750" : "3px solid transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#ff3750"
                e.target.style.paddingLeft = "1.25rem"
              }}
              onMouseLeave={(e) => {
                if (activeId !== heading.id) {
                  e.target.style.color = "#4b5563"
                }
                e.target.style.paddingLeft = "1rem"
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Inline styles para dark mode */}
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          .toc-header h3 {
            color: white;
          }
          .toc-link {
            color: #9ca3af !important;
          }
          .toc-link:hover,
          .toc-link.active {
            color: #ff3750 !important;
          }
        }
      `}</style>
    </nav>
  )
}

/**
 * Hook para generar IDs únicos a partir de texto
 */
export const generateHeadingId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Eliminar caracteres especiales
    .replace(/\s+/g, "-") // Espacios a guiones
    .replace(/--+/g, "-") // Guiones múltiples a uno solo
    .trim()
}

/**
 * Función para procesar HTML y agregar IDs a los encabezados
 */
export const addIdsToHeadings = (html, levels = [2, 3]) => {
  if (!html) return html

  let processedHtml = html
  const tempDiv = document.createElement("div")
  tempDiv.innerHTML = html

  const headings = tempDiv.querySelectorAll(
    levels.map(level => `h${level}`).join(", ")
  )

  headings.forEach((heading, index) => {
    if (!heading.id) {
      const id = generateHeadingId(heading.textContent) || `heading-${index}`
      heading.id = id
    }
  })

  return tempDiv.innerHTML
}

export default TableOfContents
