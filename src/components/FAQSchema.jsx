import React from "react"

/**
 * Componente para Schema.org FAQPage
 *
 * Genera structured data para páginas de preguntas frecuentes
 * Permite rich snippets en Google con acordeón de preguntas/respuestas
 *
 * Uso:
 * <FAQSchema
 *   questions={[
 *     { question: "¿Qué es crush.news?", answer: "Un magazine digital..." },
 *     { question: "¿Cómo puedo contactarlos?", answer: "Puedes escribirnos a..." }
 *   ]}
 * />
 */
const FAQSchema = ({ questions = [] }) => {
  if (!questions || questions.length === 0) {
    return null
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export default FAQSchema
