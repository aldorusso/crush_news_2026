import { Link } from "gatsby"
import React, { useState } from "react"

const Announcement2 = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  return (
    <React.Fragment>
      <div className="bg-[#E40666] text-white py-2">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <ul className="flex items-center">
                <li className="hidden px-4 text-xs border-r rtl:border-l rtl:border-r-0 md:px-2 lg:px-4 md:block">
                  {" "}
                  <Link to="/login" className="hover:text-slate-300">
                    Iniciar Sesión / Registrarse
                  </Link>{" "}
                </li>
                <li className="hidden px-4 text-xs border-r rtl:border-l rtl:border-r-0 md:px-2 lg:px-4 md:block">
                  {" "}
                  <Link to="/about" className="hover:text-slate-300">
                    Acerca de Nosotros
                  </Link>{" "}
                </li>
                <li className="hidden px-4 text-xs md:block md:px-2 lg:px-4">
                  {" "}
                  <Link to="/contact" className="hover:text-slate-300">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-4 md:space-x-4 rtl:space-x-reverse">
                <li className="text-md">
                  <Link
                    onClick={() => setSearchOpen(!searchOpen)}
                    to="#"
                    className="hover:text-gray-300 text-base dark:text-slate-200 dark:hover:text-[#E40666] flex items-center"
                  >
                    <i className="ri-search-line"></i>{" "}
                    <span className="hidden lg:block ms-1">Buscar</span>
                  </Link>
                  <div
                    className={`absolute left-0 right-0 z-50 top-0 bg-white p-10 shadow dark:bg-gray-700 ${searchOpen ? "block" : "hidden"}`}
                  >
                    <div className="container mx-auto">
                      <form>
                        <label
                          htmlFor="default-search"
                          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                          Buscar
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                            <svg
                              className="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                              />
                            </svg>
                          </div>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 rtl:pl-24 rtl:pr-10 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Buscar todo tipo de noticias"
                            required
                          />
                          <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-black hover:bg-[#E40666] dark:bg-[#E40666] dark:hover:bg-gray-700"
                          >
                            Buscar
                          </button>
                        </div>
                        <button
                          className="cursor-pointer text-black font-bold dark:text-gray-300 hover:text-[#E40666] text-xl absolute top-4 right-4"
                          onClick={() => setSearchOpen(false)}
                        >
                          ✕
                        </button>
                      </form>
                    </div>
                  </div>
                </li>
                <li className="text-md">
                  <Link
                    to="/login"
                    className="capitalize transition-all hover:text-gray-300 text-base dark:text-slate-200 dark:hover:text-[#E40666] flex items-center"
                  >
                    <i className="ri-user-line"></i>{" "}
                    <span className="hidden lg:block ms-1">iniciar sesión</span>
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Announcement2
