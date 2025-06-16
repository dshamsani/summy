import type { Product } from "@/types/productTypes"

import { handleFetch } from "@/lib/handleFetch"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const fetchProductsList = async ({
  limit = 10,
  offset = 0,
}: {
  limit?: number
  offset?: number
}) => {
  const url = `/products`

  const options = {
    params: {
      limit,
      skip: offset,
    },
  }

  return handleFetch<{
    products: Product[]
    total: number
    skip: number
    limit: number
  }>(url, offset, options)
}

export const useFetchProductsList = (limit: number, page: number) =>
  useInfiniteQuery({
    queryKey: ["products-list", limit, page],
    queryFn: ({ pageParam = page }) =>
      fetchProductsList({ limit, offset: pageParam }),
    initialPageParam: page,
    getNextPageParam: lastPage => {
      const nextOffset = (lastPage.skip as number) + limit
      if (nextOffset >= lastPage.total) return undefined
      return nextOffset
    },
  })

export const fetchProductDetail = async (id: number) => {
  const url = `/products/${id}`
  return handleFetch<Product>(url)
}

export const useFetchProductDetail = (id: number) =>
  useQuery({
    queryKey: ["product_detail", id],
    queryFn: async () => {
      const data = await fetchProductDetail(id)
      return data
    },
    enabled: !!id,
  })
