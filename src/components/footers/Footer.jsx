import { Link } from "gatsby"
import React from "react"
import { posts } from "../../common/data/siteData"

// Get 3 latest and 3 popular posts
const latestPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
const popularPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 3)

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          <div className="">
            <div className="p-5 bg-white dark:bg-gray-950 rounded-2xl">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-9 md:col-span-4">
                  <div className="mb-4">
                    <span className="block mb-1 text-gray-500 text-md">
                      Destacados
                    </span>
                    <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
                      Últimos Artículos
                    </h5>
                  </div>
                  <ul className="">
                    {latestPosts.map(post => (
                      <li className="py-1 sm:py-2" key={post.id}>
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="rounded-2xl w-16 h-16 object-cover"
                              src={post.image}
                              alt={post.title}
                            />
                          </div>
                          <div className="flex-1 min-w-0 ms-4">
                            <Link
                              to={post.link}
                              className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff] line-clamp-2"
                            >
                              {post.title}
                            </Link>
                            <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                              <span className="me-2 lg:me-1">{post.author}</span>
                              <span>{post.dateFormatted}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-9 md:col-span-4">
                  <div className="mb-4">
                    <span className="block mb-1 text-gray-500 text-md">
                      Destacados
                    </span>
                    <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
                      Populares
                    </h5>
                  </div>
                  <ul className="">
                    {popularPosts.map(post => (
                      <li className="py-1 sm:py-2" key={post.id}>
                        <div className="flex items-center overflow-hidden">
                          <div className="flex-shrink-0">
                            <img
                              className="rounded-2xl w-16 h-16 object-cover"
                              src={post.image}
                              alt={post.title}
                            />
                          </div>
                          <div className="flex-1 min-w-0 ms-4">
                            <Link
                              to={post.link}
                              className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff] break-words line-clamp-2"
                            >
                              {post.title}
                            </Link>
                            <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                              <span className="me-2 lg:me-1">{post.author}</span>
                              <span>{post.views} vistas</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-8 md:col-span-4 lg:col-span-3">
                  <div className="mb-4">
                    <span className="block mb-1 text-gray-500 text-md">
                      Ayuda e Información
                    </span>
                    <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
                      Navegar
                    </h5>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        Crush Files:
                      </h2>
                      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <li>
                          <Link
                            to="/category/crush-files"
                            className="hover:text-[#062db9] text-base dark:hover:text-[#478cff]"
                          >
                            Ver todos
                          </Link>
                        </li>
                      </ul>
                      <h2 className="mt-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        Aesthetic Life:
                      </h2>
                      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <li>
                          <Link
                            to="/category/aesthetic-life"
                            className="hover:text-[#062db9] text-base dark:hover:text-[#478cff]"
                          >
                            Ver todos
                          </Link>
                        </li>
                      </ul>
                      <h2 className="mt-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        Pop Picks:
                      </h2>
                      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <li>
                          <Link
                            to="/category/pop-picks"
                            className="hover:text-[#062db9] text-base dark:hover:text-[#478cff]"
                          >
                            Ver todos
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        Sitio:
                      </h2>
                      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <li>
                          <Link
                            to="/about"
                            className="hover:text-[#062db9] text-base dark:hover:text-[#478cff]"
                          >
                            Sobre Nosotros
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/authors"
                            className="hover:text-[#062db9] text-base dark:hover:text-[#478cff]"
                          >
                            Autores
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className="hover:text-[#062db9] text-base dark:hover:text-[#478cff]"
                          >
                            Contacto
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/advertise"
                            className="hover:text-[#062db9] text-base dark:hover:text-[#478cff]"
                          >
                            Publicidad
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 py-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-center md:text-left dark:text-white">
              Copyright © {new Date().getFullYear()} crush.news. Todos los derechos reservados
            </p>
            <ul className="flex flex-wrap gap-2 justify-center text-xs">
              <li className="border border-gray-300 dark:border-gray-700 rounded-lg hover:text-[#062db9] dark:hover:text-[#478cff] px-3 py-2 cursor-pointer dark:text-white">
                <Link to="/privacy-policy">Privacidad</Link>
              </li>
              <li className="border border-gray-300 dark:border-gray-700 rounded-lg hover:text-[#062db9] dark:hover:text-[#478cff] px-3 py-2 cursor-pointer dark:text-white">
                <Link to="/terms-conditions">Términos</Link>
              </li>
              <li className="border border-gray-300 dark:border-gray-700 rounded-lg hover:text-[#062db9] dark:hover:text-[#478cff] px-3 py-2 cursor-pointer dark:text-white">
                <Link to="/cookie-policy">Cookies</Link>
              </li>
              <li className="border border-gray-300 dark:border-gray-700 rounded-lg hover:text-[#062db9] dark:hover:text-[#478cff] px-3 py-2 cursor-pointer dark:text-white">
                <Link to="/disclaimer">Aviso Legal</Link>
              </li>
              <li className="border border-gray-300 dark:border-gray-700 rounded-lg hover:text-[#062db9] dark:hover:text-[#478cff] px-3 py-2 cursor-pointer dark:text-white">
                <Link to="/authors">Autores</Link>
              </li>
              <li className="border border-gray-300 dark:border-gray-700 rounded-lg hover:text-[#062db9] dark:hover:text-[#478cff] px-3 py-2 cursor-pointer dark:text-white">
                <Link to="/advertise">Publicidad</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
