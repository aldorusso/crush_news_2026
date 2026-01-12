import React from "react"
import Layout5 from "../common/layout/Layout5"
import { Link } from "gatsby"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"

const Advertise = () => {
  const packages = [
    {
      name: "Banner Display",
      features: [
        "Banner en sidebar (300x250)",
        "Rotación en todas las páginas",
        "Reporte mensual de rendimiento",
        "Target por categoría",
        "Múltiples formatos disponibles",
      ],
      popular: false,
    },
    {
      name: "Contenido Patrocinado",
      features: [
        "Artículo patrocinado completo",
        "Contenido de calidad editorial",
        "Imágenes incluidas",
        "Promoción en redes sociales",
        "SEO optimizado",
        "Permanece en el sitio indefinidamente",
      ],
      popular: true,
    },
    {
      name: "Paquete Premium",
      features: [
        "Todo lo del Banner Display",
        "Contenido patrocinado mensual",
        "Banner destacado en homepage",
        "Mención en newsletter",
        "Promoción en Instagram Stories",
        "Soporte prioritario dedicado",
      ],
      popular: false,
    },
  ]

  const audience = [
    {
      metric: "50,000+",
      label: "Visitantes mensuales",
      icon: "ri-user-line",
    },
    {
      metric: "65%",
      label: "Audiencia Gen Z",
      icon: "ri-group-line",
    },
    {
      metric: "3.5 min",
      label: "Tiempo promedio",
      icon: "ri-time-line",
    },
    {
      metric: "45%",
      label: "Tasa de engagement",
      icon: "ri-heart-line",
    },
  ]

  return (
    <Layout5>
      <BreadCrumb title="Publicidad" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Anuncia en crush.news
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Conecta con la Generación Z de manera auténtica. Llega a miles de jóvenes
              apasionados por la cultura digital, entretenimiento y tendencias.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#ff3750] hover:bg-black text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Contactar Ahora <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          {/* Audience Stats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
              Nuestra Audiencia
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {audience.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <i className={`${stat.icon} text-5xl text-[#ff3750] mb-4`}></i>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demographics */}
          <div className="bg-gradient-to-r from-blue-800 via-purple-800 to-red-500 rounded-lg p-8 text-white mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Demografía</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-3">
                  <i className="ri-user-heart-line"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Edad</h3>
                <p className="text-sm opacity-90">
                  70% entre 16-24 años
                  <br />
                  25% entre 25-30 años
                  <br />
                  5% otros
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
                <p className="text-sm opacity-90">
                  40% Argentina
                  <br />
                  25% México
                  <br />
                  35% Resto de Latinoamérica
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">
                  <i className="ri-heart-fill"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Intereses</h3>
                <p className="text-sm opacity-90">
                  Música, Series, Gaming
                  <br />
                  Fashion, Beauty
                  <br />
                  Redes Sociales, Memes
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Opciones de Publicidad
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Elige la opción que mejor se adapte a tus objetivos de marketing.
              Contáctanos para recibir una cotización personalizada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                    pkg.popular ? 'ring-4 ring-[#ff3750] transform scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-[#ff3750] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                      MÁS POPULAR
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      {pkg.name}
                    </h3>
                    <div className="mb-6 h-16 flex items-center justify-center">
                      <span className="text-lg font-semibold text-[#ff3750]">
                        Cotización Personalizada
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <i className="ri-check-line text-[#ff3750] text-xl mr-2 flex-shrink-0"></i>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`block text-center font-bold px-6 py-3 rounded-lg transition-colors ${
                        pkg.popular
                          ? 'bg-[#ff3750] hover:bg-black text-white'
                          : 'bg-gray-200 dark:bg-gray-700 hover:bg-[#ff3750] hover:text-white text-gray-900 dark:text-white'
                      }`}
                    >
                      Solicitar Cotización
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Advertise */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              ¿Por Qué Anunciarte en crush.news?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#ff3750] rounded-full flex items-center justify-center text-white text-2xl">
                    <i className="ri-focus-line"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Audiencia Específica
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Acceso directo a la Generación Z interesada en cultura digital,
                    entretenimiento y tendencias.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#ff3750] rounded-full flex items-center justify-center text-white text-2xl">
                    <i className="ri-shield-check-line"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Contenido de Calidad
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tu marca asociada a contenido editorial de alta calidad y relevante
                    para el público joven.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#ff3750] rounded-full flex items-center justify-center text-white text-2xl">
                    <i className="ri-line-chart-line"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Métricas Transparentes
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Reportes detallados de rendimiento con métricas claras de impresiones,
                    clicks y engagement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#ff3750] rounded-full flex items-center justify-center text-white text-2xl">
                    <i className="ri-team-line"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Soporte Dedicado
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Equipo dedicado para ayudarte a crear campañas efectivas y
                    optimizar resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctanos para crear una propuesta personalizada que se ajuste a tus
              necesidades y presupuesto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#ff3750] hover:bg-black text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                <i className="ri-mail-line mr-2"></i>
                Contactar por Email
              </Link>
              <a
                href="mailto:ads@crush.news"
                className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 transition-colors"
              >
                ads@crush.news
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Publicidad - Anuncia en crush.news" />

export default Advertise
