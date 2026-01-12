import { Link } from "gatsby"
import React from "react"
import { fastfood } from "../../data"

const Section7 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Destacados
            </h5>
          </div>
          <div className="grid grid-cols-7 gap-8">
            <div
              className="col-span-7 md:col-span-4 lg:col-span-5"
              data-aos="fade-right"
            >
              {fastfood && fastfood.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {fastfood.map(item => (
                    <figure className="relative cursor-pointer" key={item.id}>
                      <Link to="/single-post">
                        <img
                          className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                          src={item.pic}
                          alt="post"
                        />
                      </Link>
                      <figcaption className="absolute px-4 text-md bottom-6">
                        <div className="text-sm text-white">{item.category || "Categoría"}</div>
                        <div className="text-md leading-normal text-white capitalize max-w-sm font-medium hover:text-[#062db9] dark:hover:text-[#478cff]">
                          <Link to="/single-post">
                            {item.title || "Título del artículo"}
                          </Link>
                        </div>
                        <div className="block gap-4 text-[11px] text-gray-200 uppercase">
                          <span className="me-2 lg:me-1"> {item.author || "Autor"}</span>
                          <span>{item.date || "Fecha"}</span>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <p className="text-gray-500 dark:text-gray-400">
                    No hay artículos destacados aún.
                  </p>
                </div>
              )}
            </div>
            <div
              className="col-span-7 md:col-span-3 lg:col-span-2"
              data-aos="fade-left"
            >
              <div className="p-5 bg-white dark:bg-gray-800/70 rounded-xl">
                <div className="mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Síguenos
                  </h5>
                </div>
                <ul>
                  <li>
                    <Link to="#" target="_blank">
                      <div className="bg-[#062DB9] hover:bg-[#052494] text-white text-left rounded-full py-3.5 px-7 mb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <i className="text-lg ri-facebook-circle-fill"></i>
                            <span className="">Facebook</span>
                          </div>
                          <div>0</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <div className="bg-[#20A1EB] hover:bg-[#128cd3] text-white text-left rounded-full py-3.5 px-7 mb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <i className="ri-twitter-x-line"></i>
                            <span className="">Twitter</span>
                          </div>
                          <div>0</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <div className="bg-[#ff0000] hover:bg-[#d40000] text-white text-left rounded-full py-3.5 px-7 mb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <i className="ri-youtube-fill"></i>
                            <span className="">YouTube</span>
                          </div>
                          <div>0</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <div className="bg-[#E1306C] hover:bg-[#c92859] text-white text-left rounded-full py-3.5 px-7 mb-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <i className="ri-instagram-fill"></i>
                            <span className="">Instagram</span>
                          </div>
                          <div>0</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section7
