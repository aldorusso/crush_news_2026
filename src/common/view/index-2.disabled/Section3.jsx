import React from "react"
import { simpleCard } from "../../data/index7data"
import { Link } from "gatsby"
import weeklyPost from "../../../assets/images/placeholder"
import avatar3 from "../../../assets/images/placeholder"

const Section3 = () => {
  return (
    <React.Fragment>
      <div className="col-span-6">
        <figure className="relative shadow cursor-pointer hover:shadow-lg">
          <Link to="/single-post">
            <img
              className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded hover:brightness-50"
              src={weeklyPost}
              alt={"weekly post"}
            />
          </Link>
          <figcaption className="absolute px-7 text-md bottom-5">
            <span className="text-white text-xs uppercase bg-[#FF0000] pt-[6px] px-2.5 py-1 rounded-full">
              Drinks
            </span>
            <div className="my-2 text-md md:text-3xl leading-normal text-white capitalize max-w-xl font-medium hover:text-[#E40666] dark:hover:text-[#E40666]">
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
      <div className="col-span-6">
        <div className="grid grid-cols-2 gap-6">
          {simpleCard &&
            simpleCard.map((card, index) => (
              <div
                key={card.id || index}
                className="col-span-2 lg:col-span-1"
                data-aos="fade-up"
              >
                <figure className="relative cursor-pointer">
                  <Link to="/single-post">
                    <img
                      className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded shadow hover:shadow-lg hover:brightness-50"
                      src={card.imgSrc}
                      alt={card.imgAlt}
                    />
                  </Link>
                  <figcaption className="absolute px-7 text-md bottom-5">
                    <span className="text-white text-xs uppercase bg-[#E40666] pt-[6px] px-2.5 py-1 rounded">
                      {card.category}
                    </span>
                    <div className="my-2 text-2xl leading-normal text-white capitalize max-w-sm font-medium hover:text-[#E40666] dark:hover:text-[#E40666]">
                      <Link to="/single-post">{card.title}</Link>
                    </div>
                    <div className="flex items-center justify-start gap-2 text-xs text-white sm:text-sm">
                      <img
                        src={avatar3}
                        alt="avatar"
                        className="rounded-full max-w-6"
                      />
                      <span>{card.author}</span>
                      <span>
                        <i className="ri-calendar-2-line"></i> {card.date}
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

export default Section3
