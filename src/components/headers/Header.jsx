import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import HelmetStructure from "../HelmetStructure"
import ThemeCustomizer from "../ThemeCustomizer"
import Announcement from "../announcements/Announcement"

const Header = () => {
  const [searchOpen, setBuscarOpen] = useState(false)

  const [menuOpen, setMenuOpen] = React.useState(false)

  const [menuStates, setMenuStates] = useState({
    culturaZMenuOpen: false,
    crushFilesMenuOpen: false,
    loveLabMenuOpen: false,
    aestheticLifeMenuOpen: false,
    popPicksMenuOpen: false,
  })

  const toggleMenu = menu => {
    setMenuStates(prevState => ({
      ...prevState,
      [menu]: !prevState[menu],
      // Close other menus
      culturaZMenuOpen: menu === "culturaZMenuOpen" ? !prevState[menu] : false,
      crushFilesMenuOpen: menu === "crushFilesMenuOpen" ? !prevState[menu] : false,
      loveLabMenuOpen: menu === "loveLabMenuOpen" ? !prevState[menu] : false,
      aestheticLifeMenuOpen: menu === "aestheticLifeMenuOpen" ? !prevState[menu] : false,
      popPicksMenuOpen: menu === "popPicksMenuOpen" ? !prevState[menu] : false,
    }))
  }

  const menuRef = useRef()

  useEffect(() => {
    const handleOutsideClick = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuStates({
          culturaZMenuOpen: false,
          crushFilesMenuOpen: false,
          loveLabMenuOpen: false,
          aestheticLifeMenuOpen: false,
          popPicksMenuOpen: false,
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
      <Announcement />

      {/* Header */}
      <header className="mt-0 bg-white shadow md:mt-8 md:shadow-none md:bg-transparent dark:bg-slate-800 dark:md:bg-transparent">
        <div className="container px-4 mx-auto">
          <nav className="flex items-center shadow-none md:shadow rounded-2xl justify-between px-0 md:px-6 py-3 md:py-2 bg-white dark:bg-slate-800">
            {/* Logo */}
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
                ref={menuRef}
                className={`${
                  menuOpen ? "block" : "hidden"
                } w-full md:flex lg:items-center absolute md:relative bg-white left-0 right-0 p-3 z-50 shadow md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700`}
                id="menu"
              >
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 dark:text-slate-200 flex-wrap">
                  <li>
                    <Link
                      className={`px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="/"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="#"
                      onClick={() => toggleMenu("culturaZMenuOpen")}
                    >
                      Cultura Z{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                        menuStates.culturaZMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/glosario"
                        >
                          Glosario
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/internet-culture"
                        >
                          Internet Culture
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/manual-digital"
                        >
                          Manual Digital
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className={`px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="#"
                      onClick={() => toggleMenu("crushFilesMenuOpen")}
                    >
                      Crush Files{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                        menuStates.crushFilesMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/idolos"
                        >
                          Ídolos
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/evolucion-estilo"
                        >
                          Evolución de Estilo
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/ranking-crush"
                        >
                          Ranking Crush
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className={`px-0 md:px-2 lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="#"
                      onClick={() => toggleMenu("loveLabMenuOpen")}
                    >
                      Love Lab{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-4 min-w-44 absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border border-gray-200 ${
                        menuStates.loveLabMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/tu-crush"
                        >
                          Tu Crush
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/relaciones"
                        >
                          Relaciones
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/bienestar-mental"
                        >
                          Bienestar Mental
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className={`md:p-[10px] lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="#"
                      onClick={() => toggleMenu("aestheticLifeMenuOpen")}
                    >
                      Aesthetic Life{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-4 min-w-44 absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border border-gray-200 ${
                        menuStates.aestheticLifeMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/estilos"
                        >
                          Estilos
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/beauty-skincare"
                        >
                          Beauty & Skincare
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/deco-room-setup"
                        >
                          Deco & Room Setup
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className={`md:p-[10px] lg:p-4 py-2 block hover:text-[#062DB9] dark:hover:text-[#478cff]`}
                      to="#"
                      onClick={() => toggleMenu("popPicksMenuOpen")}
                    >
                      Pop Picks{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-4 min-w-44 absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border border-gray-200 ${
                        menuStates.popPicksMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/series-pelis"
                        >
                          Series & Pelis
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/musica-fandoms"
                        >
                          Música & Fandoms
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={`hover:text-[#062DB9] text-sm dark:hover:text-[#478cff]`}
                          to="/apps-juegos"
                        >
                          Apps & Juegos
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Buscar */}
            <div className="order-3">
              <ul className="flex space-x-4 md:space-x-4 rtl:space-x-reverse">
                <li
                  x-data="{ open: false, get isOpen() { return this.open }, toggle() { this.open = ! this.open }, }"
                  className="text-md"
                >
                  <Link
                    onClick={() => setBuscarOpen(!searchOpen)}
                    to="#"
                    className="hover:text-[#062DB9] text-base dark:text-slate-200 dark:hover:text-[#478cff] flex items-center"
                  >
                    <i className="ri-search-line"></i>{" "}
                    <span className="hidden lg:block ms-1">Buscar</span>
                  </Link>
                  <div
                    x-show="isOpen"
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
                            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Buscar todo tipo de noticias"
                            required
                          />
                          <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-black hover:bg-[#062DB9] dark:bg-[#062DB9] dark:hover:bg-gray-700"
                          >
                            Buscar
                          </button>
                        </div>
                        <button
                          className="cursor-pointer text-black font-bold dark:text-gray-300 hover:text-[#062DB9] text-xl absolute top-4 right-4"
                          onClick={() => setBuscarOpen(false)}
                        >
                          ✕
                        </button>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
