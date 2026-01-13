import React from "react"
import Layout5 from "../common/layout/Layout5"
import { Link } from "gatsby"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { posts, authors } from "../common/data/siteData"
import getAvatar from "../utils/avatar"

const AuthorsPage = () => {
  // Get article count for each author
  const authorsWithCount = authors.map(author => {
    const articleCount = posts.filter(p => p.author === author.name).length
    return { ...author, articleCount }
  })

  return (
    <Layout5>
      <BreadCrumb title="Nuestro Equipo" />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white mb-3 sm:mb-4">
            El squad de <span className="text-[#ff3750]">crush</span>.news
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conoce a las personas detrás de tu contenido favorito. Cada uno es experto en su área
            y está obsesionado con mantenerte al día.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {authorsWithCount.map(author => (
            <Link
              key={author.id}
              to={`/author/${author.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header with gradient */}
              <div className="relative h-24 sm:h-32 bg-gradient-to-br from-[#ff3750] to-[#ff6b81]">
                <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <img
                      src={author.image || getAvatar(author.name)}
                      alt={author.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white dark:border-gray-800 bg-gray-100 group-hover:border-[#ff3750] transition-colors"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-[#ff3750] rounded-full flex items-center justify-center">
                      <i className="ri-verified-badge-fill text-white text-xs sm:text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-12 sm:pt-14 pb-5 sm:pb-6 px-4 sm:px-6 text-center">
                <h2 className="text-lg sm:text-xl font-bold dark:text-white mb-1 group-hover:text-[#ff3750] transition-colors">
                  {author.name}
                </h2>
                <p className="text-[#ff3750] text-xs sm:text-sm font-medium mb-2">
                  {author.role}
                </p>
                <span className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] sm:text-xs rounded-full mb-3">
                  {author.specialty}
                </span>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                  {author.bio}
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-4 sm:gap-6 pt-3 sm:pt-4 border-t dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#ff3750]">
                      {author.articleCount}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      Artículos
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                      {author.joinDate}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      Se unió
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 mt-4">
                  {author.social?.twitter && (
                    <span className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-[#1DA1F2] group-hover:text-white transition-colors">
                      <i className="ri-twitter-x-fill text-sm"></i>
                    </span>
                  )}
                  {author.social?.instagram && (
                    <span className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                      <i className="ri-instagram-fill text-sm"></i>
                    </span>
                  )}
                  {author.social?.tiktok && (
                    <span className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                      <i className="ri-tiktok-fill text-sm"></i>
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-[#ff3750] to-[#ff6b81] rounded-xl sm:rounded-2xl p-6 sm:p-10 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              ¿Quieres unirte al squad?
            </h3>
            <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 max-w-xl mx-auto">
              Siempre buscamos voces nuevas. Si te apasiona crear contenido para la Gen Z,
              queremos conocerte.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#ff3750] rounded-full font-bold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <i className="ri-mail-send-line"></i>
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => (
  <Seo
    title="Nuestro Equipo - crush.news"
    description="Conoce al equipo de editores y creadores de contenido de crush.news. Expertos en K-Pop, gaming, lifestyle y cultura Gen Z."
  />
)

export default AuthorsPage
