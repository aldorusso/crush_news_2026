import React from "react"
import { cardData } from "../../../common/data/index7data"
import { Link } from "gatsby"

const Section1 = () => {
  return (
    <React.Fragment>
      {cardData &&
        cardData.map((card, index) => (
          <div
            key={card.id || index``}
            className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3"
          >
            <div className="bg-white rounded shadow dark:bg-gray-800/70 hover:shadow-lg">
              <div className="relative">
                <img
                  src={card.imageSrc}
                  alt="trending"
                  className="w-full h-auto max-w-full transition duration-300 ease-in-out cursor-move hover:brightness-50"
                />
                <div className="absolute bottom-5 left-5">
                  <div className="bg-[#3C3FDE] text-white px-2 pt-[4px] pb-[2px] text-xs capitalize sm:uppercase rounded leading-5 max-w-fit">
                    {card.category}
                  </div>
                </div>
              </div>
              <div className="block p-4">
                <h6 className="text-xl font-medium text-gray-900 dark:text-white mb-1 hover:text-[#E40666] dark:hover:text-[#E40666]">
                  <Link to={card.link}>{card.title}</Link>
                </h6>
                <div className="block gap-4 mt-2 text-sm">
                  <span className="text-gray-900 uppercase me-2 lg:me-1 dark:text-gray-200">
                    <span className="font-medium text-gray-400">BY</span>{" "}
                    {card.author}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    <i className="ri-time-line"></i> {card.timeAgo}
                  </span>{" "}
                  {card.share && (
                    <span className="text-gray-500 dark:text-gray-400">
                      <i className="ri-share-line"></i> share
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </React.Fragment>
  )
}

export default Section1
