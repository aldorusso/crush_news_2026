import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const SeriesPelis = () => (
  <SubcategoryPage
    title="Series & Pelis"
    parentCategory="Pop Picks"
    description="Las mejores series y películas del momento"
    breadcrumbType="Pop Picks"
  />
)

export const Head = () => <Seo title="Series & Pelis - Pop Picks" />
export default SeriesPelis
