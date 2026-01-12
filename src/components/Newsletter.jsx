import React, { useState } from "react"

/**
 * NEWSLETTER SUBSCRIPTION COMPONENT
 *
 * Formulario de suscripción con:
 * - Double opt-in ready
 * - Validación de email
 * - Accesibilidad completa
 * - Success/Error feedback
 * - GDPR compliant
 */
const Newsletter = ({
  title = "Suscríbete a nuestro newsletter",
  description = "Recibe las últimas noticias y tendencias directamente en tu inbox",
  buttonText = "Suscribirse",
  placeholder = "Tu email",
  compact = false,
  className = "",
  onSubscribe,
}) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [gdprConsent, setGdprConsent] = useState(false)

  // Validar email
  const validateEmail = (email) => {
    if (!email.trim()) {
      return "El email es requerido"
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return "Ingresa un email válido"
    }
    return ""
  }

  // Manejar envío
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validar
    const validationError = validateEmail(email)
    if (validationError) {
      setError(validationError)
      return
    }

    if (!gdprConsent && !compact) {
      setError("Debes aceptar la política de privacidad")
      return
    }

    setError("")
    setIsSubmitting(true)
    setStatus(null)

    try {
      // En producción: enviar a tu servicio de email marketing
      if (onSubscribe) {
        await onSubscribe({ email, gdprConsent: true })
      } else {
        // Simulación
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      setStatus("success")
      setEmail("")
      setGdprConsent(false)

      // Auto-ocultar mensaje después de 5 segundos
      setTimeout(() => setStatus(null), 5000)
    } catch (error) {
      setStatus("error")
      setError(error.message || "Error al suscribirse. Intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Versión compacta (para sidebar, footer, etc.)
  if (compact) {
    return (
      <div className={`newsletter-compact ${className}`}>
        {status === "success" ? (
          <div
            className="p-4 rounded-lg bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700"
            role="alert"
          >
            <p className="text-sm text-green-800 dark:text-green-200 flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-lg"></i>
              ¡Suscripción exitosa! Revisa tu email para confirmar.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex gap-2">
              <div className="flex-1">
                <label htmlFor="newsletter-email-compact" className="sr-only">
                  Email para newsletter
                </label>
                <input
                  type="email"
                  id="newsletter-email-compact"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                  placeholder={placeholder}
                  required
                  aria-required="true"
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "newsletter-error-compact" : undefined}
                  className={`form-input px-4 py-2 rounded-lg border w-full dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white ${
                    error ? "border-red-500 dark:border-red-500" : ""
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-[#ff3750] hover:bg-[#e62f45] text-white rounded-lg font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <i className="ri-loader-4-line animate-spin"></i>
                ) : (
                  buttonText
                )}
              </button>
            </div>
            {error && (
              <p
                id="newsletter-error-compact"
                className="mt-2 text-xs text-red-600 dark:text-red-400"
                role="alert"
              >
                {error}
              </p>
            )}
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Al suscribirte aceptas nuestra{" "}
              <a href="/privacy-policy" className="text-[#ff3750] hover:underline">
                Política de Privacidad
              </a>
              .
            </p>
          </form>
        )}
      </div>
    )
  }

  // Versión completa (para secciones principales, artículos, etc.)
  return (
    <div className={`newsletter ${className}`}>
      {status === "success" ? (
        <div
          className="p-6 rounded-lg bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-center"
          role="alert"
          aria-live="polite"
        >
          <i className="ri-checkbox-circle-fill text-5xl text-green-600 dark:text-green-400 mb-3"></i>
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
            ¡Suscripción exitosa!
          </h3>
          <p className="text-green-700 dark:text-green-300">
            Te hemos enviado un email de confirmación. Por favor revisa tu bandeja de entrada.
          </p>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="text-center mb-6">
            <i className="ri-mail-send-line text-5xl text-[#ff3750] mb-3"></i>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="newsletter-email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-gray-400"></i>
                </div>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                  placeholder={placeholder}
                  required
                  aria-required="true"
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "newsletter-error" : undefined}
                  className={`form-input pl-10 px-4 py-3 rounded-lg border w-full dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white ${
                    error ? "border-red-500 dark:border-red-500" : "dark:border-gray-700"
                  }`}
                />
              </div>
              {error && (
                <p
                  id="newsletter-error"
                  className="mt-1 text-sm text-red-600 dark:text-red-400"
                  role="alert"
                >
                  <i className="ri-error-warning-line mr-1"></i>
                  {error}
                </p>
              )}
            </div>

            {/* GDPR Consent */}
            <div className="mb-4">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  required
                  aria-required="true"
                  className="mt-1 rounded border-gray-300 text-[#ff3750] focus:ring-[#ff3750]"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Acepto recibir emails con noticias y tendencias. Puedo darme de baja en cualquier momento.
                  Lee nuestra{" "}
                  <a href="/privacy-policy" className="text-[#ff3750] hover:underline">
                    Política de Privacidad
                  </a>
                  .
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#ff3750] hover:bg-[#e62f45]"
              } text-white`}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Suscribiendo...
                </>
              ) : (
                <>
                  <i className="ri-send-plane-fill mr-2"></i>
                  {buttonText}
                </>
              )}
            </button>

            {/* Privacy notice */}
            <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400">
              <i className="ri-shield-check-line mr-1"></i>
              No compartimos tu información. Sin spam, solo contenido de calidad.
            </p>
          </form>
        </>
      )}
    </div>
  )
}

export default Newsletter
