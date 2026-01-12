import React from "react"
import Header4 from "../../components/headers/Header4"
import Footer4 from "../../components/footers/Footer4"

const Layout4 = ({ children }) => {
  return (
    <React.Fragment>
      <Header4 />
      {children}
      <Footer4 />
    </React.Fragment>
  )
}

export default Layout4
