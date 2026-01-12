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
import gallery11 from "../assets/images/placeholder"
import gallery12 from "../assets/images/placeholder"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <React.Fragment>
      <Layout5>
        {/* Breadcrumb */}
        <BreadCrumb title="Galería Grid" titleType="Páginas" />

        <div className="container mx-auto mt-16 px-4">
          <div className="grid">
            <div>
              <div className="">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery1}
                      alt="galería"
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
                      alt="galería"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery6}
                      alt="galería"
                    />
                  </div>
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
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery11}
                      alt="galería"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg w-full"
                      src={gallery12}
                      alt="galería"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Galería Grid" />

export default GalleryPage
