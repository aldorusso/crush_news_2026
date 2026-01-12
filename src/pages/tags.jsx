import React from "react"
import Layout5 from "../common/layout/Layout5"
import { Link } from "gatsby"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { getAllTags } from "../common/data/siteData"

const Tags = () => {
  // Obtener etiquetas reales de los posts
  const tagsData = getAllTags()

  // Colores para las etiquetas (se asignan dinámicamente)
  const tagColors = [
    "bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-red-500",
    "bg-indigo-500", "bg-green-500", "bg-yellow-500", "bg-purple-600",
    "bg-pink-600", "bg-blue-600", "bg-red-600", "bg-green-600",
    "bg-indigo-600", "bg-yellow-600", "bg-gray-600", "bg-pink-700",
    "bg-red-700", "bg-black", "bg-pink-800", "bg-purple-700",
    "bg-blue-700", "bg-green-700", "bg-yellow-700", "bg-indigo-700",
    "bg-purple-800", "bg-blue-800", "bg-pink-900", "bg-red-800",
  ]

  // Asignar colores a las etiquetas
  const tagsWithColors = tagsData.map((tag, index) => ({
    ...tag,
    color: tagColors[index % tagColors.length]
  }))

  const sortedTags = tagsWithColors

  return (
    <Layout5>
      <BreadCrumb title="Etiquetas" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Explorar por Etiquetas
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Descubre contenido organizado por temas. Encuentra tus tópicos favoritos
              y explora nuevas tendencias.
            </p>
          </div>

          {/* Top Tags */}
          {sortedTags.length > 0 ? (
            <>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  <i className="ri-fire-fill text-[#ff3750]"></i> Etiquetas Más Populares
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sortedTags.slice(0, 8).map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog-tag?tag=${tag.name}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center group"
                >
                  <div className={`${tag.color} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform`}>
                    <i className="ri-price-tag-3-fill"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#ff3750] transition-colors">
                    {tag.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tag.count} artículos
                  </p>
                </Link>
                  ))}
                </div>
              </div>

              {/* All Tags Cloud */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Todas las Etiquetas
            </h2>
            <div className="flex flex-wrap gap-3">
              {sortedTags.map((tag, index) => {
                // Tamaño variable basado en popularidad
                const sizeClass = tag.count > 50 ? 'text-2xl' : tag.count > 30 ? 'text-xl' : tag.count > 15 ? 'text-lg' : 'text-base'

                return (
                  <Link
                    key={index}
                    to={`/blog-tag?tag=${tag.name}`}
                    className={`${sizeClass} inline-block bg-gray-100 dark:bg-gray-700 hover:bg-[#ff3750] hover:text-white text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full transition-all font-semibold shadow-sm hover:shadow-md`}
                  >
                    #{tag.name}
                    <span className="text-xs ml-2 opacity-75">({tag.count})</span>
                  </Link>
                )
                })}
              </div>
            </div>
            </>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 text-center">
              <i className="ri-price-tag-3-line text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No hay etiquetas disponibles
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Las etiquetas aparecerán aquí cuando se publiquen artículos con etiquetas asignadas.
              </p>
              <Link
                to="/"
                className="inline-block bg-[#ff3750] hover:bg-black text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Volver al Inicio
              </Link>
            </div>
          )}

          {/* Categories Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-800 to-purple-800 rounded-lg p-6 text-white">
              <i className="ri-book-2-fill text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Cultura Z</h3>
              <p className="text-sm opacity-90 mb-4">
                Glosario, Internet Culture y Manual Digital
              </p>
              <Link
                to="/glosario"
                className="text-sm font-semibold hover:underline"
              >
                Explorar <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-lg p-6 text-white">
              <i className="ri-heart-fill text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Love Lab</h3>
              <p className="text-sm opacity-90 mb-4">
                Relaciones, Crushes y Bienestar Mental
              </p>
              <Link
                to="/tu-crush"
                className="text-sm font-semibold hover:underline"
              >
                Explorar <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-6 text-white">
              <i className="ri-palette-fill text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Aesthetic Life</h3>
              <p className="text-sm opacity-90 mb-4">
                Estilos, Beauty y Room Setup
              </p>
              <Link
                to="/estilos"
                className="text-sm font-semibold hover:underline"
              >
                Explorar <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-lg p-6 text-white">
              <i className="ri-star-fill text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Crush Files</h3>
              <p className="text-sm opacity-90 mb-4">
                Ídolos, Rankings y Evolución de Estilo
              </p>
              <Link
                to="/idolos"
                className="text-sm font-semibold hover:underline"
              >
                Explorar <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-lg p-6 text-white">
              <i className="ri-movie-fill text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Pop Picks</h3>
              <p className="text-sm opacity-90 mb-4">
                Series, Música, Apps y Juegos
              </p>
              <Link
                to="/series-pelis"
                className="text-sm font-semibold hover:underline"
              >
                Explorar <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-6 text-white">
              <i className="ri-search-fill text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Buscar Contenido</h3>
              <p className="text-sm opacity-90 mb-4">
                Encuentra artículos por palabras clave
              </p>
              <Link
                to="/search"
                className="text-sm font-semibold hover:underline"
              >
                Buscar <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Etiquetas - crush.news" />

export default Tags
