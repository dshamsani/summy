import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test")({
  component: () => {
    throw new Error("💥 Simulated error")
    return <div>Hello /test!</div>
  },
})
