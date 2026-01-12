import React from "react"
import BlogPosts from "../common/BlogPosts"
import Seo from "../components/seo"
import Social from "../common/Social"
import MostPopular from "../common/MostPopular"
import PostList from "../common/PostList"
import BreadCrumb from "../common/BreadCrumb"
import Layout5 from "../common/layout/Layout5"
import img1 from "../assets/images/placeholder"
import img2 from "../assets/images/placeholder"
import img3 from "../assets/images/placeholder"
import img4 from "../assets/images/placeholder"
import img5 from "../assets/images/placeholder"
import img6 from "../assets/images/placeholder"
import blog1 from "../assets/images/placeholder"
import blog2 from "../assets/images/placeholder"
import blog3 from "../assets/images/placeholder"
import blog4 from "../assets/images/placeholder"
import blog5 from "../assets/images/placeholder"
import blog6 from "../assets/images/placeholder"
import blog7 from "../assets/images/placeholder"

const LeftSidebar = () => {
  const swiperData = [
    { id: 1, margin: false, image: img1 },
    { id: 2, margin: true, image: img2 },
    { id: 3, margin: true, image: img3 },
    { id: 4, margin: false, image: img4 },
    { id: 5, margin: true, image: img5 },
    { id: 6, margin: true, image: img6 },
  ]

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
        <BreadCrumb title="Barra Lateral Izquierda" titleType="blog" />

        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 overflow-hidden">
              <form className="flex gap-1">
                <input
                  type="search"
                  className="w-full px-4 py-3 border rounded-lg form-input dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="buscar..."
                />
                <button
                  className="btn rounded-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700"
                  aria-label="Buscar"
                >
                  <i className="ri-search-line"></i>
                </button>
              </form>

              {/* social & newsletter */}
              <Social />

              {/* <!-- Most popular --> */}
              <div className="relative main-title">
                <h2 className="mt-6 mb-6 text-2xl font-semibold ps-4 dark:text-white">
                  Más Populares
                </h2>
              </div>
              <MostPopular swiperData={swiperData} />

              {/* <!-- post list--> */}
              <PostList />
            </div>

            <div className="col-span-1 md:col-span-2">
              <BlogPosts postData={postData} />
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Barra Lateral Izquierda" />

export default LeftSidebar
