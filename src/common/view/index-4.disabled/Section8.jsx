import React from "react"
import { Link } from "gatsby"
import avatar from "../../../assets/images/placeholder"
import imageEight2 from "../../../assets/images/placeholder"
import imageEight3 from "../../../assets/images/placeholder"
import imageEight4 from "../../../assets/images/placeholder"

const Section8 = () => {
  return (
    <React.Fragment>
      <section className="mt-4 md:mt-8 aos-init aos-animate" data-aos="fade-up">
        <div className="container px-4 mx-auto custom-container">
          <div className="grid grid-cols-12 gap-6">
            <div
              className="col-span-12 xl:col-span-5 md:col-span-5 bg-[#F5F5F5] p-6 rounded-lg dark:bg-gray-800"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 xl:text-4xl md:text-xl dark:text-white">
                  4.9/5
                </h5>
                <div>
                  <div>
                    <i className="ri-star-fill text-[#F9B300]"></i>
                    <i className="ri-star-fill text-[#F9B300]"></i>
                    <i className="ri-star-fill text-[#F9B300]"></i>
                    <i className="ri-star-fill text-[#F9B300]"></i>
                  </div>
                  <span className="text-xs font-semibold md:text-xs dark:text-white">
                    18,900(Reviews)
                  </span>
                </div>
              </div>
              {/* Best post */}
              <ul>
                {[1, 2, 3].map((item, index) => (
                  <li key={index} className="md:mt-4">
                    <div className="items-center justify-between block gap-2 my-2 text-xs text-black xl:flex md:block lg:block lg:my-6 sm:text-sm">
                      <div className="flex items-center gap-3">
                        <img
                          src={item === 3 ? imageEight3 : imageEight2}
                          alt={item}
                          className="rounded-full"
                        />
                        <div className="block max-w-[300px]">
                          <span className="block text-sm font-medium xl:text-base md:text-sm dark:text-white">
                            The Best Food Made From Healthy Food, Highly
                            Recommended
                          </span>
                        </div>
                      </div>
                      <div className="xl:mt-0 lg:mt-0 md:mt-4 sm:mt-4">
                        <div className="flex items-center gap-3 bg-[#D9D9D980] p-2 rounded-full">
                          <h5 className="text-sm font-bold leading-none text-gray-900 dark:text-white">
                            4.9/5
                          </h5>
                          <div>
                            <i className="ri-star-fill text-[#F9B300]"></i>
                          </div>
                          <span className="text-sm font-semibold dark:text-white">
                            18,900(Reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Best post end */}
            </div>

            <div
              className="col-span-12 xl:col-span-7 lg:col-span-7 aos-init aos-animate"
              data-aos="fade-up"
            >
              <figure className="relative cursor-pointer">
                <Link to="/single-post">
                  <img
                    className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-lg hover:brightness-50"
                    src={imageEight4}
                    alt="4"
                  />
                </Link>
                <div className="absolute w-full left-2 bottom-1 md:bottom-3 lg:bottom-3 flex items-start xl:left-6 max-w-[500px] rtl:left-auto rtl:right-6">
                  <div>
                    <figcaption className="flex items-end text-lg">
                      <div>
                        <span className="text-gray-700 text-xs uppercase bg-white dark:border-gray-700 pt-[6px] px-2.5 mb-1 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300">
                          HEALTHY FOOD
                        </span>
                        <h3 className="max-w-2xl my-0 text-base font-medium leading-normal text-white capitalize xl:text-2xl md:text-lg sm:my-3 md:my-3 lg:my-3 xl:my-3">
                          Cooking Tips Latest Food Trends
                        </h3>
                        <div className="flex items-center justify-start gap-2 my-2 text-xs text-white lg:my-6 sm:text-sm">
                          <img
                            src={avatar}
                            alt="avatar"
                            className="rounded-lg-full max-w-10"
                          />
                          <div className="block">
                            <span className="block text-sm xl:text-base">
                              Theodore Reginald
                            </span>
                            <span className="block">
                              July 24, 2024 10 mins Read
                            </span>
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section8
