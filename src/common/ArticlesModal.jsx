import React from "react"
import getAvatar from "../utils/avatar"

const ArticlesModal = ({ article }) => {
  return (
    <React.Fragment>
      <figure className="relative mb-4 cursor-pointer lg:mb-8">
        <a href="single-post">
          <img
            className="w-full h-auto max-w-full transition duration-300 ease-in-out rounded-2xl hover:brightness-50"
            src={article.image}
            alt="blog"
          />
        </a>
        <figcaption className="absolute px-6 text-lg text-white bottom-5">
          <div className="text-sm text-white lg:uppercase">
            {article.category}
          </div>
          <div className="max-w-sm my-1 text-sm font-medium text-white capitalize lg:text-base">
            {article.title}
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="w-8 h-8 rounded-full bg-white" src={getAvatar(article.author || "admin")} alt="avatar" />
            </div>
            <div className="flex-1 min-w-0 ms-2">
              <p className="text-sm font-normal text-white truncate dark:text-white">
                {article.author}
              </p>
              <p className="text-sm font-light text-white">{article.date}</p>
            </div>
          </div>
        </figcaption>
      </figure>
    </React.Fragment>
  )
}

export default ArticlesModal
