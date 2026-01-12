import { Link } from "gatsby"
import React from "react"
import placeholder from "../../../assets/images/placeholder"
import { latestpost, listdata } from "../../data"

const Section8 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-3 md:col-span-2" data-aos="fade-up">
              <div className="p-5 bg-white rounded-lg dark:bg-gray-800/70">
                <div className="mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Últimos Artículos
                  </h5>
                </div>

                {latestpost && latestpost.length > 0 ? (
                  latestpost.map(item => (
                    <div
                      className="flex flex-col mb-5 lg:flex-row sm:mb-3 md:mb-6"
                      key={item.id}
                    >
                      <Link to="/single-post">
                        <img
                          className="h-auto sm:max-w-xs lg:w-64 rounded-2xl"
                          src={item.pic}
                          alt="post "
                        />
                      </Link>
                      <div className="pt-2 lg:ms-4">
                        <div className="capitalize text-sm text-[#062db9] font-medium dark:text-[#478cff]">
                          {item.category || "Categoría"}
                        </div>
                        <Link to="/single-post">
                          <h5 className="mb-1 text-xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                            {item.title || "Título del artículo"}
                          </h5>
                        </Link>
                        <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                          {item.excerpt || "Extracto del artículo..."}
                        </p>
                        <div className="block gap-4 text-[12px] text-gray-500 dark:text-gray-400 uppercase">
                          <span className="me-2 lg:me-1"> {item.author || "Autor"}</span>
                          <span>{item.date || "Fecha"}</span>
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
              className="col-span-3 sm:col-span-2 md:col-span-1"
              data-aos="fade-left"
            >
              <div className="p-5 bg-white dark:bg-gray-800/70 rounded-lg">
                <div className="mb-4 border-b dark:border-gray-700">
                  <h3 className="inline-block pb-4 text-xl font-bold tracking-wide uppercase border-b-2 border-[#ff3750] dark:text-white">
                    Populares
                  </h3>
                </div>
                {listdata && listdata.length > 0 ? (
                  <ul>
                    {listdata.map((item, idx) => (
                      <li className="py-3 border-b dark:border-gray-700" key={idx}>
                        <Link
                          to="/single-post"
                          className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]"
                        >
                          {item.title || "Título del artículo"}
                        </Link>
                        <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase mt-1">
                          <span className="me-2 lg:me-1">{item.author || "Autor"}</span>
                          <span>{item.date || "Fecha"}</span>
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
