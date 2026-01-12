import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import banner from "../assets/images/placeholder"
import Social2 from "../common/Social2"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import img1 from "../assets/images/placeholder"
import img2 from "../assets/images/placeholder"
import img3 from "../assets/images/placeholder"
import img4 from "../assets/images/placeholder"
import img5 from "../assets/images/placeholder"
import img6 from "../assets/images/placeholder"

const PostFormatVideo = () => {
  const swiperData = [
    { id: 1, margin: false, image: img1 },
    { id: 2, margin: true, image: img2 },
    { id: 3, margin: true, image: img3 },
    { id: 4, margin: false, image: img4 },
    { id: 5, margin: true, image: img5 },
    { id: 6, margin: true, image: img6 },
  ]
  return (
    <React.Fragment>
      <Layout5>
        {/* breadcrumb */}
        <BreadCrumb title="Formato Video" titleType="Artículo" />

        <div className="container px-4 mx-auto">
          <div className="mb-8">
            <Link to="/single-post" target="_blank">
              <img
                className="w-full h-auto max-w-full mt-8 rounded-lg"
                src={banner}
                alt="post banner"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <iframe
                src="https://www.youtube.com/embed/CLkxRnRQtDE"
                title="video"
                frameBorder="0"
                allowFullScreen
                width="1280"
                height="400"
                className="mb-8"
              ></iframe>
              <p className="mb-4 text-sm leading-6 text-gray-400 dark:text-gray-300">
                El video se ha convertido en el formato dominante para consumir contenido en línea.
                Desde reportajes documentales hasta análisis de noticias, el formato audiovisual
                permite una comprensión más completa de los acontecimientos. La combinación de
                imágenes, sonido y narrativa crea experiencias inmersivas que conectan con las
                audiencias de manera profunda. El periodismo visual ha evolucionado para incluir
                técnicas cinematográficas que elevan la calidad y el impacto de cada historia.
              </p>
              <h3 className="mb-4 text-xl dark:text-white">
                <Link to="#">El Poder del Contenido Visual</Link>
              </h3>
              <p className="mb-4 text-sm leading-6 text-gray-400 dark:text-gray-300">
                Las plataformas de video han democratizado la creación de contenido, permitiendo
                que voces diversas compartan sus perspectivas con el mundo. La narrativa visual
                trasciende las barreras del idioma y la cultura, comunicando emociones y conceptos
                de manera universal. Este formato continúa evolucionando con nuevas tecnologías
                que mejoran tanto la producción como la distribución de contenido.
              </p>
              <p className="mb-4 text-sm leading-6 text-gray-400 dark:text-gray-300">
                La autenticidad y la transparencia son elementos clave en el periodismo visual
                moderno. Los espectadores buscan contenido que no solo informe, sino que también
                inspire y provoque reflexión. El video tiene el poder único de mostrar, no solo
                contar, creando conexiones emocionales que perduran más allá de la pantalla.
              </p>
              <p className="mb-4 text-sm leading-6 text-gray-400 dark:text-gray-300">
                El futuro del contenido en video promete experiencias aún más inmersivas y
                personalizadas. Con el avance de tecnologías como la realidad virtual y aumentada,
                las posibilidades narrativas se expanden exponencialmente. El compromiso con la
                calidad, la ética periodística y la innovación continúa impulsando la evolución
                de este medio dinámico y poderoso que conecta a personas de todo el mundo.
              </p>
            </div>

            <div className="col-span-1 overflow-hidden">
              <Social2 />

              <PostList />

              <div className="relative main-title">
                <h2 className="mt-6 mb-6 text-2xl font-semibold lg:ps-4 dark:text-white">
                  Más Populares
                </h2>
              </div>
              <MostPopular swiperData={swiperData} />
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Formato Video" />

export default PostFormatVideo
