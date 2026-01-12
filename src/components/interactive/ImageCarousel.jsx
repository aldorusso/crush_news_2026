import React, { useState, useEffect, useRef } from "react"

/**
 * Image Carousel - Componente Interactivo
 *
 * Galería de imágenes con navegación, thumbnails y gestos táctiles
 * Se carga solo cuando es visible (Island Architecture)
 *
 * Features:
 * - Navegación con flechas y teclado
 * - Thumbnails clickeables
 * - Swipe en móviles (touch gestures)
 * - Auto-play opcional
 * - Fullscreen
 * - Lazy loading de imágenes
 */

const ImageCarousel = ({
  images = [],
  autoPlay = false,
  autoPlayInterval = 5000,
  showThumbnails = true,
  showDots = true,
  allowFullscreen = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef(null)
  const autoPlayRef = useRef(null)

  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        handleNext()
      }, autoPlayInterval)

      return () => clearInterval(autoPlayRef.current)
    }
  }, [autoPlay, autoPlayInterval, currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, isFullscreen])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext()
    }

    if (touchStart - touchEnd < -50) {
      handlePrevious()
    }
  }

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 rounded-lg flex items-center justify-center h-96">
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    )
  }

  const currentImage = images[currentIndex]

  return (
    <div
      className={`image-carousel ${className} ${
        isFullscreen ? "fixed inset-0 z-50 bg-black" : "relative"
      }`}
      ref={carouselRef}
    >
      {/* Main image */}
      <div
        className="relative overflow-hidden rounded-lg"
        style={{ aspectRatio: isFullscreen ? "auto" : "16/9" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt || `Imagen ${currentIndex + 1}`}
          className={`w-full h-full object-cover ${
            isFullscreen ? "object-contain" : ""
          }`}
          loading="lazy"
        />

        {/* Caption */}
        {currentImage.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-sm md:text-base">
              {currentImage.caption}
            </p>
          </div>
        )}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              aria-label="Imagen anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              aria-label="Imagen siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Fullscreen button */}
        {allowFullscreen && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Dots indicator */}
      {showDots && images.length > 1 && !isFullscreen && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#ff3750] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnails */}
      {showThumbnails && images.length > 1 && !isFullscreen && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-[#ff3750] scale-105"
                  : "border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image.thumbnail || image.src}
                alt={image.alt || `Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen close button */}
      {isFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="fixed top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-60"
          aria-label="Cerrar pantalla completa"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ImageCarousel
