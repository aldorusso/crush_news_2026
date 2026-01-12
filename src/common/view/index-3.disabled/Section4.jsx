import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { slides } from "../../data/index8data"
import { Autoplay, Navigation } from "swiper/modules"

const Section4 = () => {
  return (
    <React.Fragment>
      <div className="mt-8 bg-[#fce9e8] dark:bg-gray-800/70 p-5">
        <div className="container px-4 mx-auto overflow-hidden rounded-xl">
          <h3 className="mb-4 text-xl font-bold tracking-normal uppercase dark:text-white">
            Trending Now
          </h3>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
              1240: {
                slidesPerView: 5,
                // spaceBetween: 20,
              },
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="relative center-post"
            dir="ltr"
          >
            {slides &&
              slides.map(slide => (
                <SwiperSlide key={slide.id}>
                  <div className="flex items-center md:flex-row md:max-w-xl md:items-start">
                    <span className="text-[#E32C26] text-3xl font-semibold dark:text-[#E32C26]">
                      {slide.number}
                    </span>
                    <div className="flex flex-col p-4 sm:py-0">
                      <div className="block gap-4 text-[12px] text-[#E32C26] dark:text-gray-400 uppercase">
                        {slide.category}
                      </div>
                      <h3 className="text-sm hover:text-[#E32C26] dark:text-white dark:hover:text-[#E32C26] font-medium">
                        {slide.title}
                      </h3>
                      <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                        <span className="me-2 lg:me-1">{slide.author}</span>
                        <span>{slide.time}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Section4
