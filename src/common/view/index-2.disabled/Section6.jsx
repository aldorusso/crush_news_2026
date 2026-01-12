import React from "react"
import { section6data } from "../../data/index7data"
import { Link } from "gatsby"

const Section6 = () => {
  return (
    <React.Fragment>
      {section6data &&
        section6data.map((data, index) => (
          <div key={index} className="col-span-6">
            <div className="bg-white rounded shadow dark:bg-gray-800/70 hover:shadow-lg">
              <div className="relative">
                {data.type === "video" ? (
                  <video
                    className="w-full h-auto max-w-full"
                    autoPlay
                    muted
                    controls
                  >
                    <source src={data.source} type="video/mp4" />
                    Your browser does not support the video.
                  </video>
                ) : (
                  <img
                    src={data.image}
                    alt="trending"
                    className="w-full h-auto max-w-full transition duration-300 ease-in-out cursor-move hover:brightness-50"
                  />
                )}
                {data.category && (
                  <div className="absolute bottom-5 left-5">
                    <div className="bg-[#3C3FDE] text-white px-2 pt-[4px] pb-[2px] text-xs capitalize sm:uppercase rounded leading-5 max-w-fit">
                      {data.category}
                    </div>
                  </div>
                )}
              </div>
              <div className="block p-4">
                <h6 className="text-2xl font-medium text-gray-900 dark:text-white mb-1 hover:text-[#E40666] dark:hover:text-[#E40666]">
                  <Link to="/single-post">{data.title}</Link>
                </h6>
                <p className="text-sm text-gray-500 sm:text-base dark:text-gray-300">
                  {data.description}
                </p>
                <hr className="mt-4 mb-4" />
                <div className="block gap-4 mt-2 text-sm">
                  <span className="text-gray-900 uppercase me-2 lg:me-1 dark:text-gray-200">
                    <span className="font-medium text-gray-400">BY</span>{" "}
                    {data.author}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    <i className="ri-time-line"></i> {data.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </React.Fragment>
  )
}

export default Section6
