import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { Link } from "gatsby"
import topBanner1 from "../../../assets/images/placeholder"
import topBanner2 from "../../../assets/images/placeholder"
import topBanner3 from "../../../assets/images/placeholder"
import slide1 from "../../../assets/images/placeholder"
import slide2 from "../../../assets/images/placeholder"

const Section1 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-5 gap-6">
            {/* Left Section: Swiper Slider */}
            <div className="col-span-5 md:col-span-3" data-aos="flip-left">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="main-slider-8"
                dir="ltr"
                loop={true}
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="relative">
                    {/* Image */}
                    <div className="relative">
                      <Link to="/single-post">
                        <img
                          className="w-full h-auto max-w-full rounded-2xl"
                          src={slide1}
                          alt="slider"
                        />
                      </Link>
                    </div>
                    {/* Content */}
                    <div className="absolute w-full bottom-1 md:bottom-2 flex items-start left-6 max-w-[500px] rtl:right-6 rtl:left-auto">
                      <div className="py-4">
                        <div className="text-sm text-white uppercase">
                          Drinks & Desserts
                        </div>
                        <div className="max-w-lg mt-2 font-bold leading-normal text-white capitalize break-words text-md sm:text-2xl">
                          Top view of knife and cutting board with vegetables on
                          gray table Food Composition of raw.
                        </div>
                        <div className="flex items-center justify-start gap-2 my-2 text-xs text-white lg:my-4 sm:text-sm">
                          <span>Armin vans</span> - <span>August 7, 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="relative">
                    {/* Image */}
                    <div className="relative">
                      <Link to="/single-post">
                        <img
                          className="w-full h-auto max-w-full rounded-2xl"
                          src={slide2}
                          alt="slider"
                        />
                      </Link>
                    </div>
                    {/* Content */}
                    <div className="absolute w-full bottom-1 md:bottom-2 flex items-start left-6 max-w-[500px] rtl:right-6 rtl:left-auto">
                      <div className="py-4">
                        <div className="text-sm text-white uppercase">
                          Drinks & Desserts
                        </div>
                        <div className="max-w-lg mt-2 font-bold leading-normal text-white capitalize break-words text-md sm:text-2xl">
                          Top view of knife and cutting board with vegetables on
                          gray table Food Composition of raw.
                        </div>
                        <div className="flex items-center justify-start gap-2 my-2 text-xs text-white lg:my-4 sm:text-sm">
                          <span>Armin vans</span> - <span>August 7, 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Right Section: Static Banners */}
            <div className="col-span-5 md:col-span-2" data-aos="flip-right">
              <div className="grid grid-cols-2 gap-6">
                {/* Bottom Banner 1 */}
                <div className="col-span-2 sm:col-span-1">
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={topBanner2}
                        alt="blog"
                      />
                    </Link>
                    <figcaption className="absolute px-4 text-white text-md bottom-5 md:bottom-1 lg:bottom-6">
                      <div className="text-sm text-white lg:uppercase">
                        Sports
                      </div>
                      <div className="max-w-sm text-sm font-medium text-white capitalize lg:text-md lg:leading-normal">
                        Computer Filters Noise to Make you better.
                      </div>
                    </figcaption>
                  </figure>
                </div>

                {/* Bottom Banner 2 */}
                <div className="col-span-2 sm:col-span-1">
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={topBanner3}
                        alt="blog"
                      />
                    </Link>
                    <figcaption className="absolute px-4 text-white text-md bottom-5 md:bottom-1 lg:bottom-6">
                      <div className="text-sm text-white lg:uppercase">
                        Lifestyle
                      </div>
                      <div className="max-w-sm text-sm font-medium text-white capitalize lg:text-md lg:leading-normal">
                        Computer Filters Noise to Make you better.
                      </div>
                    </figcaption>
                  </figure>
                </div>

                {/* Top Banner */}
                <div className="col-span-2">
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={topBanner1}
                        alt="blog"
                      />
                    </Link>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                      <div className="text-sm text-white lg:uppercase">
                        Technology
                      </div>
                      <div className="max-w-sm text-sm font-medium leading-normal text-white capitalize lg:text-xl">
                        Game Changing Virtual Reality Console Hits the Market
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

export default Section1
