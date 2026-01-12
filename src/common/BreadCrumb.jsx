import { Link } from "gatsby"
import React from "react"

const BreadCrumb = ({ title, titleType }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto my-8 px-4">
        <div className="sm:flex justify-between text-center items-center">
          <div className="main-title relative">
            <h2 className="text-lg sm:text-2xl font-semibold lg:ps-4 uppercase sm:mb-0 mb-2 dark:text-white">
              {title}
            </h2>
          </div>
          <nav aria-label="Breadcrumb">
            <ol className="space-x-1 md:space-x-2 rtl:space-x-reverse flex uppercase justify-center flex-wrap">
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-gray-700 hover:text-[#ff3750] dark:text-gray-400 dark:hover:text-white"
                >
                  <i className="ri-home-8-line"></i> Inicio
                </Link>
              </li>{" "}
              {titleType && (
                <li>
                  <i className="ri-arrow-right-s-line dark:text-gray-400"></i>{" "}
                  <Link
                    to="#"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-[#ff3750] md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {titleType}
                  </Link>
                </li>
              )}
              <li aria-current="page">
                <i className="ri-arrow-right-s-line dark:text-gray-400"></i>{" "}
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  {title}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BreadCrumb
