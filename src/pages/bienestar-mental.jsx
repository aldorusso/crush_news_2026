import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const BienestarMental = () => (
  <SubcategoryPage
    title="Bienestar Mental"
    parentCategory="Aesthetic Life"
    description="Cuida tu salud mental y emocional"
    breadcrumbType="Love Lab"
  />
)

export const Head = () => <Seo title="Bienestar Mental - Love Lab" />
export default BienestarMental
