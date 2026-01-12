import React, { useState } from "react"

/**
 * Social Share - Componente Interactivo
 *
 * Este componente SE CARGA CON JAVASCRIPT solo cuando:
 * - El usuario interactúa con el área (hover/touch)
 * - Usa Island Architecture para no bloquear el render inicial
 *
 * Incluye:
 * - Compartir en redes sociales (Facebook, Twitter, WhatsApp, etc.)
 * - Copiar link al portapapeles
 * - Contador de shares (opcional)
 */

const SocialShare = ({
  url,
  title,
  description = "",
  hashtags = [],
  showCopyLink = true,
  showCounts = false,
  className = "",
}) => {
  const [copied, setCopied] = useState(false)
  const [shareCount, setShareCount] = useState(0)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const hashtagString = hashtags.join(",")

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtagString}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  }

  const handleShare = (platform) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400")

    // Tracking (opcional - Google Analytics)
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "share", {
        method: platform,
        content_type: "article",
        item_id: url,
      })
    }

    setShareCount((prev) => prev + 1)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)

      // Tracking
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "share", {
          method: "copy_link",
          content_type: "article",
          item_id: url,
        })
      }
    } catch (err) {
      console.error("Error al copiar:", err)
    }
  }

  // Web Share API (nativo en móviles)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        })
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error al compartir:", err)
        }
      }
    }
  }

  const socialButtons = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "bg-[#1877F2] hover:bg-[#166FE5]",
      onClick: () => handleShare("facebook"),
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      color: "bg-[#1DA1F2] hover:bg-[#1A8CD8]",
      onClick: () => handleShare("twitter"),
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: "bg-[#25D366] hover:bg-[#20BD5A]",
      onClick: () => handleShare("whatsapp"),
    },
    {
      name: "Telegram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      color: "bg-[#0088cc] hover:bg-[#0077B5]",
      onClick: () => handleShare("telegram"),
    },
  ]

  return (
    <div className={`social-share ${className}`}>
      <div className="flex flex-col gap-4">
        {/* Título */}
        <h3 className="text-lg font-semibold text-gray-900">Compartir artículo</h3>

        {/* Botones de redes sociales */}
        <div className="flex flex-wrap gap-2">
          {socialButtons.map((button) => (
            <button
              key={button.name}
              onClick={button.onClick}
              className={`${button.color} text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400`}
              aria-label={`Compartir en ${button.name}`}
              title={`Compartir en ${button.name}`}
            >
              {button.icon}
            </button>
          ))}

          {/* Botón de compartir nativo (móviles) */}
          {typeof navigator !== "undefined" && navigator.share && (
            <button
              onClick={handleNativeShare}
              className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              aria-label="Compartir"
              title="Compartir"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
          )}
        </div>

        {/* Copiar link */}
        {showCopyLink && (
          <div className="flex gap-2">
            <input
              type="text"
              value={url}
              readOnly
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ff3750]"
            />
            <button
              onClick={handleCopyLink}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Copiado
                </>
              ) : (
                "Copiar"
              )}
            </button>
          </div>
        )}

        {/* Contador de shares (opcional) */}
        {showCounts && shareCount > 0 && (
          <p className="text-sm text-gray-600">
            Compartido {shareCount} {shareCount === 1 ? "vez" : "veces"}
          </p>
        )}
      </div>
    </div>
  )
}

export default SocialShare
