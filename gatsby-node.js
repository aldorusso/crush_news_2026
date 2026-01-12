/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const fs = require('fs')
const path = require('path')

// Datos simplificados para gatsby-node (evita problemas de ES modules)
// Categorías: Cultura Z, Crush Files, Love Lab, Aesthetic Life, Pop Picks
const posts = [
  { id: 1, category: "Cultura Z", author: "Admin" },
  { id: 2, category: "Crush Files", author: "Admin" },
  { id: 3, category: "Crush Files", author: "Admin" },
  { id: 4, category: "Aesthetic Life", author: "Admin" },
  { id: 5, category: "Pop Picks", author: "Admin" },
  { id: 6, category: "Crush Files", author: "Admin" },
  { id: 7, category: "Cultura Z", author: "Admin" },
  { id: 8, category: "Cultura Z", author: "Admin" },
  { id: 9, category: "Cultura Z", author: "Admin" },
  { id: 10, category: "Cultura Z", author: "Admin" },
  { id: 11, category: "Pop Picks", author: "Admin" },
  { id: 12, category: "Pop Picks", author: "Admin" },
  { id: 13, category: "Pop Picks", author: "Admin" },
  { id: 14, category: "Pop Picks", author: "Admin" },
  { id: 15, category: "Pop Picks", author: "Admin" },
  { id: 16, category: "Crush Files", author: "Admin" },
  { id: 17, category: "Aesthetic Life", author: "Admin" },
  { id: 18, category: "Aesthetic Life", author: "Admin" },
  { id: 19, category: "Aesthetic Life", author: "Admin" },
  { id: 20, category: "Aesthetic Life", author: "Admin" },
  { id: 21, category: "Cultura Z", author: "Admin" },
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

// onPostBuild deshabilitado temporalmente - usar gatsby-plugin-feed en su lugar
// para generar RSS feeds sin problemas de ES modules
