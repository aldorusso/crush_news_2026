import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import { Link } from "gatsby"
import getAvatar from "../utils/avatar"

const About = () => {
  // Equipo editorial con avatares generados
  const team = [
    { name: "Luna", role: "Editora de Crush Files", specialty: "K-Pop & Celebs" },
    { name: "Alex", role: "Editor de Pop Picks", specialty: "Gaming & Series" },
    { name: "Mia", role: "Editora de Aesthetic Life", specialty: "Lifestyle & Wellness" },
    { name: "Dani", role: "Community Manager", specialty: "Redes & Trends" },
  ]

  // Stats del sitio
  const stats = [
    { number: "50K+", label: "Lectores mensuales", icon: "ri-user-heart-line" },
    { number: "24/7", label: "Actualización constante", icon: "ri-refresh-line" },
    { number: "100%", label: "Contenido original", icon: "ri-verified-badge-line" },
    { number: "Gen Z", label: "Hecho para ti", icon: "ri-hearts-line" },
  ]

  return (
    <React.Fragment>
      <Layout5>
        <BreadCrumb title="Sobre Nosotros" titleType="Pages" />

        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center py-8 md:py-20">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#ff3750]/10 text-[#ff3750] rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Tu espacio, tu vibe, tus noticias
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 dark:text-white">
                Somos <span className="text-[#ff3750]">crush</span>.news
              </h1>
              <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                El medio digital que habla tu idioma. Noticias de entretenimiento,
                cultura pop, gaming y lifestyle para la generación que está
                cambiando las reglas del juego.
              </p>

              {/* Animated gradient border card */}
              <div className="relative p-[2px] rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#ff3750] via-[#ff6b81] to-[#062db9] overflow-hidden">
                <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 italic">
                    "No somos un medio tradicional. Somos el scroll que te atrapa,
                    el contenido que compartes, la info que necesitas saber."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Grid */}
          <section className="py-8 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <i className={`${stat.icon} text-2xl sm:text-4xl text-[#ff3750] mb-2 sm:mb-3`}></i>
                  <div className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What We Cover */}
          <section className="py-8 md:py-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white mb-3 sm:mb-4">
                Lo que cubrimos
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Todo lo que te importa, sin el relleno que no necesitas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Crush Files */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 p-5 sm:p-8 text-white hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <i className="ri-star-smile-line text-3xl sm:text-5xl mb-3 sm:mb-4 opacity-80"></i>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Crush Files</h3>
                <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                  K-Pop, celebs, drama y todo el tea que necesitas.
                </p>
                <Link to="/category/crush-files" className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all text-sm sm:text-base">
                  Explorar <i className="ri-arrow-right-line"></i>
                </Link>
              </div>

              {/* Pop Picks */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-5 sm:p-8 text-white hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <i className="ri-gamepad-line text-3xl sm:text-5xl mb-3 sm:mb-4 opacity-80"></i>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Pop Picks</h3>
                <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                  Gaming, series, pelis y recomendaciones.
                </p>
                <Link to="/category/pop-picks" className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all text-sm sm:text-base">
                  Explorar <i className="ri-arrow-right-line"></i>
                </Link>
              </div>

              {/* Aesthetic Life */}
              <div className="sm:col-span-2 md:col-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-5 sm:p-8 text-white hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <i className="ri-sparkling-line text-3xl sm:text-5xl mb-3 sm:mb-4 opacity-80"></i>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Aesthetic Life</h3>
                <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                  Wellness, skincare, travel tips y lifestyle.
                </p>
                <Link to="/category/aesthetic-life" className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all text-sm sm:text-base">
                  Explorar <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-8 md:py-20 bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-3xl px-4 sm:px-6 md:px-12 my-8 md:my-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white mb-3 sm:mb-4">
                Nuestros valores
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Lo que nos hace diferentes
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              <div className="text-center p-3 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff3750] text-white rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform">
                  <i className="ri-fire-line text-xl sm:text-3xl"></i>
                </div>
                <h4 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2 dark:text-white">Real Talk</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Sin filtros, sin rodeos.
                </p>
              </div>

              <div className="text-center p-3 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#062db9] text-white rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform">
                  <i className="ri-speed-line text-xl sm:text-3xl"></i>
                </div>
                <h4 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2 dark:text-white">Always First</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Noticias cuando pasan.
                </p>
              </div>

              <div className="text-center p-3 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff3750] text-white rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform">
                  <i className="ri-heart-pulse-line text-xl sm:text-3xl"></i>
                </div>
                <h4 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2 dark:text-white">For You</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Contenido curado.
                </p>
              </div>

              <div className="text-center p-3 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#062db9] text-white rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform">
                  <i className="ri-verified-badge-line text-xl sm:text-3xl"></i>
                </div>
                <h4 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2 dark:text-white">No Cap</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  100% verificado.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-8 md:py-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white mb-3 sm:mb-4">
                El squad detrás de crush
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Obsesionados con mantenerte al día
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="group text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4">
                    <img
                      src={getAvatar(member.name)}
                      alt={member.name}
                      className="w-full h-full rounded-full bg-gray-100 border-2 sm:border-4 border-[#ff3750]/20 group-hover:border-[#ff3750] transition-colors"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-8 sm:h-8 bg-[#ff3750] rounded-full flex items-center justify-center">
                      <i className="ri-verified-badge-fill text-white text-[10px] sm:text-sm"></i>
                    </div>
                  </div>
                  <h4 className="font-bold text-sm sm:text-lg dark:text-white">{member.name}</h4>
                  <p className="text-[#ff3750] text-xs sm:text-sm font-medium line-clamp-1">{member.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs mt-1 line-clamp-1">{member.specialty}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-8 md:py-20 mb-8 md:mb-12">
            <div className="relative overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-r from-[#ff3750] to-[#ff6b81] p-6 sm:p-8 md:p-16 text-center text-white">
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-24 sm:w-48 h-24 sm:h-48 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                  Stay in the loop
                </h2>
                <p className="text-sm sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  No te pierdas ninguna noticia. Sigue scrolleando o dale follow
                  a nuestras redes.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#ff3750] rounded-full font-bold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                  >
                    <i className="ri-home-heart-line"></i>
                    Ver noticias
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors text-sm sm:text-base"
                  >
                    <i className="ri-mail-send-line"></i>
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => (
  <Seo
    title="Sobre Nosotros - crush.news"
    description="Conoce al equipo detrás de crush.news, tu fuente de noticias de entretenimiento, cultura pop, gaming y lifestyle para la generación Z."
  />
)

export default About
