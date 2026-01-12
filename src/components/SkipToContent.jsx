import React from "react"

/**
 * SKIP TO CONTENT LINK
 *
 * Link de accesibilidad que permite a usuarios de teclado
 * saltar directamente al contenido principal sin navegar
 * por todos los elementos del header.
 *
 * WCAG 2.1 Level A - Bypass Blocks
 * @see https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html
 */
const SkipToContent = ({ targetId = "main-content", text = "Saltar al contenido principal" }) => {
  return (
    <a
      href={`#${targetId}`}
      className="skip-to-content"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "0",
        zIndex: 9999,
        padding: "1rem 1.5rem",
        background: "#ff3750",
        color: "white",
        textDecoration: "none",
        borderRadius: "0 0 0.5rem 0",
        fontWeight: "600",
        fontSize: "1rem",
        lineHeight: "1.5",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onFocus={(e) => {
        e.target.style.left = "0"
      }}
      onBlur={(e) => {
        e.target.style.left = "-9999px"
      }}
    >
      {text}
    </a>
  )
}

/**
 * COMPONENTE CSS ALTERNATIVO (Usando className en vez de inline styles)
 *
 * Agregar este CSS a tu archivo global:
 *
 * .skip-to-content {
 *   position: absolute;
 *   left: -9999px;
 *   top: 0;
 *   z-index: 9999;
 *   padding: 1rem 1.5rem;
 *   background: #ff3750;
 *   color: white;
 *   text-decoration: none;
 *   border-radius: 0 0 0.5rem 0;
 *   font-weight: 600;
 *   font-size: 1rem;
 *   line-height: 1.5;
 *   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
 *   transition: left 0.3s ease;
 * }
 *
 * .skip-to-content:focus {
 *   left: 0;
 *   outline: 2px solid white;
 *   outline-offset: 2px;
 * }
 *
 * .skip-to-content:hover {
 *   background: #e62f45;
 * }
 */

export default SkipToContent
