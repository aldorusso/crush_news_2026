import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { sidebardata } from "../../data/index7data"

const PopularCategory = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    if (sidebardata.topSearches.length > 0) {
      setCategories(sidebardata.topSearches)
    }
  }, [])
  return (
    <React.Fragment>
      <div className="p-5 text-center bg-white rounded shadow dark:bg-gray-800/70 mt-14 md:mt-0 lg:mb-14 hover:shadow-lg">
        <h5 className="text-xl font-bold leading-none capitalize dark:text-white">
          Top Search
        </h5>
        <div className="flex flex-wrap gap-2 mt-4">
          {categories &&
            categories.map((category, index) => (
              <span
                key={`${category}-${index}`}
                className="bg-gray-100 hover:bg-[#E40666] hover:text-white text-gray-800 text-sm font-medium px-2.5 py-1.5 rounded dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-gray-300 cursor-pointer"
              >
                <Link to="!#">{category}</Link>
              </span>
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default PopularCategory
