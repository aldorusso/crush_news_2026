import React from "react"
import { Link } from "gatsby"

const BlogPosts = ({ postData }) => {
  return (
    <React.Fragment>
      <div className="grid">
        {postData &&
          postData.map(item => (
            <div className="lg:mb-8" key={item.id}>
              <div className="block gap-4 lg:flex">
                <div className="lg:w-1/2">
                  <Link href="/single-post">
                    <img
                      className="w-full h-auto max-w-full rounded-lg"
                      src={item.image}
                      alt="blog post"
                    />
                  </Link>
                </div>
                <div className="py-4 lg:py-0 lg:w-1/2">
                  <h3 className="text-lg sm:text-xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
                    <Link href={item.link || "/single-post"}>
                      {item.title || "Título del Artículo"}
                    </Link>
                  </h3>
                  <div className="justify-start block gap-4 mb-2 text-xs text-gray-500 lg:flex sm:text-sm dark:text-gray-400">
                    <span className="me-2 lg:me-0">
                      <i className="ri-user-fill"></i> {item.author || "Autor"}
                    </span>
                    <span className="me-2 lg:me-0">
                      <i className="ri-calendar-fill"></i> {item.date || "Fecha"}
                    </span>
                    <span>
                      <i className="ri-chat-1-fill"></i> {item.comments || 0} comentarios
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-gray-400 sm:text-base dark:text-gray-300">
                    {item.excerpt || "Extracto del artículo..."}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  )
}

export default BlogPosts
