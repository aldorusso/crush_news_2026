import { Link } from "gatsby"
import React, { useState } from "react"
import placeholder from "../../../assets/images/placeholder"
import { categories, lifestyle } from "../../../common/data"

const Section3 = () => {
  const [tab, setTab] = useState("trending")

  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="">
            <div className="grid grid-cols-3 gap-0 lg:gap-8">
              <div
                className="col-span-3 p-5 bg-white lg:col-span-2 dark:bg-gray-800/70 rounded-xl"
                data-aos="fade-right"
              >
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Destacados del Editor
                  </h5>
                  <div className="text-right dark:text-white">
                    <button
                      className={`${
                        tab === "trending"
                          ? "text-[#478cff] sm:bg-[#062db9] sm:text-white sm:hover:bg-blue-800 sm:font-medium sm:rounded-lg sm:text-sm sm:px-5 sm:py-2.5 sm:me-2"
                          : ""
                      }`}
                      onClick={() => setTab("trending")}
                    >
                      Tendencias
                    </button>
                    <button
                      className={`${
                        tab === "latest"
                          ? "text-[#478cff] sm:bg-[#062db9] sm:text-white sm:hover:bg-blue-800 sm:font-medium sm:rounded-lg sm:text-sm sm:px-5 sm:py-2.5 sm:ms-2"
                          : ""
                      }`}
                      onClick={() => setTab("latest")}
                    >
                      Recientes
                    </button>
                  </div>
                </div>

                {/* Contenido vacío - Agregar artículos aquí */}
                <div className="p-12 text-center bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <p className="text-gray-500 dark:text-gray-400">
                    No hay artículos {tab === "trending" ? "en tendencia" : "recientes"} aún.
                    <br />
                    Agrega tu contenido en los archivos de datos.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-span-3 lg:col-span-1" data-aos="fade-left">
                <div className="p-5 bg-white dark:bg-gray-800/70 rounded-xl">
                  <div className="mb-4 border-b dark:border-gray-700">
                    <h3 className="inline-block pb-4 text-xl font-bold tracking-wide uppercase border-b-2 border-[#ff3750] dark:text-white">
                      Categorías
                    </h3>
                  </div>
                  {categories.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Sin categorías configuradas
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {categories.map((cat, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                          <Link to={cat.link} className="text-gray-700 dark:text-gray-300">
                            {cat.name}
                          </Link>
                          <span className="text-sm text-gray-500">({cat.count})</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section3
