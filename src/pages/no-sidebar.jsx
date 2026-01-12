import React from "react"
import Seo from "../components/seo"
import BreadCrumb from "../common/BreadCrumb"
import blog1 from "../assets/images/placeholder"
import blog2 from "../assets/images/placeholder"
import blog3 from "../assets/images/placeholder"
import blog4 from "../assets/images/placeholder"
import blog5 from "../assets/images/placeholder"
import blog6 from "../assets/images/placeholder"
import blog7 from "../assets/images/placeholder"
import { Link } from "gatsby"
import Layout5 from "../common/layout/Layout5"

const NoSidebar = () => {
  const postData = [
    { id: 1, image: blog1 },
    { id: 2, image: blog2 },
    { id: 3, image: blog3 },
    { id: 4, image: blog4 },
    { id: 5, image: blog5 },
    { id: 6, image: blog6 },
    { id: 7, image: blog7 },
  ]
  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="Sin Barra Lateral" titleType="blog" />

        <div className="container mx-auto px-4">
          <div className="grid">
            <div>
              <div className="grid">
                {postData &&
                  postData.map(item => (
                    <div className="lg:mb-8" key={item.id}>
                      <div className="block gap-4 lg:flex">
                        <div className="lg:w-1/2">
                          <Link href="/single-post">
                            <img
                              className="w-full h-auto max-w-full rounded-lg"
                              src={item.image}
                              alt="blog post"
                            />
                          </Link>
                        </div>
                        <div className="py-4 lg:py-0 lg:w-1/2">
                          <h3 className="text-lg sm:text-xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
                            <Link href="/single-post">
                              Descubre las últimas tendencias y noticias más relevantes del día.
                            </Link>
                          </h3>
                          <div className="justify-start block gap-4 mb-2 text-xs text-gray-500 lg:flex sm:text-sm dark:text-gray-400">
                            <span className="me-2 lg:me-0">
                              <i className="ri-user-fill"></i> Admin
                            </span>
                            <span className="me-2 lg:me-0">
                              <i className="ri-calendar-fill"></i> Mar 18, 2024
                            </span>
                            <span>
                              <i className="ri-chat-1-fill"></i> 0 comentarios
                            </span>
                          </div>
                          <p className="mb-2 text-sm text-gray-400 sm:text-base dark:text-gray-300">
                            Explora historias fascinantes y análisis en profundidad sobre los temas que más importan en el mundo actual.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Sin Barra Lateral" />

export default NoSidebar
