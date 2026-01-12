import React from "react"
import Layout5 from "../common/layout/Layout5"
import Seo from "../components/seo"
import BreadCrumb from "../common/BreadCrumb"
import Social2 from "../common/Social2"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import img1 from "../assets/images/placeholder"
import img2 from "../assets/images/placeholder"
import img3 from "../assets/images/placeholder"
import img4 from "../assets/images/placeholder"
import img5 from "../assets/images/placeholder"
import img6 from "../assets/images/placeholder"
import womenStyle from "../assets/images/placeholder"
import gallery1 from "../assets/images/placeholder"
import gallery2 from "../assets/images/placeholder"
import gallery3 from "../assets/images/placeholder"

const PostFormatGallery = () => {
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
        <BreadCrumb title="Formato Galería" titleType="Artículo" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-8">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={womenStyle}
                  alt="post banner"
                />
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery1}
                    alt="post banner"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery2}
                    alt="post banner"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery3}
                    alt="post banner"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El fotoperiodismo es una forma poderosa de contar historias que trasciende
                las barreras del idioma y la cultura. Una imagen puede capturar la esencia
                de un momento, transmitir emociones complejas y revelar verdades que las
                palabras solas no pueden expresar. Las galerías fotográficas nos permiten
                documentar la realidad, preservar la memoria colectiva y conectar con
                audiencias de todo el mundo. Cada fotografía es un testimonio visual que
                habla por sí mismo, invitando a los espectadores a reflexionar sobre los
                temas más importantes de nuestro tiempo.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                El Impacto Visual del Periodismo
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Las imágenes tienen el poder de informar, educar y movilizar a las personas.
                Cada fotografía cuenta una historia única que merece ser preservada y
                compartida con el mundo.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La fotografía documental es esencial para registrar eventos históricos,
                culturas diversas y realidades sociales que requieren atención y
                comprensión global.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El compromiso ético de los fotógrafos es fundamental para representar la
                verdad con integridad y respeto. Cada imagen debe capturarse con conciencia
                de su impacto potencial y su responsabilidad hacia los sujetos retratados.
                El fotoperiodismo continúa siendo una herramienta vital para la justicia
                social y la transparencia informativa.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                Elementos Clave de la Fotografía Periodística
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La composición visual requiere un ojo artístico y técnico para capturar
                momentos decisivos que comuniquen historias completas.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El timing es crucial para capturar el momento exacto que transmite la
                emoción y significado de un evento o situación.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El contexto es esencial para que las imágenes cuenten historias completas
                y eviten interpretaciones erróneas o manipulaciones.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La autenticidad garantiza que las imágenes representen fielmente la
                realidad sin distorsiones ni manipulaciones que comprometan la verdad.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La calidad técnica es fundamental para que las imágenes sean claras,
                impactantes y capaces de transmitir su mensaje de manera efectiva.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La narrativa visual requiere secuencias coherentes que guíen al espectador
                a través de una historia completa y significativa.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                El Legado del Fotoperiodismo
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Las imágenes tienen el poder de informar, educar y movilizar a las personas.
                Cada fotografía cuenta una historia única que merece ser preservada y
                compartida con el mundo.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La fotografía documental es esencial para registrar eventos históricos,
                culturas diversas y realidades sociales que requieren atención y
                comprensión global.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                El Legado del Fotoperiodismo
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El compromiso ético de los fotógrafos es fundamental para representar la
                verdad con integridad y respeto. Cada imagen debe capturarse con conciencia
                de su impacto potencial y su responsabilidad hacia los sujetos retratados.
                El fotoperiodismo continúa siendo una herramienta vital para la justicia
                social y la transparencia informativa.
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

export const Head = () => <Seo title="Formato Galería" />

export default PostFormatGallery
