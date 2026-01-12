import React, { useEffect } from "react"
import Aos from "aos"
import Seo from "../components/seo"
import NewsLetter from "../common/view/index-2/NewsLetter"
import PopularCategory from "../common/view/index-2/PopularCategory"
import Section1 from "../common/view/index-2/Section1"
import Section2 from "../common/view/index-2/Section2"
import Section3 from "../common/view/index-2/Section3"
import Section4 from "../common/view/index-2/Section4"
import Section5 from "../common/view/index-2/Section5"
import Section6 from "../common/view/index-2/Section6"
import SocialLinks from "../common/view/index-2/SocialLinks"
import Layout2 from "../common/layout/Layout2"

const Index2 = () => {
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
      <Layout2>
        {/* main section */}
        <section className="mt-4 md:mt-8">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div
                className="col-span-12 md:col-span-8 lg:col-span-9"
                data-aos="fade-up"
              >
                <div className="grid grid-cols-6 gap-6">
                  <Section1 />
                  <Section2 />
                  <Section3 />
                  <Section4 />
                  <Section5 />
                  <Section6 />
                </div>
              </div>
              <div className="relative col-span-12 md:col-span-4 lg:col-span-3">
                <div className="sticky top-0 right-0">
                  <PopularCategory />
                  <NewsLetter />
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout2>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Index 2" />

export default Index2
