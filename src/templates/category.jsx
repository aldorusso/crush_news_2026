import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout5 from "../common/layout/Layout5"
import Breadcrumbs from "../components/Breadcrumbs"
import { posts } from "../common/data/siteData"

/**
 * Template para páginas de categorías
 * Se genera dinámicamente desde gatsby-node.js
 */
const CategoryTemplate = ({ pageContext }) => {
  const { category, slug } = pageContext

  // Filtrar artículos por categoría
  const categoryPosts = posts.filter(
    post => post.category?.toLowerCase() === category.toLowerCase()
  )

  return (
    <Layout5>
      <div className="container mx-auto mt-8 px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs
          pathname={`/category/${slug}`}
          currentPageTitle={category}
        />

        {/* Header de categoría */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {category}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explora los últimos artículos sobre {category.toLowerCase()}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <i className="ri-article-line"></i>
            <span>{categoryPosts.length} artículos</span>
          </div>
        </header>

        {/* Grid de artículos */}
        {categoryPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Imagen del artículo */}
                <Link to={post.url || "/single-post"} className="block">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </Link>

                {/* Contenido */}
                <div className="p-6">
                  {/* Categoría badge */}
                  <Link
                    to={`/category/${slug}`}
                    className="inline-block px-3 py-1 mb-3 rounded-full bg-[#ff3750] text-white text-xs font-medium hover:bg-[#e62f45] transition-colors"
                  >
                    {category}
                  </Link>

                  {/* Título */}
                  <h2 className="text-xl font-semibold mb-3 text-black dark:text-white group-hover:text-[#ff3750] transition-colors">
                    <Link to={post.url || "/single-post"}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line"></i>
                      {post.publishDate ? new Date(post.publishDate).toLocaleDateString('es-ES', {
                        month: 'short',
                        day: 'numeric'
                      }) : 'Mar 18'}
                    </span>
                    {post.author && (
                      <span className="flex items-center gap-1">
                        <i className="ri-user-line"></i>
                        {post.author}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* No hay artículos */
          <div className="text-center py-20">
            <i className="ri-article-line text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No hay artículos en esta categoría
            </h2>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Vuelve pronto para ver nuevo contenido sobre {category.toLowerCase()}
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-[#ff3750] text-white rounded-lg hover:bg-[#e62f45] transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        )}
      </div>
    </Layout5>
  )
}

export const Head = ({ pageContext }) => (
  <Seo
    title={`${pageContext.category} - Artículos y Noticias`}
    description={`Descubre los mejores artículos sobre ${pageContext.category.toLowerCase()}. Noticias, tendencias y contenido exclusivo.`}
  />
)

export default CategoryTemplate
