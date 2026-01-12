import React from "react"
import { Link } from "gatsby"

const CommanPosts = ({ title, posts }) => {
  return (
    <React.Fragment>
      <div className="col-span-3 mt-8 md:col-span-1 lg:mt-0">
        <div className="mb-4">
          <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
            {title}
          </h5>
          <hr className="h-px my-3 border-0 bg-slate-200 dark:bg-slate-800" />
        </div>
        <ul>
          {posts.map((post, index) => (
            <li key={index} className="py-1 sm:py-3">
              <div className="flex items-center md:block lg:flex">
                <div className="flex-shrink-0">
                  <img className="-2xl" src={post.image} alt="Post" />
                </div>
                <div className="flex-1 min-w-0 mt-2 ms-4 md:ms-0 lg:ms-4 lg:mt-0">
                  <Link
                    to="#!"
                    className="text-md font-medium text-gray-700 dark:text-white hover:text-[#ea3118] dark:hover:text-[#ea3118]"
                  >
                    {post.title}
                  </Link>
                  <div className="block gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                    <span className="me-2 lg:me-1">Juan Pérez</span>
                    <span>Hace 7 meses</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default CommanPosts
