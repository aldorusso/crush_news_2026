import { Link } from "gatsby"
import React from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import getAvatar from "../../../utils/avatar"
import { section2, sideBanners } from "../../data"

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
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                          <Link to={item.link}>
                            <img
                              className="w-full h-full object-cover"
                              src={item.bgImage}
                              alt={item.desc}
                            />
                          </Link>
                        </div>
                        {/* Gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
                        {/* Content positioned at bottom for mobile, top for desktop */}
                        <div className="absolute inset-x-0 bottom-0 md:top-0 md:bottom-auto p-4 md:p-6">
                          <div className="max-w-full md:max-w-[500px]">
                            <Link
                              to={`/category/${item.category?.toLowerCase().replace(/\s+/g, '-')}`}
                              className="inline-block text-xs sm:text-sm text-white uppercase hover:text-[#ff3750] bg-[#ff3750] px-2 py-1 rounded mb-2"
                            >
                              {item.category || "Categoría"}
                            </Link>
                            <Link to={item.link}>
                              <h2 className="font-bold leading-tight text-white capitalize text-base sm:text-xl md:text-2xl line-clamp-3 hover:text-gray-200">
                                {item.desc}
                              </h2>
                            </Link>
                            <div className="flex items-center gap-2 mt-2 md:mt-4 text-xs sm:text-sm text-white/90">
                              <img
                                src={getAvatar(item.author || "admin")}
                                alt="avatar"
                                className="rounded-full w-6 h-6 sm:w-8 sm:h-8 bg-white"
                              />
                              <span>{item.author || "Autor"}</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="hidden sm:inline">{item.date || "Fecha"}</span>
                            </div>
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
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {sideBanners && sideBanners.map((banner, idx) => (
                  <div key={banner.id} className={idx === 0 ? "col-span-2" : "col-span-1"}>
                    <figure className={`relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl ${idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/3] sm:aspect-square'}`}>
                      <Link to={banner.link}>
                        <img
                          className="w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-50"
                          src={banner.img}
                          alt={banner.title}
                        />
                      </Link>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <figcaption className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white`}>
                        <Link
                          to={`/category/${banner.category?.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-xs sm:text-sm text-white/90 uppercase hover:text-[#ff3750]"
                        >
                          {banner.category}
                        </Link>
                        <Link to={banner.link}>
                          <h3 className={`font-medium text-white capitalize hover:text-gray-200 line-clamp-2 ${idx === 0 ? 'text-sm sm:text-base lg:text-lg' : 'text-xs sm:text-sm'}`}>
                            {banner.title}
                          </h3>
                        </Link>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section2
