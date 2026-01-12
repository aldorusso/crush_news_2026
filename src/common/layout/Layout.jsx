import React from "react"
import Header from "../../components/headers/Header"
import Footer from "../../components/footers/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
