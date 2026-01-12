import React from "react"
import Layout5 from "../common/layout/Layout5"
import Seo from "../components/seo"
import BreadCrumb from "../common/BreadCrumb"
import { Link } from "gatsby"
import service from "../assets/images/placeholder"
import service1 from "../assets/images/placeholder"
import service2 from "../assets/images/placeholder"
import service3 from "../assets/images/placeholder"
import service4 from "../assets/images/placeholder"
import service5 from "../assets/images/placeholder"

const Service = () => {
  return (
    <Layout5>
      {/* Breadcrumb */}
      <BreadCrumb title="Servicios" titleType="Páginas" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 gap-6 mb-8 lg:mb-28 mt-8 items-center">
          <div className="">
            <img
              className="h-auto max-w-full rounded-lg w-full"
              src={service1}
              alt="blog post"
            />
          </div>
          <div className="">
            <img
              className="h-auto max-w-full rounded-lg w-full"
              src={service2}
              alt="blog post"
            />
          </div>
          <div className="">
            <h3 className="text-xl sm:text-2xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
              <Link to="#">
                Servicios de calidad para tu negocio
              </Link>
            </h3>
            <p className="text-gray-400 leading-6">
              Ofrecemos soluciones profesionales adaptadas a tus necesidades. Nuestro equipo de expertos está listo para ayudarte a alcanzar tus objetivos con servicios de primera calidad.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 gap-6 mb-8 lg:mb-28 mt-8">
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-2 md:mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              Personalización
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Soluciones personalizadas para tu proyecto.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              Diseño y Desarrollo Web
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Creamos sitios web modernos y funcionales.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              {" "}
              Soporte Técnico
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Asistencia técnica cuando la necesites.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              Soluciones Potentes
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Herramientas robustas para tu negocio.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              Marketing Digital
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Estrategias de marca y redes sociales.
            </p>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="w-16 h-16 bg-[#ff3750] text-white rounded-full mx-auto mb-6">
              <i className="ri-drag-move-fill text-4xl leading-[64px]"></i>
            </div>
            <h5 className="mb-1 md:mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              {" "}
              Desarrollo de Apps Móviles
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Aplicaciones móviles para iOS y Android.
            </p>
          </div>
        </div>

        <div>
          <img
            className="h-auto max-w-full rounded-lg w-full"
            src={service}
            alt="blog post"
          />
        </div>
        <div className="text-center mx-auto my-14 w-full max-w-3xl">
          <h3 className="text-xl md:text-2xl font-medium dark:text-white">
            Trabajamos con las mejores tecnologías y procesos para ofrecerte resultados excepcionales. Tu éxito es nuestra prioridad.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xs:gap-0 gap-6 mt-8">
          <div>
            <div className="">
              <Link to="#">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={service3}
                  alt=""
                />
              </Link>
              <div className="py-3">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Soluciones innovadoras y eficientes adaptadas a las necesidades específicas de tu proyecto. Calidad garantizada en cada entrega.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <Link to="#">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={service4}
                  alt=""
                />
              </Link>
              <div className="py-3">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Soluciones innovadoras y eficientes adaptadas a las necesidades específicas de tu proyecto. Calidad garantizada en cada entrega.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <Link to="#">
                <img
                  className="h-auto max-w-full rounded-lg w-full"
                  src={service5}
                  alt=""
                />
              </Link>
              <div className="py-3">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Soluciones innovadoras y eficientes adaptadas a las necesidades específicas de tu proyecto. Calidad garantizada en cada entrega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Servicios" />

export default Service
