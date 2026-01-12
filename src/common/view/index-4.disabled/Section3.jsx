import { Link } from "gatsby"
import React from "react"
import { articles } from "../../data/index10data"

const Section3 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto custom-container">
          <h3 className="mb-4 text-lg font-bold tracking-normal capitalize xl:text-2xl lg:text-xl dark:text-white">
            Popular Articles & News
          </h3>
          <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6">
            {articles &&
              articles.map((article, index) => (
                <div
                  className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6"
                  key={index}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-lg cursor-move hover:brightness-50"
                  />
                  <div className="block">
                    <div className="flex items-center mt-2 text-xs md:text-xs">
                      <span className="font-medium border border-black p-1 px-2 pt-1.5 flex items-center rounded-full uppercase text-black my-2 dark:text-white dark:border-gray-400">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 ms-2 text-slate-500 dark:text-white">
                        <i className="text-lg ri-chat-3-line"></i>{" "}
                        {article.comments}
                      </span>
                    </div>
                    <h6 className="text-base xl:text-2xl lg:text-xl md:text-lg sm:text-base font-medium text-gray-900 dark:text-white mb-2 hover:text-[#F74539] dark:hover:text-[#F74539]">
                      <Link to={article.link}>{article.title}</Link>
                    </h6>
                    <p className="mb-3 text-sm text-[#707070] dark:text-white">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-xs md:text-xs border border-black p-1 px-2 pt-1.5 flex items-center rounded-full uppercase text-black my-2 dark:text-white dark:border-gray-400">
                        READ ARTICLES
                      </span>
                      <div className="flex items-center justify-start gap-2 text-xs dark:text-white sm:text-sm">
                        <img
                          src={article.avatar}
                          alt="Author"
                          className="rounded-lg max-w-6"
                        />
                        <span>
                          {article.author}. {article.date}
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

export default Section3
