import React, { useEffect, useRef, useState } from "react"
import HelmetStructure from "../HelmetStructure"
import ThemeCustomizer from "../ThemeCustomizer"
import Announcement5 from "../announcements/Announcement5"
import { Link } from "gatsby"

const Header5 = () => {
  const [searchOpen, setSearchOpen] = useState(false)
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
        bodyClass={"dark:bg-gray-900 text-base font-body header-1"}
      />
      <ThemeCustomizer />
      <Announcement5 />

      <header className="border-b py-3 dark:border-b-slate-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/*  Logo */}
            <div className="order-2 md:order-1 ms-2 me-2 md:ms-0 md:me-0">
              <Link to="/" className="text-2xl font-bold text-[#ff3750] dark:text-white hover:text-[#062db9] dark:hover:text-[#478cff]">
                crush.news
              </Link>
            </div>
            {/*  Menu start */}
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
                className={` w-full md:flex md:items-center absolute md:relative bg-white left-0 right-0 p-3 z-50 shadow md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700 md:dark:bg-transparent md:dark:border-transparent ${
                  menuOpen ? "block" : "hidden"
                }`}
                id="menu"
                ref={menuRef}
              >
                <ul className="pt-4 text-base text-gray-700 md:flex lg:justify-between md:pt-0 dark:text-slate-200 flex-wrap">
                  <li>
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="/"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className="relative dropdown-button">
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
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
                          to="/glosario"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Glosario
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/internet-culture"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Internet Culture
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/manual-digital"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Manual Digital
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative dropdown-button">
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
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
                          to="/idolos"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Ídolos
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/evolucion-estilo"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Evolución de Estilo
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/ranking-crush"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Ranking Crush
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative dropdown-button">
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="#"
                      onClick={() => toggleMenu("loveLabMenuOpen")}
                    >
                      Love Lab{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                        menuStates.loveLabMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          to="/tu-crush"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Tu Crush
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/relaciones"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Relaciones
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/bienestar-mental"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Bienestar Mental
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative dropdown-button">
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="#"
                      onClick={() => toggleMenu("aestheticLifeMenuOpen")}
                    >
                      Aesthetic Life{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                        menuStates.aestheticLifeMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          to="/estilos"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Estilos
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/beauty-skincare"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Beauty & Skincare
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/deco-room-setup"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Deco & Room Setup
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative dropdown-button">
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="#"
                      onClick={() => toggleMenu("popPicksMenuOpen")}
                    >
                      Pop Picks{" "}
                      <i className="ri-arrow-down-s-line float-right rtl:float-left md:float-none"></i>
                    </Link>
                    <ul
                      className={`rounded-lg dropdown p-2 md:p-4 min-w-44 md:absolute z-50 bg-white dark:bg-slate-800 dark:border-slate-700 border-0 md:border border-gray-200 ${
                        menuStates.popPicksMenuOpen ? "block" : "hidden"
                      }`}
                    >
                      <li className="py-1">
                        <Link
                          to="/series-pelis"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Series & Pelis
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/musica-fandoms"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Música & Fandoms
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          to="/apps-juegos"
                          className="hover:text-[#ff3750] text-sm"
                        >
                          Apps & Juegos
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-0 py-2 md:px-2 lg:px-4 block hover:text-[#ff3750]"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/*  Menu end */}

            <div className="order-3">
              <ul className="flex space-x-4 md:space-x-8 rtl:space-x-reverse">
                {/* Search */}
                <li className="text-md">
                  <Link
                    onClick={() => setSearchOpen(!searchOpen)}
                    to="#"
                    className="hover:text-[#ff3750] text-xl dark:text-slate-200"
                  >
                    <i className="ri-search-line"></i>
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
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                            className="block w-full p-4 ps-10 pr-24 rtl:pe-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Buscar aquí..."
                            required
                          />
                          <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-black hover:bg-[#ff3750] dark:bg-[#ff3750] dark:hover:bg-gray-700"
                          >
                            Buscar
                          </button>
                        </div>
                        <span
                          className="cursor-pointer text-black font-bold dark:text-gray-300 hover:text-[#ff3750] text-xl absolute top-4 right-4"
                          onClick={() => setSearchOpen(false)}
                        >
                          ✕
                        </span>
                      </form>
                    </div>
                  </div>
                </li>
                <li className="text-md">
                  <Link
                    to="/login"
                    className="capitalize transition-all hover:bg-[#ff3750] btn leading-6 text-sm px-6 bg-black rounded-full text-white dark:bg-[#ff3750] dark:hover:bg-gray-700"
                  >
                    iniciar sesión
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header5
