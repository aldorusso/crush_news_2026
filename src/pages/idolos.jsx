import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const Idolos = () => (
  <SubcategoryPage
    title="Ídolos"
    parentCategory="Crush Files"
    description="Conoce a las personalidades que marcan tendencia"
    breadcrumbType="Crush Files"
  />
)

export const Head = () => <Seo title="Ídolos - Crush Files" />
export default Idolos
