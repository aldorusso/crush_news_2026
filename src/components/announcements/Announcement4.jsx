import { Link } from "gatsby"
import React from "react"

const Announcement4 = () => {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-blue-800 via-purple-800 to-red-500 text-white py-2">
        <div className="container custom-container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <ul className="flex items-center gap-7">
                <li className="hidden text-sm md:block">
                  {" "}
                  <Link to="/index-10" className="hover:text-slate-300">
                    Inicio
                  </Link>
                </li>
                <li className="hidden text-sm md:block">
                  {" "}
                  <Link to="/index-10" className="hover:text-slate-300">
                    Miembro
                  </Link>
                </li>
                <li className="hidden text-sm md:block">
                  {" "}
                  <Link to="/index-10" className="hover:text-slate-300">
                    Ofertas Especiales
                  </Link>
                </li>
                <li className="hidden text-sm md:block">
                  {" "}
                  <Link to="/index-10" className="hover:text-slate-300">
                    Información
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-2">
                <li className="text-sm bg-white bg-opacity-20 px-2.5 py-1 font-medium rounded-full">
                  Fecha Actual:
                </li>
                <li className="text-sm">{new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Announcement4
