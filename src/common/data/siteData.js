import placeholder from "../../assets/images/placeholder"

// AUTORES DEL SITIO
export const authors = [
  {
    id: 1,
    name: "Admin",
    role: "Editor Principal",
    bio: "Equipo editorial de crush.news dedicado a traerte las últimas tendencias y noticias de la cultura Gen Z.",
    image: placeholder,
    articles: 0,
    specialty: "General",
    joinDate: "Enero 2024",
    social: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
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
// Importados desde MediaStack API - 12 de enero de 2026
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
    images: [placeholder],
    comments: 0,
    views: 0,
    link: "/single-post",
    entities: [],
  },
  {
    id: 2,
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
    id: 3,
    title: "Ricky Gervais Won the Comedy Award. Wanda Sykes Got the Last Laugh.",
    description: "Although Gervais has hosted the Golden Globes five times, he was not at the ceremony on Sunday night.",
    excerpt: "Although Gervais has hosted the Golden Globes five times, he was not at the ceremony on Sunday night.",
    category: "Crush Files",
    subcategory: "The New York Times",
    tags: ["Golden Globes", "Awards", "Comedy"],
    author: "Admin",
    date: "2026-01-12T10:02:34+00:00",
    dateModified: "2026-01-12T10:02:34+00:00",
    dateFormatted: "12 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 30,
    link: "/post/ricky-gervais-comedy-award-wanda-sykes",
    sourceUrl: "https://www.nytimes.com/2026/01/12/arts/television/ricky-gervais-wanda-sykes-golden-globes.html",
    source: "The New York Times",
    entities: [],
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "Josh In 'Air Bud' - Where Is He Now?",
    description: "Canadian actor Kevin Zegers was just a pre-teen when he played Josh in the 1997 sport/family film Air Bud. Here's what he's been up to since then.",
    excerpt: "Canadian actor Kevin Zegers was just a pre-teen when he played Josh in Air Bud.",
    category: "Crush Files",
    subcategory: "TMZ",
    tags: ["Nostalgia", "90s", "Celebrities", "Movies"],
    author: "Admin",
    date: "2026-01-12T08:01:07+00:00",
    dateModified: "2026-01-12T08:01:07+00:00",
    dateFormatted: "12 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 60,
    link: "/post/josh-air-bud-where-is-he-now",
    sourceUrl: "https://www.tmz.com/2026/01/12/josh-in-air-bud-memba-him/",
    source: "TMZ",
    entities: [],
  },
  {
    id: 7,
    title: "Follow Ian McKellen Into the Mixed Reality Future in 'An Ark'",
    description: "Audiences can embark on a very different type of theatrical experience in a new play at the Shed, blending the physical world with digital content.",
    excerpt: "A new play at the Shed blends the physical world with digital content.",
    category: "Cultura Z",
    subcategory: "The New York Times",
    tags: ["Tech", "VR", "Innovation", "Theater"],
    author: "Admin",
    date: "2026-01-12T10:02:10+00:00",
    dateModified: "2026-01-12T10:02:10+00:00",
    dateFormatted: "12 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 70,
    link: "/post/ian-mckellen-mixed-reality-an-ark",
    sourceUrl: "https://www.nytimes.com/2026/01/12/theater/ark-ian-mckellen-shed.html",
    source: "The New York Times",
    entities: [],
  },
  {
    id: 8,
    title: "Trump's Fundraisers Asked Microsoft for White House Ballroom Donation",
    description: "The Trump administration approached Microsoft for its donation to fund the White House's $300 million ballroom, documents released by Sen. Elizabeth Warren's office reveal.",
    excerpt: "Documents reveal Microsoft was approached to fund the White House's $300 million ballroom.",
    category: "Cultura Z",
    subcategory: "The Verge",
    tags: ["Politics", "Tech", "Microsoft", "Big Tech"],
    author: "Admin",
    date: "2026-01-12T10:00:00+00:00",
    dateModified: "2026-01-12T10:00:00+00:00",
    dateFormatted: "12 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 80,
    link: "/post/trump-microsoft-white-house-ballroom",
    sourceUrl: "https://www.theverge.com/news/859578/trump-white-house-ballroom-microsoft-amazon-donations",
    source: "The Verge",
    entities: [],
  },
  {
    id: 9,
    title: "inDrive Turns to Ads and Groceries to Diversify Revenue",
    description: "Advertising on inDrive is being rolled out across its top 20 markets following mid-2025 tests.",
    excerpt: "inDrive diversifies with advertising and grocery delivery services.",
    category: "Cultura Z",
    subcategory: "TechCrunch",
    tags: ["Tech", "Startups", "Apps", "Business"],
    author: "Admin",
    date: "2026-01-12T05:30:13+00:00",
    dateModified: "2026-01-12T05:30:13+00:00",
    dateFormatted: "12 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 90,
    link: "/post/indrive-ads-groceries-diversify",
    sourceUrl: "https://techcrunch.com/2026/01/11/indrive-turns-to-ads-and-groceries-to-diversify-revenue/",
    source: "TechCrunch",
    entities: [],
  },
  {
    id: 10,
    title: "Motional Puts AI at Center of Robotaxi Reboot for 2026 Launch",
    description: "Motional says it will launch a driverless robotaxi service in Las Vegas before the end of 2026.",
    excerpt: "Motional announces driverless robotaxi service coming to Las Vegas in 2026.",
    category: "Cultura Z",
    subcategory: "TechCrunch",
    tags: ["AI", "Tech", "Autonomous Vehicles", "Future"],
    author: "Admin",
    date: "2026-01-12T00:10:54+00:00",
    dateModified: "2026-01-12T00:10:54+00:00",
    dateFormatted: "12 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 100,
    link: "/post/motional-ai-robotaxi-2026",
    sourceUrl: "https://techcrunch.com/2026/01/11/motional-puts-ai-at-center-of-robotaxi-reboot-as-it-targets-2026-for-driverless-service/",
    source: "TechCrunch",
    entities: [],
  },
  {
    id: 11,
    title: "Billy Woods' Horrorcore Masterpiece for the A24 Crowd",
    description: "Billy Woods has one of the highest batting averages in the game. Between his solo records and his collaborative albums with Elucid as Armand Hammer, the man has multiple stone-cold classics.",
    excerpt: "Billy Woods delivers another stone-cold classic with his new album.",
    category: "Pop Picks",
    subcategory: "The Verge",
    tags: ["Music", "Hip-Hop", "Reviews", "Albums"],
    author: "Admin",
    date: "2026-01-11T23:29:58+00:00",
    dateModified: "2026-01-11T23:29:58+00:00",
    dateFormatted: "11 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 110,
    link: "/post/billy-woods-horrorcore-masterpiece",
    sourceUrl: "https://www.theverge.com/column/860372/billy-woods-horrorcore-masterpiece-golliwog-a24",
    source: "The Verge",
    entities: [],
  },
  {
    id: 12,
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
    id: 13,
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
    id: 14,
    title: "WPL 2026 Matches in Navi Mumbai Likely to Be Played Behind Closed Doors",
    description: "The report states that is not final if the WPL 2026 matches on all three days will be played without the presence of fans.",
    excerpt: "WPL 2026 matches may be played without fans in attendance.",
    category: "Pop Picks",
    subcategory: "Insidesport",
    tags: ["Cricket", "Sports", "WPL"],
    author: "Admin",
    date: "2026-01-12T10:07:18+00:00",
    dateModified: "2026-01-12T10:07:18+00:00",
    dateFormatted: "12 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 140,
    link: "/post/wpl-2026-navi-mumbai-closed-doors",
    sourceUrl: "https://www.insidesport.in/cricket/wpl-2026-matches-in-navi-mumbai-on-january-14-15-and-16-likely-to-be-played-behind-closed-doors/",
    source: "Insidesport",
    entities: [],
  },
  {
    id: 15,
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
    id: 16,
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
    id: 17,
    title: "3 Steps to Fix Your Attention Span",
    description: "Starting the year with a broken brain? We asked experts how you can get your focus back.",
    excerpt: "Experts share how you can get your focus back this year.",
    category: "Aesthetic Life",
    subcategory: "The New York Times",
    tags: ["Wellness", "Mental Health", "Focus", "Lifestyle"],
    author: "Admin",
    date: "2026-01-12T10:00:38+00:00",
    dateModified: "2026-01-12T10:00:38+00:00",
    dateFormatted: "12 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 170,
    link: "/post/3-steps-fix-attention-span",
    sourceUrl: "https://www.nytimes.com/2026/01/12/well/how-to-improve-focus-and-attention-span.html",
    source: "The New York Times",
    entities: [],
  },
  {
    id: 18,
    title: "How Healthy Is Olive Oil?",
    description: "This star of the Mediterranean diet is packed with nutritional benefits.",
    excerpt: "The Mediterranean diet star is packed with nutritional benefits.",
    category: "Aesthetic Life",
    subcategory: "The New York Times",
    tags: ["Health", "Nutrition", "Food", "Lifestyle"],
    author: "Admin",
    date: "2026-01-12T10:00:17+00:00",
    dateModified: "2026-01-12T10:00:17+00:00",
    dateFormatted: "12 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 180,
    link: "/post/how-healthy-is-olive-oil",
    sourceUrl: "https://www.nytimes.com/2026/01/12/well/eat/olive-oil-health-benefits-recipes.html",
    source: "The New York Times",
    entities: [],
  },
  {
    id: 19,
    title: "8 Everyday Tasks That Highly Intelligent People Struggle With",
    description: "People who struggle with these 8 everyday tasks are often more intelligent than 95% of people according to psychology.",
    excerpt: "Psychology reveals signs of high intelligence in everyday struggles.",
    category: "Aesthetic Life",
    subcategory: "VegOut",
    tags: ["Psychology", "Intelligence", "Lifestyle"],
    author: "Admin",
    date: "2026-01-11T19:32:08+00:00",
    dateModified: "2026-01-11T19:32:08+00:00",
    dateFormatted: "11 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 190,
    link: "/post/8-tasks-intelligent-people-struggle",
    sourceUrl: "https://news.google.com/rss/articles/psychology-intelligence",
    source: "VegOut",
    entities: [],
  },
  {
    id: 20,
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
  {
    id: 21,
    title: "With YouTube and TikTok, Dentists Are Trying to Get Gen Z to Show Up",
    description: "Dentists are using social media platforms like YouTube and TikTok to reach Gen Z patients who are avoiding dental appointments.",
    excerpt: "Dentists use TikTok and YouTube to reach Gen Z patients.",
    category: "Cultura Z",
    subcategory: "The Washington Post",
    tags: ["Gen Z", "TikTok", "YouTube", "Social Media", "Health"],
    author: "Admin",
    date: "2026-01-11T16:51:07+00:00",
    dateModified: "2026-01-11T16:51:07+00:00",
    dateFormatted: "11 de enero de 2026",
    image: placeholder,
    images: [placeholder],
    comments: 0,
    views: 210,
    link: "/post/dentists-tiktok-youtube-gen-z",
    sourceUrl: "https://www.washingtonpost.com/health/dentists-gen-z-tiktok",
    source: "The Washington Post",
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
