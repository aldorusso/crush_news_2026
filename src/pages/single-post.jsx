import React from "react"
import Seo from "../components/seo"
import NewsArticleSchema from "../components/NewsArticleSchema"
import AuthorSchema from "../components/AuthorSchema"
import PublisherSchema from "../components/PublisherSchema"
import SpeculationRules from "../components/SpeculationRules"
import Breadcrumbs from "../components/Breadcrumbs"
import StaticArticleBody from "../components/StaticArticleBody"
import BackToTop from "../components/BackToTop"
import TableOfContents from "../components/TableOfContents"
import Newsletter from "../components/Newsletter"
import { ArticleHeroImage } from "../components/OptimizedImage"
import { CommentIsland, SocialShareIsland, CarouselIsland, RelatedArticlesIsland } from "../components/Island"
import Social from "../common/Social"
import PostList from "../common/PostList"
import story1 from "../assets/images/placeholder"
import { Link } from "gatsby"
import Layout5 from "../common/layout/Layout5"
import post1 from "../assets/images/placeholder"
import post2 from "../assets/images/placeholder"
import post3 from "../assets/images/placeholder"
import { calculateReadingTime } from "../utils/readingTime"

const SinglePost = () => {
  // Datos del artículo (en producción vendrían de la base de datos o GraphQL)
  const articleData = {
    headline: "Descubre las Tendencias y Noticias Más Relevantes",
    description: "Las últimas tendencias en moda, cultura y entretenimiento que definen a la Generación Z",
    url: "https://crush.news/single-post",
    datePublished: "2024-03-18T10:00:00+00:00",
    dateModified: new Date().toISOString(),
    authorName: "Admin",
    authorUrl: "https://crush.news/author/admin",
    images: ["https://crush.news/images/article-main.jpg"],
    category: "Moda",
    tags: ["Moda", "Tendencias", "Gen Z"],
    entities: [],
  }

  // Contenido del artículo como HTML estático
  const articleContent = `
    <p>En el mundo actual, mantenerse informado es más importante que nunca. Las tendencias cambian rápidamente y las noticias se desarrollan a cada momento. Nuestro compromiso es brindarte información precisa, relevante y oportuna sobre los temas que realmente importan.</p>

    <h2>Jason Santa Maria</h2>
    <p>La lectura no solo está influenciada por lo que está sucediendo con nosotros en ese momento, sino también por cómo nuestros ojos y cerebro trabajan para procesar la información. Lo que ves y lo que experimentas al leer estas palabras es bastante diferente.</p>

    <p>El periodismo de calidad requiere investigación, dedicación y compromiso con la verdad. Cada historia que compartimos pasa por un riguroso proceso de verificación para garantizar su exactitud. Creemos en el poder de la información para transformar vidas y comunidades.</p>

    <p>La diversidad de perspectivas enriquece nuestro entendimiento del mundo. Cada voz cuenta una historia única que merece ser escuchada. A través del diálogo y la comprensión mutua, podemos construir puentes entre diferentes comunidades y culturas.</p>
  `

  // Calcular tiempo de lectura
  const readingTime = calculateReadingTime(articleContent)

  // Galería CONDICIONAL - Solo mostrar si el artículo tiene imágenes
  const hasGallery = false // En producción: articleData.gallery?.length > 0
  const carouselImages = hasGallery ? [
    { src: post1, alt: "Galería de imágenes 1" },
    { src: post2, alt: "Galería de imágenes 2" },
    { src: post3, alt: "Galería de imágenes 3" },
  ] : []

  return (
    <React.Fragment>
      <Layout5>
        {/* Schema.org JSON-LD para SEO */}
        <NewsArticleSchema {...articleData} />
        <AuthorSchema
          name={articleData.authorName}
          url={articleData.authorUrl}
          jobTitle="Periodista"
          description="Equipo editorial de crush.news dedicado a traerte las últimas tendencias."
          knowsAbout={[articleData.category, "Periodismo", "Gen Z"]}
        />
        <PublisherSchema />

        {/* Speculation Rules para navegación instantánea */}
        <SpeculationRules mode="moderate" />

        <div className="container mx-auto mt-8 px-4">
          {/* Breadcrumbs con Schema.org */}
          <Breadcrumbs
            pathname="/category/moda/tendencias"
            currentPageTitle={articleData.headline}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8">
            {/* Contenido principal del artículo */}
            <div className="col-span-1 md:col-span-2">
              <article className="article-container">
                {/* Título del artículo (H1) - UNA SOLA VEZ */}
                <h1 className="font-semibold text-3xl md:text-4xl mb-6 text-black dark:text-white leading-tight">
                  {articleData.headline}
                </h1>

                {/* Meta información - UNA SOLA VEZ con links funcionales */}
                <div className="article-meta flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6 pb-6 border-b dark:border-slate-700">
                  {/* Autor - LINK FUNCIONAL */}
                  <Link
                    to="/author/admin"
                    className="flex items-center gap-2 hover:text-[#ff3750] transition-colors"
                  >
                    <i className="ri-user-fill"></i>
                    <span>{articleData.authorName}</span>
                  </Link>

                  {/* Fecha - NO es link, es solo info */}
                  <span className="flex items-center gap-2">
                    <i className="ri-calendar-fill"></i>
                    <time dateTime={articleData.datePublished}>
                      {new Date(articleData.datePublished).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </span>

                  {/* Categoría - LINK FUNCIONAL */}
                  <Link
                    to={`/category/${articleData.category.toLowerCase()}`}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3750] text-white hover:bg-[#e62f45] transition-colors text-xs font-medium"
                  >
                    <i className="ri-bookmark-fill"></i>
                    <span>{articleData.category}</span>
                  </Link>

                  {/* Tiempo de lectura - NO es link, calculado dinámicamente */}
                  <span className="flex items-center gap-2">
                    <i className="ri-time-fill"></i>
                    <span>{readingTime.text}</span>
                  </span>
                </div>

                {/* Imagen principal optimizada */}
                <figure className="mb-8">
                  <ArticleHeroImage
                    src={story1}
                    alt={articleData.headline}
                    width={1200}
                    height={675}
                    className="rounded-lg w-full"
                  />
                </figure>

                {/* Contenido del artículo - SIN duplicar meta info */}
                <StaticArticleBody
                  content={articleContent}
                  enableAutoLinking={true}
                />

                {/* Botones de compartir - Island */}
                <div className="my-8 py-6 border-t border-b dark:border-slate-700">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">
                    Compartir artículo
                  </h3>
                  <SocialShareIsland
                    url="https://crush.news/single-post"
                    title={articleData.headline}
                    description={articleData.description}
                    hashtags={articleData.tags}
                    showCopyLink={true}
                  />
                </div>

                {/* Galería - CONDICIONAL (solo si hasGallery = true) */}
                {hasGallery && carouselImages.length > 0 && (
                  <div className="my-12">
                    <h3 className="text-xl font-bold mb-4 dark:text-white">
                      Galería de imágenes
                    </h3>
                    <CarouselIsland
                      images={carouselImages}
                      showThumbnails={true}
                      allowFullscreen={true}
                    />
                  </div>
                )}

                {/* Artículos relacionados - Island */}
                <div className="my-12">
                  <RelatedArticlesIsland
                    currentArticleId={1}
                    category={articleData.category}
                    tags={articleData.tags}
                    maxArticles={4}
                    layout="grid"
                  />
                </div>

                {/* Newsletter subscription */}
                <div className="my-12 bg-gradient-to-r from-[#ff3750] to-[#e62f45] p-8 rounded-lg text-white">
                  <Newsletter
                    title="¿Te gustó este artículo?"
                    description="Suscríbete para recibir más contenido como este"
                    buttonText="¡Quiero suscribirme!"
                    onSubscribe={async (data) => {
                      // TODO: Implementar envío a servicio de email marketing
                    }}
                    className="text-white"
                  />
                </div>

                {/* Sección de comentarios - Island */}
                <div className="mt-12">
                  <CommentIsland
                    articleId={1}
                    initialComments={[
                      {
                        id: 1,
                        author: "Juan Pérez",
                        content: "Excelente artículo, muy informativo y bien escrito. Me ayudó a entender mejor el tema y aprecio la profundidad del análisis.",
                        date: new Date(Date.now() - 36000000).toISOString(),
                      },
                      {
                        id: 2,
                        author: "María García",
                        content: "Muy interesante, gracias por compartir esta información tan valiosa.",
                        date: new Date(Date.now() - 360000).toISOString(),
                        parentId: 1,
                      },
                    ]}
                    allowReplies={true}
                    maxDepth={2}
                  />
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="col-span-1">
              {/* Table of Contents */}
              <div className="mb-6 bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden sticky top-20">
                <TableOfContents
                  content={articleContent}
                  minHeadings={2}
                  levels={[2, 3]}
                />
              </div>

              {/* Búsqueda */}
              <div className="mb-6">
                <form className="flex gap-1" role="search">
                  <input
                    type="search"
                    className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Buscar artículos..."
                    aria-label="Buscar artículos"
                  />
                  <button
                    type="submit"
                    className="btn rounded-lg px-4 py-1 relative bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700 transition-colors"
                    aria-label="Buscar"
                  >
                    <i className="ri-search-line"></i>
                  </button>
                </form>
              </div>

              {/* Social & Newsletter */}
              <Social />

              {/* Post List */}
              <PostList />
            </aside>
          </div>
        </div>

        {/* Back to top button */}
        <BackToTop showAfter={300} />
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => (
  <Seo
    title="Descubre las Tendencias y Noticias Más Relevantes"
    description="Las últimas tendencias en moda, cultura y entretenimiento que definen a la Generación Z"
    article={true}
    category="Moda"
    tags={["Moda", "Tendencias", "Gen Z"]}
    publishedTime="2024-03-18T10:00:00+00:00"
    author="Admin"
  />
)

export default SinglePost
