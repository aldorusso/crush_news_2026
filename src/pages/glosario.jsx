import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const Glosario = () => (
  <SubcategoryPage
    title="Glosario"
    parentCategory="Pop Picks"
    description="Términos y palabras que definen la cultura digital actual"
    breadcrumbType="Cultura Z"
  />
)

export const Head = () => <Seo title="Glosario - Cultura Z" />
export default Glosario
