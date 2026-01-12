import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Navigation } from "swiper/modules"
import { Link } from "gatsby"

const MostPopular = ({ swiperData }) => {
  return (
    <React.Fragment>
      {/* Swiper */}
      <div className="relative top-[-2.25rem] ">
        <div className="swiper-button-next swiper-button-nexto  text-sm  rtl:!left-8 rtl:!right-auto"></div>
        <div className="swiper-button-prev swiper-button-prevo left-auto right-8"></div>
      </div>
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 3,
          fill: "row",
        }}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-nexto",
          prevEl: ".swiper-button-prevo",
        }}
        modules={[Grid, Navigation]}
        className="swiperpopular popular relative swiper-initialized swiper-horizontal swiper-grid swiper-grid-row swiper-backface-hidden"
      >
        {swiperData &&
          swiperData.map(item => (
            <SwiperSlide
              style={{
                height: "calc(33.3333% + 0px)",
                width: "369px",
                marginTop: item.margin === true ? "0px" : "",
              }}
              key={item.id}
            >
              <div className="flex flex-co md:flex-row md:max-w-xl mb-5 sm:mb-3 md:mb-5">
                <Link to="/single-post">
                  <img
                    className="h-auto max-w-40 sm:w-20 lg:w-40 rounded-lg"
                    src={item.image}
                    alt="post "
                  />
                </Link>
                <div className="flex flex-col p-4 sm:py-0 ">
                  {item.category && (
                    <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                      {item.category}
                    </div>
                  )}
                  <h3 className="mb-2 text-sm ">
                    <Link
                      to={item.link || "/single-post"}
                      className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                    >
                      {item.title || "Título del Artículo"}
                    </Link>
                  </h3>
                  <div className="block gap-4 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                    <span className="me-2 lg:me-1">
                      <i className="ri-user-fill"></i> {item.author || "Autor"}
                    </span>{" "}
                    <span>
                      <i className="ri-calendar-fill"></i> {item.date || "Fecha"}
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

export default MostPopular
