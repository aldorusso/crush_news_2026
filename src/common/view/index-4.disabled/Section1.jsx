import { Link } from "gatsby"
import React from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { slides } from "../../data/index10data"

const Section1 = () => {
  return (
    <React.Fragment>
      <section className="mt-4 md:mt-5" data-aos="fade-up">
        <div className="px-4 mx-auto container-fluid custom-container">
          <div className="overflow-hidden">
            <div className="relative" dir="ltr">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                spaceBetween={20}
                slidesPerView={5}
                autoplay={{
                  delay: 2500,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {slides &&
                  slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div>
                        <img
                          src={slide.img}
                          alt={slide.alt}
                          className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-lg cursor-move hover:brightness-50"
                        />
                        <div className="absolute left-3 top-3">
                          <span className="text-black text-xs uppercase bg-[#ffffff] pt-[6px] px-2.5 py-1 rounded-full">
                            {slide.category}
                          </span>
                        </div>
                        <figcaption className="absolute px-5 text-md bottom-5">
                          <div className="my-2 text-sm lg:text-base xl:text-xl sm:text-sm leading-normal text-white capitalize max-w-sm font-medium hover:text-[#E32C26]">
                            <Link to={slide.link}>{slide.title}</Link>
                          </div>
                          <div className="flex justify-start items-center gap-2 text-white text-xs sm:text-sm lg:text-[12px]">
                            <img
                              src={slide.avatar}
                              alt="avatar"
                              className="rounded-lg max-w-6"
                            />
                            <div className="lg:block">
                              <span>{slide.author}</span>
                              <span>{slide.date}</span>
                            </div>
                          </div>
                        </figcaption>
                      </div>
                    </SwiperSlide>
                  ))}
                <div className="rounded-lg swiper-button-next"></div>
                <div className="rounded-lg swiper-button-prev"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section1
