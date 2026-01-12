import React from "react"
import { Link } from "gatsby"

// PostList Component - Categories sidebar
// TODO: Add your own categories here

const PostList = () => {
  // Example category structure:
  // const categories = [
  //   { name: "Technology", count: 10, link: "/category/technology" },
  //   { name: "Travel", count: 5, link: "/category/travel" },
  // ]

  const categories = [] // Add your categories here

  return (
    <React.Fragment>
      {categories.length === 0 ? (
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Sin categorías aún. Agrega tus categorías en PostList.jsx
          </p>
        </div>
      ) : (
        categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg mb-2 hover:bg-[#ff3750] hover:text-white dark:hover:bg-[#ff3750] transition-colors"
          >
            <Link
              to={category.link}
              className="flex justify-between font-semibold"
            >
              <span>{category.name}</span>
              <span>({category.count})</span>
            </Link>
          </div>
        ))
      )}
    </React.Fragment>
  )
}

export default PostList
