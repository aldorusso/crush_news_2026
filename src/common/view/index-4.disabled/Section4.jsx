import { Link } from "gatsby"
import React from "react"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import imageFour1 from "../../../assets/images/placeholder"
import avatar from "../../../assets/images/placeholder"

const Section4 = () => {
  return (
    <React.Fragment>
      <section className="mt-4 md:mt-8">
        <div className="container px-4 mx-auto custom-container">
          <div className="grid grid-cols-1">
            <div className="col-span-1" data-aos="fade-up">
              {/* Swiper Component */}
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                dir="ltr"
                className="main-slider-5"
              >
                {[1, 2].map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <div className="relative">
                        <Link to="single-post">
                          <img
                            className="w-full h-auto max-w-full rounded-lg min-h-52"
                            src={imageFour1}
                            alt="1"
                          />
                        </Link>
                      </div>
                      <div className="absolute w-full bottom-1 md:bottom-4 lg:bottom-3 flex items-start left-1 xl:left-4 lg:left-3 md:left-3 max-w-[500px] rtl:left-auto rtl:xl:right-4 rtl:right-1">
                        <div className="">
                          <figcaption className="flex items-end px-4 text-lg">
                            <div>
                              <span className="text-gray-700 text-xs uppercase bg-white dark:border-gray-700 pt-[6px] px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300">
                                HEALTHY FOOD
                              </span>
                              <h3 className="max-w-2xl my-3 text-base font-medium leading-normal text-white capitalize xl:text-2xl md:text-base">
                                {" "}
                                cooking tips latest food trends
                              </h3>
                              <p className="max-w-2xl my-3 text-sm leading-normal text-white capitalize">
                                An Iconic Landmarks This Post The Secrets That
                                Make This Destination A traveler’s Paradise{" "}
                              </p>
                              <div className="flex items-center justify-start gap-2 my-2 text-xs text-white lg:my-6 sm:text-sm">
                                <img
                                  src={avatar}
                                  alt="avtar"
                                  className="rounded-lg max-w-10"
                                />
                                <span> Armin vans</span>
                                <span> August 7, 2024</span>
                              </div>
                            </div>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section4
