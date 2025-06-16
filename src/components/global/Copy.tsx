import type { FC } from "react"

import { Check, Copy as CopyIcon, X } from "lucide-react"

import { toast } from "sonner"

import { colors } from "@/constants/colors"
import { useState } from "react"

interface CopyComponentProps {
  size?: number
  copyText: string | null | undefined
  className?: string
}

const Copy: FC<CopyComponentProps> = ({ size = 13, copyText, className }) => {
  const [copied, setCopied] = useState<boolean>(false)
  const [alreadyCopied, setAlreadyCopied] = useState<boolean>(false)

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(copyText || "")
      setCopied(true)
      setAlreadyCopied(true)

      toast("Successfully copied", {
        action: {
          label: <X size={15} className='stroke-text' />,
          onClick: () => undefined,
        },
        id: "copy-toast",
      })

      setTimeout(() => {
        setCopied(false)
      }, 3000)
    } catch {
      toast("Copying failed", {
        action: {
          label: <X size={15} className='stroke-text' />,
          onClick: () => undefined,
        },
      })
    }
  }

  return copied ? (
    <Check className={`shrink-0 ${className ? className : ""}`} size={size} />
  ) : (
    <CopyIcon
      className={`shrink-0 ${className ? className : ""}`}
      size={size}
      cursor='pointer'
      onClick={e => {
        e.stopPropagation()
        handleCopy()
      }}
      color={alreadyCopied ? colors.border : colors.text}
    />
  )
}

export default Copy
