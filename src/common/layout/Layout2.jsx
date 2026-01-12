import React from "react"
import Header2 from "../../components/headers/Header2"
import Footer2 from "../../components/footers/Footer2"

const Layout2 = ({ children }) => {
  return (
    <React.Fragment>
      <Header2 />
      {children}
      <Footer2 />
    </React.Fragment>
  )
}

export default Layout2
