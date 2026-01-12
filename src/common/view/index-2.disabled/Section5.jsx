import React from "react"
import { cardGrid } from "../../data/index7data"
import { Link } from "gatsby"

const Section5 = () => {
  return (
    <React.Fragment>
      <div className="col-span-6">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6">
          {cardGrid &&
            cardGrid.map((card, index) => (
              <div
                key={card.id || index}
                className="col-span-2 lg:col-span-1 aos-init aos-animate"
                data-aos="fade-up"
              >
                <figure className="relative p-3 bg-white rounded shadow cursor-pointer dark:bg-gray-800/70 hover:shadow-lg">
                  <Link to="/single-post">
                    <img
                      className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded hover:brightness-50"
                      src={card.imgSrc}
                      alt="post"
                    />
                  </Link>
                  <figcaption className="absolute px-7 text-md bottom-5">
                    <span className="text-white text-xs uppercase bg-[#FF0000] pt-[6px] px-2.5 py-1 rounded-full">
                      {card.category}
                    </span>
                    <div className="my-2 text-md md:text-xl leading-normal text-white capitalize max-w-sm font-medium hover:text-[#E40666] dark:hover:text-[#E40666]">
                      <Link to="/single-post">{card.title}</Link>
                    </div>
                    <div className="block gap-4 text-[11px] text-white uppercase">
                      <span className="me-2 lg:me-1"> By {card.author}</span>
                      <span>
                        <i className="ri-time-line"></i> {card.date}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Section5
