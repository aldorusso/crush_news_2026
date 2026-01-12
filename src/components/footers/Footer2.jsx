import React from "react"
import gstoreImage from "../../assets/images/placeholder"
import appstoreImage from "../../assets/images/placeholder"
import logo from "../../assets/images/placeholder"
import { Link } from "gatsby"

const Footer2 = () => {
  return (
    <React.Fragment>
      <footer className="mt-6 bg-white dark:bg-gray-800/70">
        <div className="container px-4 mx-auto">
          <div className="block py-8 mx-auto my-0 text-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-auto max-w-full mx-auto my-0"
              />
            </Link>
            <p className="max-w-xl py-6 mx-auto my-0 leading-6 text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              cum laborum iure quod nesciunt, voluptatem perferendis ab mollitia
              harum, perspiciatis ducimus delectus.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="#" title="playstore">
                <img
                  src={gstoreImage}
                  alt="playstore"
                  className="w-full max-w-40"
                />
              </Link>
              <Link to="#" title="appstore">
                <img
                  src={appstoreImage}
                  alt="appstore"
                  className="w-full max-w-40"
                />
              </Link>
            </div>
            <div className="flex flex-wrap max-w-xl gap-2 mx-auto my-0 mt-6">
              {[
                "Business",
                "Games",
                "Sports",
                "Marketing",
                "Election",
                "News",
                "Social media",
                "Statistics",
                "Holidays",
                "Cricket",
                "Festivals",
                "Businees",
                "Games",
                "Sports",
              ].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="bg-gray-100 hover:bg-[#E40666] hover:text-white text-gray-800 text-sm font-medium px-2.5 py-1.5 rounded dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-gray-300 cursor-pointer"
                >
                  <Link to="#">{item}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 py-4 mx-auto text-xs text-center dark:text-white">
            <p>Copyright © 2024 crush.news. Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer2
