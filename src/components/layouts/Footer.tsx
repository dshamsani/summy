import type { FC } from "react"

export const Footer: FC = () => {
  return (
    <footer className='w-full border-t border-border bg-background text-sm text-grayText'>
      <div className='container flex flex-col items-center justify-center gap-2 py-6 text-center'>
        <p>
          &copy; {new Date().getFullYear()} ProductStore. All rights reserved.
        </p>
        <p className='text-grayTextSecondary text-xs'>
          Built with ❤️ using React, Vite, TanStack Router & Tailwind.
        </p>
      </div>
    </footer>
  )
}
