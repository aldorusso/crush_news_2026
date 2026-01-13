import { Link } from "gatsby"
import React from "react"
import placeholder from "../../../assets/images/placeholder"
import { latestpost, listdata } from "../../data"

const Section8 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="md:col-span-2" data-aos="fade-up">
              <div className="p-4 sm:p-5 bg-white rounded-xl sm:rounded-lg dark:bg-gray-800/70">
                <div className="mb-4">
                  <h5 className="text-lg sm:text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Últimos Artículos
                  </h5>
                </div>

                {latestpost && latestpost.length > 0 ? (
                  latestpost.map(item => (
                    <div
                      className="flex gap-3 sm:gap-4 mb-4 sm:mb-5 pb-4 border-b dark:border-gray-700 last:border-0 last:pb-0 last:mb-0"
                      key={item.id}
                    >
                      <Link to={item.link || "/single-post"} className="block w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-28 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          src={item.pic || placeholder}
                          alt={item.title}
                        />
                      </Link>
                      <div className="flex flex-col flex-1 min-w-0 justify-center">
                        <Link
                          to={`/category/${item.category?.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-[10px] sm:text-xs text-[#ff3750] font-medium uppercase"
                        >
                          {item.category || "Categoría"}
                        </Link>
                        <Link to={item.link || "/single-post"}>
                          <h5 className="text-sm sm:text-base md:text-lg leading-tight font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff] line-clamp-2 my-1">
                            {item.title || "Título del artículo"}
                          </h5>
                        </Link>
                        <p className="hidden sm:block text-xs sm:text-sm text-gray-500 dark:text-gray-300 line-clamp-2 mb-1">
                          {item.excerpt || "Extracto del artículo..."}
                        </p>
                        <div className="flex gap-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                          <span>{item.author || "Autor"}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="hidden sm:inline">{item.date || "Fecha"}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-12 text-center bg-gray-50 dark:bg-gray-900 rounded-xl">
                    <p className="text-gray-500 dark:text-gray-400">
                      No hay artículos recientes aún.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div
              className="md:col-span-1"
              data-aos="fade-left"
            >
              <div className="p-4 sm:p-5 bg-white dark:bg-gray-800/70 rounded-xl sm:rounded-lg">
                <div className="mb-4 border-b dark:border-gray-700">
                  <h3 className="inline-block pb-3 text-lg sm:text-xl font-bold tracking-wide uppercase border-b-2 border-[#ff3750] dark:text-white">
                    Populares
                  </h3>
                </div>
                {listdata && listdata.length > 0 ? (
                  <ul className="space-y-0">
                    {listdata.map((item, idx) => (
                      <li className="py-3 border-b dark:border-gray-700 last:border-0" key={idx}>
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#ff3750] text-white text-xs font-bold rounded flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <Link
                              to={item.link || "/single-post"}
                              className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#ff3750] dark:hover:text-[#ff3750] line-clamp-2"
                            >
                              {item.title || "Título del artículo"}
                            </Link>
                            <div className="flex gap-2 text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                              <span>{item.author || "Autor"}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sin artículos populares
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section8
