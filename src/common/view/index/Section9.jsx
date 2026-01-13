import React from "react"

/**
 * Section9 - Instagram Feed Gallery
 * Galería de últimas publicaciones de Instagram
 */
const Section9 = () => {
  const instagramPosts = [
    {
      id: 1,
      alt: "Post de Instagram sobre tendencias K-Pop",
      category: "K-Pop"
    },
    {
      id: 2,
      alt: "Post de Instagram sobre moda aesthetic",
      category: "Moda"
    },
    {
      id: 3,
      alt: "Post de Instagram sobre gaming y esports",
      category: "Gaming"
    },
    {
      id: 4,
      alt: "Post de Instagram sobre series y películas",
      category: "Series"
    },
    {
      id: 5,
      alt: "Post de Instagram sobre skincare y belleza",
      category: "Beauty"
    },
    {
      id: 6,
      alt: "Post de Instagram sobre cultura internet",
      category: "Internet"
    },
  ]

  return (
    <React.Fragment>
      <section className="mt-8" data-aos="zoom-in">
        <div className="container px-4 mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <i className="ri-instagram-fill text-2xl text-[#E1306C]"></i>
              <h2 className="text-lg font-bold dark:text-white">
                Síguenos en Instagram
              </h2>
            </div>
            <a
              href="https://www.instagram.com/crushnews_es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#ff3750] hover:underline flex items-center gap-1"
            >
              @crushnews_es
              <i className="ri-external-link-line"></i>
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6">
            {instagramPosts.map((post) => (
              <div key={post.id} className="col-span-4 sm:col-span-3 lg:col-span-2">
                <a
                  href="https://www.instagram.com/crushnews_es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
                >
                  {/* Placeholder visual mientras no hay imágenes reales */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2">
                    <i className="ri-instagram-line text-2xl sm:text-3xl mb-1 opacity-80"></i>
                    <span className="text-[10px] sm:text-xs text-center opacity-80">{post.category}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <i className="ri-instagram-fill text-white text-2xl"></i>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section9
