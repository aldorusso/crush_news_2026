import React from "react"
import { Link } from "gatsby"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Social from "../common/Social"
import { posts } from "../common/data/siteData"

/**
 * Reusable component for subcategory pages
 * Shows related articles from parent category or "Coming Soon" message
 */
const SubcategoryPage = ({
  title,
  parentCategory,
  description,
  breadcrumbType
}) => {
  // Get articles from parent category
  const categoryPosts = posts.filter(
    post => post.category?.toLowerCase() === parentCategory?.toLowerCase()
  ).slice(0, 4)

  return (
    <Layout5>
      <BreadCrumb title={title} titleType={breadcrumbType || parentCategory} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4 dark:text-white">{title}</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {description || `Contenido sobre ${title.toLowerCase()}`}
              </p>
            </div>

            {/* Related Articles from parent category */}
            {categoryPosts.length > 0 ? (
              <div className="grid gap-6">
                {categoryPosts.map(post => (
                  <div key={post.id} className="lg:mb-4">
                    <div className="block lg:flex gap-4">
                      <div className="lg:w-1/2">
                        <Link to={post.link}>
                          <img
                            className="h-auto max-w-full rounded-lg w-full object-cover"
                            src={post.image}
                            alt={post.title}
                          />
                        </Link>
                      </div>
                      <div className="py-4 lg:py-0 lg:w-1/2">
                        <Link
                          to={`/category/${post.category?.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-xs font-semibold text-[#ff3750] bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full"
                        >
                          {post.category}
                        </Link>
                        <h3 className="text-lg sm:text-xl my-3 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
                          <Link to={post.link}>{post.title}</Link>
                        </h3>
                        <div className="block lg:flex justify-start gap-4 text-xs sm:text-sm text-gray-500 mb-2 dark:text-gray-400">
                          <span className="me-2 lg:me-0">
                            <i className="ri-user-fill"></i> {post.author}
                          </span>
                          <span className="me-2 lg:me-0">
                            <i className="ri-calendar-fill"></i> {post.dateFormatted}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm sm:text-base mb-2 dark:text-gray-400 line-clamp-2">
                          {post.excerpt || post.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <i className="ri-article-line text-5xl text-gray-300 dark:text-gray-600 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Próximamente
                </h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Estamos preparando contenido para esta sección
                </p>
              </div>
            )}

            {/* Link to parent category */}
            {parentCategory && (
              <div className="mt-8">
                <Link
                  to={`/category/${parentCategory.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff3750] text-white rounded-lg hover:bg-[#e62f45] transition-colors"
                >
                  Ver más en {parentCategory}
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <div className="flex mb-6">
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
            </div>
            <Social />
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export default SubcategoryPage
