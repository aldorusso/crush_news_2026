import React from "react"
import { Link } from "gatsby"
import NavMenu from "../../common/NavMenu"
import HelmetStructure from "../HelmetStructure"
import ThemeCustomizer from "../ThemeCustomizer"
import Announcement4 from "../announcements/Announcement4"

const Header4 = () => {
  return (
    <React.Fragment>
      <HelmetStructure
        bodyClass={"dark:bg-gray-900 text-base font-body header-3"}
      />
      <ThemeCustomizer />
      <Announcement4 />

      {/* Header */}
      <header className="border-b py-2 dark:border-b-slate-800 dark:bg-slate-800">
        <div className="container custom-container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="order-2 md:order-1 ms-2 me-2 md:ms-0 md:me-0">
              <Link to="/" className="text-2xl font-bold text-[#ff3750] dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                crush.news
              </Link>
            </div>

            {/* Menu start */}
            <NavMenu
              color="[#E32C26]"
              darkcolor="[#E32C26]"
              navclass="order-1 md:order-2"
            />

            {/* search */}
            <div className="flex items-center order-3">
              <form className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Buscar
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3 dark:text-white">
                    <i className="ri-search-line"></i>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 text-sm text-gray-900 bg-transparent border border-transparent outline-none sm:p-4 ps-8 sm:ps-10 dark:placeholder-gray-400 dark:text-white focus:border-slate-300 focus:rounded-2xl focus:border dark:focus:border-slate-500"
                    placeholder="Buscar..."
                    required
                  />
                </div>
              </form>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header4
