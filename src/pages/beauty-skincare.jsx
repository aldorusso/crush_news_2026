import React from "react"
import Seo from "../components/seo"
import SubcategoryPage from "../components/SubcategoryPage"

const BeautySkincare = () => (
  <SubcategoryPage
    title="Beauty & Skincare"
    parentCategory="Aesthetic Life"
    description="Rutinas de belleza y cuidado de la piel"
    breadcrumbType="Aesthetic Life"
  />
)

export const Head = () => <Seo title="Beauty & Skincare - Aesthetic Life" />
export default BeautySkincare
