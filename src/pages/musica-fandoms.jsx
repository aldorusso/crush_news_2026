import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const MusicaFandoms = () => (
  <SubcategoryPage
    title="Música & Fandoms"
    parentCategory="Pop Picks"
    description="Música, artistas y comunidades de fans"
    breadcrumbType="Pop Picks"
  />
)

export const Head = () => <Seo title="Música & Fandoms - Pop Picks" />
export default MusicaFandoms
