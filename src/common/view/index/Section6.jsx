import { Link } from "gatsby"
import React from "react"

const Section6 = () => {
  // Banner destacado - artículo real con imagen
  const featuredBanner = {
    category: "Pop Picks",
    title: "A New Documentary Revisits Case Against TV's 'Frugal Gourmet'",
    description: "Three decades after allegations, a documentary series delves further into the story of TV chef Jeff Smith.",
    link: "/post/documentary-frugal-gourmet",
    bgImage: "https://static01.nyt.com/images/2026/01/14/multimedia/14FD-FRUGAL-GOURMET-01-mtvf/FD-FRUGAL-GOURMET-01-mtvf-mediumSquareAt3X.jpg"
  }

  return (
    <React.Fragment>
      <section className="mt-8" data-aos="zoom-in">
        <div className="container px-4 mx-auto">
          <div className="">
            <figure className="relative cursor-pointer">
              <div>
                <div
                  className="px-3 py-10 transition duration-300 ease-in-out bg-center bg-cover rounded-2xl sm:px-8 sm:py-16"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${featuredBanner.bgImage})`,
                    minHeight: '200px'
                  }}
                >
                  <figcaption className="flex items-center px-4 text-lg">
                    <div>
                      <Link
                        to={`/category/${featuredBanner.category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-white uppercase hover:text-[#ff3750]"
                      >
                        {featuredBanner.category}
                      </Link>
                      <Link to={featuredBanner.link}>
                        <div className="max-w-lg my-3 text-xl font-medium leading-normal text-white capitalize hover:text-gray-200">
                          {featuredBanner.title}
                        </div>
                      </Link>
                      <p className="text-sm text-gray-200 mb-4 max-w-md">
                        {featuredBanner.description}
                      </p>
                      <Link
                        to={featuredBanner.link}
                        className="py-2.5 px-5 text-sm font-medium bg-white rounded-full border hover:bg-gray-100 hover:text-[#062db9]"
                      >
                        Ver Más
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
