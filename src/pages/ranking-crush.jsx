import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const RankingCrush = () => (
  <SubcategoryPage
    title="Ranking Crush"
    parentCategory="Crush Files"
    description="Los rankings más populares y votaciones"
    breadcrumbType="Crush Files"
  />
)

export const Head = () => <Seo title="Ranking Crush - Crush Files" />
export default RankingCrush
