import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const ManualDigital = () => (
  <SubcategoryPage
    title="Manual Digital"
    parentCategory="Pop Picks"
    description="Guías y tutoriales para dominar el mundo digital"
    breadcrumbType="Cultura Z"
  />
)

export const Head = () => <Seo title="Manual Digital - Cultura Z" />
export default ManualDigital
