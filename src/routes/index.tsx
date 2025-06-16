import type { PaginatedSearchParams } from "@/types/commonTypes"

import { createFileRoute } from "@tanstack/react-router"
import { ProductListPage } from "../pages/products/ProductListPage"

import { z } from "zod"

export const Route = createFileRoute("/")({
  component: ProductListPage,
  validateSearch: (input: PaginatedSearchParams) =>
    z
      .object({
        offset: z.number().optional().catch(0),
        page: z.number().optional().catch(1),
        limit: z.number().optional().catch(20),
      })
      .parse(input),
})
