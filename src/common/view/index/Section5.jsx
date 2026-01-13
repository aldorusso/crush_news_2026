import { Link } from "gatsby"
import React from "react"
import placeholder from "../../../assets/images/placeholder"
import getAvatar from "../../../utils/avatar"
import { leadingdata } from "../../data"

const Section5 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          {leadingdata && leadingdata.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {leadingdata.map(item => (
                <div key={item.id}>
                  <div className="text-center">
                    <Link to={item.link} className="block aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl">
                      <img
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        src={item.pic || placeholder}
                        alt={item.title}
                      />
                    </Link>
                    <div className="pt-3 sm:pt-4 px-1">
                      <Link
                        to={`/category/${item.category?.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-block text-[10px] sm:text-xs font-medium text-white bg-[#ff3750] px-2 py-1 rounded uppercase"
                      >
                        {item.category}
                      </Link>
                      <Link to={item.link}>
                        <h5 className="mt-2 mb-1 text-base sm:text-lg md:text-xl leading-tight font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff] line-clamp-2">
                          {item.title}
                        </h5>
                      </Link>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 line-clamp-2 mb-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        <img
                          src={getAvatar(item.author || "admin")}
                          alt="avatar"
                          className="rounded-full w-6 h-6 sm:w-8 sm:h-8 bg-gray-100"
                        />
                        <span>{item.author}</span>
                        <span className="hidden xs:inline">•</span>
                        <span className="hidden xs:inline">{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-gray-50 dark:bg-gray-900 rounded-xl">
              <p className="text-gray-500 dark:text-gray-400">
                Sin contenido disponible
              </p>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section5
