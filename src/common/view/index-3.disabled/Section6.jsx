import React from "react"
import bgImage from "../../../assets/images/placeholder"
import avatar from "../../../assets/images/placeholder"
import { Link } from "gatsby"

const Section6 = () => {
  return (
    <React.Fragment>
      <section
        className="px-3 py-32 mt-8 transition duration-300 ease-in-out bg-center bg-cover sm:px-8 sm:py:16"
        data-aos="fade-up"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container px-4 mx-auto">
          <div>
            <figure className="relative cursor-pointer">
              <div>
                <div>
                  <figcaption className="flex items-center px-4 text-lg">
                    <div>
                      <span className="text-gray-700 text-xs uppercase bg-white dark:border-gray-700 pt-[6px] px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300">
                        Lifestyle
                      </span>
                      <h3 className="max-w-2xl my-3 text-xl font-medium leading-normal text-white capitalize">
                        The United States Capitol at night, Washington DC Castle
                        Sternberk illuminated by lamps. Aerial view of medieval
                        state castle
                      </h3>
                      <div className="flex items-center justify-start gap-2 my-2 text-xs text-white lg:my-6 sm:text-sm">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="rounded-full max-w-10"
                        />
                        <span>Armin vans</span>
                        <span>August 7, 2024</span>
                      </div>
                      <Link
                        to="/single-post"
                        className="inline-block mt-3 py-2.5 px-5 text-sm font-medium bg-[#E32C26] rounded-full hover:bg-gray-100 text-white hover:text-slate-700"
                      >
                        See More Info
                      </Link>
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section6
