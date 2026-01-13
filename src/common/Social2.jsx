import React from "react"

const Social2 = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-3 gap-2 mb-8">
        <a href="https://www.facebook.com/crushnewsES/" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#3b579d] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-[#314881]">
            <div className="text-2xl">
              <i className="ri-facebook-fill"></i>
            </div>
            <span className="block md:hidden lg:block">Facebook</span>
          </div>
        </a>

        <a href="https://x.com/crushnews_es" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#2caae1] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-[#1d95c9]">
            <div className="text-2xl">
              <i className="ri-twitter-x-fill"></i>
            </div>
            <span className="block md:hidden lg:block">Twitter</span>
          </div>
        </a>

        <a href="https://www.instagram.com/crushnews_es/" target="_blank" rel="noopener noreferrer">
          <div className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:opacity-90">
            <div className="text-2xl">
              <i className="ri-instagram-fill"></i>
            </div>
            <span className="block md:hidden lg:block">Instagram</span>
          </div>
        </a>

        <a href="https://www.youtube.com/@crushnews_es" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#e6291b] text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-[#b81f14]">
            <div className="text-2xl">
              <i className="ri-youtube-fill"></i>
            </div>
            <span className="block md:hidden lg:block">YouTube</span>
          </div>
        </a>

        <a href="https://www.tiktok.com/@crushnews_es" target="_blank" rel="noopener noreferrer" className="col-span-2">
          <div className="bg-black text-white text-center rounded-lg py-4 sm:py-3 sm:px-3 xl:py-6 px-4 xl:px-6 hover:bg-gray-800">
            <div className="text-2xl">
              <i className="ri-tiktok-fill"></i>
            </div>
            <span className="block md:hidden lg:block">TikTok</span>
          </div>
        </a>
      </div>
    </React.Fragment>
  )
}

export default Social2
