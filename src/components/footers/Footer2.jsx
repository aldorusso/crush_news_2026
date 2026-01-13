import React from "react"
import { Link } from "gatsby"

const Footer2 = () => {
  const tags = [
    { name: "K-Pop", link: "/musica-fandoms" },
    { name: "Gaming", link: "/apps-juegos" },
    { name: "Moda", link: "/estilos" },
    { name: "Series", link: "/series-pelis" },
    { name: "Skincare", link: "/beauty-skincare" },
    { name: "Relaciones", link: "/relaciones" },
    { name: "TikTok", link: "/internet-culture" },
    { name: "Aesthetic", link: "/estilos" },
    { name: "Bienestar", link: "/bienestar-mental" },
    { name: "Fandoms", link: "/musica-fandoms" },
  ]

  return (
    <React.Fragment>
      <footer className="mt-6 bg-white dark:bg-gray-800/70">
        <div className="container px-4 mx-auto">
          <div className="block py-8 mx-auto my-0 text-center">
            <Link to="/" className="text-3xl font-bold text-[#ff3750] dark:text-white hover:text-[#062db9]">
              crush.news
            </Link>
            <p className="max-w-xl py-6 mx-auto my-0 leading-6 text-gray-400">
              Tu fuente de noticias para la Generación Z. Tendencias, cultura pop,
              gaming, K-pop y todo lo que te importa, contado como tú lo entiendes.
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://www.tiktok.com/@crushnews_es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-500 hover:text-[#ff3750] transition-colors"
                aria-label="Síguenos en TikTok"
              >
                <i className="ri-tiktok-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/crushnews_es/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-500 hover:text-[#ff3750] transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="https://x.com/crushnews_es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-500 hover:text-[#ff3750] transition-colors"
                aria-label="Síguenos en X/Twitter"
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a
                href="https://www.youtube.com/@crushnews_es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-500 hover:text-[#ff3750] transition-colors"
                aria-label="Síguenos en YouTube"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
            <div className="flex flex-wrap max-w-xl gap-2 mx-auto my-0 mt-4 justify-center">
              {tags.map((tag, index) => (
                <Link
                  key={`${tag.name}-${index}`}
                  to={tag.link}
                  className="bg-gray-100 hover:bg-[#ff3750] hover:text-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full dark:bg-gray-700 dark:hover:bg-[#ff3750] dark:text-gray-300 transition-colors"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 py-4 mx-auto text-xs text-center dark:text-white">
            <p>Copyright © {new Date().getFullYear()} crush.news. Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer2
