import React from "react"
import { newsItems } from "../../data/index8data"
import { Link } from "gatsby"

const Section7 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
            Top Of The Week News & Stories
          </h3>
          <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6">
            {newsItems &&
              newsItems.map(item => (
                <div
                  key={item.id}
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"
                >
                  <img
                    src={item.imgSrc}
                    alt="Instagram"
                    className="w-full h-auto max-w-full transition duration-300 ease-in-out cursor-move rounded-2xl hover:brightness-50"
                  />
                  <div className="mt-3 flex justify-between gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                    <div className="text-md">
                      <span className="text-white text-xs uppercase bg-[#FF0000] pt-[6px] px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <div>
                      <span className="me-2 lg:me-1">by {item.author}</span>
                      <span>
                        <i className="ri-time-line"></i> {item.time}
                      </span>
                    </div>
                  </div>
                  <h4 className="my-2 text-md font-medium text-gray-900 dark:text-white hover:text-[#E32C26] dark:hover:text-[#E32C26]">
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section7
