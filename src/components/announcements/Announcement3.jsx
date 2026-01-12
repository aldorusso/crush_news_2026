import { Link } from "gatsby"
import React from "react"

const Announcement3 = () => {
  return (
    <React.Fragment>
      <div className="bg-[#E32C26] text-white py-1">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <ul className="flex items-center">
                <li className="px-1 py-1 text-xs md:px-4">
                  <i className="ri-cloud-line"></i> 9.4 Los Ángeles | Miércoles,
                  {new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </li>
                <li className="hidden px-4 text-xs border-r rtl:border-l rtl:border-r-0 md:px-2 lg:px-4 md:block">
                  <Link to="/login" className="hover:text-slate-300">
                    Iniciar Sesión / Registrarse
                  </Link>
                </li>
                <li className="hidden px-4 text-xs border-r rtl:border-l rtl:border-r-0 md:px-2 lg:px-4 md:block">
                  <Link to="/about" className="hover:text-slate-300">
                    Acerca de Nosotros
                  </Link>
                </li>
                <li className="hidden px-4 text-xs md:block md:px-2 lg:px-4">
                  <Link to="/contact" className="hover:text-slate-300">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-2 md:space-x-4 rtl:md:space-x-reverse">
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-twitter-x-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-linkedin-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-rss-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Announcement3
