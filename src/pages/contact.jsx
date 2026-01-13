import React from "react"
import Layout5 from "../common/layout/Layout5"
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm"
import Seo from "../components/seo"
import BreadCrumb from "../common/BreadCrumb"
import { posts, getAllCategories } from "../common/data/siteData"

const Contact = () => {
  // Obtener categorías reales
  const categories = getAllCategories()

  // Obtener artículos populares reales (los más vistos)
  const popularPosts = [...posts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 4)

  return (
    <Layout5>
      <BreadCrumb title="Contacto" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#ff3750] to-[#ff6b81] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 text-white mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Hablemos
              </h1>
              <p className="text-white/90 text-sm sm:text-lg mb-4 sm:mb-6">
                ¿Tienes algo que contarnos? ¿Una idea, una colaboración o simplemente
                quieres saludar? Estamos aquí para escucharte.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                  <i className="ri-time-line text-sm sm:text-base"></i>
                  <span className="text-xs sm:text-sm">Respondemos en 24-48h</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                  <i className="ri-chat-smile-3-line text-sm sm:text-base"></i>
                  <span className="text-xs sm:text-sm">Friendly team</span>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://x.com/crushnews_es"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="ri-twitter-x-fill text-lg sm:text-2xl"></i>
                </div>
                <h3 className="font-semibold dark:text-white mb-0.5 sm:mb-1 text-xs sm:text-base">Twitter/X</h3>
                <p className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">DMs abiertos</p>
              </a>

              <a
                href="https://www.instagram.com/crushnews_es/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#E1306C]/10 text-[#E1306C] rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="ri-instagram-fill text-lg sm:text-2xl"></i>
                </div>
                <h3 className="font-semibold dark:text-white mb-0.5 sm:mb-1 text-xs sm:text-base">Instagram</h3>
                <p className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">@crushnews_es</p>
              </a>

              <a
                href="https://www.tiktok.com/@crushnews_es"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-black/10 dark:bg-white/10 text-black dark:text-white rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="ri-tiktok-fill text-lg sm:text-2xl"></i>
                </div>
                <h3 className="font-semibold dark:text-white mb-0.5 sm:mb-1 text-xs sm:text-base">TikTok</h3>
                <p className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400">@crushnews_es</p>
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold dark:text-white mb-1 sm:mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  Para colaboraciones, sugerencias o cualquier consulta
                </p>
              </div>

              <ContactForm
                onSubmit={async (data) => {
                  console.log("Form data:", data)
                }}
              />
            </div>

            {/* FAQ Section */}
            <div className="mt-6 sm:mt-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold dark:text-white mb-4 sm:mb-6">
                Preguntas frecuentes
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <span className="font-medium dark:text-white text-sm sm:text-base">¿Aceptan colaboraciones?</span>
                    <i className="ri-add-line text-lg sm:text-xl text-[#ff3750] group-open:hidden flex-shrink-0 ml-2"></i>
                    <i className="ri-subtract-line text-lg sm:text-xl text-[#ff3750] hidden group-open:block flex-shrink-0 ml-2"></i>
                  </summary>
                  <p className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 text-sm text-gray-600 dark:text-gray-400">
                    ¡Sí! Nos encanta colaborar con creadores de contenido, marcas y artistas.
                    Cuéntanos tu idea a través del formulario.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <span className="font-medium dark:text-white text-sm sm:text-base">¿Cómo puedo enviar una noticia?</span>
                    <i className="ri-add-line text-lg sm:text-xl text-[#ff3750] group-open:hidden flex-shrink-0 ml-2"></i>
                    <i className="ri-subtract-line text-lg sm:text-xl text-[#ff3750] hidden group-open:block flex-shrink-0 ml-2"></i>
                  </summary>
                  <p className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 text-sm text-gray-600 dark:text-gray-400">
                    Si tienes una noticia o tip que crees que deberíamos cubrir, envíanosla
                    por el formulario o por DM en nuestras redes sociales.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <span className="font-medium dark:text-white text-sm sm:text-base">¿Puedo escribir para crush.news?</span>
                    <i className="ri-add-line text-lg sm:text-xl text-[#ff3750] group-open:hidden flex-shrink-0 ml-2"></i>
                    <i className="ri-subtract-line text-lg sm:text-xl text-[#ff3750] hidden group-open:block flex-shrink-0 ml-2"></i>
                  </summary>
                  <p className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 text-sm text-gray-600 dark:text-gray-400">
                    Siempre buscamos voces nuevas. Envíanos tu portfolio o ejemplos de
                    tu trabajo y te contactaremos.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
              <h3 className="font-bold text-base sm:text-lg dark:text-white mb-3 sm:mb-4">
                Síguenos
              </h3>
              <div className="grid grid-cols-5 lg:grid-cols-5 gap-2 sm:gap-3">
                <a
                  href="https://www.facebook.com/crushnewsES/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3b579d] text-white text-center rounded-lg sm:rounded-xl py-2.5 sm:py-4 hover:opacity-90 transition-opacity"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill text-base sm:text-xl"></i>
                </a>
                <a
                  href="https://x.com/crushnews_es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] text-white text-center rounded-lg sm:rounded-xl py-2.5 sm:py-4 hover:opacity-90 transition-opacity"
                  aria-label="Twitter"
                >
                  <i className="ri-twitter-x-fill text-base sm:text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/crushnews_es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-center rounded-lg sm:rounded-xl py-2.5 sm:py-4 hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-fill text-base sm:text-xl"></i>
                </a>
                <a
                  href="https://www.youtube.com/@crushnews_es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF0000] text-white text-center rounded-lg sm:rounded-xl py-2.5 sm:py-4 hover:opacity-90 transition-opacity"
                  aria-label="YouTube"
                >
                  <i className="ri-youtube-fill text-base sm:text-xl"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@crushnews_es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white text-center rounded-lg sm:rounded-xl py-2.5 sm:py-4 hover:opacity-90 transition-opacity"
                  aria-label="TikTok"
                >
                  <i className="ri-tiktok-fill text-base sm:text-xl"></i>
                </a>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
              <h3 className="font-bold text-base sm:text-lg dark:text-white mb-3 sm:mb-4">
                Categorías
              </h3>
              <div className="space-y-2">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex justify-between items-center p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#ff3750] hover:text-white dark:hover:bg-[#ff3750] transition-colors group"
                  >
                    <span className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-200 group-hover:text-white">
                      {cat.name}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg dark:text-white mb-3 sm:mb-4">
                Más leídos
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {popularPosts.map((post, idx) => (
                  <Link
                    key={post.id}
                    to={post.link}
                    className="flex gap-3 sm:gap-4 group"
                  >
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-1 left-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#ff3750] text-white text-[10px] sm:text-xs font-bold rounded flex items-center justify-center">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs sm:text-sm text-gray-900 dark:text-white group-hover:text-[#ff3750] line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        <span>{post.views} views</span>
                        <span>•</span>
                        <span className="truncate">{post.category}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => (
  <Seo
    title="Contacto - crush.news"
    description="Ponte en contacto con el equipo de crush.news. Colaboraciones, sugerencias o simplemente para saludar. Estamos aquí para escucharte."
  />
)

export default Contact
