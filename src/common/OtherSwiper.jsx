import { Link } from "gatsby"
import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import blog1 from "../assets/images/placeholder"

const swiperdata = [{ id: 1 }, { id: 2 }]

const OtherSwiper = ({ swiperclass, next, prev }) => {
  return (
    <React.Fragment>
      <div className="relative">
        <div
          className={`swiper-button-next ${next} text-sm`}
          style={{ top: "-2.25rem" }}
        ></div>
        <div
          className={`swiper-button-prev ${prev}`}
          style={{ top: "-2.25rem" }}
        ></div>
      </div>
      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: `.${next}`,
          prevEl: `.${prev}`,
        }}
        modules={[Navigation]}
        className={swiperclass}
        dir="ltr"
      >
        {swiperdata.map(item => (
          <SwiperSlide key={item.id}>
            <div className="rounded me-3">
              <Link to="/single-post">
                <img
                  className="h-auto w-full max-w-full rounded-lg"
                  src={blog1}
                  alt="Mountain"
                />
              </Link>
              <div className="py-4">
                <div className="bg-[#ff3750] text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                  Neurost
                </div>
                <div className="font-normal text-lg sm:text-xl mb-2 text-black">
                  <Link
                    to="/single-post"
                    className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                  >
                    Vivamus Tortor Enim, Semper Et Ornare Sed
                  </Link>
                </div>
                <div className="block lg:flex justify-start gap-4 text-xs sm:text-sm text-gray-500 mb-2 dark:text-gray-400">
                  <span className="me-2 lg:me-0">
                    <i className="ri-user-fill"></i> Administrador
                  </span>
                  <span className="me-2 lg:me-0">
                    <i className="ri-calendar-fill"></i> Mar 18, 2024
                  </span>
                  <span>
                    <i className="ri-chat-1-fill"></i> 0 comentarios
                  </span>
                </div>
                <p className="text-gray-500 text-sm sm:text-base mb-2 dark:text-gray-300">
                  Las últimas noticias sobre tecnología y actualidad.
                  Mantente informado de todo lo que sucede.
                </p>
              </div>
            </div>
            <div className="flex flex-co md:flex-row md:max-w-xl mb-5 sm:mb-3 md:mb-5">
              <Link to="/single-post">
                <img
                  className="h-auto max-w-40 sm:w-20 lg:w-40 rounded-lg"
                  src="https://placehold.co/158x158.jpg"
                  alt="post "
                />
              </Link>
              <div className="flex flex-col p-4 sm:py-0 ">
                <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                  neursto
                </div>
                <h3 className="mb-2 text-sm ">
                  <Link
                    to="/single-post"
                    className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                  >
                    Venenatis Sit Amet Malesuada Ut Malesuad
                  </Link>
                </h3>
                <div className="block gap-4 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                  <span className="me-2 lg:me-1">
                    <i className="ri-user-fill"></i> Administrador
                  </span>
                  <span>
                    <i className="ri-calendar-fill"></i> Mar 18, 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-co md:flex-row md:max-w-xl mb-5 sm:mb-3 md:mb-5">
              <Link to="/single-post">
                <img
                  className="h-auto max-w-40 sm:w-20 lg:w-40 rounded-lg"
                  src="https://placehold.co/158x158.jpg"
                  alt="post "
                />
              </Link>
              <div className="flex flex-col p-4 sm:py-0 ">
                <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                  neursto
                </div>
                <h3 className="mb-2 text-sm ">
                  <Link
                    to="/single-post"
                    className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                  >
                    Venenatis Sit Amet Malesuada Ut Malesuad
                  </Link>
                </h3>
                <div className="block gap-4 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                  <span className="me-2 lg:me-1">
                    <i className="ri-user-fill"></i> Administrador
                  </span>
                  <span>
                    <i className="ri-calendar-fill"></i> Mar 18, 2024
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  )
}

export default OtherSwiper
