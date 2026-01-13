import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import BreadCrumb from "../common/BreadCrumb"
import Layout5 from "../common/layout/Layout5"
import Social from "../common/Social"
import Seo from "../components/seo"
import { posts, getAllTags } from "../common/data/siteData"

const BlogTag = ({ location }) => {
  const [selectedTag, setSelectedTag] = useState(null)

  // Parse URL query parameter
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(location?.search || "")
      const tagParam = params.get("tag")
      if (tagParam) {
        setSelectedTag(tagParam.toLowerCase())
      }
    }
  }, [location?.search])

  // Get all tags
  const allTags = getAllTags()

  // Filter articles by selected tag
  const filteredArticles = selectedTag
    ? posts.filter(post =>
        post.tags?.some(tag => tag.toLowerCase() === selectedTag)
      )
    : posts.slice(0, 8)

  // Get the display name for the selected tag
  const selectedTagDisplay = selectedTag
    ? allTags.find(t => t.name.toLowerCase() === selectedTag)?.name || selectedTag
    : null

  return (
    <Layout5>
      <BreadCrumb
        title={selectedTagDisplay ? `#${selectedTagDisplay}` : "ETIQUETAS"}
        titleType="blog"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            {/* Tag Cloud */}
            <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                {selectedTag ? "Etiqueta seleccionada" : "Todas las Etiquetas"}
              </h2>

              {selectedTag && (
                <div className="mb-4">
                  <Link
                    to="/blog-tag"
                    className="text-sm text-[#ff3750] hover:underline"
                  >
                    ← Ver todas las etiquetas
                  </Link>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, idx) => {
                  const isActive = selectedTag === tag.name.toLowerCase()
                  return (
                    <Link
                      key={idx}
                      to={`/blog-tag?tag=${encodeURIComponent(tag.name.toLowerCase())}`}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        isActive
                          ? "bg-[#ff3750] text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#ff3750] hover:text-white"
                      }`}
                    >
                      #{tag.name} ({tag.count})
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Articles */}
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 dark:text-white">
                {selectedTag
                  ? `Artículos con #${selectedTagDisplay} (${filteredArticles.length})`
                  : "Artículos recientes"}
              </h2>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="p-8 bg-white dark:bg-gray-800 rounded-lg text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  No hay artículos con esta etiqueta.
                </p>
                <Link
                  to="/blog-tag"
                  className="inline-block mt-4 text-[#ff3750] hover:underline"
                >
                  Ver todas las etiquetas
                </Link>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredArticles.map(post => (
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
                        <h3 className="text-lg sm:text-xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
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
                        {post.tags && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {post.tags.map((tag, idx) => (
                              <Link
                                key={idx}
                                to={`/blog-tag?tag=${encodeURIComponent(tag.toLowerCase())}`}
                                className={`text-xs hover:underline ${
                                  tag.toLowerCase() === selectedTag
                                    ? "text-[#ff3750] font-bold"
                                    : "text-[#ff3750]"
                                }`}
                              >
                                #{tag}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

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

export const Head = ({ location }) => {
  const params = new URLSearchParams(location?.search || "")
  const tagParam = params.get("tag")

  return (
    <Seo
      title={tagParam ? `Artículos con #${tagParam}` : "Etiquetas del Blog"}
    />
  )
}

export default BlogTag
