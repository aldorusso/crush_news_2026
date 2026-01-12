import React, { useEffect } from "react"
import Aos from "aos"
import Seo from "../components/seo"
import Section1 from "../common/view/index-3/Section1"
import Section2 from "../common/view/index-3/Section2"
import Section3 from "../common/view/index-3/Section3"
import Section4 from "../common/view/index-3/Section4"
import Section5 from "../common/view/index-3/Section5"
import Section6 from "../common/view/index-3/Section6"
import Section7 from "../common/view/index-3/Section7"
import Section8 from "../common/view/index-3/Section8"
import Section9 from "../common/view/index-3/Section9"
import Layout3 from "../common/layout/Layout3"

const Index3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile", offset: 100, once: false })

    // refresh aos on scroll
    const handleScroll = () => {
      Aos.refresh()
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <React.Fragment>
      <Layout3>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </Layout3>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Index 3" />

export default Index3
