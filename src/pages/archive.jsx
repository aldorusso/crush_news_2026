import React, { useState } from "react"
import Layout5 from "../common/layout/Layout5"
import { Link } from "gatsby"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { posts } from "../common/data/siteData"

const Archive = () => {
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  const years = [currentYear, currentYear - 1, currentYear - 2]

  // Get real articles sorted by date
  const recentArticles = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <Layout5>
      <BreadCrumb title="Archivo" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Archivo de Artículos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explora todo nuestro contenido organizado por fecha
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar - Archive Navigator */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  <i className="ri-calendar-fill text-[#ff3750]"></i> Navegar por Fecha
                </h2>

                {/* Year Selector */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Año
                  </h3>
                  <div className="flex gap-2">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                          selectedYear === year
                            ? 'bg-[#ff3750] text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Month List */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Meses
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {months.map((month, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {month}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories Quick Links */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Categorías
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/category/crush-files"
                        className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-[#ff3750] transition-colors"
                      >
                        <span>Crush Files</span>
                        <i className="ri-arrow-right-s-line"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/category/aesthetic-life"
                        className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-[#ff3750] transition-colors"
                      >
                        <span>Aesthetic Life</span>
                        <i className="ri-arrow-right-s-line"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/category/pop-picks"
                        className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-[#ff3750] transition-colors"
                      >
                        <span>Pop Picks</span>
                        <i className="ri-arrow-right-s-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content - Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Artículos Recientes - {selectedYear}
              </h2>

              <div className="space-y-6">
                {recentArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={article.link}
                    className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <span className="text-xs font-semibold text-[#ff3750] bg-red-50 dark:bg-red-900 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <h3 className="text-xl font-bold mt-3 mb-2 text-gray-900 dark:text-white hover:text-[#ff3750] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                          {article.excerpt || article.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span>
                            <i className="ri-user-line"></i> {article.author}
                          </span>
                          <span>
                            <i className="ri-calendar-line"></i> {article.dateFormatted}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Navigation */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/tags"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center group"
            >
              <i className="ri-price-tag-3-fill text-5xl text-[#ff3750] mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Explorar por Etiquetas
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Descubre contenido por temas
              </p>
            </Link>

            <Link
              to="/authors"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center group"
            >
              <i className="ri-team-fill text-5xl text-[#ff3750] mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Nuestros Autores
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Conoce al equipo editorial
              </p>
            </Link>

            <Link
              to="/search"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center group"
            >
              <i className="ri-search-fill text-5xl text-[#ff3750] mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Buscar Artículos
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Encuentra lo que buscas
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Archivo - crush.news" />

export default Archive
