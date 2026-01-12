import React from "react"
import Layout5 from "../common/layout/Layout5"
import { Link } from "gatsby"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { getAuthorsWithArticleCount } from "../common/data/siteData"

const Authors = () => {
  // Obtener autores reales con conteo de artículos
  const authorsData = getAuthorsWithArticleCount()

  return (
    <Layout5>
      <BreadCrumb title="Nuestros Autores" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Conoce a Nuestro Equipo
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Un equipo apasionado de periodistas y creadores de contenido dedicados a traerte
              las últimas tendencias, noticias y cultura de la Generación Z.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorsData.map((author) => (
              <div
                key={author.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <span className="text-xs font-semibold text-white bg-[#ff3750] px-3 py-1 rounded-full">
                      {author.specialty}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                    {author.name}
                  </h2>
                  <p className="text-sm text-[#ff3750] font-semibold mb-3">
                    {author.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {author.bio}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <i className="ri-article-line"></i> {author.articles} artículos
                    </div>
                    <Link
                      to={`/author?id=${author.id}`}
                      className="text-sm font-semibold text-[#ff3750] hover:underline"
                    >
                      Ver perfil <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Link
                      to="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-[#ff3750] transition-colors"
                      aria-label="Twitter"
                    >
                      <i className="ri-twitter-x-fill text-lg"></i>
                    </Link>
                    <Link
                      to="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-[#ff3750] transition-colors"
                      aria-label="Instagram"
                    >
                      <i className="ri-instagram-fill text-lg"></i>
                    </Link>
                    <Link
                      to="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-[#ff3750] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <i className="ri-linkedin-fill text-lg"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-800 via-purple-800 to-red-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">¿Quieres Unirte a Nuestro Equipo?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Siempre estamos buscando nuevos talentos apasionados por contar historias
              que importan a la Generación Z.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#ff3750] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contáctanos <i className="ri-mail-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Nuestros Autores - crush.news" />

export default Authors
