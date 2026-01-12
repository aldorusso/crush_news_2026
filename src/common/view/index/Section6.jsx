import { Link } from "gatsby"
import React from "react"
import layout17 from "../../../assets/images/placeholder"

const Section6 = () => {
  return (
    <React.Fragment>
      <section className="mt-8" data-aos="zoom-in">
        <div className="container px-4 mx-auto">
          <div className="">
            <figure className="relative cursor-pointer">
              <div>
                <div
                  className="px-3 py-10 transition duration-300 ease-in-out bg-center bg-cover rounded-2xl sm:px-8 sm:py:16"
                  style={{ backgroundImage: `url(${layout17})` }}
                >
                  <figcaption className="flex items-center px-4 text-lg">
                    <div>
                      <div className="text-sm text-white uppercase">
                        Tecnología
                      </div>
                      <div className="max-w-sm my-3 text-xl font-medium leading-normal text-white capitalize">
                        Descubre las últimas tendencias en tecnología y
                        mantente a la vanguardia
                      </div>
                      <Link
                        to="/single-post"
                        className="py-2.5 px-5 text-sm font-medium bg-white rounded-full border hover:bg-gray-100 hover:text-[#062db9]"
                      >
                        Ver Más Información
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
