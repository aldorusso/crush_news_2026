import React from "react"
import Header3 from "../../components/headers/Header3"
import Footer3 from "../../components/footers/Footer3"

const Layout3 = ({ children }) => {
  return (
    <React.Fragment>
      <Header3 />
      {children}
      <Footer3 />
    </React.Fragment>
  )
}

export default Layout3
