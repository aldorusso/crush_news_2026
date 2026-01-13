// AUTORES DEL SITIO
export const authors = [
  {
    id: 1,
    name: "Admin",
    slug: "admin",
    role: "Editor Principal",
    bio: "Equipo editorial de crush.news dedicado a traerte las últimas tendencias y noticias de la cultura Gen Z.",
    image: null,
    articles: 0,
    specialty: "General",
    categories: ["General"],
    joinDate: "Enero 2024",
    social: {
      twitter: "crushnews",
      instagram: "crush.news",
      tiktok: "crush.news",
    },
  },
  {
    id: 2,
    name: "Luna",
    slug: "luna",
    role: "Editora de Crush Files",
    bio: "Obsesionada con el K-Pop, los dramas coreanos y todo el tea de celebridades. Si Sunghoon respira, Luna lo reporta. Stan de ENHYPEN, BLACKPINK y todo lo que brille.",
    image: null,
    articles: 0,
    specialty: "K-Pop & Celebs",
    categories: ["Crush Files"],
    joinDate: "Marzo 2024",
    social: {
      twitter: "lunacrushnews",
      instagram: "luna.crushnews",
      tiktok: "luna.crushnews",
    },
  },
  {
    id: 3,
    name: "Alex",
    slug: "alex",
    role: "Editor de Pop Picks",
    bio: "Gamer de corazón, amante del cine y adicto a las series. De Genshin Impact a la NBA, de Marvel a los documentales más random. Si es entretenimiento, Alex lo cubre.",
    image: null,
    articles: 0,
    specialty: "Gaming & Series",
    categories: ["Pop Picks"],
    joinDate: "Marzo 2024",
    social: {
      twitter: "alexcrushnews",
      instagram: "alex.crushnews",
      tiktok: "alex.crushnews",
    },
  },
  {
    id: 4,
    name: "Mia",
    slug: "mia",
    role: "Editora de Aesthetic Life",
    bio: "Tu guía para vivir la vida aesthetic. Wellness, skincare, travel tips y todo lo que necesitas para ser tu mejor versión. Experta en rutinas de self-care y tendencias de lifestyle.",
    image: null,
    articles: 0,
    specialty: "Lifestyle & Wellness",
    categories: ["Aesthetic Life"],
    joinDate: "Abril 2024",
    social: {
      twitter: "miacrushnews",
      instagram: "mia.crushnews",
      tiktok: "mia.crushnews",
    },
  },
  {
    id: 5,
    name: "Dani",
    slug: "dani",
    role: "Community Manager",
    bio: "El link entre crush.news y la comunidad. Experto en redes, memes y tendencias virales. Si está trending en TikTok, Dani ya lo vio hace 3 días.",
    image: null,
    articles: 0,
    specialty: "Redes & Trends",
    categories: ["Cultura Z"],
    joinDate: "Mayo 2024",
    social: {
      twitter: "danicrushnews",
      instagram: "dani.crushnews",
      tiktok: "dani.crushnews",
    },
  },
]

// CATEGORÍAS DEL SITIO
// Cultura Z - Cultura digital Gen Z
// Crush Files - Celebridades y entretenimiento
// Love Lab - Relaciones y amor
// Aesthetic Life - Estilo de vida
// Pop Picks - Cultura pop y recomendaciones

// POSTS/ARTÍCULOS DEL SITIO
// Solo artículos con imágenes reales
export const posts = [
  {
    id: 1,
    title: "Nikki Glaser's Monologue, Teyana Taylor's Speech and Other Moments From the 2026 Globes",
    description: "Nikki Glaser returned as host and killed, while Teyana Taylor delivered the speech of the night. Then there were those awful production choices.",
    excerpt: "Nikki Glaser returned as host and killed, while Teyana Taylor delivered the speech of the night.",
    category: "Crush Files",
    subcategory: "The New York Times",
    tags: ["Golden Globes", "Awards", "Celebrities"],
    author: "Admin",
    date: "2026-01-12T10:02:40+00:00",
    dateModified: "2026-01-12T10:02:40+00:00",
    dateFormatted: "12 de enero de 2026",
    image: "https://static01.nyt.com/images/2026/01/12/multimedia/12cul-globes-best-worst-bkqw/12cul-globes-best-worst-bkqw-mediumSquareAt3X.jpg",
    images: ["https://static01.nyt.com/images/2026/01/12/multimedia/12cul-globes-best-worst-bkqw/12cul-globes-best-worst-bkqw-mediumSquareAt3X.jpg"],
    comments: 0,
    views: 20,
    link: "/post/nikki-glasers-monologue-golden-globes-2026",
    sourceUrl: "https://www.nytimes.com/2026/01/12/movies/golden-globes-best-worst-moments.html",
    source: "The New York Times",
    entities: [],
  },
  {
    id: 2,
    title: "Tips to Avoid Stomach Trouble When You Travel",
    description: "Some people have guts of steel, while others are a little more sensitive. Here are tips for preventing stomach discomfort and motion sickness on trips.",
    excerpt: "Here are tips for preventing stomach discomfort and motion sickness on trips.",
    category: "Aesthetic Life",
    subcategory: "The New York Times",
    tags: ["Travel", "Health", "Tips", "Lifestyle"],
    author: "Admin",
    date: "2026-01-12T10:00:52+00:00",
    dateModified: "2026-01-12T10:00:52+00:00",
    dateFormatted: "12 de enero de 2026",
    image: "https://static01.nyt.com/images/2026/01/05/travel/00trav101-stomach-trouble-illo/00trav101-stomach-trouble-illo-mediumSquareAt3X.jpg",
    images: ["https://static01.nyt.com/images/2026/01/05/travel/00trav101-stomach-trouble-illo/00trav101-stomach-trouble-illo-mediumSquareAt3X.jpg"],
    comments: 0,
    views: 40,
    link: "/post/tips-avoid-stomach-trouble-travel",
    sourceUrl: "https://www.nytimes.com/2026/01/12/travel/stomach-problems-motion-sickness-tips.html",
    source: "The New York Times",
    entities: [],
  },
  {
    id: 3,
    title: "A New Documentary Revisits Case Against TV's 'Frugal Gourmet'",
    description: "Three decades after allegations that the chef Jeff Smith assaulted boys, a documentary series delves further into his story.",
    excerpt: "A documentary series delves further into the story of TV chef Jeff Smith.",
    category: "Pop Picks",
    subcategory: "The New York Times",
    tags: ["Documentary", "TV", "Streaming"],
    author: "Admin",
    date: "2026-01-12T10:00:50+00:00",
    dateModified: "2026-01-12T10:00:50+00:00",
    dateFormatted: "12 de enero de 2026",
    image: "https://static01.nyt.com/images/2026/01/14/multimedia/14FD-FRUGAL-GOURMET-01-mtvf/FD-FRUGAL-GOURMET-01-mtvf-mediumSquareAt3X.jpg",
    images: ["https://static01.nyt.com/images/2026/01/14/multimedia/14FD-FRUGAL-GOURMET-01-mtvf/FD-FRUGAL-GOURMET-01-mtvf-mediumSquareAt3X.jpg"],
    comments: 0,
    views: 50,
    link: "/post/documentary-frugal-gourmet",
    sourceUrl: "https://www.nytimes.com/2026/01/12/dining/jeff-smith-frugal-gourmet-documentary.html",
    source: "The New York Times",
    entities: [],
  },
  {
    id: 4,
    title: "All Earrings in Code Violet and How to Get Them",
    description: "You can find several earrings in Code Violet while exploring the vast map. Here's a complete guide to finding them all.",
    excerpt: "Complete guide to finding all earrings in Code Violet.",
    category: "Pop Picks",
    subcategory: "Sportskeeda",
    tags: ["Gaming", "Guide", "Videogames"],
    author: "Admin",
    date: "2026-01-12T10:08:17+00:00",
    dateModified: "2026-01-12T10:08:17+00:00",
    dateFormatted: "12 de enero de 2026",
    image: "https://staticg.sportskeeda.com/editor/2026/01/55553-17682121241697-1920.jpg",
    images: ["https://staticg.sportskeeda.com/editor/2026/01/55553-17682121241697-1920.jpg"],
    comments: 0,
    views: 120,
    link: "/post/code-violet-earrings-guide",
    sourceUrl: "https://www.sportskeeda.com/esports/all-earrings-code-violet-get",
    source: "Sportskeeda",
    entities: [],
  },
  {
    id: 5,
    title: "Steve Kerr Rejects Reality as Warriors Locker Room Admits Major Disadvantage",
    description: "Another loss for the Dub Nation, and the cracks inside the dressing room are obvious. Stephen Curry and Jimmy Butler's 30 apiece wasn't enough as the Hawks won 124-111.",
    excerpt: "Stephen Curry and Jimmy Butler's 30 points each weren't enough against the Hawks.",
    category: "Pop Picks",
    subcategory: "Essentially Sports",
    tags: ["NBA", "Basketball", "Warriors", "Sports"],
    author: "Admin",
    date: "2026-01-12T10:07:50+00:00",
    dateModified: "2026-01-12T10:07:50+00:00",
    dateFormatted: "12 de enero de 2026",
    image: "https://image-cdn.essentiallysports.com/wp-content/uploads/Stephen-Curry-and-Steve-Kerr.jpg?width=1200",
    images: ["https://image-cdn.essentiallysports.com/wp-content/uploads/Stephen-Curry-and-Steve-Kerr.jpg?width=1200"],
    comments: 0,
    views: 130,
    link: "/post/steve-kerr-warriors-locker-room",
    sourceUrl: "https://www.essentiallysports.com/nba-active-basketball-news-steve-kerr-flatly-rejects-reality-as-stephen-curry-warriors-locker-room-admit-major-disadvantage/",
    source: "Essentially Sports",
    entities: [],
  },
  {
    id: 6,
    title: "Genshin Impact Luna IV Preload Guide and Size for PC, Android, and iOS",
    description: "The Genshin Impact Luna IV preload is available for you on your preferred device, allowing you to pre-install the game files.",
    excerpt: "Genshin Impact Luna IV preload available for PC, Android, and iOS.",
    category: "Pop Picks",
    subcategory: "Sportskeeda",
    tags: ["Gaming", "Genshin Impact", "Guide", "Mobile Gaming"],
    author: "Admin",
    date: "2026-01-12T09:59:29+00:00",
    dateModified: "2026-01-12T09:59:29+00:00",
    dateFormatted: "12 de enero de 2026",
    image: "https://staticg.sportskeeda.com/editor/2026/01/d5b81-17682116761396-1920.jpg",
    images: ["https://staticg.sportskeeda.com/editor/2026/01/d5b81-17682116761396-1920.jpg"],
    comments: 0,
    views: 150,
    link: "/post/genshin-impact-luna-iv-preload",
    sourceUrl: "https://www.sportskeeda.com/esports/genshin-impact-luna-iv-preload-guide-size-pc-android-ios",
    source: "Sportskeeda",
    entities: [],
  },
  {
    id: 7,
    title: "Fan Outrage Grows as ENHYPEN's Sunghoon Faces Dangerous Airport Chase",
    description: "ENHYPEN's Sunghoon arrived in Seoul from a solo engagement in Shanghai on January 11th, encountering chaos at Incheon Airport with no security.",
    excerpt: "ENHYPEN's Sunghoon encountered chaos at Incheon Airport with no security.",
    category: "Crush Files",
    subcategory: "Sportskeeda",
    tags: ["K-Pop", "ENHYPEN", "Celebrities"],
    author: "Admin",
    date: "2026-01-12T09:55:02+00:00",
    dateModified: "2026-01-12T09:55:02+00:00",
    dateFormatted: "12 de enero de 2026",
    image: "https://staticg.sportskeeda.com/editor/2026/01/b2c5c-17682108697997-1920.jpg",
    images: ["https://staticg.sportskeeda.com/editor/2026/01/b2c5c-17682108697997-1920.jpg"],
    comments: 0,
    views: 160,
    link: "/post/enhypen-sunghoon-airport-chaos",
    sourceUrl: "https://www.sportskeeda.com/us/k-pop/news-belift-lab-protect-sunghoon-fan-outrage-grows-enhypen-member-faces-dangerous-airport-chase-security",
    source: "Sportskeeda",
    entities: [],
  },
  {
    id: 8,
    title: "Why Sleeping on a Consistent Schedule Is Important For Health",
    description: "Working this overlooked practice into your sleep routine could have real benefits for your health.",
    excerpt: "This overlooked sleep practice could have real benefits for your health.",
    category: "Aesthetic Life",
    subcategory: "The New York Times",
    tags: ["Health", "Sleep", "Wellness", "Lifestyle"],
    author: "Admin",
    date: "2026-01-11T18:45:50+00:00",
    dateModified: "2026-01-11T18:45:50+00:00",
    dateFormatted: "11 de enero de 2026",
    image: "https://static01.nyt.com/images/2026/01/13/multimedia/04WELL-SLEEP-SECRET1-pmcz/04WELL-SLEEP-SECRET1-pmcz-mediumSquareAt3X.jpg",
    images: ["https://static01.nyt.com/images/2026/01/13/multimedia/04WELL-SLEEP-SECRET1-pmcz/04WELL-SLEEP-SECRET1-pmcz-mediumSquareAt3X.jpg"],
    comments: 0,
    views: 200,
    link: "/post/consistent-sleep-schedule-health",
    sourceUrl: "https://www.nytimes.com/2026/01/05/well/health-benefits-sleep-consistency.html",
    source: "The New York Times",
    entities: [],
  },
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
  }).filter(author => author.articles > 0 || author.name === "Admin")
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
const siteData = {
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

export default siteData
