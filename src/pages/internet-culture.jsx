import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const InternetCulture = () => (
  <SubcategoryPage
    title="Internet Culture"
    parentCategory="Pop Picks"
    description="Memes, trends y todo lo que sucede en la red"
    breadcrumbType="Cultura Digital"
  />
)

export const Head = () => <Seo title="Internet Culture - Cultura Z" />
export default InternetCulture
