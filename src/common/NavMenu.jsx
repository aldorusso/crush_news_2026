import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"

const NavMenu = ({ color, darkcolor, navclass }) => {
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
        setMenuOpen(false)
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
      <nav className={navclass}>
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
          } w-full md:flex md:items-center md:w-auto absolute bg-white left-0 right-0 p-3 z-50 shadow md:shadow-none md:p-0 md:bg-transparent dark:bg-slate-800 dark:border-slate-700`}
          id="menu"
        >
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 dark:text-slate-200">
            <li>
              <Link
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:${darkcolor}`}
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className={`py-2 md:px-2 lg:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
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
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/glosario"
                  >
                    Glosario
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/internet-culture"
                  >
                    Internet Culture
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/manual-digital"
                  >
                    Manual Digital
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
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
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/idolos"
                  >
                    Ídolos
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/evolucion-estilo"
                  >
                    Evolución de Estilo
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/ranking-crush"
                  >
                    Ranking Crush
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
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
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/tu-crush"
                  >
                    Tu Crush
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/relaciones"
                  >
                    Relaciones
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/bienestar-mental"
                  >
                    Bienestar Mental
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
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
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/estilos"
                  >
                    Estilos
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/beauty-skincare"
                  >
                    Beauty & Skincare
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/deco-room-setup"
                  >
                    Deco & Room Setup
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className={`py-2 lg:px-2 xl:px-4 block hover:${color} dark:hover:text-[${darkcolor}]`}
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
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/series-pelis"
                  >
                    Series & Pelis
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
                    to="/musica-fandoms"
                  >
                    Música & Fandoms
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className={`hover:text-${color} text-sm dark:hover:text-${darkcolor}`}
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
    </React.Fragment>
  )
}

export default NavMenu
