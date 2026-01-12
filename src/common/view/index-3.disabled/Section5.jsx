import { Link } from "gatsby"
import React from "react"
import { newsTopics } from "../../data/index8data"

const Section5 = () => {
  return (
    <React.Fragment>
      <section className="mt-8">
        <div className="container px-4 mx-auto">
          <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
            All News Topics & News
          </h3>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-3 sm:gap-4 md:gap-6">
            {newsTopics &&
              newsTopics.map((topic, index) => (
                <div
                  key={topic.id}
                  className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-1 news-topics"
                  data-aos="fade-up"
                >
                  <figure className="relative cursor-pointer">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
                        src={topic.imgSrc}
                        alt="post"
                      />
                    </Link>
                    <figcaption className="absolute w-full px-7 text-md bottom-5">
                      <div className="absolute bottom-2">
                        <span className="text-white text-xs uppercase bg-[#FF0000] pt-[6px] px-2.5 py-1 rounded-full">
                          {topic.category}
                        </span>
                        <div className="hover-open">
                          {topic.links.map((link, index) => (
                            <div
                              key={index}
                              className="my-2 text-sm leading-normal text-white capitalize max-w-7xl hover:text-[#E32C26] dark:hover:text-[#E32C26]"
                            >
                              <Link to="/single-post">{link}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section5
