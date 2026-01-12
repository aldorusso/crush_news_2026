import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"

const Disclaimer = () => {
  return (
    <Layout5>
      <BreadCrumb title="Aviso Legal" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Aviso Legal y Descargo de Responsabilidad
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  1. Información General
                </h2>
                <p className="mb-4">
                  Este sitio web, crush.news, es una publicación digital dedicada a contenido cultural,
                  entretenimiento y tendencias dirigido a la Generación Z y público joven.
                </p>
                <p>
                  El acceso y uso de este sitio web implica la aceptación de este Aviso Legal, junto con
                  nuestros <a href="/terms-conditions" className="text-[#ff3750] hover:underline">Términos y Condiciones</a> y
                  nuestra <a href="/privacy-policy" className="text-[#ff3750] hover:underline">Política de Privacidad</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  2. Naturaleza del Contenido
                </h2>
                <p className="mb-4">
                  El contenido publicado en crush.news tiene fines informativos y de entretenimiento.
                  La información presentada en este sitio:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Se proporciona de buena fe y con la mayor exactitud posible</li>
                  <li>Puede contener opiniones, comentarios y análisis editoriales</li>
                  <li>No constituye asesoramiento profesional de ningún tipo</li>
                  <li>Está sujeta a cambios sin previo aviso</li>
                  <li>Puede incluir enlaces a contenido de terceros</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  3. Descargo de Responsabilidad
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Exactitud de la Información
                    </h3>
                    <p>
                      Aunque nos esforzamos por mantener la información actualizada y precisa, no garantizamos
                      la exactitud, integridad o actualidad del contenido. Los usuarios deben verificar
                      independientemente cualquier información antes de actuar en base a ella.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      No Asesoramiento Profesional
                    </h3>
                    <p>
                      El contenido de crush.news no constituye:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Asesoramiento médico, psicológico o de salud mental</li>
                      <li>Asesoramiento legal o financiero</li>
                      <li>Recomendaciones profesionales de ningún tipo</li>
                    </ul>
                    <p className="mt-2">
                      Siempre consulta con profesionales calificados para obtener asesoramiento específico
                      sobre tu situación personal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Contenido de Terceros
                    </h3>
                    <p>
                      Nuestro sitio puede contener enlaces a sitios web, productos, servicios o contenido de terceros.
                      No somos responsables de:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>El contenido, exactitud o disponibilidad de sitios externos</li>
                      <li>Las prácticas de privacidad de terceros</li>
                      <li>Productos o servicios ofrecidos por terceros</li>
                      <li>Daños o pérdidas causados por el uso de recursos de terceros</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  4. Derechos de Autor y Propiedad Intelectual
                </h2>
                <p className="mb-4">
                  Todo el contenido original de crush.news, incluyendo textos, diseños, logotipos, gráficos
                  e imágenes, está protegido por derechos de autor y otras leyes de propiedad intelectual.
                </p>
                <p className="mb-4">
                  <strong>Uso del Contenido:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Puedes compartir enlaces a nuestros artículos en redes sociales</li>
                  <li>Las citas breves con atribución adecuada están permitidas</li>
                  <li>La reproducción completa o sustancial requiere autorización previa</li>
                  <li>El uso comercial del contenido está prohibido sin licencia</li>
                </ul>
                <p className="mt-4">
                  <strong>Contenido de Terceros:</strong> Las imágenes, marcas y contenido de terceros utilizados
                  en nuestro sitio pertenecen a sus respectivos propietarios. El uso de dicho contenido es con
                  fines informativos bajo el principio de uso justo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  5. Limitación de Responsabilidad
                </h2>
                <p className="mb-4">
                  En la medida máxima permitida por la ley, crush.news y sus colaboradores no serán responsables por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Daños directos, indirectos, incidentales o consecuentes</li>
                  <li>Pérdida de beneficios, datos o oportunidades</li>
                  <li>Interrupciones en el servicio o disponibilidad del sitio</li>
                  <li>Errores u omisiones en el contenido</li>
                  <li>Acciones tomadas en base a la información del sitio</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  6. Comentarios y Contenido de Usuarios
                </h2>
                <p className="mb-4">
                  Los comentarios y opiniones expresados por usuarios no reflejan necesariamente las
                  opiniones de crush.news. Nos reservamos el derecho de:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Moderar, editar o eliminar comentarios</li>
                  <li>Bloquear usuarios que violen nuestras normas</li>
                  <li>No publicar contenido inapropiado</li>
                </ul>
                <p className="mt-4">
                  Los usuarios son responsables del contenido que publican y deben respetar los derechos
                  de terceros.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  7. Publicidad y Contenido Patrocinado
                </h2>
                <p className="mb-4">
                  crush.news puede mostrar publicidad y contenido patrocinado. Cuando sea posible,
                  identificaremos claramente el contenido patrocinado o publicitario.
                </p>
                <p>
                  No respaldamos necesariamente los productos o servicios anunciados. Las decisiones de
                  compra son responsabilidad exclusiva del usuario.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  8. Enlaces de Afiliados
                </h2>
                <p>
                  Algunos enlaces en nuestro sitio pueden ser enlaces de afiliados, lo que significa que
                  podemos recibir una comisión si realizas una compra a través de ellos, sin costo adicional
                  para ti. Esto no afecta nuestra objetividad editorial.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  9. Menores de Edad
                </h2>
                <p>
                  Nuestro contenido está dirigido a personas mayores de 13 años. Los menores deben contar
                  con supervisión parental al navegar por internet y al proporcionar información personal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  10. Jurisdicción
                </h2>
                <p>
                  Este Aviso Legal se rige por las leyes de Argentina. Cualquier controversia se resolverá
                  en los tribunales competentes de Argentina.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  11. Modificaciones
                </h2>
                <p>
                  Nos reservamos el derecho de modificar este Aviso Legal en cualquier momento. Los cambios
                  entrarán en vigor inmediatamente después de su publicación. Te recomendamos revisar esta
                  página periódicamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  12. Contacto
                </h2>
                <p className="mb-4">
                  Para preguntas sobre este Aviso Legal, reclamos de derechos de autor, o cualquier otra
                  consulta legal, puedes contactarnos:
                </p>
                <ul className="list-none pl-0 space-y-2">
                  <li><strong>Email:</strong> legal@crush.news</li>
                  <li><strong>Página de contacto:</strong> <a href="/contact" className="text-[#ff3750] hover:underline">crush.news/contact</a></li>
                </ul>
              </section>

              <section className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-sm">
                  <strong>Nota Final:</strong> Al continuar utilizando crush.news, confirmas que has leído,
                  comprendido y aceptado este Aviso Legal, así como nuestros Términos y Condiciones y
                  Política de Privacidad.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Aviso Legal - crush.news" />

export default Disclaimer
