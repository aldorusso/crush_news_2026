import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout5 from "../common/layout/Layout5"
import Breadcrumbs from "../components/Breadcrumbs"
import { posts, authors } from "../common/data/siteData"

/**
 * Template para páginas de autores
 * Se genera dinámicamente desde gatsby-node.js
 */
const AuthorTemplate = ({ pageContext }) => {
  const { authorName, authorSlug } = pageContext

  // Encontrar información del autor
  const author = authors.find(a => a.name === authorName) || {
    name: authorName,
    role: "Colaborador",
    bio: `Artículos de ${authorName}`,
    image: null,
  }

  // Filtrar artículos por autor
  const authorPosts = posts.filter(
    post => post.author === authorName
  )

  return (
    <Layout5>
      <div className="container mx-auto mt-8 px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs
          pathname={`/author/${authorSlug}`}
          currentPageTitle={authorName}
        />

        {/* Header del autor */}
        <header className="mb-12 text-center">
          {/* Imagen del autor */}
          {author.image && (
            <div className="mb-6 flex justify-center">
              <img
                src={author.image}
                alt={authorName}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#ff3750]"
              />
            </div>
          )}

          {/* Nombre y rol */}
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
            {authorName}
          </h1>
          <p className="text-xl text-[#ff3750] font-medium mb-4">
            {author.role}
          </p>

          {/* Bio */}
          {author.bio && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              {author.bio}
            </p>
          )}

          {/* Stats */}
          <div className="flex justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <i className="ri-article-line text-lg"></i>
              <strong className="text-black dark:text-white">{authorPosts.length}</strong> artículos
            </span>
            {author.specialty && (
              <span className="flex items-center gap-2">
                <i className="ri-bookmark-line text-lg"></i>
                {author.specialty}
              </span>
            )}
            {author.joinDate && (
              <span className="flex items-center gap-2">
                <i className="ri-calendar-line text-lg"></i>
                Desde {author.joinDate}
              </span>
            )}
          </div>

          {/* Social links */}
          {author.social && (
            <div className="mt-6 flex justify-center gap-4">
              {author.social.twitter && author.social.twitter !== "#" && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#ff3750] transition-colors"
                  aria-label="Twitter"
                >
                  <i className="ri-twitter-fill text-2xl"></i>
                </a>
              )}
              {author.social.instagram && author.social.instagram !== "#" && (
                <a
                  href={author.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#ff3750] transition-colors"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-fill text-2xl"></i>
                </a>
              )}
              {author.social.linkedin && author.social.linkedin !== "#" && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#ff3750] transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-fill text-2xl"></i>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Grid de artículos */}
        {authorPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Imagen del artículo */}
                <Link to={post.link || "/single-post"} className="block">
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
                  {post.category && (
                    <Link
                      to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block px-3 py-1 mb-3 rounded-full bg-[#ff3750] text-white text-xs font-medium hover:bg-[#e62f45] transition-colors"
                    >
                      {post.category}
                    </Link>
                  )}

                  {/* Título */}
                  <h2 className="text-xl font-semibold mb-3 text-black dark:text-white group-hover:text-[#ff3750] transition-colors">
                    <Link to={post.link || "/single-post"}>
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
                      {post.dateFormatted || new Date(post.date).toLocaleDateString('es-ES', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    {post.comments > 0 && (
                      <span className="flex items-center gap-1">
                        <i className="ri-chat-3-line"></i>
                        {post.comments}
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
              Aún no hay artículos de este autor
            </h2>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Vuelve pronto para ver el contenido de {authorName}
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
    title={`${pageContext.authorName} - Artículos y Publicaciones`}
    description={`Descubre todos los artículos escritos por ${pageContext.authorName} en crush.news. Noticias, tendencias y contenido exclusivo.`}
  />
)

export default AuthorTemplate
