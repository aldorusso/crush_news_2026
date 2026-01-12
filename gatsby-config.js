/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `crush.news - Magazine Online`,
    description: `Tu magazine digital de noticias y contenido actual`,
    author: `crush.news`,
    image: `src/assets/images/favicon.ico`,
    siteUrl: `https://crush.news/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `dominantColor`,
          quality: 85,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `crush.news - Cultura Gen Z`,
        short_name: `crush.news`,
        description: `Noticias, cultura digital y entretenimiento para la Generación Z`,
        start_url: `/`,
        background_color: `#ff3750`,
        theme_color: `#ff3750`,
        display: `standalone`,
        icon: `src/assets/images/favicon.ico`,
        cache_busting_mode: `query`,
        include_favicon: true,
        legacy: true,
        theme_color_in_head: true,
        crossOrigin: `use-credentials`,
      },
    },
    // Sitemap para SEO (MEJORADO con prioridades dinámicas y lastmod)
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => `https://crush.news`,
        serialize: ({ path }) => {
          const {
            calculatePriority,
            calculateChangefreq,
            getLastModified,
            shouldIncludeInSitemap,
          } = require('./src/utils/sitemapConfig')

          // Filtrar páginas que no deben estar en el sitemap
          if (!shouldIncludeInSitemap(path)) {
            return null
          }

          return {
            url: path,
            changefreq: calculateChangefreq(path),
            priority: calculatePriority(path),
            lastmod: getLastModified(path),
          }
        },
        // Crear link en <head>
        createLinkInHead: true,
        // Excluir páginas específicas
        excludes: ['/dev-404-page/', '/404/', '/404.html', '/admin/*', '/draft/*'],
      },
    },
    // Robots.txt
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://crush.news',
        sitemap: 'https://crush.news/sitemap-index.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/draft'],
          },
          {
            userAgent: 'Googlebot',
            allow: '/',
          },
          {
            userAgent: 'Googlebot-News',
            allow: '/',
          },
        ],
      },
    },
    // Optimización de imágenes offline
    `gatsby-plugin-offline`,
  ],
}
