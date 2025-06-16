import type { FC } from "react"

import { Sun, Moon } from "lucide-react"
import { Link } from "@tanstack/react-router"

import { useThemeStore } from "@/stores/themeStore"

export const Navbar: FC = () => {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <header className='w-full border-b border-border bg-background text-text'>
      <div className='container flex h-[75px] items-center justify-between px-4'>
        <Link
          to='/'
          className='text-xl font-semibold transition hover:text-secondaryText'
        >
          ProductStore
        </Link>

        <div className='flex items-center gap-4'>
          <button
            onClick={toggleTheme}
            aria-label='Toggle Theme'
            className='rounded-md p-2 transition hover:bg-secondaryBg'
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
