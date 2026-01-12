import React from "react"
import Layout5 from "../common/layout/Layout5"
import { Link } from "gatsby"
import Social from "../common/Social"
import PostList from "../common/PostList"
import BlogPosts from "../common/BlogPosts"
import Seo from "../components/seo"
import blog1 from "../assets/images/placeholder"
import blog2 from "../assets/images/placeholder"
import blog3 from "../assets/images/placeholder"
import blog4 from "../assets/images/placeholder"
import blog5 from "../assets/images/placeholder"
import blog6 from "../assets/images/placeholder"
import blog7 from "../assets/images/placeholder"

const Search = () => {
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
        <div className="container mx-auto my-8">
          <div className="sm:flex justify-between text-center items-center">
            <div className="main-title relative">
              <h2 className="text-lg sm:text-2xl font-semibold ps-4 uppercase sm:mb-0 mb-2 dark:text-white dark:hover:text-[#ff3750]">
                Buscar
              </h2>
            </div>
            <nav aria-label="Breadcrumb">
              <ol className="space-x-1 md:space-x-2 rtl:space-x-reverse flex uppercase">
                <li>
                  <Link
                    to="/index"
                    className="text-sm font-medium text-gray-700 hover:text-[#ff3750] dark:text-gray-400 dark:hover:text-white"
                  >
                    <i className="ri-home-8-line"></i>
                    Inicio
                  </Link>
                </li>
                <li aria-current="page">
                  <i className="ri-arrow-right-s-line dark:text-gray-400"></i>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Buscar
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <BlogPosts postData={postData} />
            </div>
            <div className="col-span-1">
              <form className="flex gap-1">
                <input
                  type="search"
                  className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="buscar..."
                />
                <button
                  className="btn rounded-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700"
                  aria-label="search"
                >
                  <i className="ri-search-line"></i>
                </button>
              </form>

              <Social />

              <PostList />
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Buscar" />

export default Search
