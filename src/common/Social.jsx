import React from "react"

const Social = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-2 mb-8 mt-8">
        <a
          href="https://www.facebook.com/crushnewsES/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#3b579d] hover:bg-[#314881] text-white text-center rounded-lg py-2 px-0">
            <i className="ri-facebook-fill"></i>{" "}
            <span className="">Facebook</span>
          </div>
        </a>

        <a
          href="https://x.com/crushnews_es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#2caae1] hover:bg-[#1d95c9] text-white text-center rounded-lg py-2 px-0">
            <i className="ri-twitter-x-fill"></i>{" "}
            <span className="">Twitter</span>
          </div>
        </a>

        <a
          href="https://www.instagram.com/crushnews_es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white text-center rounded-lg py-2 px-0">
            <i className="ri-instagram-fill"></i>{" "}
            <span className="">Instagram</span>
          </div>
        </a>

        <a
          href="https://www.youtube.com/@crushnews_es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#e6291b] hover:bg-[#b81f14] text-white text-center rounded-lg py-2 px-0">
            <i className="ri-youtube-fill"></i>{" "}
            <span className="">Youtube</span>
          </div>
        </a>

        <a
          href="https://www.tiktok.com/@crushnews_es"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2"
        >
          <div className="bg-black hover:bg-gray-800 text-white text-center rounded-lg py-2 px-0">
            <i className="ri-tiktok-fill"></i>{" "}
            <span className="">TikTok</span>
          </div>
        </a>
      </div>

      {/* news letter */}
      <div className="mb-8">
        <div className="border-b dark:border-gray-700">
          <h3 className="uppercase font-bold tracking-wide border-b-2 inline-block border-[#ff3750] pb-4 dark:text-white">
            Newsletter
          </h3>
        </div>
        <div className="mt-4">
          <input
            type="email"
            className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Tu email"
          />
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Al suscribirte aceptas nuestra{" "}
            <a href="/privacy-policy" className="text-[#ff3750] hover:underline">
              Política de Privacidad
            </a>
            .
          </p>
          <button className="uppercase tracking-wide btn rounded-lg px-6 py-3 bg-[#ff3750] hover:bg-gray-700 mt-3 w-full pt-[14px]">
            Suscribirse
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Social
