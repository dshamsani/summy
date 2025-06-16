import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/product/$id")({
  component: () => <div>Hello /product/$id!</div>,
})
