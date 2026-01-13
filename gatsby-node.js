/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// Solo artículos con imágenes reales (8 artículos)
const posts = [
  { id: 1, slug: "nikki-glasers-monologue-golden-globes-2026", category: "Crush Files", author: "Admin" },
  { id: 2, slug: "tips-avoid-stomach-trouble-travel", category: "Aesthetic Life", author: "Admin" },
  { id: 3, slug: "documentary-frugal-gourmet", category: "Pop Picks", author: "Admin" },
  { id: 4, slug: "code-violet-earrings-guide", category: "Pop Picks", author: "Admin" },
  { id: 5, slug: "steve-kerr-warriors-locker-room", category: "Pop Picks", author: "Admin" },
  { id: 6, slug: "genshin-impact-luna-iv-preload", category: "Pop Picks", author: "Admin" },
  { id: 7, slug: "enhypen-sunghoon-airport-chaos", category: "Crush Files", author: "Admin" },
  { id: 8, slug: "consistent-sleep-schedule-health", category: "Aesthetic Life", author: "Admin" },
]

// Todos los autores del equipo
const authors = [
  { name: "Admin", slug: "admin" },
  { name: "Luna", slug: "luna" },
  { name: "Alex", slug: "alex" },
  { name: "Mia", slug: "mia" },
  { name: "Dani", slug: "dani" },
]

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // Crear página de ejemplo DSG
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // 1. Crear páginas de artículos individuales
  console.log('\n📰 Creando páginas de artículos...')
  posts.forEach(post => {
    createPage({
      path: `/post/${post.slug}`,
      component: require.resolve("./src/templates/post.jsx"),
      context: {
        postId: post.id,
        slug: post.slug,
      },
    })
    console.log(`✅ Artículo: /post/${post.slug}`)
  })

  // 2. Crear páginas de categorías
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
    console.log(`✅ Categoría: /category/${slug}`)
  })

  // 3. Crear páginas de autores (todos los del equipo)
  console.log('\n👤 Creando páginas de autores...')

  authors.forEach(author => {
    createPage({
      path: `/author/${author.slug}`,
      component: require.resolve("./src/templates/author.jsx"),
      context: {
        authorName: author.name,
        authorSlug: author.slug,
      },
    })
    console.log(`✅ Autor: /author/${author.slug}`)
  })

  console.log(`\n🎉 Total: ${posts.length} artículos + ${categories.length} categorías + ${authors.length} autores\n`)
}
