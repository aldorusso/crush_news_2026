import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"

const PrivacyPolicy = () => {
  return (
    <Layout5>
      <BreadCrumb title="Política de Privacidad" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Política de Privacidad
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  1. Información que Recopilamos
                </h2>
                <p className="mb-4">
                  En crush.news, nos comprometemos a proteger tu privacidad. Recopilamos la siguiente información:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Información de contacto: nombre y dirección de correo electrónico cuando te suscribes a nuestro boletín</li>
                  <li>Datos de navegación: dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia</li>
                  <li>Cookies y tecnologías similares para mejorar tu experiencia de usuario</li>
                  <li>Información de ubicación aproximada para mostrar contenido relevante (temperatura y ciudad)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  2. Cómo Usamos tu Información
                </h2>
                <p className="mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enviar boletines informativos y actualizaciones de contenido</li>
                  <li>Personalizar tu experiencia en nuestro sitio web</li>
                  <li>Mejorar nuestro contenido y servicios</li>
                  <li>Analizar el uso del sitio mediante herramientas de análisis</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  3. Cookies
                </h2>
                <p className="mb-4">
                  Utilizamos cookies para mejorar tu experiencia de navegación. Las cookies son pequeños archivos
                  que se almacenan en tu dispositivo. Puedes configurar tu navegador para rechazar cookies, aunque
                  esto puede afectar algunas funcionalidades del sitio.
                </p>
                <p>
                  Para más información, consulta nuestra <a href="/cookie-policy" className="text-[#ff3750] hover:underline">Política de Cookies</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  4. Compartir Información
                </h2>
                <p className="mb-4">
                  No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento,
                  excepto en los siguientes casos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proveedores de servicios de confianza que nos ayudan a operar el sitio web</li>
                  <li>Cuando sea requerido por ley o para proteger nuestros derechos</li>
                  <li>Con tu consentimiento explícito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  5. Seguridad de los Datos
                </h2>
                <p>
                  Implementamos medidas de seguridad apropiadas para proteger tu información personal contra
                  acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de
                  transmisión por Internet es 100% seguro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  6. Tus Derechos
                </h2>
                <p className="mb-4">
                  Tienes derecho a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Solicitar la corrección de datos inexactos</li>
                  <li>Solicitar la eliminación de tu información</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                  <li>Presentar una queja ante la autoridad de protección de datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  7. Enlaces a Terceros
                </h2>
                <p>
                  Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables de las
                  prácticas de privacidad de estos sitios. Te recomendamos leer sus políticas de privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  8. Menores de Edad
                </h2>
                <p>
                  Nuestro sitio está dirigido a personas mayores de 13 años. No recopilamos intencionalmente
                  información de menores de 13 años. Si descubrimos que hemos recopilado datos de un menor,
                  eliminaremos esa información de inmediato.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  9. Cambios a esta Política
                </h2>
                <p>
                  Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
                  Te notificaremos sobre cambios significativos publicando la nueva política en esta página
                  con una fecha de actualización revisada.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  10. Contacto
                </h2>
                <p>
                  Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
                </p>
                <ul className="list-none pl-0 mt-4 space-y-2">
                  <li><strong>Email:</strong> privacy@crush.news</li>
                  <li><strong>Página de contacto:</strong> <a href="/contact" className="text-[#ff3750] hover:underline">crush.news/contact</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Política de Privacidad - crush.news" />

export default PrivacyPolicy
