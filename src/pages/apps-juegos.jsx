import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const AppsJuegos = () => (
  <SubcategoryPage
    title="Apps & Juegos"
    parentCategory="Pop Picks"
    description="Las apps y juegos más populares del momento"
    breadcrumbType="Pop Picks"
  />
)

export const Head = () => <Seo title="Apps & Juegos - Pop Picks" />
export default AppsJuegos
