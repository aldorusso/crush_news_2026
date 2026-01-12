import React from "react"
import Layout5 from "../common/layout/Layout5"
import { Link } from "gatsby"
import PostList from "../common/PostList"
import MostPopular from "../common/MostPopular"
import Social2 from "../common/Social2"
import ContactForm from "../components/ContactForm"
import Seo from "../components/seo"
import img1 from "../assets/images/placeholder"
import img2 from "../assets/images/placeholder"
import img3 from "../assets/images/placeholder"
import img4 from "../assets/images/placeholder"
import img5 from "../assets/images/placeholder"
import img6 from "../assets/images/placeholder"
import BreadCrumb from "../common/BreadCrumb"

const Contact = () => {
  const swiperData = [
    { id: 1, margin: false, image: img1 },
    { id: 2, margin: true, image: img2 },
    { id: 3, margin: true, image: img3 },
    { id: 4, margin: false, image: img4 },
    { id: 5, margin: true, image: img5 },
    { id: 6, margin: true, image: img6 },
  ]
  return (
    <Layout5>
      {/* breadcrumb */}
      <BreadCrumb title="Contacto" />

      {/* content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xs:gap-0 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 xs:gap-0 gap-4">
              <div className="text-center mt-5">
                <div className="text-2xl text-[#ff000] dark:text-white">
                  <i className="ri-mail-fill"></i>
                </div>
                <h3 className="text-xl font-semibold dark:text-slate-200 dark:font-normal mb-1">
                  Email:
                </h3>
                <p className="sm:text-sm md:text-base text-gray-400">
                  company@example.com
                </p>
              </div>

              <div className="text-center mt-5">
                <div className="text-2xl text-[#ff000] dark:text-white">
                  <i className="ri-phone-fill"></i>
                </div>
                <h3 className="text-xl font-semibold dark:text-slate-200 dark:font-normal mb-1">
                  Teléfono:
                </h3>
                <p className="sm:text-sm md:text-base text-gray-400">
                  Información de teléfono
                </p>
              </div>
            </div>

            <div className="border-b mt-8 dark:border-gray-700">
              <h3 className="uppercase font-bold tracking-wide border-b-2 inline-block border-[#ff3750] pb-4 dark:text-white">
                Enviar Consulta
              </h3>
            </div>

            <div className="bg-slate-50 mt-8 p-5 md:p-10 rounded dark:bg-gray-800">
              <ContactForm
                onSubmit={async (data) => {
                  // En producción: enviar a tu API
                  console.log("Form data:", data)
                  // Ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
                }}
              />
            </div>
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
  )
}

export const Head = () => (
  <Seo
    title="Contacto"
    description="Ponte en contacto con el equipo de crush.news. Envíanos tus preguntas, comentarios o sugerencias. Estamos aquí para ayudarte."
  />
)

export default Contact
