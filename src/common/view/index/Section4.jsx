import { Link } from "gatsby"
import React from "react"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import avatar from "../../../assets/images/placeholder"
import { centerpost } from "../../data"

const Section4 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="fade-down">
        <div className="container px-4 mx-auto">
          <div className="overflow-hidden">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1240: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              modules={[Autoplay, Navigation]}
              className="relative center-post"
              dir="ltr"
            >
              <div className="swiper-wrapper">
                {centerpost &&
                  centerpost.map(item => (
                    <SwiperSlide key={item.id}>
                      <div className="flex flex-col items-center mb-5 md:flex-row md:max-w-xl sm:mb-3 md:mb-0">
                        <Link to="/single-post">
                          <img
                            className="h-auto max-w-40 sm:w-20 lg:w-40 rounded-2xl"
                            src={item.pic}
                            alt="post"
                          />
                        </Link>
                        <div className="flex flex-col p-4 sm:py-0 ">
                          <Link to="/single-post">
                            <h5 className="mb-1 text-md leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                              Las últimas noticias sobre tecnología y actualidad.
                              Mantente informado de todo lo que sucede.
                            </h5>
                          </Link>
                          <div className="flex items-center justify-start gap-2 my-2 text-xs sm:text-sm dark:text-gray-400">
                            <img
                              src={avatar}
                              alt="avtar"
                              className="rounded-full max-w-10"
                            />
                            <span className="text-[12px]"> Carlos García</span>
                            <span className="text-[12px]"> August 7, 2024</span>
                          </div>
                          <Link
                            to="/single-post"
                            className="font-medium text-[#062db9] dark:text-blue-500 underline"
                          >
                            Leer más
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section4
