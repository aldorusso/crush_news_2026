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
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8">
            <div
              className="md:col-span-4 lg:col-span-5"
              data-aos="fade-right"
            >
              {fastfood && fastfood.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  {fastfood.map(item => (
                    <figure className="relative cursor-pointer aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl" key={item.id}>
                      <Link to={item.link}>
                        <img
                          className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-50 hover:scale-105"
                          src={item.img}
                          alt={item.title}
                        />
                      </Link>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <figcaption className="absolute inset-x-0 bottom-0 p-2 sm:p-3 md:p-4">
                        <Link
                          to={`/category/${item.category?.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-[10px] sm:text-xs text-white/90 uppercase hover:text-[#ff3750]"
                        >
                          {item.category}
                        </Link>
                        <Link to={item.link}>
                          <h3 className="text-xs sm:text-sm md:text-base leading-tight text-white font-medium hover:text-gray-200 line-clamp-2">
                            {item.title}
                          </h3>
                        </Link>
                        <div className="hidden sm:flex gap-2 mt-1 text-[10px] text-gray-300">
                          <span>{item.author}</span>
                          <span>•</span>
                          <span>{item.date}</span>
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
