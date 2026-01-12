import { Link } from "gatsby"
import React from "react"

const Social = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-2 mb-8 mt-8">
        <Link to="#" target="_blank">
          <div className="bg-[#3b579d] hover:bg-[#314881] text-white text-center rounded-lg py-2 px-0">
            <i className="ri-facebook-fill"></i>{" "}
            <span className="">Facebook</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#2caae1] hover:bg-[#1d95c9] text-white text-center rounded-lg py-2 px-0">
            <i className="ri-twitter-x-fill"></i>{" "}
            <span className="">Twitter</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#ee4838] hover:bg-[#eb2614] text-white text-center rounded-lg py-2 px-0">
            <i className="ri-linkedin-fill"></i>{" "}
            <span className="">Linkedin</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#ee4838] hover:bg-[#eb2614] text-white text-center rounded-lg py-2 px-0">
            <i className="ri-rss-fill"></i> <span className="">RSS</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#e6291b] hover:bg-[#b81f14] text-white text-center rounded-lg py-2 px-0">
            <i className="ri-youtube-fill"></i>{" "}
            <span className="">Youtube</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#e13138] hover:bg-[#c91d22] text-white text-center rounded-lg py-2 px-0">
            <i className="ri-pinterest-fill"></i>{" "}
            <span className="">Pinterest</span>
          </div>
        </Link>
      </div>

      {/* news letter */}
      <div className="mb-8">
        <div className="border-b dark:border-gray-700">
          <h3 className="uppercase font-bold tracking-wide border-b-2 inline-block border-[#ff3750] pb-4 dark:text-white">
            Boletín Informativo
          </h3>
        </div>
        <div className="mt-4">
          <input
            type="email"
            className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Tu email"
          />
          <button className="uppercase tracking-wide btn rounded-lg px-6 py-3 bg-[#ff3750] hover:bg-gray-700 mt-5 w-full pt-[14px]">
            Suscribirse
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Social
