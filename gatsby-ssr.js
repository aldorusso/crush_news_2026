/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * Optimizado para Web Vitals y Google Discover
 */

const React = require("react")
const { ThemeProvider } = require("./src/context/ThemeContext")
const fs = require("fs")
const path = require("path")

/**
 * Inyectar CSS crítico y optimizaciones en el <head>
 */
exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  // Configurar idioma correcto
  setHtmlAttributes({ lang: "es" })

  // Leer CSS crítico
  let criticalCSS = ""
  try {
    criticalCSS = fs.readFileSync(
      path.join(__dirname, "src/styles/critical.css"),
      "utf-8"
    )
  } catch (error) {
    console.warn("No se pudo cargar critical.css:", error.message)
  }

  const headComponents = []

  // 1. DNS Prefetch para recursos externos
  headComponents.push(
    React.createElement("link", {
      key: "dns-prefetch-google",
      rel: "dns-prefetch",
      href: "//www.google-analytics.com",
    }),
    React.createElement("link", {
      key: "dns-prefetch-fonts",
      rel: "dns-prefetch",
      href: "//fonts.googleapis.com",
    })
  )

  // 2. CSS Crítico inline
  if (criticalCSS) {
    headComponents.push(
      React.createElement("style", {
        key: "critical-css",
        dangerouslySetInnerHTML: { __html: criticalCSS },
      })
    )
  }

  // 3. Meta tags para rendimiento
  headComponents.push(
    React.createElement("meta", {
      key: "theme-color",
      name: "theme-color",
      content: "#ff3750",
    }),
    React.createElement("meta", {
      key: "color-scheme",
      name: "color-scheme",
      content: "light dark",
    })
  )

  setHeadComponents(headComponents)
}

/**
 * Wrapper del ThemeProvider
 */
exports.wrapRootElement = ({ element }) => (
  React.createElement(ThemeProvider, null, element)
)
