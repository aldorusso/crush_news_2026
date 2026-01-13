import { Link } from "gatsby"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { posts } from "./data/siteData"

// Get latest posts for the swiper
const swiperPosts = posts.slice(0, 4)

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
        {swiperPosts.map((post, index) => (
          <SwiperSlide key={post.id}>
            <div className="rounded me-3">
              <Link to={post.link}>
                <img
                  className="h-auto w-full max-w-full rounded-lg"
                  src={post.image}
                  alt={post.title}
                />
              </Link>
              <div className="py-4">
                <div className="bg-[#ff3750] text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                  {post.category}
                </div>
                <div className="font-normal text-lg sm:text-xl mb-2 text-black">
                  <Link
                    to={post.link}
                    className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                  >
                    {post.title}
                  </Link>
                </div>
                <div className="block lg:flex justify-start gap-4 text-xs sm:text-sm text-gray-500 mb-2 dark:text-gray-400">
                  <span className="me-2 lg:me-0">
                    <i className="ri-user-fill"></i> {post.author}
                  </span>
                  <span className="me-2 lg:me-0">
                    <i className="ri-calendar-fill"></i> {post.dateFormatted}
                  </span>
                  <span>
                    <i className="ri-chat-1-fill"></i> {post.comments || 0} comentarios
                  </span>
                </div>
                <p className="text-gray-500 text-sm sm:text-base mb-2 dark:text-gray-300 line-clamp-2">
                  {post.excerpt || post.description}
                </p>
              </div>
            </div>
            {/* Related posts in same slide */}
            {swiperPosts.slice(index + 1, index + 3).map(relatedPost => (
              <div key={relatedPost.id} className="flex flex-co md:flex-row md:max-w-xl mb-5 sm:mb-3 md:mb-5">
                <Link to={relatedPost.link}>
                  <img
                    className="h-auto max-w-40 sm:w-20 lg:w-40 rounded-lg object-cover"
                    src={relatedPost.image}
                    alt={relatedPost.title}
                  />
                </Link>
                <div className="flex flex-col p-4 sm:py-0 ">
                  <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                    {relatedPost.category}
                  </div>
                  <h3 className="mb-2 text-sm ">
                    <Link
                      to={relatedPost.link}
                      className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750] line-clamp-2"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <div className="block gap-4 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                    <span className="me-2 lg:me-1">
                      <i className="ri-user-fill"></i> {relatedPost.author}
                    </span>
                    <span>
                      <i className="ri-calendar-fill"></i> {relatedPost.dateFormatted}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  )
}

export default OtherSwiper
