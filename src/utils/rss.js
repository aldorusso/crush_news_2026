/**
 * Generador de RSS Feeds para crush.news
 *
 * Genera feeds RSS 2.0 y Atom para:
 * - Todos los artículos
 * - Artículos por categoría
 * - Últimos artículos
 */

import { posts } from "../common/data/siteData"

const SITE_URL = "https://crush.news"
const SITE_TITLE = "crush.news"
const SITE_DESCRIPTION = "Noticias, cultura digital y entretenimiento para la Generación Z"
const SITE_LANGUAGE = "es"
const SITE_COPYRIGHT = `© ${new Date().getFullYear()} crush.news`

/**
 * Escapa caracteres especiales para XML
 */
function escapeXml(unsafe) {
  if (typeof unsafe !== 'string') return ''

  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case "'": return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}

/**
 * Formatea fecha para RFC 822 (RSS 2.0)
 */
function formatRFC822Date(date) {
  const d = new Date(date)
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const day = days[d.getDay()]
  const date_num = d.getDate().toString().padStart(2, '0')
  const month = months[d.getMonth()]
  const year = d.getFullYear()
  const hours = d.getHours().toString().padStart(2, '0')
  const minutes = d.getMinutes().toString().padStart(2, '0')
  const seconds = d.getSeconds().toString().padStart(2, '0')

  return `${day}, ${date_num} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`
}

/**
 * Genera RSS 2.0 Feed
 */
export function generateRSSFeed(articles, options = {}) {
  const {
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    feedUrl = `${SITE_URL}/rss.xml`,
    category = null,
  } = options

  const feedTitle = category ? `${title} - ${category}` : title
  const feedDescription = category
    ? `${description} - Categoría: ${category}`
    : description

  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <description>${escapeXml(feedDescription)}</description>
    <link>${SITE_URL}/</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <language>${SITE_LANGUAGE}</language>
    <copyright>${SITE_COPYRIGHT}</copyright>
    <lastBuildDate>${formatRFC822Date(new Date())}</lastBuildDate>
    <generator>crush.news RSS Generator</generator>
    <image>
      <url>${SITE_URL}/images/logo.png</url>
      <title>${escapeXml(feedTitle)}</title>
      <link>${SITE_URL}/</link>
    </image>
`

  articles.forEach(article => {
    const articleUrl = `${SITE_URL}${article.url || article.link}`
    const imageUrl = article.image ? `${SITE_URL}${article.image}` : ''

    rss += `    <item>
      <title>${escapeXml(article.title)}</title>
      <description>${escapeXml(article.description || article.excerpt)}</description>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <pubDate>${formatRFC822Date(article.date)}</pubDate>
      <dc:creator>${escapeXml(article.author)}</dc:creator>
`

    if (article.category) {
      rss += `      <category>${escapeXml(article.category)}</category>\n`
    }

    if (article.tags && article.tags.length > 0) {
      article.tags.forEach(tag => {
        rss += `      <category>${escapeXml(tag)}</category>\n`
      })
    }

    if (imageUrl) {
      rss += `      <media:content url="${imageUrl}" medium="image" />\n`
      rss += `      <enclosure url="${imageUrl}" type="image/jpeg" />\n`
    }

    if (article.excerpt || article.description) {
      const content = article.excerpt || article.description
      rss += `      <content:encoded><![CDATA[${content}]]></content:encoded>\n`
    }

    rss += `    </item>\n`
  })

  rss += `  </channel>
</rss>`

  return rss
}

/**
 * Genera Atom Feed
 */
export function generateAtomFeed(articles, options = {}) {
  const {
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    feedUrl = `${SITE_URL}/atom.xml`,
    category = null,
  } = options

  const feedTitle = category ? `${title} - ${category}` : title
  const feedDescription = category
    ? `${description} - Categoría: ${category}`
    : description

  let atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(feedTitle)}</title>
  <subtitle>${escapeXml(feedDescription)}</subtitle>
  <link href="${SITE_URL}/" />
  <link href="${feedUrl}" rel="self" type="application/atom+xml" />
  <id>${SITE_URL}/</id>
  <updated>${new Date().toISOString()}</updated>
  <rights>${SITE_COPYRIGHT}</rights>
  <generator>crush.news Atom Generator</generator>
`

  articles.forEach(article => {
    const articleUrl = `${SITE_URL}${article.url || article.link}`
    const imageUrl = article.image ? `${SITE_URL}${article.image}` : ''

    atom += `  <entry>
    <title>${escapeXml(article.title)}</title>
    <link href="${articleUrl}" />
    <id>${articleUrl}</id>
    <updated>${new Date(article.dateModified || article.date).toISOString()}</updated>
    <published>${new Date(article.date).toISOString()}</published>
    <author>
      <name>${escapeXml(article.author)}</name>
    </author>
    <summary>${escapeXml(article.description || article.excerpt)}</summary>
`

    if (article.category) {
      atom += `    <category term="${escapeXml(article.category)}" />\n`
    }

    if (imageUrl) {
      atom += `    <link rel="enclosure" type="image/jpeg" href="${imageUrl}" />\n`
    }

    if (article.excerpt || article.description) {
      const content = article.excerpt || article.description
      atom += `    <content type="html"><![CDATA[${content}]]></content>\n`
    }

    atom += `  </entry>\n`
  })

  atom += `</feed>`

  return atom
}

/**
 * Genera RSS por categoría
 */
export function generateCategoryFeeds() {
  const categories = {}

  posts.forEach(post => {
    if (post.category) {
      if (!categories[post.category]) {
        categories[post.category] = []
      }
      categories[post.category].push(post)
    }
  })

  return Object.entries(categories).map(([category, articles]) => ({
    category,
    rss: generateRSSFeed(articles, {
      feedUrl: `${SITE_URL}/rss/${category.toLowerCase().replace(/\s+/g, '-')}.xml`,
      category,
    }),
    atom: generateAtomFeed(articles, {
      feedUrl: `${SITE_URL}/atom/${category.toLowerCase().replace(/\s+/g, '-')}.xml`,
      category,
    }),
  }))
}

/**
 * Obtiene últimos N artículos ordenados por fecha
 */
export function getLatestArticles(limit = 20) {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

/**
 * Hook para suscripción RSS (opcional en UI)
 */
export function useRSSSubscription() {
  const feeds = {
    rss: `${SITE_URL}/rss.xml`,
    atom: `${SITE_URL}/atom.xml`,
    json: `${SITE_URL}/feed.json`, // JSON Feed (opcional)
  }

  return feeds
}

export default {
  generateRSSFeed,
  generateAtomFeed,
  generateCategoryFeeds,
  getLatestArticles,
  useRSSSubscription,
}
