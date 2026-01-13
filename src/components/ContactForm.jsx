import React, { useState } from "react"

/**
 * CONTACT FORM CON VALIDACIÓN Y ACCESIBILIDAD
 *
 * Features:
 * - Validación completa de campos
 * - Labels accesibles (WCAG 2.1)
 * - Mensajes de error asociados con aria-describedby
 * - CSRF protection
 * - Success/Error feedback
 * - Indicadores visuales de campos requeridos
 */
const ContactForm = ({ onSubmit, className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacyConsent: false,
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  // Generar CSRF token (en producción vendría del servidor)
  const [csrfToken] = useState(() => {
    if (typeof window !== "undefined") {
      return `csrf-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }
    return ""
  })

  // Validación de campos
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "El nombre es requerido"
        }
        if (value.trim().length < 2) {
          return "El nombre debe tener al menos 2 caracteres"
        }
        if (value.trim().length > 100) {
          return "El nombre no puede exceder 100 caracteres"
        }
        return ""

      case "email":
        if (!value.trim()) {
          return "El email es requerido"
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          return "Ingresa un email válido"
        }
        return ""

      case "subject":
        if (!value.trim()) {
          return "El asunto es requerido"
        }
        if (value.trim().length < 3) {
          return "El asunto debe tener al menos 3 caracteres"
        }
        if (value.trim().length > 200) {
          return "El asunto no puede exceder 200 caracteres"
        }
        return ""

      case "message":
        if (!value.trim()) {
          return "El mensaje es requerido"
        }
        if (value.trim().length < 10) {
          return "El mensaje debe tener al menos 10 caracteres"
        }
        if (value.trim().length > 5000) {
          return "El mensaje no puede exceder 5000 caracteres"
        }
        return ""

      case "privacyConsent":
        if (!value) {
          return "Debes aceptar la política de privacidad para enviar el formulario"
        }
        return ""

      default:
        return ""
    }
  }

  // Validar todo el formulario
  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
      }
    })
    return newErrors
  }

  // Manejar cambios en los campos
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const fieldValue = type === "checkbox" ? checked : value
    setFormData((prev) => ({ ...prev, [name]: fieldValue }))

    // Validar en tiempo real si el campo ya fue tocado
    if (touched[name]) {
      const error = validateField(name, fieldValue)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  // Manejar blur (cuando el usuario sale del campo)
  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target
    const fieldValue = type === "checkbox" ? checked : value
    setTouched((prev) => ({ ...prev, [name]: true }))

    const error = validateField(name, fieldValue)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Marcar todos los campos como tocados
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
    setTouched(allTouched)

    // Validar formulario
    const validationErrors = validateForm()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      // Enfocar el primer campo con error
      const firstErrorField = Object.keys(validationErrors)[0]
      document.getElementById(firstErrorField)?.focus()
      return
    }

    // Enviar formulario
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // En producción, aquí se haría la llamada al API
      if (onSubmit) {
        await onSubmit({ ...formData, csrfToken })
      } else {
        // Simulación de envío
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      setSubmitStatus("success")
      // Resetear formulario
      setFormData({ name: "", email: "", subject: "", message: "", privacyConsent: false })
      setTouched({})
      setErrors({})
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)

      // Auto-ocultar mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className={className}>
      {/* Status Messages */}
      {submitStatus === "success" && (
        <div
          className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900 dark:border-green-700"
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center gap-3">
            <i className="ri-checkbox-circle-fill text-2xl text-green-600 dark:text-green-400"></i>
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-200">
                ¡Mensaje enviado exitosamente!
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Gracias por contactarnos. Te responderemos pronto.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div
          className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 dark:bg-red-900 dark:border-red-700"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-center gap-3">
            <i className="ri-error-warning-fill text-2xl text-red-600 dark:text-red-400"></i>
            <div>
              <h4 className="font-semibold text-red-800 dark:text-red-200">
                Error al enviar el mensaje
              </h4>
              <p className="text-sm text-red-700 dark:text-red-300">
                Por favor, intenta nuevamente o contáctanos por email.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* CSRF Token (hidden) */}
        <input type="hidden" name="csrf_token" value={csrfToken} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Nombre <span className="text-red-500" aria-label="requerido">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`form-input px-4 py-3 rounded-lg border w-full dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white ${
                errors.name && touched.name
                  ? "border-red-500 dark:border-red-500"
                  : "dark:border-gray-700"
              }`}
              placeholder="Tu nombre completo"
            />
            {errors.name && touched.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                <i className="ri-error-warning-line mr-1"></i>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email <span className="text-red-500" aria-label="requerido">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`form-input px-4 py-3 rounded-lg border w-full dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white ${
                errors.email && touched.email
                  ? "border-red-500 dark:border-red-500"
                  : "dark:border-gray-700"
              }`}
              placeholder="tu@email.com"
            />
            {errors.email && touched.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                <i className="ri-error-warning-line mr-1"></i>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Asunto */}
        <div className="mt-6">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Asunto <span className="text-red-500" aria-label="requerido">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={`w-full form-input px-4 py-3 rounded-lg border dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white ${
              errors.subject && touched.subject
                ? "border-red-500 dark:border-red-500"
                : "dark:border-gray-700"
            }`}
            placeholder="¿En qué podemos ayudarte?"
          />
          {errors.subject && touched.subject && (
            <p
              id="subject-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              <i className="ri-error-warning-line mr-1"></i>
              {errors.subject}
            </p>
          )}
        </div>

        {/* Mensaje */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Mensaje <span className="text-red-500" aria-label="requerido">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            rows="5"
            className={`mt-1 block border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#ff3750] dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white ${
              errors.message && touched.message
                ? "border-red-500 dark:border-red-500"
                : "dark:border-gray-700"
            }`}
            placeholder="Escribe tu mensaje aquí..."
          />
          {errors.message && touched.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              <i className="ri-error-warning-line mr-1"></i>
              {errors.message}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {formData.message.length}/5000 caracteres
          </p>
        </div>

        {/* Consentimiento de Privacidad (GDPR/LOPD) */}
        <div className="mt-6">
          <div className="flex items-start gap-3">
            <div className="flex items-center h-5 mt-0.5">
              <input
                type="checkbox"
                id="privacyConsent"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required="true"
                aria-invalid={errors.privacyConsent ? "true" : "false"}
                aria-describedby={errors.privacyConsent ? "privacy-error" : "privacy-description"}
                className={`w-4 h-4 rounded border focus:ring-2 focus:ring-[#ff3750] ${
                  errors.privacyConsent && touched.privacyConsent
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } bg-gray-50 dark:bg-gray-700`}
              />
            </div>
            <div>
              <label
                htmlFor="privacyConsent"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                <span className="text-red-500" aria-label="requerido">*</span>{" "}
                He leído y acepto la{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff3750] hover:underline font-medium"
                >
                  Política de Privacidad
                </a>{" "}
                y consiento el tratamiento de mis datos personales para gestionar mi consulta.
              </label>
              <p
                id="privacy-description"
                className="mt-1 text-xs text-gray-500 dark:text-gray-400"
              >
                Tus datos serán tratados conforme al RGPD y la LOPD-GDD. Puedes ejercer tus derechos
                de acceso, rectificación, supresión y portabilidad en{" "}
                <a href="mailto:contacto@crush.news" className="text-[#ff3750] hover:underline">
                  contacto@crush.news
                </a>
              </p>
            </div>
          </div>
          {errors.privacyConsent && touched.privacyConsent && (
            <p
              id="privacy-error"
              className="mt-2 text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              <i className="ri-error-warning-line mr-1"></i>
              {errors.privacyConsent}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 px-6 py-3 rounded-lg font-medium transition-colors ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-[#ff3750] dark:bg-[#ff3750] dark:hover:bg-[#e62f45]"
          } text-white`}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <i className="ri-loader-4-line animate-spin mr-2"></i>
              Enviando...
            </>
          ) : (
            <>
              <i className="ri-send-plane-fill mr-2"></i>
              Enviar mensaje
            </>
          )}
        </button>

      </form>
    </div>
  )
}

export default ContactForm
