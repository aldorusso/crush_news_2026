import placeholder from "../../assets/images/placeholder"

// AUTORES DEL SITIO
// Solo incluir autores reales que tienen artículos publicados
export const authors = [
  {
    id: 1,
    name: "Admin",
    role: "Editor Principal",
    bio: "Equipo editorial de crush.news dedicado a traerte las últimas tendencias y noticias de la cultura Gen Z.",
    image: placeholder,
    articles: 0, // Se calculará dinámicamente
    specialty: "General",
    joinDate: "Enero 2024",
    social: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  // Agregar más autores aquí cuando se creen
]

// POSTS/ARTÍCULOS DEL SITIO
export const posts = [
  {
    id: 1,
    title: "Términos y palabras que definen la cultura digital actual",
    description: "Descubre el significado de las palabras y expresiones que definen la Generación Z",
    excerpt: "Un viaje por el glosario de la Gen Z y las nuevas formas de comunicación digital.",
    category: "Cultura Z",
    subcategory: "Glosario",
    tags: ["Gen Z", "Internet Culture", "Trends"],
    author: "Admin",
    date: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    dateFormatted: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: placeholder,
    images: [placeholder], // Array de imágenes para Schema.org (mínimo 1200x675px recomendado)
    comments: 0,
    views: 0,
    link: "/single-post",
    url: "https://crush.news/single-post", // URL completa para Schema.org
    // Entidades relacionadas (IDs de Wikidata para mejorar SEO y Knowledge Graph)
    // Ejemplo de cómo agregar entidades:
    entities: [
      // { name: "Generación Z", wikidataId: "https://www.wikidata.org/wiki/Q4287745" },
      // { name: "TikTok", wikidataId: "https://www.wikidata.org/wiki/Q54958752" },
    ],
  },
  // Los posts se irán agregando aquí conforme se cree contenido
]

// FUNCIÓN PARA OBTENER TODAS LAS ETIQUETAS ÚNICAS DE LOS POSTS
export const getAllTags = () => {
  const tagCounts = {}

  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    }
  })

  // Convertir a array y ordenar por popularidad
  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

// FUNCIÓN PARA OBTENER TODAS LAS CATEGORÍAS ÚNICAS
export const getAllCategories = () => {
  const categoryCounts = {}

  posts.forEach(post => {
    if (post.category) {
      categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1
    }
  })

  return Object.entries(categoryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

// FUNCIÓN PARA CALCULAR ARTÍCULOS POR AUTOR
export const getAuthorsWithArticleCount = () => {
  return authors.map(author => {
    const articleCount = posts.filter(post => post.author === author.name).length
    return {
      ...author,
      articles: articleCount,
    }
  }).filter(author => author.articles > 0 || author.name === "Admin") // Mostrar Admin siempre
}

// FUNCIÓN PARA OBTENER POSTS POR AUTOR
export const getPostsByAuthor = (authorName) => {
  return posts.filter(post => post.author === authorName)
}

// FUNCIÓN PARA OBTENER POSTS POR TAG
export const getPostsByTag = (tagName) => {
  return posts.filter(post =>
    post.tags && post.tags.includes(tagName)
  )
}

// FUNCIÓN PARA OBTENER POSTS POR CATEGORÍA
export const getPostsByCategory = (categoryName) => {
  return posts.filter(post => post.category === categoryName)
}

// FUNCIÓN PARA OBTENER POSTS RECIENTES
export const getRecentPosts = (limit = 10) => {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

// FUNCIÓN PARA OBTENER POSTS POPULARES
export const getPopularPosts = (limit = 10) => {
  return [...posts]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
}

// Exportar para compatibilidad con código existente
export default {
  authors,
  posts,
  getAllTags,
  getAllCategories,
  getAuthorsWithArticleCount,
  getPostsByAuthor,
  getPostsByTag,
  getPostsByCategory,
  getRecentPosts,
  getPopularPosts,
}
