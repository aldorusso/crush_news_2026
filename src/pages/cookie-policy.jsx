import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"

const CookiePolicy = () => {
  return (
    <Layout5>
      <BreadCrumb title="Política de Cookies" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Política de Cookies
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  ¿Qué son las Cookies?
                </h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas
                  un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más
                  eficiente y proporcionar información a los propietarios del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Cómo Usamos las Cookies
                </h2>
                <p className="mb-4">
                  En crush.news utilizamos cookies para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recordar tus preferencias de tema (modo claro/oscuro)</li>
                  <li>Analizar el tráfico del sitio y entender cómo los visitantes interactúan con nuestro contenido</li>
                  <li>Mejorar la funcionalidad y rendimiento del sitio</li>
                  <li>Personalizar tu experiencia de navegación</li>
                  <li>Mostrar publicidad relevante (cookies de terceros)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Tipos de Cookies que Utilizamos
                </h2>

                <div className="space-y-4">
                  <div className="border-l-4 border-[#ff3750] pl-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      1. Cookies Esenciales
                    </h3>
                    <p>
                      Estas cookies son necesarias para que el sitio web funcione correctamente. No se pueden
                      desactivar en nuestros sistemas. Generalmente solo se establecen en respuesta a acciones
                      realizadas por ti, como establecer tus preferencias de privacidad o completar formularios.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#ff3750] pl-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      2. Cookies de Rendimiento
                    </h3>
                    <p>
                      Estas cookies nos permiten contar las visitas y fuentes de tráfico para medir y mejorar
                      el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son más y menos populares
                      y a ver cómo se mueven los visitantes por el sitio.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#ff3750] pl-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      3. Cookies de Funcionalidad
                    </h3>
                    <p>
                      Estas cookies permiten que el sitio web proporcione funcionalidad y personalización mejoradas.
                      Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado
                      a nuestras páginas.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#ff3750] pl-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      4. Cookies de Publicidad
                    </h3>
                    <p>
                      Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios.
                      Pueden ser utilizadas por esas empresas para crear un perfil de tus intereses y mostrarte anuncios
                      relevantes en otros sitios.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Cookies de Terceros
                </h2>
                <p className="mb-4">
                  Utilizamos servicios de terceros que pueden establecer cookies en tu dispositivo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Para analizar el uso del sitio web</li>
                  <li><strong>Redes Sociales:</strong> Para compartir contenido en plataformas sociales</li>
                  <li><strong>Redes Publicitarias:</strong> Para mostrar anuncios personalizados</li>
                </ul>
                <p className="mt-4">
                  Estas empresas tienen sus propias políticas de privacidad sobre cómo utilizan dicha información.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Geolocalización
                </h2>
                <p>
                  Utilizamos tu ubicación geográfica aproximada (con tu consentimiento) para mostrar información
                  relevante como el clima y la ciudad en la cabecera del sitio. Esta funcionalidad utiliza la API
                  de geolocalización de tu navegador y puedes negarla en cualquier momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Cómo Controlar las Cookies
                </h2>
                <p className="mb-4">
                  Tienes varias opciones para controlar las cookies:
                </p>

                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Configuración del Navegador</h3>
                  <p className="mb-2">Puedes configurar tu navegador para:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Rechazar todas las cookies</li>
                    <li>Aceptar solo cookies de sitios específicos</li>
                    <li>Eliminar cookies cuando cierres el navegador</li>
                    <li>Recibir una notificación antes de que se guarde una cookie</li>
                  </ul>
                </div>

                <p className="mb-4">
                  Instrucciones para los navegadores más comunes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web</li>
                  <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
                </ul>

                <p className="mt-4 text-sm bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                  <strong>Nota:</strong> Si bloqueas todas las cookies, algunas funcionalidades del sitio pueden
                  no funcionar correctamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Duración de las Cookies
                </h2>
                <p className="mb-4">
                  Las cookies que utilizamos tienen diferentes períodos de duración:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierras el navegador</li>
                  <li><strong>Cookies persistentes:</strong> Permanecen en tu dispositivo durante un tiempo determinado o hasta que las elimines manualmente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Actualizaciones de Esta Política
                </h2>
                <p>
                  Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las
                  tecnologías que utilizamos o por otros motivos legales u operativos. Te recomendamos revisar
                  esta página regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Más Información
                </h2>
                <p>
                  Para más información sobre cómo protegemos tu privacidad, consulta nuestra <a href="/privacy-policy" className="text-[#ff3750] hover:underline">Política de Privacidad</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Contacto
                </h2>
                <p>
                  Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos:
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

export const Head = () => <Seo title="Política de Cookies - crush.news" />

export default CookiePolicy
