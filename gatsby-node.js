/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const fs = require('fs')
const path = require('path')

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const { posts, authors } = require('./src/common/data/siteData.js')

  // Crear página de ejemplo DSG
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // 1. Crear páginas de categorías
  console.log('\n📁 Creando páginas de categorías...')
  const categories = [...new Set(posts.map(post => post.category).filter(Boolean))]

  categories.forEach(category => {
    const slug = category.toLowerCase().replace(/\s+/g, '-')
    createPage({
      path: `/category/${slug}`,
      component: require.resolve("./src/templates/category.jsx"),
      context: {
        category,
        slug,
      },
    })
    console.log(`✅ Página creada: /category/${slug}`)
  })

  // 2. Crear páginas de autores
  console.log('\n👤 Creando páginas de autores...')
  const authorNames = [...new Set(posts.map(post => post.author).filter(Boolean))]

  authorNames.forEach(authorName => {
    const slug = authorName.toLowerCase().replace(/\s+/g, '-')
    createPage({
      path: `/author/${slug}`,
      component: require.resolve("./src/templates/author.jsx"),
      context: {
        authorName,
        authorSlug: slug,
      },
    })
    console.log(`✅ Página creada: /author/${slug}`)
  })

  console.log(`\n🎉 Total: ${categories.length} categorías + ${authorNames.length} autores\n`)
}

/**
 * Generar archivos RSS y redirects después del build
 */
exports.onPostBuild = async ({ graphql }) => {
  // Importar utilidades RSS y datos
  const { posts } = require('./src/common/data/siteData.js')
  const { generateRSSFeed, generateAtomFeed, generateCategoryFeeds, getLatestArticles } = require('./src/utils/rss.js')
  const { generateAllRedirects } = require('./src/utils/redirectManager.js')
  const { generateImageSitemapFromPosts, createSitemapIndex } = require('./src/utils/imageSitemap.js')

  const publicDir = path.join(__dirname, 'public')

  // 0. Generar archivos de redirects
  console.log('\n🔀 Generando archivos de redirects...')
  generateAllRedirects()

  // 0.5. Generar Image Sitemap
  console.log('\n🖼️  Generando Image Sitemap...')
  const imageSitemapPath = path.join(publicDir, 'sitemap-images.xml')
  generateImageSitemapFromPosts(posts, imageSitemapPath)
  createSitemapIndex(publicDir)

  // 1. RSS principal (últimos 20 artículos)
  const latestArticles = getLatestArticles(20)
  const mainRSS = generateRSSFeed(latestArticles)
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), mainRSS)
  console.log('✅ RSS Feed generado: /rss.xml')

  // 2. Atom principal
  const mainAtom = generateAtomFeed(latestArticles)
  fs.writeFileSync(path.join(publicDir, 'atom.xml'), mainAtom)
  console.log('✅ Atom Feed generado: /atom.xml')

  // 3. RSS por categoría
  const categoryFeeds = generateCategoryFeeds()

  // Crear directorios para feeds de categorías
  const rssCategoryDir = path.join(publicDir, 'rss')
  const atomCategoryDir = path.join(publicDir, 'atom')

  if (!fs.existsSync(rssCategoryDir)) {
    fs.mkdirSync(rssCategoryDir, { recursive: true })
  }
  if (!fs.existsSync(atomCategoryDir)) {
    fs.mkdirSync(atomCategoryDir, { recursive: true })
  }

  categoryFeeds.forEach(({ category, rss, atom }) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-')

    // RSS por categoría
    fs.writeFileSync(path.join(rssCategoryDir, `${categorySlug}.xml`), rss)
    console.log(`✅ RSS Feed generado: /rss/${categorySlug}.xml`)

    // Atom por categoría
    fs.writeFileSync(path.join(atomCategoryDir, `${categorySlug}.xml`), atom)
    console.log(`✅ Atom Feed generado: /atom/${categorySlug}.xml`)
  })

  console.log(`\n🎉 Total de ${2 + categoryFeeds.length * 2} feeds generados`)
}
