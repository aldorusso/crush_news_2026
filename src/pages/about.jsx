import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import about from "../assets/images/placeholder"
import clothImg from "../assets/images/placeholder"
import brand1 from "../assets/images/placeholder"
import brand2 from "../assets/images/placeholder"
import brand3 from "../assets/images/placeholder"
import brand4 from "../assets/images/placeholder"

const About = () => {
  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="Sobre Nosotros" titleType="Pages" />

        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-medium dark:text-white dark:hover:text-[#ff3750]">
                Bienvenido a crush.news
              </h3>
            </div>
            <div className="text-center mx-auto my-0 w-full max-w-3xl">
              <p className="text-sm text-gray-400 leading-6 mb-4 dark:text-gray-300">
                Tu fuente de información confiable y actualizada. Ofrecemos contenido
                exclusivo de calidad, manteniendo los más altos estándares periodísticos
                y comprometiéndonos con la verdad y la transparencia informativa.
              </p>
            </div>
            <img
              className="h-auto max-w-full rounded-lg w-full"
              src={about}
              alt="blog post"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 mb-8 mt-8 md:-mt-20 mx-5">
              <div className="mb-5 md:mb-0">
                <Link
                  to="#"
                  className="block p-5 xl:p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                    CONTENIDO EXCLUSIVO
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Accede a noticias y reportajes exclusivos de primera calidad.
                  </p>
                </Link>
              </div>
              <div className="mb-5 md:mb-0">
                <Link
                  to="#"
                  className="block p-5 xl:p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                    ACTUALIZACIÓN CONSTANTE
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Información actualizada las 24 horas del día, los 7 días de la semana.
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="block p-5 xl:p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                    CALIDAD GARANTIZADA
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Compromiso con el periodismo de calidad y la veracidad informativa.
                  </p>
                </Link>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-medium mt-8 md:mt-28 dark:text-white dark:hover:text-[#ff3750]">
              Nuestro compromiso con la excelencia informativa y la transparencia.
            </h3>
          </div>
          <div className="text-center mx-auto my-0 w-full max-w-3xl">
            <p className="text-gray-400 leading-6 mb-4 dark:text-gray-300">
              Trabajamos cada día para ofrecer el mejor contenido noticioso,
              manteniendo los más altos estándares de calidad y ética periodística.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 gap-6 mb-28 mt-8">
            <div className="text-center mx-auto">
              <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
                <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
              </div>
              <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                COBERTURA GLOBAL
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Noticias de todo el mundo con análisis profundo y perspectiva local.
              </p>
            </div>
            <div className="text-center mx-auto">
              <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
                <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
              </div>
              <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                EQUIPO PROFESIONAL
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Periodistas experimentados comprometidos con la verdad y la objetividad.
              </p>
            </div>
            <div className="text-center mx-auto">
              <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
                <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
              </div>
              <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                VERIFICACIÓN RIGUROSA
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Cada noticia pasa por un proceso exhaustivo de verificación de hechos.
              </p>
            </div>
          </div>

          <div className="block sm:flex gap-4 items-center">
            <div className="w-full sm:w-1/2">
              <img
                className="h-auto max-w-full rounded-lg w-full"
                src={clothImg}
                alt="blog post"
              />
            </div>
            <div className="mt-5 sm:mt-0 w-full sm:w-1/2">
              <span className="block text-[#ff3750] uppercase mb-4">
                CONTENIDO PREMIUM DISPONIBLE
              </span>
              <h3 className="text-xl mb-4 dark:text-white">
                Periodismo de investigación que marca la diferencia en la sociedad.
              </h3>
              <p className="text-sm text-gray-500 leading-6 dark:text-gray-300">
                Nuestro equipo de periodistas investigadores trabaja incansablemente
                para descubrir las historias que importan. Nos comprometemos a
                mantener informada a nuestra audiencia con reportajes profundos,
                análisis rigurosos y una cobertura equilibrada de los acontecimientos
                más relevantes a nivel local, nacional e internacional.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xs:gap-0 gap-6 mt-8">
            <div>
              <div className="">
                <Link to="#">
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={brand1}
                    alt=""
                  />
                </Link>
                <div className="py-3">
                  <Link to="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Calidad
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Nos comprometemos a ofrecer contenido de la más alta calidad,
                    verificado y contrastado con múltiples fuentes. Cada artículo
                    pasa por un riguroso proceso editorial que garantiza precisión,
                    claridad y relevancia para nuestros lectores.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <Link to="#">
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={brand2}
                    alt=""
                  />
                </Link>
                <div className="py-3">
                  <Link to="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Trabajo en Equipo
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Nuestro equipo multidisciplinario de periodistas, editores y
                    analistas trabaja en conjunto para entregar la mejor cobertura
                    posible. La colaboración y el intercambio de ideas enriquecen
                    cada historia que publicamos.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <Link to="#">
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={brand3}
                    alt=""
                  />
                </Link>
                <div className="py-3">
                  <Link to="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Respeto
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Respetamos a nuestras fuentes, audiencia y las personas sobre
                    las que informamos. Mantenemos un enfoque ético en cada historia,
                    considerando el impacto de nuestras palabras y protegiendo la
                    dignidad de todos los involucrados.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <Link to="#">
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={brand4}
                    alt=""
                  />
                </Link>
                <div className="py-3">
                  <Link to="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Responsabilidad
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Asumimos plena responsabilidad por cada palabra publicada.
                    Nos comprometemos con la verdad, la precisión y la transparencia.
                    Corregimos errores de inmediato y mantenemos los más altos
                    estándares de integridad periodística.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6 mt-8">
            <div>
              <div className="py-3">
                <Link to="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Nuestra Misión
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Nuestra misión es informar, educar y empoderar a nuestra audiencia
                  a través de un periodismo de calidad. Buscamos ser un puente entre
                  los acontecimientos y las personas, proporcionando contexto, análisis
                  y perspectivas diversas que enriquezcan el debate público y fortalezcan
                  la democracia.
                </p>
              </div>
            </div>
            <div>
              <div className="py-3">
                <Link to="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Nuestra Visión
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Aspiramos a ser el medio de comunicación digital de referencia en
                  el mundo hispanohablante, reconocido por nuestra integridad,
                  innovación y compromiso con la verdad. Queremos ser una voz confiable
                  que inspire confianza y fomente una ciudadanía informada y participativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Sobre Nosotros" />

export default About
