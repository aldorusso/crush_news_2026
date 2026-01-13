import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const TuCrush = () => (
  <SubcategoryPage
    title="Tu Crush"
    parentCategory="Aesthetic Life"
    description="Todo sobre tus crushes y cómo conquistarlos"
    breadcrumbType="Love Lab"
  />
)

export const Head = () => <Seo title="Tu Crush - Love Lab" />
export default TuCrush
