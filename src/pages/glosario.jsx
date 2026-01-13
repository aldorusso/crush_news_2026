import React, { useState, useMemo } from "react"
import Layout5 from "../common/layout/Layout5"
import Seo from "../components/seo"
import BreadCrumb from "../common/BreadCrumb"
import { Link } from "gatsby"
import {
  glossaryTerms,
  glossaryCategories,
  getAvailableLetters,
  searchTerms,
  getTermsByCategory,
} from "../common/data/glossaryData"

const Glosario = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [expandedTerms, setExpandedTerms] = useState({})

  // Alphabet for navigation
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const availableLetters = getAvailableLetters()

  // Filter and search terms
  const filteredTerms = useMemo(() => {
    let terms = glossaryTerms

    // Filter by category
    if (selectedCategory !== "all") {
      terms = getTermsByCategory(selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      terms = searchTerms(searchQuery).filter((term) =>
        selectedCategory === "all"
          ? true
          : term.category.toLowerCase() === selectedCategory
      )
    }

    // Filter by letter
    if (selectedLetter) {
      terms = terms.filter(
        (term) => term.term.charAt(0).toUpperCase() === selectedLetter
      )
    }

    return terms
  }, [searchQuery, selectedCategory, selectedLetter])

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const groups = {}
    filteredTerms.forEach((term) => {
      const firstLetter = term.term.charAt(0).toUpperCase()
      if (!groups[firstLetter]) {
        groups[firstLetter] = []
      }
      groups[firstLetter].push(term)
    })
    return groups
  }, [filteredTerms])

  // Toggle term expansion
  const toggleTerm = (termId) => {
    setExpandedTerms((prev) => ({
      ...prev,
      [termId]: !prev[termId],
    }))
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedLetter(null)
  }

  // Find related term by name
  const findRelatedTerm = (termName) => {
    return glossaryTerms.find(
      (t) => t.term.toLowerCase() === termName.toLowerCase()
    )
  }

  return (
    <React.Fragment>
      <Layout5>
        <BreadCrumb title="Glosario Gen Z" titleType="Cultura Z" />

        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Glosario Gen Z
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tu diccionario definitivo para entender el lenguaje de la
              Generación Z. Desde slang de TikTok hasta términos de gaming,
              aquí encontrarás todo lo que necesitas saber.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
              <input
                type="text"
                placeholder="Buscar término... (ej: slay, stan, cheugy)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#ff3750] focus:outline-none transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {glossaryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-[#ff3750] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                <i className={`${category.icon} mr-1`}></i>
                {category.name}
              </button>
            ))}
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap justify-center gap-1 mb-8 px-2">
            <button
              onClick={() => setSelectedLetter(null)}
              className={`w-8 h-8 rounded-lg text-sm font-bold transition-all ${
                selectedLetter === null
                  ? "bg-[#ff3750] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              #
            </button>
            {alphabet.map((letter) => {
              const hasTerms = availableLetters.includes(letter)
              return (
                <button
                  key={letter}
                  onClick={() => hasTerms && setSelectedLetter(letter)}
                  disabled={!hasTerms}
                  className={`w-8 h-8 rounded-lg text-sm font-bold transition-all ${
                    selectedLetter === letter
                      ? "bg-[#ff3750] text-white"
                      : hasTerms
                      ? "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                      : "bg-gray-50 text-gray-300 cursor-not-allowed dark:bg-gray-900 dark:text-gray-700"
                  }`}
                >
                  {letter}
                </button>
              )
            })}
          </div>

          {/* Active Filters Indicator */}
          {(searchQuery || selectedCategory !== "all" || selectedLetter) && (
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {filteredTerms.length} resultado
                {filteredTerms.length !== 1 ? "s" : ""}
              </span>
              <button
                onClick={clearFilters}
                className="text-sm text-[#ff3750] hover:underline flex items-center gap-1"
              >
                <i className="ri-close-circle-line"></i>
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Terms Grid */}
          {filteredTerms.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              {Object.keys(groupedTerms)
                .sort()
                .map((letter) => (
                  <div key={letter} className="mb-8">
                    {/* Letter Header */}
                    <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 py-2 border-b-2 border-[#ff3750] mb-4">
                      <h2 className="text-2xl font-bold text-[#ff3750]">
                        {letter}
                      </h2>
                    </div>

                    {/* Terms in this letter group */}
                    <div className="space-y-3">
                      {groupedTerms[letter].map((term) => (
                        <div
                          key={term.id}
                          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all hover:shadow-md"
                        >
                          {/* Term Header - Always Visible */}
                          <button
                            onClick={() => toggleTerm(term.id)}
                            className="w-full px-5 py-4 flex items-center justify-between text-left"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-bold text-gray-900 dark:text-white">
                                {term.term}
                              </span>
                              <span
                                className={`px-2 py-0.5 text-xs rounded-full ${
                                  term.category === "Slang"
                                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                                    : term.category === "Internet"
                                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                    : term.category === "Gaming"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                    : term.category === "Social"
                                    ? "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300"
                                    : term.category === "Fandoms"
                                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                                    : term.category === "Dating"
                                    ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                                    : term.category === "Estilo"
                                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
                                    : term.category === "Memes"
                                    ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                                    : "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300"
                                }`}
                              >
                                {term.category}
                              </span>
                            </div>
                            <i
                              className={`ri-arrow-down-s-line text-xl text-gray-400 transition-transform ${
                                expandedTerms[term.id] ? "rotate-180" : ""
                              }`}
                            ></i>
                          </button>

                          {/* Expanded Content */}
                          {expandedTerms[term.id] && (
                            <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-700">
                              {/* Definition */}
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                  Significado
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                  {term.definition}
                                </p>
                              </div>

                              {/* Example */}
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                  Ejemplo
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 italic bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                                  "{term.example}"
                                </p>
                              </div>

                              {/* Origin */}
                              {term.origin && (
                                <div className="mt-4">
                                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                    Origen
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    <i className="ri-history-line mr-1"></i>
                                    {term.origin}
                                  </p>
                                </div>
                              )}

                              {/* Related Terms */}
                              {term.related && term.related.length > 0 && (
                                <div className="mt-4">
                                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                    Términos relacionados
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {term.related.map((relatedName) => {
                                      const relatedTerm =
                                        findRelatedTerm(relatedName)
                                      return (
                                        <button
                                          key={relatedName}
                                          onClick={() => {
                                            if (relatedTerm) {
                                              setSearchQuery("")
                                              setSelectedCategory("all")
                                              setSelectedLetter(null)
                                              setExpandedTerms({
                                                [relatedTerm.id]: true,
                                              })
                                              // Scroll to term
                                              setTimeout(() => {
                                                document
                                                  .getElementById(
                                                    `term-${relatedTerm.id}`
                                                  )
                                                  ?.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "center",
                                                  })
                                              }, 100)
                                            }
                                          }}
                                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-[#ff3750] hover:text-white transition-colors"
                                        >
                                          {relatedName}
                                        </button>
                                      )
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-16">
              <i className="ri-search-eye-line text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No encontramos ese término
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Prueba con otra palabra o{" "}
                <button
                  onClick={clearFilters}
                  className="text-[#ff3750] hover:underline"
                >
                  limpia los filtros
                </button>
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                ¿Crees que falta un término importante?{" "}
                <Link
                  to="/contact"
                  className="text-[#ff3750] hover:underline"
                >
                  ¡Sugiérelo!
                </Link>
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-[#ff3750] to-[#ff6b7a] rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              ¿Conoces un término que no está aquí?
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              El lenguaje Gen Z evoluciona constantemente. Si conoces un término
              que deberíamos añadir, ¡nos encantaría saberlo!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#ff3750] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="ri-send-plane-fill mr-2"></i>
              Sugerir un término
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#ff3750]">
                {glossaryTerms.length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Términos
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#ff3750]">
                {glossaryCategories.length - 1}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Categorías
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#ff3750]">
                {availableLetters.length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Letras
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#ff3750]">2024</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Actualizado
              </div>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => (
  <Seo
    title="Glosario Gen Z - Diccionario de términos y slang juvenil"
    description="El diccionario definitivo de términos Gen Z. Aprende el significado de slay, stan, cheugy, rizz y más de 70 palabras del vocabulario juvenil actual."
  />
)

export default Glosario
