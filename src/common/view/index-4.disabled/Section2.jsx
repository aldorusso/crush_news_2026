import { Link } from "gatsby"
import React from "react"
import { cards } from "../../data/index10data"

const Section2 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto custom-container">
          <h3 className="mb-4 text-lg font-bold tracking-normal capitalize xl:text-2xl lg:text-xl dark:text-white">
            Thing You Need To Know
          </h3>
          <div className="grid gap-4 xl:grid-cols-4 sm:grid-cols-4 md:col-span-2 lg:grid-cols-3 lg:gap-4">
            {cards &&
              cards.map((card, index) => (
                <div
                  className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 rounded-lg-2x"
                  key={index}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={card.image}
                        alt={card.alt}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-0 md:ms-4">
                      <span
                        className="text-white text-xs uppercase pt-[6px] px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: card.labelColor }}
                      >
                        {card.label}
                      </span>
                      <h6 className="mt-2 text-sm font-medium text-gray-900 dark:text-white hover:text-[#E32C26] dark:hover:text-[#E32C26]">
                        <Link to="/single-post">{card.title}</Link>
                      </h6>
                      <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                        <span className="flex items-center gap-1">
                          <i className="text-lg ri-time-line"></i>
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

export default Section2
