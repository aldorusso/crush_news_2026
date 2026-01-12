import { Link } from "gatsby"
import React from "react"

const Social2 = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-3 gap-2 mb-8">
        <Link to="#" target="_blank">
          <div className="bg-[#3b579d] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-[#314881]">
            <div className="text-2xl">
              <i className="ri-facebook-fill"></i>
            </div>
            <span className="block md:hidden lg:block">facebook</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#2caae1] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-[#1d95c9]">
            <div className="text-2xl">
              <i className="ri-twitter-x-fill"></i>
            </div>
            <span className="block md:hidden lg:block">Twitter</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#ee4838] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-[#eb2614]">
            <div className="text-2xl">
              <i className="ri-linkedin-fill"></i>
            </div>
            <span className="block md:hidden lg:block">Linkedin</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#ee4838] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-[#eb2614]">
            <div className="text-2xl">
              <i className="ri-rss-fill"></i>
            </div>
            <span className="block md:hidden lg:block">RSS</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#e6291b] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-[#b81f14]">
            <div className="text-2xl">
              <i className="ri-youtube-fill"></i>
            </div>
            <span className="block md:hidden lg:block">YouTube</span>
          </div>
        </Link>

        <Link to="#" target="_blank">
          <div className="bg-[#e13138] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-[#c91d22]">
            <div className="text-2xl">
              <i className="ri-pinterest-fill"></i>
            </div>
            <span className="block md:hidden lg:block">Pinterest</span>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Social2
