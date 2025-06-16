import { useEffect } from "react"
import { useThemeStore } from "./stores/themeStore"

function App() {
  const { theme } = useThemeStore()

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme)
    }
  }, [theme])

  return <></>
}

export default App
