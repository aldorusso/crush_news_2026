import { Link } from "gatsby"
import React from "react"
import placeholder from "../../../assets/images/placeholder"
import { leadingdata } from "../../data"

const Section5 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          {leadingdata && leadingdata.length > 0 ? (
            <div className="grid grid-cols-4 gap-8">
              {leadingdata.map(item => (
                <div className="col-span-4 sm:col-span-2" key={item.id}>
                  <div className="text-center">
                    <Link to="/single-post">
                      <img
                        className="w-full h-auto max-w-full rounded-2xl"
                        src={item.pic}
                        alt="post"
                      />
                    </Link>
                    <div className="pt-2">
                      <Link to="/single-post">
                        <h5 className="my-2 text-xl leading-normal capitalize font-medium text-gray-900 dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                          {item.title || "Título del artículo"}
                        </h5>
                      </Link>
                      <p className="mb-1 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                        {item.excerpt || "Extracto del artículo..."}
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm dark:text-gray-400">
                        <img
                          src={item.avatar || placeholder}
                          alt="avatar"
                          className="rounded-full max-w-10"
                        />
                        <span> {item.author || "Autor"}</span>
                        <span> {item.date || "Fecha"}</span>
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
