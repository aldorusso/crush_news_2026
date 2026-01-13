import React from "react"
import Seo from "../components/seo"
import BreadCrumb from "../common/BreadCrumb"
import { Link } from "gatsby"
import Layout5 from "../common/layout/Layout5"
import { posts } from "../common/data/siteData"

const NoSidebar = () => {
  return (
    <React.Fragment>
      <Layout5>
        <BreadCrumb title="Sin Barra Lateral" titleType="blog" />

        <div className="container mx-auto px-4">
          <div className="grid">
            <div>
              <div className="grid">
                {posts.map(post => (
                  <div className="lg:mb-8" key={post.id}>
                    <div className="block gap-4 lg:flex">
                      <div className="lg:w-1/2">
                        <Link to={post.link}>
                          <img
                            className="w-full h-auto max-w-full rounded-lg object-cover"
                            src={post.image}
                            alt={post.title}
                          />
                        </Link>
                      </div>
                      <div className="py-4 lg:py-0 lg:w-1/2">
                        <h3 className="text-lg sm:text-xl mb-4 hover:text-[#ff3750] dark:text-white dark:hover:text-[#ff3750]">
                          <Link to={post.link}>{post.title}</Link>
                        </h3>
                        <div className="justify-start block gap-4 mb-2 text-xs text-gray-500 lg:flex sm:text-sm dark:text-gray-400">
                          <span className="me-2 lg:me-0">
                            <i className="ri-user-fill"></i> {post.author}
                          </span>
                          <span className="me-2 lg:me-0">
                            <i className="ri-calendar-fill"></i> {post.dateFormatted}
                          </span>
                          <span>
                            <i className="ri-chat-1-fill"></i> {post.comments || 0} comentarios
                          </span>
                        </div>
                        <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-400 line-clamp-2">
                          {post.excerpt || post.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout5>
    </React.Fragment>
  )
}

export const Head = () => <Seo title="Sin Barra Lateral" />

export default NoSidebar
