import type { ReactNode } from "react"

import Copy from "@/components/global/Copy"
import { Component } from "react"

import { CircleAlert } from "lucide-react"

import { useThemeStore } from "@/stores/themeStore"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || <DefaultErrorPage error={this.state.error} />
      )
    }

    return this.props.children
  }
}

const DefaultErrorPage = ({ error }: { error: Error | null }) => {
  const { theme } = useThemeStore()

  return (
    <section className='flex min-h-minHeight w-full flex-col items-center gap-12 px-4 py-9'>
      <div className='flex w-full flex-col items-center gap-6'>
        <div className='flex h-[56px] w-[56px] items-center justify-center rounded-xl border border-border'>
          <CircleAlert size={26} />
        </div>
        <h1 className='text-center text-4xl md:text-start'>
          Something went wrong...
        </h1>
        <p className='text-grayTextPrimary text-center text-2xl md:text-start'>
          Well, this is awkward. The page didn’t load.
        </p>
      </div>
      <div className='flex w-full max-w-[880px] flex-col gap-4 rounded-2xl border border-border p-6'>
        <h3>Error mesage</h3>
        <div className='border border-border'></div>
        <div
          className={`flex items-center justify-between gap-3 rounded-lg border p-4 text-sm font-medium ${theme === "light" ? "border-[#FDA29B] bg-[#FFFBFA]" : "border-[#F97066] bg-[#FEE4E2] text-black"}`}
        >
          {error?.message}
          <Copy copyText={`${window.location.href}, ${error?.message}`} />
        </div>
        <div className='flex w-full justify-end'></div>
      </div>
    </section>
  )
}
