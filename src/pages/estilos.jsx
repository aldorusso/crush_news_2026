import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const Estilos = () => (
  <SubcategoryPage
    title="Estilos"
    parentCategory="Aesthetic Life"
    description="Encuentra tu estilo único y exprésate"
    breadcrumbType="Aesthetic Life"
  />
)

export const Head = () => <Seo title="Estilos - Aesthetic Life" />
export default Estilos
