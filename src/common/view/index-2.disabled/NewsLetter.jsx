import React from "react"

const NewsLetter = () => {
  return (
    <React.Fragment>
      <div className="p-5 text-center bg-white rounded shadow dark:bg-gray-800/70 mt-14 lg:mt-0 hover:shadow-lg">
        <div className="relative inline-block -mt-10 -top-5">
          <div className="bg-[#E40666] dark:bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center text-4xl text-white">
            <i className="ri-mail-line"></i>
          </div>
        </div>
        <div className="mb-4">
          <h5 className="text-xl font-bold leading-none capitalize dark:text-white">
            Subscribe To Newsletter
          </h5>
          <p className="my-4 text-base text-gray-500">
            Get the latest news and updates from blogpoint
          </p>
        </div>
        <form className="max-w-sm mx-auto">
          <input
            type="email"
            id="email"
            className="block w-full px-4 py-2 mb-4 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
            placeholder="info@example.com"
            required
          />
          <button
            type="submit"
            className="text-white bg-[#E40666] hover:bg-[#003d3c] font-medium rounded w-full px-0 py-2 text-center dark:bg-[#E40666] dark:hover:bg-gray-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default NewsLetter
