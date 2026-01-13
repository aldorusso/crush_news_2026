import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import { posts, authors } from "../common/data/siteData"
import getAvatar from "../utils/avatar"

/**
 * Template para páginas de autores
 * Se genera dinámicamente desde gatsby-node.js
 */
const AuthorTemplate = ({ pageContext }) => {
  const { authorName, authorSlug } = pageContext

  // Encontrar información del autor
  const author = authors.find(a => a.name === authorName || a.slug === authorSlug) || {
    name: authorName,
    slug: authorSlug,
    role: "Colaborador",
    bio: `Artículos de ${authorName}`,
    image: null,
    specialty: "General",
    categories: [],
    social: {},
  }

  // Filtrar artículos por autor
  const authorPosts = posts.filter(post => post.author === authorName)

  return (
    <Layout5>
      <BreadCrumb title={authorName} />

      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Author Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-8 sm:mb-12">
          {/* Header gradient */}
          <div className="h-24 sm:h-32 md:h-40 bg-gradient-to-r from-[#ff3750] to-[#ff6b81] relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Content */}
          <div className="relative px-4 sm:px-8 pb-6 sm:pb-8">
            {/* Avatar */}
            <div className="flex justify-center md:justify-start -mt-12 sm:-mt-16 mb-4">
              <div className="relative">
                <img
                  src={author.image || getAvatar(authorName)}
                  alt={authorName}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-gray-800 bg-gray-100 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 bg-[#ff3750] rounded-full flex items-center justify-center">
                  <i className="ri-verified-badge-fill text-white text-sm"></i>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              {/* Name and role */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                {authorName}
              </h1>
              <p className="text-[#ff3750] font-medium text-sm sm:text-base mb-3">
                {author.role}
              </p>

              {/* Specialty badge */}
              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs sm:text-sm rounded-full mb-4">
                {author.specialty}
              </span>

              {/* Bio */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
                {author.bio}
              </p>

              {/* Stats and social in flex */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Stats */}
                <div className="flex justify-center md:justify-start gap-6">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#ff3750]">
                      {authorPosts.length}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      Artículos
                    </div>
                  </div>
                  {author.joinDate && (
                    <div className="text-center">
                      <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        {author.joinDate}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Se unió
                      </div>
                    </div>
                  )}
                  {author.categories && author.categories.length > 0 && (
                    <div className="text-center">
                      <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        {author.categories[0]}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Especialidad
                      </div>
                    </div>
                  )}
                </div>

                {/* Social links */}
                {author.social && (
                  <div className="flex justify-center md:justify-start gap-3">
                    {author.social.twitter && (
                      <a
                        href={`https://twitter.com/${author.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                        aria-label="Twitter"
                      >
                        <i className="ri-twitter-x-fill text-lg"></i>
                      </a>
                    )}
                    {author.social.instagram && (
                      <a
                        href={`https://instagram.com/${author.social.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                        aria-label="Instagram"
                      >
                        <i className="ri-instagram-fill text-lg"></i>
                      </a>
                    )}
                    {author.social.tiktok && (
                      <a
                        href={`https://tiktok.com/@${author.social.tiktok}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                        aria-label="TikTok"
                      >
                        <i className="ri-tiktok-fill text-lg"></i>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Artículos de {authorName}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {authorPosts.length > 0
              ? `${authorPosts.length} artículos publicados`
              : "Próximamente nuevos artículos"}
          </p>
        </div>

        {/* Grid de artículos */}
        {authorPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {authorPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Imagen del artículo */}
                <Link to={post.link || "/"} className="block">
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
                <div className="p-4 sm:p-5">
                  {/* Categoría badge */}
                  {post.category && (
                    <Link
                      to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block px-2.5 py-1 mb-2 rounded-full bg-[#ff3750] text-white text-[10px] sm:text-xs font-medium hover:bg-[#e62f45] transition-colors"
                    >
                      {post.category}
                    </Link>
                  )}

                  {/* Título */}
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-[#ff3750] transition-colors line-clamp-2">
                    <Link to={post.link || "/"}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta info */}
                  <div className="flex items-center gap-3 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line"></i>
                      {post.dateFormatted}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-eye-line"></i>
                      {post.views}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* No hay artículos */
          <div className="text-center py-12 sm:py-20 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <i className="ri-article-line text-5xl sm:text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Próximamente
            </h3>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 mb-6 max-w-md mx-auto">
              {authorName} está preparando contenido increíble para ti. ¡Vuelve pronto!
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff3750] text-white rounded-lg hover:bg-[#e62f45] transition-colors text-sm"
            >
              <i className="ri-home-line"></i>
              Volver al inicio
            </Link>
          </div>
        )}

        {/* Back to authors */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/author"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#ff3750] transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            Ver todo el equipo
          </Link>
        </div>
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
