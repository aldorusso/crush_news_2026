import React from "react"
import Layout5 from "../common/layout/Layout5"
import { Link } from "gatsby"
import BreadCrumb from "../common/BreadCrumb"
import Seo from "../components/seo"
import img1 from "../assets/images/placeholder"

const Author = () => {
  // Datos de ejemplo del autor
  const authorData = {
    name: "Ana Rodríguez",
    role: "Editora en Jefe",
    bio: "Periodista especializada en cultura digital y tendencias de la Generación Z. Con más de 5 años de experiencia cubriendo el mundo del entretenimiento juvenil, Ana ha trabajado en diversas publicaciones digitales antes de unirse a crush.news. Su pasión por entender y documentar los cambios culturales de la juventud la ha convertido en una voz respetada en el medio.",
    image: img1,
    joinDate: "Enero 2023",
    articlesCount: 45,
    specialty: "Cultura Digital",
    social: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  }

  const recentArticles = [
    {
      id: 1,
      title: "Las nuevas tendencias de la Generación Z en 2025",
      category: "Cultura Z",
      date: "15 Ene 2025",
      image: img1,
      views: "2.5k",
    },
    {
      id: 2,
      title: "Cómo el internet está cambiando las relaciones",
      category: "Love Lab",
      date: "12 Ene 2025",
      image: img1,
      views: "1.8k",
    },
    {
      id: 3,
      title: "Los memes que definieron el mes",
      category: "Internet Culture",
      date: "10 Ene 2025",
      image: img1,
      views: "3.2k",
    },
    {
      id: 4,
      title: "Nuevas palabras del glosario Gen Z",
      category: "Cultura Z",
      date: "8 Ene 2025",
      image: img1,
      views: "1.5k",
    },
  ]

  return (
    <Layout5>
      <BreadCrumb title={authorData.name} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Author Profile Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={authorData.image}
                  alt={authorData.name}
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              <div className="md:w-2/3">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-white bg-[#ff3750] px-3 py-1 rounded-full">
                    {authorData.specialty}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                  {authorData.name}
                </h1>
                <p className="text-xl text-[#ff3750] font-semibold mb-4">
                  {authorData.role}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {authorData.bio}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-[#ff3750]">
                      {authorData.articlesCount}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Artículos Publicados
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {authorData.joinDate}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Se unió a crush.news
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    to={authorData.social.twitter}
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-[#ff3750] hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <i className="ri-twitter-x-fill text-lg"></i>
                  </Link>
                  <Link
                    to={authorData.social.instagram}
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-[#ff3750] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <i className="ri-instagram-fill text-lg"></i>
                  </Link>
                  <Link
                    to={authorData.social.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-[#ff3750] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <i className="ri-linkedin-fill text-lg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Articles */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Artículos Recientes
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Los últimos artículos de {authorData.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentArticles.map((article) => (
                <Link
                  key={article.id}
                  to="/single-post"
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold text-white bg-[#ff3750] px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-[#ff3750] transition-colors">
                      {article.title}
                    </h3>

                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-4">
                        <span>
                          <i className="ri-calendar-line"></i> {article.date}
                        </span>
                        <span>
                          <i className="ri-eye-line"></i> {article.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/search"
                className="inline-block bg-[#ff3750] hover:bg-black text-white font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Ver Todos los Artículos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Ana Rodríguez - Autora - crush.news" />

export default Author
