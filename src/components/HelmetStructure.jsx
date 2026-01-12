import React from "react"
import { Helmet } from "react-helmet"
import { useTheme } from "../context/ThemeContext"

const HelmetStructure = ({ bodyClass }) => {
  const { theme, dir } = useTheme()

  return (
    <React.Fragment>
      <Helmet>
        <html className={theme} data-mode={theme} lang="es" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <body
          dir={dir}
          className={
            bodyClass || "dark:bg-gray-900 text-base font-body bg-[#F5F5F5]"
          }
        />
      </Helmet>
    </React.Fragment>
  )
}

export default HelmetStructure
