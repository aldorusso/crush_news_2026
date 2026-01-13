import React from "react"
import { Link } from "gatsby"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { section1 } from "../../data"

const Section1 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          <div className="p-5 overflow-hidden bg-white dark:bg-gray-800/70 rounded-xl">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1240: {
                  slidesPerView: 5,
                },
              }}
              pagination={{
                el: ".swiper-pagination",
              }}
              loop={true}
              modules={[Autoplay, Pagination]}
              className="relative service"
              dir="ltr"
            >
              {section1 &&
                section1.map(item => (
                  <SwiperSlide key={item.id}>
                    <Link to={item.link} className="flex items-center flex-co md:flex-row md:max-w-xl md:items-start group">
                      <span className="text-[#062db9] text-2xl font-semibold dark:text-[#478cff]">
                        {item.number}
                      </span>
                      <div className="flex flex-col p-4 sm:py-0">
                        <h3 className="text-sm group-hover:text-[#062db9] dark:text-white dark:group-hover:text-[#478cff] font-medium line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                          <span className="me-2 lg:me-1">{item.author}</span>
                          <span>{item.time_ago}</span>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section1
