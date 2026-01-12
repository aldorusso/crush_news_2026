import React from "react"
import { listsData } from "../../data/index7data"
import { Link } from "gatsby"

const Section4 = () => {
  return (
    <React.Fragment>
      <div className="col-span-6">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* List Post 01 */}
          <div className="col-span-12 p-5 bg-white rounded shadow lg:col-span-6 dark:bg-gray-800/70 hover:shadow-lg">
            <div className="w-full max-w-md">
              <div className="flow-root">
                <ul>
                  {listsData &&
                    listsData.posts1 &&
                    listsData.posts1.map((post, index) => (
                      <li key={post.id || index} className="py-1 sm:py-2">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="rounded-full w-14 h-14"
                              src={post.image}
                              alt={`Post ${post.id}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0 ms-4">
                            <h6 className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#E40666] dark:hover:text-[#E40666]">
                              <Link to="/single-post">{post.title}</Link>
                            </h6>
                            <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                              <span className="me-2 lg:me-1">
                                {post.author}
                              </span>
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          {/* List Post 02 */}
          <div className="col-span-12 p-5 bg-white rounded shadow lg:col-span-6 dark:bg-gray-800/70 hover:shadow-lg">
            <div className="w-full max-w-md">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Picked
                </h5>
                <Link
                  to="#!"
                  className="text-sm font-medium text-[#E40666] dark:text-[#E40666] hover:underline"
                >
                  View all
                </Link>
              </div>
              <div className="flow-root">
                <ul>
                  {listsData &&
                    listsData.posts2 &&
                    listsData.posts2.map((post, index) => (
                      <li key={post.id || index} className="py-1 sm:py-2">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="w-20 h-[76px] rounded-2xl"
                              src={post.image}
                              alt={`Post ${post.id}`}
                            />
                          </div>
                          <div className="flex-1 min-w-0 ms-4">
                            <span className="uppercase text-[#E40666] text-xs font-normal dark:text-[#E40666]">
                              {post.category}
                            </span>
                            <h6 className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#E40666] dark:hover:text-[#E40666]">
                              <Link to="/single-post">{post.title}</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Section4
