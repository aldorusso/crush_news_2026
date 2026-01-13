import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const EvolucionEstilo = () => (
  <SubcategoryPage
    title="Evolución de Estilo"
    parentCategory="Crush Files"
    description="Cómo ha cambiado el estilo de tus ídolos favoritos"
    breadcrumbType="Crush Files"
  />
)

export const Head = () => <Seo title="Evolución de Estilo - Crush Files" />
export default EvolucionEstilo
