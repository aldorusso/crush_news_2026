import { Link } from "gatsby"
import React from "react"

const Footer5 = () => {
  return (
    <React.Fragment>
      <footer className="bg-black mt-16 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xs:gap-0 sm:gap-8 text-white py-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-6">
                Cultura Z
              </h2>
              <ul>
                <li className="py-1">
                  <Link
                    to="/glosario"
                    className="opacity-60 hover:text-[#ff3750] hover:opacity-100 text-sm"
                  >
                    Glosario
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/internet-culture"
                    className="opacity-60 hover:text-[#ff3750] hover:opacity-100 text-sm"
                  >
                    Internet Culture
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/manual-digital"
                    className="opacity-60 hover:text-[#ff3750] hover:opacity-100 text-sm"
                  >
                    Manual Digital
                  </Link>
                </li>
              </ul>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-6 mt-6">
                Crush Files
              </h2>
              <ul>
                <li className="py-1">
                  <Link
                    to="/idolos"
                    className="opacity-60 hover:text-[#ff3750] hover:opacity-100 text-sm"
                  >
                    Ídolos
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/evolucion-estilo"
                    className="opacity-60 hover:text-[#ff3750] hover:opacity-100 text-sm"
                  >
                    Evolución de Estilo
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/ranking-crush"
                    className="opacity-60 hover:text-[#ff3750] hover:opacity-100 text-sm"
                  >
                    Ranking Crush
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 mt-6 md:mt-0">
                Love Lab
              </h2>
              <ul>
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
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 mt-6">
                Aesthetic Life
              </h2>
              <ul>
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
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-6 mt-6 md:mt-0">
                Pop Picks
              </h2>
              <ul>
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
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-6 mt-6 md:mt-0">
                Sitio
              </h2>
              <ul>
                <li className="py-1">
                  <Link
                    to="/about"
                    className="hover:text-[#ff3750] text-sm"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/authors"
                    className="hover:text-[#ff3750] text-sm"
                  >
                    Autores
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/contact"
                    className="hover:text-[#ff3750] text-sm"
                  >
                    Contacto
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/advertise"
                    className="hover:text-[#ff3750] text-sm"
                  >
                    Publicidad
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/tags"
                    className="hover:text-[#ff3750] text-sm"
                  >
                    Etiquetas
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="/archive"
                    className="hover:text-[#ff3750] text-sm"
                  >
                    Archivo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="opacity-20" />
          <div className="text-white py-10 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <Link to="/" className="text-2xl font-bold text-[#ff3750]">
                crush.news
              </Link>
            </div>
            <div className="col-span-2">
              <form className="flex">
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pl-4 pr-8 rtl:pe-8 rtl:pr-4 capitalize"
                  placeholder="Ingresa tu email"
                  required
                />
                <button className="btn rounded-lg px-3 lg:px-6 py-3 relative -left-5 md:-left-5 rtl:-right-5 rtl:md:-left-5 bg-[#ff3750] hover:bg-gray-900 dark:hover:bg-gray-700 capitalize">
                  Suscribirse
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2">
                Al suscribirte aceptas nuestra{" "}
                <Link to="/privacy-policy" className="text-[#ff3750] hover:underline">
                  Política de Privacidad
                </Link>
              </p>
            </div>
            <div className="col-span-1">
              <ul className="flex space-x-4 md:space-x-0 gap-2 rtl:space-x-reverse md:float-right flex-wrap">
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <a href="https://www.facebook.com/crushnewsES/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <a href="https://x.com/crushnews_es" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </li>
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <a href="https://www.instagram.com/crushnews_es/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <a href="https://www.tiktok.com/@crushnews_es" target="_blank" rel="noopener noreferrer">
                    <i className="ri-tiktok-fill"></i>
                  </a>
                </li>
                <li className="text-base text-black bg-white w-8 h-8 text-center rounded hover:bg-[#ff3750] hover:text-white leading-8">
                  <a href="https://www.youtube.com/@crushnews_es" target="_blank" rel="noopener noreferrer">
                    <i className="ri-youtube-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="opacity-20" />
        <div className="container mx-auto px-4">
          <div className="block sm:flex justify-between text-white items-center">
            <div>
              <p className="text-white opacity-70 text-sm py-4">
                Copyright © {new Date().getFullYear()} crush.news. Todos los derechos reservados
              </p>
            </div>
            <div>
              <div className="sm:gap-3 pb-4 md:pb-0 sm:pt-4 md:pt-0">
                <ul className="flex gap-2 flex-wrap">
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="/privacy-policy">Privacidad</Link>
                  </li>
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="/terms-conditions">Términos</Link>
                  </li>
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="/cookie-policy">Cookies</Link>
                  </li>
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="/disclaimer">Aviso Legal</Link>
                  </li>
                  <li className="border border-slate-700 rounded-lg hover:text-[#ff3750] text-xs px-3 py-2 cursor-pointer">
                    <Link to="/contact">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer5
