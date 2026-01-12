import Aos from "aos"
import React, { useEffect } from "react"
import Seo from "../components/seo"
import Section1 from "../common/view/index-4/Section1"
import Section2 from "../common/view/index-4/Section2"
import Section3 from "../common/view/index-4/Section3"
import Section4 from "../common/view/index-4/Section4"
import Section5 from "../common/view/index-4/Section5"
import Section6 from "../common/view/index-4/Section6"
import Section7 from "../common/view/index-4/Section7"
import Section8 from "../common/view/index-4/Section8"
import Layout4 from "../common/layout/Layout4"
import Layout5 from "../common/layout/Layout5"

const Index4 = () => {
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
      <Layout4>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </Layout4>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Index 4" />

export default Index4
