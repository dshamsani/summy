import { ProductDetailPage } from "@/pages/products/ProductDetailPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/product/$id")({
  component: () => <ProductDetailPage />,
})
