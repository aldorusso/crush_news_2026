import { Link } from "gatsby"
import React from "react"
import { sectionCards } from "../../data/index10data"
import avatar from "../../../assets/images/placeholder"

const Section5 = () => {
  return (
    <React.Fragment>
      <section className="mt-4 md:mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto mt-8 custom-container">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sectionCards &&
              sectionCards.map(card => (
                <div
                  key={card.id}
                  className="col-span-3 p-4 border border-gray-400 rounded-lg sm:col-span-1 dark:border-gray-700"
                >
                  <div>
                    <Link className="relative" to="/single-post">
                      <img
                        className="w-full h-auto max-w-full rounded-lg"
                        src={card.imgSrc}
                        alt={card.alt}
                      />
                      <div className="absolute w-full top-3 right-3 left-auto max-w-[40px]">
                        <span className="flex items-center justify-center p-2 text-base text-gray-700 uppercase bg-white rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                          01
                        </span>
                      </div>
                      <div className="absolute w-full bottom-3 flex items-start left-3 max-w-[500px]">
                        <span className="text-gray-700 text-xs uppercase bg-white dark:border-gray-700 pt-[6px] px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300">
                          {card.category}
                        </span>
                      </div>
                    </Link>
                    <div className="pt-2 text-center">
                      <Link to="/single-post">
                        <h5 className="my-2 text-base leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#ea3118] dark:hover:text-[#ea3118]">
                          {card.title}
                        </h5>
                      </Link>
                      <p className="mb-1 text-sm text-gray-500 dark:text-gray-300">
                        {card.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm dark:text-gray-400">
                        <img
                          src={avatar}
                          alt="avtar"
                          className="-full max-w-10"
                        />
                        <span className="lg:text-xs xl:text-sm">
                          By {card.author}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 lg:text-xs xl:text-sm">
                          <i className="text-lg text-gray-400 ri-time-line"></i>
                          {card.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section5
