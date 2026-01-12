import React from "react"
import { Link } from "gatsby"
import bestStory1 from "../../../assets/images/placeholder"
import { topRatedNews, hotRatedNews } from "../../../common/data"

const Section8 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-3 sm:gap-4 md:gap-6">
            {/* Top Rated News Section */}
            <div
              className="order-1 col-span-3 sm:col-span-2 sm:order-2 lg:order-1 lg:col-span-1"
              data-aos="fade-up"
            >
              <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
                Top Rated News
              </h3>
              <ul>
                {topRatedNews &&
                  topRatedNews.map(item => (
                    <li key={item.id} className="py-1 sm:py-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-2xl"
                            src={item.image}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 mt-2 ms-4 lg:mt-0">
                          <span
                            className="text-xs font-normal uppercase dark:text-white"
                            style={{ color: item.color }}
                          >
                            {item.category}
                          </span>
                          <Link
                            to="/single-post"
                            className="block text-sm font-medium text-gray-900 dark:text-white hover:text-[#f7573d] dark:hover:text-[#f7573d]"
                          >
                            {item.title}
                          </Link>
                          <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                            <span className="me-2 lg:me-1">{item.author}</span>
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Our Best Stories & News */}
            <div
              className="order-2 col-span-3 sm:col-span-2 sm:order-3 lg:order-2 lg:col-span-1"
              data-aos="fade-up"
            >
              <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
                Our Best Stories & News
              </h3>
              <figure className="relative cursor-pointer">
                <Link to="/single-post">
                  <img
                    className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                    src={bestStory1}
                    alt="post"
                  />
                </Link>
                <figcaption className="absolute px-7 text-md bottom-5">
                  <span className="text-white text-xs uppercase bg-[#FF0000] pt-[6px] px-2.5 py-1 rounded-full">
                    Drinks
                  </span>
                  <div className="my-2 text-md md:text-xl leading-normal text-white capitalize max-w-sm font-medium hover:text-[#f7573d] dark:hover:text-[#f7573d]">
                    <Link to="/single-post">
                      How To Recommendation Algorithms Run The World Smartphone
                    </Link>
                  </div>
                  <div className="block gap-4 text-[11px] text-white uppercase">
                    <span className="me-2 lg:me-1"> By Alex H. Hilixzer</span>
                    <span>
                      <i className="ri-time-line"></i> April 05, 2024
                    </span>
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* Hot News & Stories */}
            <div
              className="order-3 col-span-3 sm:col-span-2 sm:order-1 lg:order-3 lg:col-span-1"
              data-aos="fade-up"
            >
              <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
                Hot News & Stories
              </h3>
              <ul>
                {hotRatedNews &&
                  hotRatedNews.map((item, index) => (
                    <li key={item.id} className="py-1 sm:py-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-2xl"
                            src={item.image}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0 mt-2 ms-4 lg:mt-0">
                          <span
                            className="text-xs font-normal uppercase dark:text-white"
                            style={{ color: item.color }}
                          >
                            {item.category}
                          </span>
                          <Link
                            to="/single-post"
                            className="block text-sm font-medium text-gray-900 dark:text-white hover:text-[#f7573d] dark:hover:text-[#f7573d]"
                          >
                            {item.title}
                          </Link>
                          <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                            <span className="me-2 lg:me-1">{item.author}</span>
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section8
