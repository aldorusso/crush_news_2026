import { Link } from "gatsby"
import React from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import client from "../../../assets/images/placeholder"
import banner1 from "../../../assets/images/placeholder"
import banner2 from "../../../assets/images/placeholder"
import banner3 from "../../../assets/images/placeholder"
import { section2 } from "../../data"

const Section2 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-5 md:col-span-3" data-aos="flip-left">
              <Swiper
                slidesPerView={1}
                pagination={{
                  el: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="main-slider-2"
                dir="ltr"
              >
                {section2 &&
                  section2.map(item => (
                    <SwiperSlide key={item.id}>
                      <div className="relative">
                        <div className="relative">
                          <Link to="/single-post">
                            <img
                              className="w-full h-auto max-w-full rounded-2xl"
                              src={item.bgImage}
                              alt="slider"
                            />
                          </Link>
                        </div>
                        <div className="absolute w-full top-0 md:top-4 flex items-start left-6 right-6 xl:max-w-[500px] md:max-w-[500px] sm:max-w-[500px] max-w-[250px] rtl:right-6 rtl:left-auto">
                          <div className="py-4">
                            <div className="text-sm text-white uppercase">
                              {item.category || "Categoría"}
                            </div>
                            <div className="font-bold leading-normal text-white capitalize break-words text-md sm:text-2xl xl:max-w-lg lg:max-w-lg md:max-w-lg sm:max-w-lg">
                              {item.desc}
                            </div>
                            <div className="items-center justify-start hidden gap-2 my-2 text-xs text-white xl:flex lg:flex md:flex sm:flex lg:my-8 sm:text-sm">
                              <img
                                src={client}
                                alt="avtar"
                                className="rounded-full max-w-10"
                              />
                              <span> {item.author || "Autor"}</span>
                              <span> {item.date || "Fecha"}</span>
                            </div>
                            {item.seemore === true ? (
                              <Link
                                to="/single-post"
                                className="inline-block mt-2 py-2.5 px-5 text-sm font-medium  focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-[#062db9] focus:z-10 focus:ring-4 focus:ring-gray-100"
                              >
                                Ver Más
                              </Link>
                            ) : (
                              <button
                                type="button"
                                className="py-2.5 px-5 text-sm font-medium  focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-[#062db9] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                              >
                                Ver Más
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </Swiper>
            </div>
            <div className="col-span-5 md:col-span-2" data-aos="flip-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={banner1}
                        alt="blog"
                      />
                    </Link>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                      <div className="text-sm text-white lg:uppercase">
                        Tecnología
                      </div>
                      <div className="max-w-sm text-sm font-medium leading-normal text-white capitalize lg:text-xl">
                        La nueva consola de realidad virtual revoluciona el mercado
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={banner2}
                        alt="blog"
                      />
                    </Link>
                    <figcaption className="absolute px-4 text-white text-md bottom-5 md:bottom-1 lg:bottom-6">
                      <div className="text-sm text-white lg:uppercase">
                        Deportes
                      </div>
                      <div className="max-w-sm text-sm font-medium text-white capitalize lg:text-md lg:leading-normal">
                        Filtros de computadora eliminan el ruido para mejorar tu rendimiento.
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={banner3}
                        alt="blog"
                      />
                    </Link>
                    <figcaption className="absolute px-4 text-white text-md bottom-5 md:bottom-1 lg:bottom-6">
                      <div className="text-sm text-white lg:uppercase">
                        Estilo de Vida
                      </div>
                      <div className="max-w-sm text-sm font-medium text-white capitalize lg:text-md lg:leading-normal">
                        Filtros de computadora eliminan el ruido para mejorar tu día.
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section2
