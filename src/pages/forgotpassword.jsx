import React from "react"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import Layout5 from "../common/layout/Layout5"

const Forgot = () => {
  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="Recuperar Contraseña" titleType="Cuenta" />

        <div className="container mx-auto mt-8 sm:mt-16 px-4">
          <div className="grid">
            <div>
              <form className="max-w-sm mx-auto bg-gray-50 dark:bg-gray-800 p-5 shadow-md border space-y-4 md:space-y-6 rounded dark:border-gray-700">
                <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  ¿Olvidaste tu contraseña?
                </h3>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                  >
                    Tu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <button
                    type="submit"
                    className="text-white bg-[#ff3750] hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Enviar enlace
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Recuperar Contraseña" />

export default Forgot
