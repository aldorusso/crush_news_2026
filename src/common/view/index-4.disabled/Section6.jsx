import React from "react"
import { Link } from "gatsby"
import imageSix1 from "../../../assets/images/placeholder"
import imageSix2 from "../../../assets/images/placeholder"
import imageSix3 from "../../../assets/images/placeholder"
import imageSix4 from "../../../assets/images/placeholder"
import imageSix5 from "../../../assets/images/placeholder"
import avatar from "../../../assets/images/placeholder"

const Section6 = () => {
  return (
    <React.Fragment>
      <section className="mt-4 md:mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto custom-container">
          <div className="grid grid-cols-12 gap-6">
            <div
              className="col-span-12 xl:col-span-6 lg:col-span-6"
              data-aos="fade-up"
            >
              <figure className="relative cursor-pointer">
                <Link to="/single-post">
                  <img
                    className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-lg hover:brightness-50"
                    src={imageSix5}
                    alt="5"
                  />
                </Link>
                <div className="absolute w-full bottom-4 md:bottom-4 lg:bottom-4 flex items-start left-2 max-w-[500px] rtl:left-auto rtl:right-2">
                  <div>
                    <figcaption className="flex items-end px-4 text-lg">
                      <div>
                        <span className="text-gray-700 text-xs uppercase bg-white dark:border-gray-700 pt-[6px] px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300">
                          HEALTHY FOOD
                        </span>
                        <h3 className="max-w-2xl my-3 text-base font-medium leading-normal text-white capitalize xl:text-2xl md:text-lg">
                          cooking tips latest food trends
                        </h3>
                        <div className="flex items-center justify-start gap-2 my-2 text-xs text-white lg:my-6 sm:text-sm">
                          <img
                            src={avatar}
                            alt="avtar"
                            className="rounded-lg max-w-10"
                          />
                          <div className="block">
                            <span className="block text-base">
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
            <div
              className="col-span-12 xl:col-span-6 md:col-span-6 bg-[#F5F5F5] p-5 rounded-lg dark:bg-gray-800"
              data-aos="fade-up"
            >
              <div className="mb-4">
                <h5 className="text-lg font-bold leading-none text-gray-900 xl:text-2xl dark:text-white">
                  Latest & Features Stories
                </h5>
              </div>
              {/* Best Post */}
              <ul>
                {[1, 2, 3, 4].map((item, index) => (
                  <li key={index} className="py-1 sm:pb-3 sm:pt-0">
                    <div className="flex items-center gap-3 sm:block md:flex lg:flex">
                      <span className="text-lg text-gray-400 xl:text-2xl md:text-base">{`0${item}`}</span>
                      <div className="flex-shrink-0">
                        <img
                          className="rounded-full"
                          src={
                            item === 1
                              ? imageSix1
                              : item === 2
                                ? imageSix2
                                : item === 3
                                  ? imageSix3
                                  : imageSix4
                          }
                          alt={item}
                        />
                      </div>
                      <div className="flex-1 min-w-0 mt-2 md:ms-0 lg:mt-0">
                        <Link
                          to="/single-post"
                          className="text-base xl:text-xl lg:text-sm md:text-sm font-medium text-gray-900 dark:text-white hover:text-[#ea3118] dark:hover:text-[#ea3118]"
                        >
                          Cooking Indian Food? Don’t Forget the And Freezer
                          Aisle Healthy Food Make Indian
                        </Link>
                        <div className="block gap-4 text-[14px] xl:text-[16px] md:text-[12px] text-gray-500 dark:text-gray-400 capitalize">
                          <span className="me-2 lg:me-1">
                            {" "}
                            Theodore Reginald
                          </span>
                          <span>7 Months Ago</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Best Post End */}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section6
