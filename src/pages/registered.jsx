import React from "react"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Layout5 from "../common/layout/Layout5"

const Register = () => {
  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="Registrarse" titleType="Cuenta" />

        <div className="container mx-auto px-4">
          <div className="grid">
            <div>
              <div className="">
                <form className="max-w-sm mx-auto bg-gray-50 p-5 shadow-md border space-y-4 md:space-y-6 rounded dark:bg-gray-800 dark:border-gray-700">
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Crear una cuenta
                  </h3>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light form-input"
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>
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
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light form-input"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="flex">
                    <div className="flex items-center me-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="inline-radio"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Masculino
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="inline-2-radio"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Femenino
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="inline-2-new"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="inline-2-new"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Otro
                      </label>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                    >
                      Tu contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="repeat-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                    >
                      Repetir contraseña
                    </label>
                    <input
                      type="password"
                      id="repeat-password"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                      required
                    />
                  </div>
                  <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="terms"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Acepto los{" "}
                      <Link to="#" className="text-[#ff3750] hover:underline">
                        términos y condiciones
                      </Link>
                    </label>
                  </div>
                  <div className="mb-5">
                    <button
                      type="submit"
                      className="text-white bg-[#ff3750] hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Registrar cuenta
                    </button>
                  </div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    ¿Ya tienes cuenta?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-[#ff3750] hover:underline"
                    >
                      Inicia sesión aquí
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Registrarse" />

export default Register
