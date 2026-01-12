import React from "react"
import BreadCrumb from "../common/BreadCrumb"
import { Link } from "gatsby"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import Social2 from "../common/Social2"
import Seo from "../components/seo"
import img1 from "../assets/images/placeholder"
import img2 from "../assets/images/placeholder"
import img3 from "../assets/images/placeholder"
import img4 from "../assets/images/placeholder"
import img5 from "../assets/images/placeholder"
import img6 from "../assets/images/placeholder"
import audioImg1 from "../assets/images/placeholder"
import audioImg2 from "../assets/images/placeholder"
import fashion from "../assets/images/placeholder"
import Layout5 from "../common/layout/Layout5"

const PostFormatAudio = () => {
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
        <BreadCrumb title="Formato Audio" titleType="Artículo" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex mb-5">
              <Link to="/single-post">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={audioImg1}
                  alt="post"
                />
              </Link>
              <div className="flex flex-col ps-4 md:p-4 ">
                <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2 spt-3">
                  neursto
                </div>
                <h3 className="mb-2 text-md sm:text-xl">
                  <Link
                    to="/single-post"
                    className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                  >
                    Descubre las Mejores Historias en Audio
                  </Link>
                </h3>
                <div className="block md:flex justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>
                    <i className="ri-user-fill"></i> Admin
                  </span>{" "}
                  <span>
                    <i className="ri-calendar-fill"></i> Mar 18, 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mb-5">
              <Link to="/single-post">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={audioImg2}
                  alt="post"
                />
              </Link>
              <div className="flex flex-col ps-4 md:p-4 ">
                <div className="bg-green-400 text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2 spt-3">
                  neursto
                </div>
                <h3 className="mb-2 text-md sm:text-xl">
                  <Link
                    to="/single-post"
                    className="hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]"
                  >
                    Descubre las Mejores Historias en Audio
                  </Link>
                </h3>
                <div className="block md:flex justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>
                    <i className="ri-user-fill"></i> Admin
                  </span>{" "}
                  <span>
                    <i className="ri-calendar-fill"></i> Mar 18, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl mb-4 dark:text-white">
                La Evolución del Contenido en Audio
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El contenido en audio ha experimentado una revolución en los últimos años.
                Los podcasts, audiolibros y reportajes sonoros se han convertido en una forma
                popular de consumir información y entretenimiento. Esta modalidad permite a
                las personas mantenerse informadas mientras realizan otras actividades, desde
                conducir hasta hacer ejercicio. La calidad narrativa y la producción profesional
                han elevado el estándar de lo que esperamos del contenido auditivo.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <Link to="#">
                    <img
                      className="h-auto max-w-full rounded-lg "
                      src={fashion}
                      alt="post"
                    />
                  </Link>
                </div>
                <div>
                  <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                    La narrativa sonora tiene el poder de transportarnos a diferentes lugares
                    y épocas. A través de entrevistas profundas, documentales investigativos
                    y reportajes de campo, el audio nos acerca a realidades que de otra manera
                    serían inaccesibles. La intimidad que ofrece el formato de audio crea una
                    conexión especial entre el creador de contenido y la audiencia, haciendo
                    que cada historia sea una experiencia personal y única.
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-sm text-gray-400 mb-4 leading-6 dark:text-gray-300">
                  En la era digital, el audio representa una forma democratizada de compartir
                  conocimiento y experiencias. Cualquier persona con una historia que contar
                  puede llegar a una audiencia global. Este medio continúa evolucionando con
                  nuevas tecnologías y plataformas que facilitan tanto la creación como el
                  consumo de contenido. El futuro del audio promete experiencias aún más
                  inmersivas y personalizadas para cada oyente.
                </p>
              </div>
            </div>

            {/* social */}
            <div className="col-span-1 overflow-hidden">
              <Social2 />

              <PostList />

              <div className="main-title relative">
                <h2 className="text-2xl font-semibold mt-6 mb-6 lg:ps-4 dark:text-white">
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

export const Head = () => <Seo title="Formato Audio" />

export default PostFormatAudio
