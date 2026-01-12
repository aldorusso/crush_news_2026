import React from "react"

/**
 * AUTHOR SCHEMA (Person)
 *
 * Schema.org/Person para autores con E-E-A-T signals
 * (Experience, Expertise, Authoritativeness, Trustworthiness)
 *
 * @see https://schema.org/Person
 * @see https://developers.google.com/search/docs/appearance/structured-data/article#author
 */
const AuthorSchema = ({
  name,
  url,
  image,
  jobTitle = "Periodista",
  description,
  sameAs = [], // Social media profiles
  email,
  worksFor = {
    "@type": "Organization",
    name: "crush.news",
    url: "https://crush.news",
  },
  // E-E-A-T Signals
  alumniOf, // Universidad/institución educativa
  award, // Premios o reconocimientos
  knowsAbout = [], // Áreas de expertise
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": url ? `${url}#person` : undefined,
    name: name,
    url: url,
    image: image
      ? {
          "@type": "ImageObject",
          url: image,
        }
      : undefined,
    jobTitle: jobTitle,
    description: description,
    email: email,
    sameAs: sameAs.filter(Boolean),
    worksFor: worksFor,
    // E-E-A-T Signals
    alumniOf: alumniOf
      ? {
          "@type": "EducationalOrganization",
          name: alumniOf,
        }
      : undefined,
    award: award,
    knowsAbout: knowsAbout.length > 0 ? knowsAbout : undefined,
  }

  // Limpiar valores undefined
  Object.keys(schema).forEach((key) => {
    if (schema[key] === undefined) {
      delete schema[key]
    }
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Hook para generar Author schema desde datos del autor
 */
export const useAuthorSchema = (authorData) => {
  if (!authorData) return null

  return {
    name: authorData.name,
    url: authorData.url || `https://crush.news/author/${authorData.name.toLowerCase().replace(/\s+/g, '-')}`,
    image: authorData.image,
    jobTitle: authorData.role || authorData.jobTitle,
    description: authorData.bio,
    sameAs: authorData.social
      ? [
          authorData.social.twitter,
          authorData.social.facebook,
          authorData.social.instagram,
          authorData.social.linkedin,
        ].filter((url) => url && url !== "#")
      : [],
    email: authorData.email,
    knowsAbout: authorData.specialty ? [authorData.specialty] : [],
    alumniOf: authorData.education,
    award: authorData.awards,
  }
}

export default AuthorSchema
