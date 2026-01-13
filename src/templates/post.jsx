import React from "react"
import { Link } from "gatsby"
import Layout5 from "../common/layout/Layout5"
import Seo from "../components/seo"
import placeholder from "../assets/images/placeholder"
import Social from "../common/Social"
import { posts } from "../common/data/siteData"

const PostTemplate = ({ pageContext }) => {
  const { postId, slug } = pageContext

  // Buscar el post por ID o slug
  const post = posts.find(p => p.id === postId) || posts.find(p => p.link === `/post/${slug}`)

  if (!post) {
    return (
      <Layout5>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Artículo no encontrado</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            El artículo que buscas no existe o ha sido movido.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-[#ff3750] text-white rounded-lg hover:bg-[#e62f45] transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </Layout5>
    )
  }

  // Artículos relacionados de la misma categoría
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <Layout5>
      <div className="container mx-auto px-4 mt-4 sm:mt-8">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-6 text-xs sm:text-sm">
          <ol className="flex items-center space-x-1 sm:space-x-2 flex-wrap">
            <li>
              <Link to="/" className="text-gray-500 hover:text-[#ff3750]">
                Inicio
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to={`/category/${post.category?.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-500 hover:text-[#ff3750]"
              >
                {post.category}
              </Link>
            </li>
            <li className="text-gray-400 hidden sm:block">/</li>
            <li className="text-gray-700 dark:text-gray-300 truncate max-w-[150px] sm:max-w-[200px] hidden sm:block">
              {post.title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800/70 rounded-xl p-4 sm:p-6 lg:p-8">
              {/* Category Badge */}
              <Link
                to={`/category/${post.category?.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block px-2.5 py-1 sm:px-3 mb-3 sm:mb-4 text-[10px] sm:text-xs font-medium text-white bg-[#ff3750] rounded-full hover:bg-[#e62f45] transition-colors"
              >
                {post.category}
              </Link>

              {/* Title */}
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b dark:border-gray-700">
                <Link
                  to={`/author/${post.author?.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-1 sm:gap-2 hover:text-[#ff3750]"
                >
                  <i className="ri-user-fill"></i>
                  <span>{post.author}</span>
                </Link>
                <span className="flex items-center gap-1 sm:gap-2">
                  <i className="ri-calendar-fill"></i>
                  <time>{post.dateFormatted || post.date}</time>
                </span>
                {post.source && (
                  <span className="flex items-center gap-1 sm:gap-2 hidden sm:flex">
                    <i className="ri-newspaper-fill"></i>
                    <span>{post.source}</span>
                  </span>
                )}
              </div>

              {/* Featured Image with Blur Background */}
              <figure className="mb-6 sm:mb-8 relative rounded-lg sm:rounded-xl overflow-hidden">
                {/* Blurred background */}
                <div
                  className="absolute inset-0 scale-110"
                  style={{
                    backgroundImage: `url(${post.image || placeholder})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(20px)',
                    opacity: 0.6
                  }}
                />
                {/* Dark overlay for better contrast */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Main image */}
                <div className="relative flex items-center justify-center min-h-[200px] sm:min-h-[300px] md:min-h-[400px] p-3 sm:p-4">
                  <img
                    src={post.image || placeholder}
                    alt={post.title}
                    className="relative z-10 max-w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] h-auto object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </figure>

              {/* Content */}
              <div className="prose prose-sm sm:prose-lg dark:prose-invert max-w-none">
                {post.description && (
                  <p className="text-base sm:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 font-medium leading-relaxed">
                    {post.description}
                  </p>
                )}

                {post.excerpt && post.excerpt !== post.description && (
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                    {post.excerpt}
                  </p>
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t dark:border-gray-700">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 dark:text-white">Tags</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {post.tags.map((tag, idx) => (
                        <Link
                          key={idx}
                          to={`/blog-tag?tag=${encodeURIComponent(tag.toLowerCase())}`}
                          className="px-2.5 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-[#ff3750] hover:text-white transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Source Link */}
                {post.sourceUrl && (
                  <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <strong>Fuente original:</strong>{" "}
                      <a
                        href={post.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#062db9] dark:text-[#478cff] hover:underline break-all"
                      >
                        {post.source || "Ver artículo original"}
                        <i className="ri-external-link-line ml-1"></i>
                      </a>
                    </p>
                  </div>
                )}
              </div>

              {/* Share Buttons */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 dark:text-white">
                  Compartir artículo
                </h3>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://crush.news${post.link}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-[#1DA1F2] text-white rounded-lg hover:opacity-80 transition-opacity"
                  >
                    <i className="ri-twitter-x-fill text-base sm:text-xl"></i>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://crush.news${post.link}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-[#4267B2] text-white rounded-lg hover:opacity-80 transition-opacity"
                  >
                    <i className="ri-facebook-fill text-base sm:text-xl"></i>
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${post.title} https://crush.news${post.link}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-[#25D366] text-white rounded-lg hover:opacity-80 transition-opacity"
                  >
                    <i className="ri-whatsapp-fill text-base sm:text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-6 sm:mt-8 bg-white dark:bg-gray-800/70 rounded-xl p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 dark:text-white">
                  Artículos relacionados
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                  {relatedPosts.map(related => (
                    <Link
                      key={related.id}
                      to={related.link || "/"}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-lg mb-2 sm:mb-3 aspect-[4/3]">
                        {/* Blur background for related */}
                        <div
                          className="absolute inset-0 scale-110"
                          style={{
                            backgroundImage: `url(${related.image || placeholder})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(10px)',
                            opacity: 0.5
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <img
                          src={related.image || placeholder}
                          alt={related.title}
                          className="absolute inset-0 w-full h-full object-contain p-1 sm:p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-medium text-xs sm:text-base text-gray-900 dark:text-white group-hover:text-[#ff3750] line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1">
                        {related.dateFormatted}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white dark:bg-gray-800/70 rounded-xl p-4 sm:p-5 mb-4 sm:mb-6">
              <form className="flex gap-2">
                <input
                  type="search"
                  placeholder="Buscar artículos..."
                  className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button
                  type="submit"
                  className="px-3 sm:px-4 py-2 bg-[#ff3750] text-white rounded-lg hover:bg-[#e62f45]"
                >
                  <i className="ri-search-line text-sm sm:text-base"></i>
                </button>
              </form>
            </div>

            {/* Social */}
            <Social />

            {/* Categories */}
            <div className="bg-white dark:bg-gray-800/70 rounded-xl p-4 sm:p-5 mt-4 sm:mt-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pb-3 sm:pb-4 border-b dark:border-gray-700 dark:text-white">
                Categorías
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {["Cultura Z", "Crush Files", "Aesthetic Life", "Pop Picks"].map(cat => (
                  <li key={cat}>
                    <Link
                      to={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex justify-between items-center text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-[#ff3750] dark:hover:text-[#ff3750]"
                    >
                      <span>{cat}</span>
                      <i className="ri-arrow-right-s-line"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = ({ pageContext }) => {
  const post = posts.find(p => p.id === pageContext.postId)

  return (
    <Seo
      title={post?.title || "Artículo"}
      description={post?.description || post?.excerpt || ""}
      article={true}
      category={post?.category}
      tags={post?.tags}
      publishedTime={post?.date}
      author={post?.author}
    />
  )
}

export default PostTemplate
