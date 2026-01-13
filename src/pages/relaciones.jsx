import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const Relaciones = () => (
  <SubcategoryPage
    title="Relaciones"
    parentCategory="Aesthetic Life"
    description="Guía completa sobre relaciones saludables"
    breadcrumbType="Love Lab"
  />
)

export const Head = () => <Seo title="Relaciones - Love Lab" />
export default Relaciones
