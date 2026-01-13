import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

/**
 * TOP BAR - Barra de anuncios para medios de comunicación
 *
 * Muestra contenido dinámico y relevante:
 * - Breaking news / Noticia urgente (si existe)
 * - Tags trending / Temas del momento
 * - Fecha, hora y clima
 * - Redes sociales
 */

const Announcement = () => {
  const [currentDate, setCurrentDate] = useState("")
  const [currentTime, setCurrentTime] = useState("")
  const [weather, setWeather] = useState({ temp: "...", city: "..." })
  const [currentTagIndex, setCurrentTagIndex] = useState(0)

  // Noticia urgente/destacada (null si no hay ninguna)
  // Puedes cambiar esto a true y añadir el contenido cuando haya breaking news
  const breakingNews = null
  // Ejemplo de breaking news activo:
  // const breakingNews = {
  //   text: "Taylor Swift anuncia concierto sorpresa en Madrid",
  //   link: "/post/taylor-swift-madrid"
  // }

  // Tags trending - los temas más calientes del momento
  // Extraer tags únicos de los posts más recientes
  const trendingTags = [
    { name: "K-Pop", link: "/musica-fandoms", icon: "ri-music-2-fill" },
    { name: "Taylor Swift", link: "/idolos", icon: "ri-star-fill" },
    { name: "Aesthetic", link: "/estilos", icon: "ri-palette-fill" },
    { name: "Skincare", link: "/beauty-skincare", icon: "ri-heart-fill" },
    { name: "Gaming", link: "/apps-juegos", icon: "ri-gamepad-fill" },
    { name: "Series", link: "/series-pelis", icon: "ri-film-fill" },
  ]

  // Rotar tags en móvil
  useEffect(() => {
    const tagInterval = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % trendingTags.length)
    }, 3000)
    return () => clearInterval(tagInterval)
  }, [trendingTags.length])

  useEffect(() => {
    // Función para formatear fecha
    const updateDateTime = () => {
      const now = new Date()
      const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
                      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

      const dayName = days[now.getDay()]
      const day = now.getDate()
      const month = months[now.getMonth()]
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')

      setCurrentDate(`${dayName} ${day} ${month}`)
      setCurrentTime(`${hours}:${minutes}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)

    // Obtener clima
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords
            const geoResponse = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`
            )
            const geoData = await geoResponse.json()
            const city = geoData.city || geoData.locality || "Tu ciudad"

            const weatherResponse = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            )
            const weatherData = await weatherResponse.json()
            const temp = Math.round(weatherData.current_weather.temperature)

            setWeather({ temp: `${temp}°`, city })
          } catch (error) {
            setWeather({ temp: "—", city: "ES" })
          }
        },
        () => {
          setWeather({ temp: "—", city: "ES" })
        }
      )
    } else {
      setWeather({ temp: "—", city: "ES" })
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <React.Fragment>
      {/* Breaking News Banner - Solo se muestra si hay noticia urgente */}
      {breakingNews && (
        <div className="bg-[#ff3750] text-white py-2 animate-pulse">
          <div className="container px-4 mx-auto">
            <Link to={breakingNews.link} className="flex items-center justify-center gap-2 hover:opacity-90">
              <span className="bg-white text-[#ff3750] px-2 py-0.5 rounded text-xs font-bold uppercase">
                Urgente
              </span>
              <span className="text-sm font-medium truncate">
                {breakingNews.text}
              </span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      )}

      {/* Main Top Bar */}
      <div className="bg-[#062DB9] text-white py-1.5">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* Left: Date/Time/Weather + Trending Tags */}
            <div className="flex items-center gap-2 overflow-hidden">
              {/* Fecha y clima - siempre visible */}
              <div className="flex items-center text-xs text-white/80 whitespace-nowrap">
                <i className="ri-calendar-line mr-1"></i>
                <span className="hidden sm:inline">{currentDate}</span>
                <span className="sm:hidden">{currentDate.split(' ')[0]}</span>
                <span className="mx-1.5">|</span>
                <span>{currentTime}</span>
                <span className="mx-1.5 hidden xs:inline">|</span>
                <span className="hidden xs:inline">
                  <i className="ri-temp-hot-line mr-0.5"></i>
                  {weather.temp}
                </span>
              </div>

              {/* Separador */}
              <div className="hidden md:block w-px h-4 bg-white/30 mx-2"></div>

              {/* Trending Tags - Desktop */}
              <div className="hidden md:flex items-center gap-1">
                <span className="text-[10px] uppercase tracking-wider text-white/60 mr-1">
                  <i className="ri-fire-fill text-orange-400"></i> Trending:
                </span>
                {trendingTags.slice(0, 5).map((tag, index) => (
                  <Link
                    key={tag.name}
                    to={tag.link}
                    className="text-xs px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors whitespace-nowrap"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>

              {/* Trending Tag - Mobile (rotativo) */}
              <div className="md:hidden flex items-center">
                <span className="text-[10px] text-white/60 mr-1">
                  <i className="ri-fire-fill text-orange-400"></i>
                </span>
                <Link
                  to={trendingTags[currentTagIndex].link}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/10 animate-fade-in"
                >
                  {trendingTags[currentTagIndex].name}
                </Link>
              </div>
            </div>

            {/* Right: Social Media */}
            <div className="flex items-center">
              <ul className="flex space-x-3 md:space-x-4">
                <li>
                  <a
                    href="https://www.tiktok.com/@crushnews_es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff3750] transition-colors"
                    aria-label="TikTok"
                  >
                    <i className="ri-tiktok-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/crushnews_es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff3750] transition-colors"
                    aria-label="Instagram"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
                <li className="hidden sm:block">
                  <a
                    href="https://x.com/crushnews_es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff3750] transition-colors"
                    aria-label="Twitter/X"
                  >
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </li>
                <li className="hidden sm:block">
                  <a
                    href="https://www.youtube.com/@crushnews_es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff3750] transition-colors"
                    aria-label="YouTube"
                  >
                    <i className="ri-youtube-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Announcement
