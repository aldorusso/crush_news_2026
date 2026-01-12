import Aos from "aos"
import { Link } from "gatsby"
import React, { useEffect } from "react"
import blog1 from "../assets/images/placeholder"
import BreadCrumb from "../common/BreadCrumb"
import Layout5 from "../common/layout/Layout5"
import Social from "../common/Social"
import Seo from "../components/seo"

const AppsJuegos = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile", offset: 100, once: false })
    const handleScroll = () => { Aos.refresh() }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Layout5>
      <BreadCrumb title="APPS & JUEGOS" titleType="Pop Picks" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="grid">
              <div className="lg:mb-8">
                <div className="block lg:flex gap-4">
                  <div className="lg:w-1/2">
                    <Link to="/single-post">
                      <img className="h-auto max-w-full rounded-lg w-full" src={blog1} alt="blog post" />
                    </Link>
                  </div>
                  <div className="py-4 lg:py-0 lg:w-1/2">
                    <h3 className="text-lg sm:text-xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
                      <Link to="/single-post">Las apps y juegos más populares</Link>
                    </h3>
                    <div className="block lg:flex justify-start gap-4 text-xs sm:text-sm text-gray-500 mb-2 dark:text-gray-400">
                      <span className="me-2 lg:me-0"><i className="ri-user-fill"></i> Admin</span>
                      <span className="me-2 lg:me-0"><i className="ri-calendar-fill"></i> {new Date().getFullYear()}</span>
                      <span><i className="ri-chat-1-fill"></i> 0 comentarios</span>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base mb-2 dark:text-gray-300">
                      Descubre las mejores apps y juegos del momento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex">
              <input type="search" className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="buscar..." />
              <button className="btn rounded-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700" aria-label="Buscar">
                <i className="ri-search-line"></i>
              </button>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Apps & Juegos - Pop Picks" />
export default AppsJuegos
