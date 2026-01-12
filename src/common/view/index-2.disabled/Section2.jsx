import React from "react"
import { cardList } from "../../data/index7data"
import { Link } from "gatsby"

const Section2 = () => {
  return (
    <React.Fragment>
      {cardList &&
        cardList.map((card, index) => (
          <div key={card.id || index} className="col-span-6">
            <div className="flex flex-col items-start justify-between p-5 bg-white rounded shadow lg:flex-row lg:items-center dark:bg-gray-800/70 hover:shadow-lg">
              <div>
                <div className="capitalize text-md text-[#ff0000] font-medium dark:text-[#478cff]">
                  {card.category}
                </div>
                <Link to="/single-post">
                  <h5 className="mb-1 text-xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#E40666] dark:hover:text-[#E40666]">
                    {card.title}
                  </h5>
                </Link>
                <p className="text-sm text-gray-500 sm:text-base dark:text-gray-300">
                  {card.description}
                </p>
                <div className="block gap-4 mt-2 text-sm">
                  <span className="text-gray-900 uppercase me-2 lg:me-1 dark:text-gray-200">
                    <span className="font-medium text-gray-400">BY</span>{" "}
                    {card.author}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    <i className="ri-time-line"></i> {card.date}
                  </span>
                </div>
              </div>
              <div>
                <Link to="/single-post">
                  <img
                    className="w-full h-auto max-w-full mt-5 rounded lg:mt-0"
                    src={card.imgSrc}
                    alt={card.imgAlt}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
    </React.Fragment>
  )
}

export default Section2
