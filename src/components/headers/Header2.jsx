import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import Announcement2 from "../announcements/Announcement2"
import HelmetStructure from "../HelmetStructure"
import ThemeCustomizer from "../ThemeCustomizer"
const Header2 = () => {
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
        bodyClass={"dark:bg-gray-900 text-base font-body bg-[#F5F5F5] header-2"}
      />
      <ThemeCustomizer />
      <Announcement2 />

      {/* header */}
      <header className="bg-white shadow md:shadow-none md:bg-transparent dark:bg-slate-800 dark:md:bg-transparent">
        <div className="container px-4 mx-auto">
          <nav className="flex items-center justify-between px-0 py-3 bg-white rounded shadow-none md:shadow md:px-6 md:py-4 dark:bg-slate-800">
            {/* Logo */}
            <div className="order-2 md:order-1 ms-2 me-2 md:ms-0 md:me-0">
              <Link to="/" className="text-2xl font-bold text-[#ff3750] dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                crush.news
              </Link>
            </div>

            {/* navmenu */}
            <nav className="order-1 md:order-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="block w-6 h-6 cursor-pointer md:hidden dark:text-white"
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
                className={`absolute left-0 right-0 z-50 w-full p-3 bg-white shadow md:flex md:items-center md:w-auto md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700 ${
                  menuOpen ? "block" : "hidden"
                }`}
                id="menu"
                ref={menuRef}
              >
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 dark:text-slate-200">
                  <li>
                    <Link
                      className="py-2 md:px-2 lg:px-4 block hover:text-[#E40666] dark:hover:text-[#E40666]"
                      to="/index-2"
                      onClick={() => toggleMenu("homeMenuOpen")}
                    >
                      Home <i className="ri-arrow-down-s-line"></i>
                    </Link>
                    <ul
                      className={`z-50 p-2 bg-white border-0 border-gray-200 rounded-lg dropdown md:p-4 min-w-44 md:absolute dark:bg-slate-800 dark:border-slate-700 md:border ${
                        menuStates.homeMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      {" "}
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/"
                        >
                          Home Style 1
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/index-2"
                        >
                          Home Style 2
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/index-3"
                        >
                          Home Style 3
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/index-4"
                        >
                          Home Style 4
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="py-2 md:px-2 lg:px-4 block hover:text-[#E40666] dark:hover:text-[#E40666]"
                      to="#"
                      onClick={() => toggleMenu("blogMenuOpen")}
                    >
                      Blog <i className="ri-arrow-down-s-line"></i>
                    </Link>
                    <ul
                      className={`z-50 p-2 bg-white border-0 border-gray-200 rounded-lg dropdown md:p-4 min-w-44 md:absolute dark:bg-slate-800 dark:border-slate-700 md:border ${
                        menuStates.blogMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/blog-tag"
                        >
                          Blog Tag
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/left-sidebar"
                        >
                          Left Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/right-sidebar"
                        >
                          Right Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/no-sidebar"
                        >
                          No Sidebar
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/single-post"
                        >
                          Single Post
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="py-2 md:px-2 lg:px-4 block hover:text-[#E40666] dark:hover:text-[#E40666]"
                      to="#"
                      onClick={() => toggleMenu("postFormatMenuOpen")}
                    >
                      Post Format <i className="ri-arrow-down-s-line"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-4 min-w-44 absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border border-gray-200 ${
                        menuStates.postFormatMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/post-format-audio"
                        >
                          Post Format Audio
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/post-format-gallery"
                        >
                          Post Format Gallery
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/post-format-standard"
                        >
                          Post Format Standard
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/post-format-text"
                        >
                          Post Format Text
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                          to="/post-format-videos"
                        >
                          Post Format Video
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="py-2 md:px-2 lg:px-4 block hover:text-[#E40666] dark:hover:text-[#E40666]"
                      to="#"
                      onClick={() => toggleMenu("pagesMenuOpen")}
                    >
                      Pages <i className="ri-arrow-down-s-line"></i>
                    </Link>
                    <div
                      className={`${menuStates.pagesMenuOpen ? "block" : "hidden"} absolute left-0 right-0 z-50`}
                    >
                      <div
                        id="mega-menu-full-dropdown"
                        className="mt-1 bg-white border-gray-200 rounded-lg shadow-sm border-y dark:bg-slate-800 dark:border-slate-700"
                      >
                        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-4 md:px-6">
                          <ul>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/about"
                              >
                                About Us Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/404"
                              >
                                404 Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/grid-gallery"
                              >
                                Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/masonry-gallery"
                              >
                                Masonry Gallery Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/services"
                              >
                                Service Page
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/search"
                              >
                                Search Page
                              </Link>
                            </li>
                          </ul>
                          <ul>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/post-format-audio"
                              >
                                Post Format Audio
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/post-format-gallery"
                              >
                                Post Format Gallery
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/post-format-standard"
                              >
                                Post Format Standard
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/post-format-text"
                              >
                                Post Format Text
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/post-format-videos"
                              >
                                Post Format Video
                              </Link>
                            </li>
                          </ul>
                          <ul>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/blog-tag"
                              >
                                Blog Tag
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/left-sidebar"
                              >
                                Left Sidebar
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/right-sidebar"
                              >
                                Right Sidebar
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/no-sidebar"
                              >
                                No Sidebar
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="hover:text-[#E40666] text-sm dark:hover:text-[#E40666]"
                                to="/single-post"
                              >
                                Single Post
                              </Link>
                            </li>
                          </ul>
                          <div>
                            <img
                              className="w-full h-auto max-w-full rounded-lg"
                              src="https://placehold.co/280x192.jpg"
                              alt="menu "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      className="py-2 md:px-2 lg:px-4 block hover:text-[#E40666] dark:hover:text-[#E40666]"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="py-2 md:px-2 lg:px-4 block hover:text-[#E40666] dark:hover:text-[#E40666]"
                      to="#"
                      onClick={() => toggleMenu("allPagesMenuOpen")}
                    >
                      All Pages <i className="ri-arrow-down-s-line"></i>
                    </Link>
                    <div
                      className={`absolute left-0 right-0 z-50 ${
                        menuStates.allPagesMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <div
                        id="mega-menu-full-dropdown"
                        className="mt-1 bg-white border-gray-200 rounded-lg shadow-sm border-y dark:bg-slate-800 dark:border-slate-700"
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
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header2
