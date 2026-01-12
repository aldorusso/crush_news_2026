import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"

const TermsConditions = () => {
  return (
    <Layout5>
      <BreadCrumb title="Términos y Condiciones" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Términos y Condiciones
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  1. Aceptación de los Términos
                </h2>
                <p>
                  Al acceder y utilizar crush.news, aceptas estar sujeto a estos Términos y Condiciones.
                  Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  2. Uso del Sitio Web
                </h2>
                <p className="mb-4">
                  Al utilizar crush.news, te comprometes a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utilizar el sitio de manera legal y respetuosa</li>
                  <li>No publicar contenido ofensivo, difamatorio o ilegal</li>
                  <li>No intentar acceder a áreas restringidas del sitio</li>
                  <li>No realizar actividades que puedan dañar o interrumpir el funcionamiento del sitio</li>
                  <li>Respetar los derechos de propiedad intelectual de crush.news y terceros</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  3. Propiedad Intelectual
                </h2>
                <p className="mb-4">
                  Todo el contenido publicado en crush.news, incluyendo textos, imágenes, gráficos, logotipos,
                  videos y software, es propiedad de crush.news o de sus proveedores de contenido y está protegido
                  por las leyes de derechos de autor.
                </p>
                <p>
                  Queda prohibida la reproducción, distribución o uso comercial del contenido sin autorización
                  previa por escrito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  4. Contenido de Usuario
                </h2>
                <p className="mb-4">
                  Si publicas comentarios u otro contenido en nuestro sitio:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Garantizas que tienes derecho a publicar ese contenido</li>
                  <li>Otorgas a crush.news una licencia no exclusiva para usar, reproducir y distribuir ese contenido</li>
                  <li>Eres responsable del contenido que publicas</li>
                  <li>Nos reservamos el derecho de eliminar contenido inapropiado sin previo aviso</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  5. Enlaces a Terceros
                </h2>
                <p>
                  Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del
                  contenido, políticas o prácticas de estos sitios externos. El acceso a sitios de terceros
                  es bajo tu propio riesgo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  6. Descargo de Responsabilidad
                </h2>
                <p className="mb-4">
                  El contenido de crush.news se proporciona "tal cual" con fines informativos y de entretenimiento.
                  Nos esforzamos por proporcionar información precisa y actualizada, pero:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No garantizamos la exactitud, integridad o actualidad del contenido</li>
                  <li>No somos responsables de errores u omisiones en el contenido</li>
                  <li>El uso de la información es bajo tu propio riesgo</li>
                  <li>No ofrecemos asesoramiento profesional médico, legal o financiero</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  7. Limitación de Responsabilidad
                </h2>
                <p>
                  En la medida permitida por la ley, crush.news no será responsable por daños directos,
                  indirectos, incidentales, consecuentes o punitivos derivados del uso o imposibilidad de
                  uso del sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  8. Modificaciones del Sitio
                </h2>
                <p>
                  Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del
                  sitio web en cualquier momento sin previo aviso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  9. Publicidad
                </h2>
                <p>
                  crush.news puede mostrar publicidad de terceros. No somos responsables del contenido de
                  estos anuncios ni de las prácticas de los anunciantes. Para más información, visita nuestra
                  página de <a href="/advertise" className="text-[#ff3750] hover:underline">Publicidad</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  10. Privacidad
                </h2>
                <p>
                  El uso de nuestro sitio web también está regido por nuestra <a href="/privacy-policy" className="text-[#ff3750] hover:underline">Política de Privacidad</a>,
                  que describe cómo recopilamos y utilizamos tu información personal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  11. Ley Aplicable
                </h2>
                <p>
                  Estos Términos y Condiciones se rigen por las leyes de Argentina. Cualquier disputa
                  relacionada con estos términos se resolverá en los tribunales competentes de Argentina.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  12. Cambios a los Términos
                </h2>
                <p>
                  Nos reservamos el derecho de actualizar estos Términos y Condiciones en cualquier momento.
                  Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio. El uso
                  continuado del sitio después de los cambios constituye tu aceptación de los nuevos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  13. Contacto
                </h2>
                <p>
                  Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos:
                </p>
                <ul className="list-none pl-0 mt-4 space-y-2">
                  <li><strong>Email:</strong> legal@crush.news</li>
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

export const Head = () => <Seo title="Términos y Condiciones - crush.news" />

export default TermsConditions
