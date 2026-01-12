import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

/**
 * Related Articles - Componente Interactivo
 *
 * Muestra artículos relacionados basados en:
 * - Categoría
 * - Tags
 * - Autor
 * - Popularidad
 *
 * Se carga de forma lazy (Island Architecture)
 * Solo carga cuando el navegador está idle
 */

const RelatedArticles = ({
  currentArticleId,
  category,
  tags = [],
  author,
  maxArticles = 4,
  layout = "grid", // "grid" | "list" | "carousel"
  showThumbnails = true,
  className = "",
}) => {
  const [relatedArticles, setRelatedArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular fetch de artículos relacionados
    // En producción, esto vendría de tu API/GraphQL
    const fetchRelatedArticles = async () => {
      setIsLoading(true)

      // Simulación de delay de red
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Aquí irías a tu API o GraphQL
      // const response = await fetch(`/api/articles/related?id=${currentArticleId}`)
      // const data = await response.json()

      // Por ahora, datos de ejemplo
      const mockArticles = [
        {
          id: 1,
          title: "Can Yaman conquista Hollywood con su nuevo proyecto internacional",
          excerpt: "El actor turco firma un contrato millonario para protagonizar una serie americana...",
          image: "/images/placeholder.jpg",
          category: "Celebridades",
          slug: "/single-post",
          date: "2024-03-15",
          readTime: 5,
        },
        {
          id: 2,
          title: "Las tendencias de moda que dominarán la temporada",
          excerpt: "Descubre los looks que marcarán la pauta este año según los diseñadores...",
          image: "/images/placeholder.jpg",
          category: "Moda",
          slug: "/single-post",
          date: "2024-03-14",
          readTime: 4,
        },
        {
          id: 3,
          title: "Entretenimiento: Los estrenos más esperados del mes",
          excerpt: "Películas, series y música que no puedes perderte en marzo...",
          image: "/images/placeholder.jpg",
          category: "Entretenimiento",
          slug: "/single-post",
          date: "2024-03-13",
          readTime: 6,
        },
        {
          id: 4,
          title: "Estilo de vida: Rutinas matutinas de famosos que puedes copiar",
          excerpt: "Conoce los hábitos que mantienen a las celebridades en forma y motivadas...",
          image: "/images/placeholder.jpg",
          category: "Lifestyle",
          slug: "/single-post",
          date: "2024-03-12",
          readTime: 7,
        },
      ]

      // Filtrar artículos relacionados (por categoría o tags)
      const filtered = mockArticles
        .filter((article) => article.id !== currentArticleId)
        .slice(0, maxArticles)

      setRelatedArticles(filtered)
      setIsLoading(false)
    }

    fetchRelatedArticles()
  }, [currentArticleId, category, tags, maxArticles])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  if (isLoading) {
    return (
      <div className={`related-articles-skeleton ${className}`}>
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Artículos relacionados</h3>
        <div className={layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
          {[1, 2, 3, 4].slice(0, maxArticles).map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-48 mb-3" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (relatedArticles.length === 0) {
    return null
  }

  // Grid layout
  if (layout === "grid") {
    return (
      <div className={`related-articles ${className}`}>
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Artículos relacionados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedArticles.map((article) => (
            <Link
              key={article.id}
              to={article.slug}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {showThumbnails && (
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-[#ff3750] text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
              )}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#ff3750] transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{formatDate(article.date)}</span>
                  <span>•</span>
                  <span>{article.readTime} min</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // List layout
  if (layout === "list") {
    return (
      <div className={`related-articles ${className}`}>
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Artículos relacionados</h3>
        <div className="space-y-4">
          {relatedArticles.map((article) => (
            <Link
              key={article.id}
              to={article.slug}
              className="group flex gap-4 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 p-4"
            >
              {showThumbnails && (
                <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <span className="inline-block px-2 py-1 bg-[#ff3750] text-white text-xs font-semibold rounded mb-2">
                  {article.category}
                </span>
                <h4 className="text-base font-semibold text-gray-900 group-hover:text-[#ff3750] transition-colors mb-1 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{formatDate(article.date)}</span>
                  <span>•</span>
                  <span>{article.readTime} min</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export default RelatedArticles
