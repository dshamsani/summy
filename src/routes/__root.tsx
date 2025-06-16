import type { FC } from "react"

import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Footer } from "../components/layouts/Footer"
import { Navbar } from "@/components/layouts/Navbar"
import { ErrorBoundary } from "@/components/global/ErrorBoundary"

import { useEffect, useState } from "react"
import { useThemeStore } from "@/stores/themeStore"

const RootComponent: FC = () => {
  const { theme } = useThemeStore()

  const [resetKey, setResetKey] = useState<number>(0)

  useEffect(() => {
    setResetKey(k => k + 1)
  }, [location.pathname])

  useEffect(() => {
    const preloader = document.getElementById("preloader")

    if (preloader) {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.remove()
      }, 500)
    }
  }, [])

  useEffect(() => {
    const appleTheme = document.querySelector(
      "meta[name='theme-color']",
    ) as HTMLMetaElement

    if (appleTheme) {
      appleTheme.content = theme === "light" ? "#ffffff" : "#252933"
    }
  }, [theme])

  return (
    <>
      <Navbar />
      <ErrorBoundary key={resetKey}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <RootComponent />
      </>
    )
  },
  notFoundComponent: () => (
    <div className='flex min-h-minHeight w-full flex-col items-center justify-center gap-4 text-xl'>
      <p>This page doesn't exist...</p>
    </div>
  ),
})
