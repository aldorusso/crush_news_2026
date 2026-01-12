import React from "react"
import Seo from "../components/seo"
import BlogPosts from "../common/BlogPosts"
import Social from "../common/Social"
import PostList from "../common/PostList"
import BreadCrumb from "../common/BreadCrumb"
import Layout5 from "../common/layout/Layout5"
import blog1 from "../assets/images/placeholder"
import blog2 from "../assets/images/placeholder"
import blog3 from "../assets/images/placeholder"
import blog4 from "../assets/images/placeholder"
import blog5 from "../assets/images/placeholder"
import blog6 from "../assets/images/placeholder"
import blog7 from "../assets/images/placeholder"

const RightSidebar = () => {
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
        <BreadCrumb title="Barra Lateral Derecha" titleType="blog" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <BlogPosts postData={postData} />
            </div>

            <div className="col-span-1 overflow-hidden">
              <form className="flex gap-1">
                <input
                  type="search"
                  className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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

              {/* <!-- post list--> */}
              <PostList />
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Barra Lateral Derecha" />

export default RightSidebar
