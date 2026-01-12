import React from "react"
import Layout5 from "../common/layout/Layout5"
import BreadCrumb from "../common/BreadCrumb"
import gallery1 from "../assets/images/placeholder"
import gallery2 from "../assets/images/placeholder"
import gallery3 from "../assets/images/placeholder"
import gallery4 from "../assets/images/placeholder"
import gallery5 from "../assets/images/placeholder"
import gallery6 from "../assets/images/placeholder"
import gallery7 from "../assets/images/placeholder"
import gallery8 from "../assets/images/placeholder"
import gallery9 from "../assets/images/placeholder"
import gallery10 from "../assets/images/placeholder"
import Seo from "../components/seo"

const MasonryGallery = () => {
  return (
    <Layout5>
      {/* Breadcrumb */}
      <BreadCrumb title="Galería Masonry" titleType="Páginas" />

      <div className="container mx-auto px-4">
        <div className="grid">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery1}
                    alt="masonry"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery2}
                    alt="galería"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery3}
                    alt="galería"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery4}
                    alt="galería"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery5}
                    alt="masonry"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery6}
                    alt="galería"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery7}
                    alt="galería"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery8}
                    alt="galería"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery5}
                    alt="masonry"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery9}
                    alt="galería"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg w-full"
                    src={gallery10}
                    alt="galería"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Galería Masonry" />

export default MasonryGallery
