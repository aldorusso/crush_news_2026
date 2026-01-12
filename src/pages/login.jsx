import React from "react"
import Layout5 from "../common/layout/Layout5"
import Seo from "../components/seo"
import BreadCrumb from "../common/BreadCrumb"
import { Link } from "gatsby"

const Login = () => {
  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="Acceder" titleType="Cuenta" />

        <div className="container mx-auto mt-8 sm:mt-16 px-4">
          <div className="grid">
            <div>
              <div className="">
                <div className="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                      Inicia sesión en tu cuenta
                    </h5>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                      >
                        Tu email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
                      >
                        Tu contraseña
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
                        >
                          Recordarme
                        </label>
                      </div>
                      <Link
                        to="/forgotpassword"
                        className="ms-auto text-sm text-[#ff3750] hover:underline"
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-[#ff3750] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#ff3750] dark:hover:bg-gray-700"
                    >
                      Iniciar sesión
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      ¿No tienes cuenta?{" "}
                      <Link
                        to="/registered"
                        className="text-[#ff3750] hover:underline dark:text-[#ff3750] capitalize"
                      >
                        Crear cuenta
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Acceder" />

export default Login
