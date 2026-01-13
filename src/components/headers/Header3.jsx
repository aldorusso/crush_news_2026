import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import HelmetStructure from "../HelmetStructure"
import ThemeCustomizer from "../ThemeCustomizer"
import Announcement3 from "../announcements/Announcement3"
const Header3 = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const [menuStates, setMenuStates] = useState({
    homeMenuOpen: false,
    blogMenuOpen: false,
    postFormatMenuOpen: false,
    pagesMenuOpen: false,
    allPagesMenuOpen: false,
  })
  const toggleMenu = menu => {
    setMenuStates(prevState => ({
      ...prevState,
      [menu]: !prevState[menu],
      // Close other menus
      homeMenuOpen: menu === "homeMenuOpen" ? !prevState[menu] : false,
      blogMenuOpen: menu === "blogMenuOpen" ? !prevState[menu] : false,
      postFormatMenuOpen:
        menu === "postFormatMenuOpen" ? !prevState[menu] : false,
      pagesMenuOpen: menu === "pagesMenuOpen" ? !prevState[menu] : false,
      allPagesMenuOpen: menu === "allPagesMenuOpen" ? !prevState[menu] : false,
    }))
  }
  const menuRef = useRef()

  useEffect(() => {
    const handleOutsideClick = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuStates({
          blogMenuOpen: false,
          postFormatMenuOpen: false,
          pagesMenuOpen: false,
          allPagesMenuOpen: false,
        })
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <React.Fragment>
      <HelmetStructure
        bodyClass={"text-base dark:bg-gray-900 font-body header-3"}
      />
      <ThemeCustomizer />
      <Announcement3 />

      {/* header */}
      <header className="border-b py-2 dark:border-b-slate-800 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between gap-2">
            <div className="order-2 md:order-1 ms-2 me-2 md:ms-0 md:me-0">
              <Link to="/" className="text-2xl font-bold text-[#ff3750] dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                crush.news
              </Link>
            </div>

            {/* Menu start */}
            <nav className="order-1 md:order-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <div
                className={` ${
                  menuOpen ? "block" : "hidden"
                } w-full md:flex md:items-center md:w-auto absolute bg-white left-0 right-0 p-3 z-50 shadow md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700`}
                id="menu"
              >
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 dark:text-slate-200 flex-wrap">
                  <li>
                    <Link
                      className="py-2 lg:px-2 xl:px-4 block hover:text-[#E32C26] dark:hover:text-[#E32C26]"
                      to="/index-3"
                      onClick={() => toggleMenu("homeMenuOpen")}
                    >
                      Home{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                        menuStates.homeMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          to="/"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Home Style 1
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/index-2"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Home Style 2
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/index-3"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Home Style 3
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/index-4"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Home Style 4
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative dropdown-button">
                    <Link
                      className="py-2 lg:px-2 xl:px-4 block hover:text-[#E32C26] dark:hover:text-[#E32C26]"
                      to="#"
                      onClick={() => toggleMenu("blogMenuOpen")}
                    >
                      Blog{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                        menuStates.blogMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          to="/blog-tag"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Blog Tag
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/left-sidebar"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Left Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/right-sidebar"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Right Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/no-sidebar"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          No Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/single-post"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Single Post
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative dropdown-button">
                    <Link
                      className="py-2 lg:px-2 xl:px-4 block hover:text-[#E32C26] dark:hover:text-[#E32C26]"
                      to="#"
                      onClick={() => toggleMenu("postFormatMenuOpen")}
                    >
                      Post Format{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                        menuStates.postFormatMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          to="/post-format-audio"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Post Format Audio
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/post-format-gallery"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Post Format Gallery
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/post-format-standard"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Post Format Standard
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/post-format-text"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Post Format Text
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/post-format-videos"
                          className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                        >
                          Post Format Video
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="py-2 lg:px-2 xl:px-4 block hover:text-[#E32C26] dark:hover:text-[#E32C26]"
                      to="#"
                      onClick={() => toggleMenu("pagesMenuOpen")}
                    >
                      Pages{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <div
                      className={`${menuStates.pagesMenuOpen ? "block" : "hidden"} absolute left-0 right-0 z-50`}
                    >
                      <div
                        id="mega-menu-full-dropdown"
                        className="mt-1 bg-white border-gray-200 shadow-sm md:border-y dark:bg-slate-800 dark:border-gray-700 rounded-lg border-0 md:border"
                      >
                        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-4 md:px-6">
                          <ul aria-labelledby="mega-menu-full-dropdown-button">
                            <li className="py-1">
                              <Link
                                to="/about"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                About Us Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/404"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                404 Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/grid-gallery"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/masonry-gallery"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Masonry Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/service"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Service Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/search"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Search Page
                              </Link>
                            </li>
                          </ul>
                          <ul>
                            <li className="py-1">
                              <Link
                                to="/post-format-audio"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Post Format Audio Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/post-format-gallery"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Post Format Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/post-format-standard"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Post Format Standard Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/post-format-text"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Post Format Text Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/post-format-video"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Post Format Video Page
                              </Link>
                            </li>
                          </ul>
                          <ul className="hidden md:block">
                            <li className="py-1">
                              <Link
                                to="/blog-tag"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Blog Tag Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/left-sidebar"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Left Sidebar Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/right-sidebar"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Right Sidebar Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/no-sidebar"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                No Sidebar Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                to="/single-post"
                                className="hover:text-[#E32C26] text-sm dark:hover:text-[#E32C26]"
                              >
                                Single Post Page
                              </Link>
                            </li>
                          </ul>
                          <div>
                            <img
                              className="h-auto w-full max-w-full rounded-lg"
                              src="https://placehold.co/280x192.jpg"
                              alt="menu-placeholder"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      className="py-2 lg:px-2 xl:px-4 block hover:text-[#E32C26] dark:hover:text-[#E32C26]"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li x-data="{ open: false, get isOpen() { return this.open }, toggle() { this.open = ! this.open }, }">
                    <Link
                      className="py-2 lg:px-2 xl:px-4 block hover:text-[#E32C26] dark:hover:text-[#E32C26]"
                      to="#"
                      onClick={() => toggleMenu("allPagesMenuOpen")}
                    >
                      All Pages{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <div
                      className={`absolute left-0 right-0 z-50 ${
                        menuStates.allPagesMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <div
                        id="mega-menu-full-dropdown"
                        className="mt-1 bg-white border-gray-200 shadow-sm md:border-y dark:bg-slate-800 dark:border-slate-700 rounded-lg border-0 md:border"
                      >
                        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                          <ul aria-labelledby="mega-menu-full-dropdown-button">
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Online Stores
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Segmentation
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Marketing CRM
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Online Stores
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Segmentation
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Marketing CRM
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                          </ul>
                          <ul className="hidden md:block">
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Audience Management
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Creative Tools
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                <div className="font-semibold">
                                  Marketing Automation
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Connect with third-party tools that you're
                                  already using.
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>

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

export default Header3
