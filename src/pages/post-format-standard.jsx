import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import story1 from "../assets/images/placeholder"
import story2 from "../assets/images/placeholder"
import Social2 from "../common/Social2"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import img1 from "../assets/images/placeholder"
import img2 from "../assets/images/placeholder"
import img3 from "../assets/images/placeholder"
import img4 from "../assets/images/placeholder"
import img5 from "../assets/images/placeholder"
import img6 from "../assets/images/placeholder"

const PostFormatStandard = () => {
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
        <BreadCrumb title="Formato Estándar" titleType="Artículo" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-8">
            <div className="relative mb-8 md:mb-0">
              <div className="relative">
                <Link to="/single-post">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={story1}
                    alt="right"
                  />
                  <div className="block-hover"></div>
                </Link>
              </div>
              <div className="absolute w-full bottom-0 p-8">
                <div className="py-4">
                  <div className="bg-[#ff3750] text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                    neursto
                  </div>
                  <div className="font-bold text-xl mb-2 text-white capitalize">
                    Descubre las Historias Más Importantes del Día
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <Link to="/single-post">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={story2}
                    alt="right "
                  />
                  <div className="block-hover"></div>
                </Link>
              </div>
              <div className="absolute w-full bottom-0 p-8">
                <div className="py-4">
                  <div className="bg-[#ff3750] text-white max-w-fit py-[2px] px-2 font-semibold text-xs capitalize sm:uppercase rounded leading-5 mb-2">
                    neurstos
                  </div>
                  <div className="font-bold text-xl mb-2 text-white capitalize">
                    Descubre las Historias Más Importantes del Día
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El periodismo estándar combina texto e imagen para ofrecer una experiencia
                informativa completa y equilibrada. Este formato permite presentar noticias
                y análisis de manera estructurada, facilitando la comprensión de eventos
                complejos. La combinación de elementos visuales y narrativa escrita crea
                un medio efectivo para comunicar información importante. Cada artículo
                está diseñado para informar, educar y generar reflexión sobre los temas
                que impactan nuestras vidas. El compromiso con la calidad periodística
                guía cada aspecto de la presentación del contenido.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                La Importancia del Formato Estándar
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El formato estándar proporciona estructura y claridad, facilitando que
                los lectores encuentren y comprendan la información que buscan de manera
                eficiente y efectiva.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La confiabilidad del formato estándar lo convierte en la elección preferida
                para presentar noticias importantes que requieren credibilidad y profesionalismo
                en su presentación.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La consistencia en el formato ayuda a construir confianza con la audiencia,
                estableciendo expectativas claras sobre cómo se presenta la información.
                Este enfoque profesional refleja el compromiso con la excelencia periodística
                y el respeto por los lectores que confían en nosotros como fuente de
                información confiable.
              </p>
            </div>

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

export const Head = () => <Seo title="Formato Estándar" />

export default PostFormatStandard
