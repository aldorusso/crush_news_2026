import { Link } from "gatsby"
import React, { useState, useEffect } from "react"

const Announcement = () => {
  const [currentDate, setCurrentDate] = useState("")
  const [currentTime, setCurrentTime] = useState("")
  const [weather, setWeather] = useState({ temp: "...", city: "..." })

  useEffect(() => {
    // Función para formatear fecha
    const updateDateTime = () => {
      const now = new Date()
      const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
      const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

      const dayName = days[now.getDay()]
      const day = now.getDate()
      const month = months[now.getMonth()]
      const year = now.getFullYear()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')

      setCurrentDate(`${dayName}, ${day} de ${month}, ${year}`)
      setCurrentTime(`${hours}:${minutes}`)
    }

    // Actualizar fecha y hora
    updateDateTime()
    const interval = setInterval(updateDateTime, 60000) // Actualizar cada minuto

    // Obtener ubicación y clima del usuario
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords
            // Usar un servicio de geocoding inverso gratuito
            const geoResponse = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`
            )
            const geoData = await geoResponse.json()
            const city = geoData.city || geoData.locality || "Tu ciudad"

            // Usar Open-Meteo API gratuita
            const weatherResponse = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            )
            const weatherData = await weatherResponse.json()
            const temp = Math.round(weatherData.current_weather.temperature)

            setWeather({ temp: `${temp}°C`, city })
          } catch (error) {
            console.log("Error obteniendo clima:", error)
            setWeather({ temp: "—", city: "Argentina" })
          }
        },
        () => {
          // Si el usuario niega la ubicación
          setWeather({ temp: "—", city: "Argentina" })
        }
      )
    } else {
      setWeather({ temp: "—", city: "Argentina" })
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <React.Fragment>
      <div className="bg-[#062DB9] text-white py-2">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between">
            <div>
              <ul className="flex items-center flex-wrap gap-2">
                <li className="px-4 py-1 text-xs">
                  <i className="ri-temp-hot-line"></i> {weather.temp} {weather.city} | {currentDate} | {currentTime}
                </li>
                <li className="text-xs border-r rtl:border-l rtl:border-r-0 px-4 md:px-2 lg:px-4 hidden md:block">
                  {" "}
                  <Link to="/login" className="hover:text-slate-300">
                    Iniciar Sesión / Registrarse
                  </Link>{" "}
                </li>
                <li className="text-xs border-r rtl:border-l rtl:border-r-0 px-4 md:px-2 lg:px-4 hidden md:block">
                  {" "}
                  <Link to="/about" className="hover:text-slate-300">
                    Acerca de Nosotros
                  </Link>{" "}
                </li>
                <li className="hidden px-4 text-xs md:block md:px-2 lg:px-4">
                  {" "}
                  <Link to="/contact" className="hover:text-slate-300">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-2 md:space-x-8 rtl:md:space-x-reverse">
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-twitter-x-fill"></i>
                  </Link>{" "}
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-linkedin-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-rss-fill"></i>
                  </Link>
                </li>
                <li className="text-md">
                  <Link to="#" target="_blank" className="hover:text-slate-300">
                    <i className="ri-youtube-fill"></i>
                  </Link>{" "}
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
