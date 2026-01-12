import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import Social2 from "../common/Social2"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import img1 from "../assets/images/placeholder"
import img2 from "../assets/images/placeholder"
import img3 from "../assets/images/placeholder"
import img4 from "../assets/images/placeholder"
import img5 from "../assets/images/placeholder"
import img6 from "../assets/images/placeholder"

const PostFormatText = () => {
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
        <BreadCrumb title="Formato Solo Texto" titleType="Artículo" />

        <div className="container mx-auto px-4">
          <div className="mb-4">
            <h3 className="text-xl font-medium dark:text-white dark:hover:text-[#ff3750]">
              El Arte de la Escritura y el Periodismo de Calidad
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El periodismo escrito mantiene su relevancia en la era digital como una forma
                fundamental de comunicación y análisis. A través de la palabra escrita, podemos
                explorar ideas complejas con profundidad y matices que otros formatos no siempre
                permiten. La escritura de calidad requiere investigación rigurosa, pensamiento
                crítico y la habilidad de presentar información de manera clara y accesible.
                Cada artículo es una oportunidad para educar, informar e inspirar a los lectores
                a reflexionar sobre los temas que dan forma a nuestro mundo. La tradición
                periodística se basa en el poder de las palabras para revelar verdades,
                cuestionar el poder y dar voz a quienes no la tienen.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                El Valor de la Palabra Escrita
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La narrativa textual ofrece una intimidad única entre el escritor y el lector.
                Cada palabra es cuidadosamente elegida para construir argumentos sólidos y
                transmitir información de manera precisa y memorable.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Los lectores confían en el periodismo escrito como fuente de análisis profundo
                y contexto esencial. Es el formato que permite revisar, citar y compartir
                información con precisión académica y periodística.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El compromiso con la excelencia periodística implica verificar cada dato,
                contrastar múltiples fuentes y presentar la información de manera equilibrada.
                La escritura de calidad trasciende el tiempo, sirviendo como registro histórico
                y fuente de conocimiento para generaciones futuras. Este es el legado del
                periodismo escrito: preservar la verdad y facilitar el entendimiento.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                Elementos del Periodismo de Calidad
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La investigación exhaustiva es el fundamento de cualquier historia sólida,
                requiriendo tiempo, dedicación y acceso a fuentes confiables.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La verificación de hechos es un proceso crítico que garantiza la exactitud
                y credibilidad de cada artículo publicado.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El contexto proporciona el marco necesario para comprender eventos complejos,
                conectando el pasado con el presente y proyectando posibles futuros.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La claridad en la escritura es esencial para comunicar ideas complejas de
                manera accesible, sin sacrificar precisión ni profundidad analítica.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La objetividad requiere presentar múltiples perspectivas y permitir que los
                lectores formen sus propias conclusiones basadas en hechos verificables.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La ética periodística guía cada decisión editorial, desde la selección de
                fuentes hasta la presentación final del contenido publicado.
              </p>
              <h3 className="text-xl mb-4 dark:text-white">
                ¿Quieres ver más contenido relacionado?
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                La narrativa textual ofrece una intimidad única entre el escritor y el lector.
                Cada palabra es cuidadosamente elegida para construir argumentos sólidos y
                transmitir información de manera precisa y memorable.
              </p>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Los lectores confían en el periodismo escrito como fuente de análisis profundo
                y contexto esencial. Es el formato que permite revisar, citar y compartir
                información con precisión académica y periodística.
              </p>
              <h3 className="text-xl mb-4  dark:text-white">
                El Futuro del Periodismo Escrito
              </h3>
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                El compromiso con la excelencia periodística implica verificar cada dato,
                contrastar múltiples fuentes y presentar la información de manera equilibrada.
                La escritura de calidad trasciende el tiempo, sirviendo como registro histórico
                y fuente de conocimiento para generaciones futuras. Este es el legado del
                periodismo escrito: preservar la verdad y facilitar el entendimiento.
              </p>
            </div>

            {/*  */}

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

export const Head = () => <Seo title="Formato Texto" />

export default PostFormatText
