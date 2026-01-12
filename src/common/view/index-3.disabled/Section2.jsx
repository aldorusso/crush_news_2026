import { Link } from "gatsby"
import React from "react"
import { cardsData } from "../../data/index8data"

const Section2 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-3 lg:gap-4">
            {cardsData &&
              cardsData.map((card, index) => (
                <div
                  key={index}
                  className="col-span-3 sm:col-span-2 lg:col-span-1 bg-[#f5f5f5] p-2 sm:p-4 rounded-2xl dark:bg-gray-800/70"
                >
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <span className="text-gray-700 text-xs uppercase border dark:border-gray-700 pt-[6px] px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300">
                        {card.category}
                      </span>
                      <h6 className="mt-2 text-sm font-medium text-gray-900 dark:text-white hover:text-[#5719DB] dark:hover:text-[#7b51ff]">
                        <Link to={card.link}>{card.title}</Link>
                      </h6>
                      <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                        <span className="me-2 lg:me-1">{card.author}</span>
                        <span>{card.timeAgo}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        className="w-32 h-28 rounded-2xl"
                        src={card.image}
                        alt={card.title}
                      />
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

export default Section2
