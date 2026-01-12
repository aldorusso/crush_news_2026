import React, { useEffect, useState } from "react"
import { sidebardata } from "../../data/index7data"
import { Link } from "gatsby"

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([])
  useEffect(() => {
    setSocialLinks(sidebardata.socialLinks)
  }, [])
  return (
    <React.Fragment>
      <div className="p-5 mt-6 text-center bg-white rounded shadow dark:bg-gray-800/70 lg:mt-8 hover:shadow-lg">
        <h5 className="text-xl font-bold leading-none capitalize dark:text-white">
          Follow us
        </h5>
        <ul className="flex flex-wrap justify-center gap-4 mt-8 mb-4 md:gap-1 lg:gap-1 xl:gap-4">
          {socialLinks.map((social, index) => (
            <li key={index} className="text-md">
              <Link
                to="!#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white rounded"
                style={{
                  background: social.bgColor,
                  transition: "background-color 0.3s",
                }}
              >
                <i className={social.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default SocialLinks
