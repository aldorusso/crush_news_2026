import React from "react"
import Header5 from "../../components/headers/Header5"
import Footer5 from "../../components/footers/Footer5"
import WebSiteSchema from "../../components/WebSiteSchema"
import SkipToContent from "../../components/SkipToContent"

const Layout5 = ({ children }) => {
  return (
    <React.Fragment>
      {/* Skip to content link para accesibilidad */}
      <SkipToContent />

      {/* Schema.org global para el sitio */}
      <WebSiteSchema />

      <Header5 />
      <main id="main-content">
        {children}
      </main>
      <Footer5 />
    </React.Fragment>
  )
}

export default Layout5
