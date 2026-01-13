import { Link } from "gatsby"
import React from "react"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import getAvatar from "../../../utils/avatar"
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
                delay: 3000,
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
                      <div className="flex gap-3 sm:gap-4 p-2 sm:p-0">
                        <Link to={item.link} className="block w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0 overflow-hidden rounded-xl">
                          <img
                            className="w-full h-full object-cover"
                            src={item.pic}
                            alt={item.title}
                          />
                        </Link>
                        <div className="flex flex-col flex-1 min-w-0 justify-center">
                          <Link
                            to={`/category/${item.category?.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[10px] sm:text-xs text-[#ff3750] uppercase font-medium mb-1"
                          >
                            {item.category}
                          </Link>
                          <Link to={item.link}>
                            <h5 className="text-sm sm:text-base leading-tight font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff] line-clamp-2 mb-1">
                              {item.title}
                            </h5>
                          </Link>
                          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                            <img
                              src={getAvatar(item.author || "admin")}
                              alt="avatar"
                              className="rounded-full w-5 h-5 sm:w-6 sm:h-6 bg-gray-100"
                            />
                            <span>{item.author}</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="hidden sm:inline">{item.date}</span>
                          </div>
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
