import React, { createContext, useEffect, useState, useContext } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme-mode") || "light"
      : "light",
  )
  const [dir, setDir] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme-dir") || "ltr"
      : "ltr",
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(theme === "dark" ? "light" : "dark")
    root.classList.add(theme)
    root.setAttribute("data-mode", theme)
    localStorage.setItem("theme-mode", theme)
  }, [theme])

  useEffect(() => {
    const body = window.document.body
    body.setAttribute("dir", dir)
    localStorage.setItem("theme-dir", dir)
  }, [dir])

  // Function to toggle theme (light/dark)
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"))
  }

  // Function to toggle direction (LTR/RTL)
  const toggleDir = () => {
    setDir(prevDir => (prevDir === "ltr" ? "rtl" : "ltr"))
  }

  // Function to toggle both theme and direction at once
  const toggleThemeAndDir = () => {
    toggleTheme()
    toggleDir()
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, dir, toggleDir, toggleThemeAndDir }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
