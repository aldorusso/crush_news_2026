import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const CommanSwiper = ({ slides }) => {
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center justify-start mb-5 lg:flex-row sm:mb-3 md:mb-6">
              <a href={slide.link}>
                <img
                  className="w-full h-auto max-w-full"
                  src="https://via.placeholder.com/300x300"
                  alt="post"
                />
              </a>
              <div className="p-5">
                <a href={slide.link}>
                  <h5 className="text-2xl md:text-3xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#ea3118] dark:hover:text-[#ea3118]">
                    {slide.title}
                  </h5>
                </a>
                <p className="max-w-screen-md my-3 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                  {slide.description}
                </p>
                <div className="block gap-4 mb-2 text-sm">
                  <span className="text-gray-900 uppercase me-2 lg:me-1 dark:text-gray-200">
                    {" "}
                    Juan Pérez
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    <i className="ri-time-line"></i> Hace 7 meses
                  </span>
                </div>
                <a
                  href={slide.link}
                  className="hover:text-[#ea3118] dark:text-white dark:hover:text-[#ea3118]"
                >
                  Leer más <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  )
}

export default CommanSwiper
