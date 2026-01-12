import React from "react"
import { Link } from "gatsby"
import imageSeven1 from "../../../assets/images/placeholder"
import imageSeven2 from "../../../assets/images/placeholder"
import imageSeven3 from "../../../assets/images/placeholder"
import imageSeven4 from "../../../assets/images/placeholder"

const Section7 = () => {
  return (
    <div>
      <section
        className="mt-8 bg-[#F5F5F5] py-5 dark:bg-gray-800"
        data-aos="fade-up"
      >
        <div className="container px-4 mx-auto custom-container">
          <div className="grid grid-cols-4 gap-4 xl:col-span-4 lg:gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                className="col-span-12 rounded-lg sm:col-span-2 lg:col-span-2 xl:col-span-1"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="items-center justify-between block xl:flex md:flex lg:flex sm:flex">
                      <span className="inline-block text-gray-700 text-xs uppercase border border-black dark:border-gray-400 pt-[6px] px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300">
                        HEALTHY FOOD
                      </span>
                      <span className="block gap-4 text-[14px] text-gray-500 dark:text-gray-400 capitalize me-2 lg:me-1">
                        3 Minutes Read
                      </span>
                    </div>
                    <h6 className="mt-2 text-base md:text-sm font-medium text-gray-900 dark:text-white hover:text-[#f7573d] dark:hover:text-[#f7573d] capitalize">
                      <Link to="/single-post">
                        our curated recipes, cooking tips, and the latest food
                        trends
                      </Link>
                    </h6>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      className="w-32 rounded-lg h-28"
                      src={
                        item === 1
                          ? imageSeven1
                          : item === 2
                            ? imageSeven2
                            : item === 3
                              ? imageSeven3
                              : imageSeven4
                      }
                      alt="1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section7
