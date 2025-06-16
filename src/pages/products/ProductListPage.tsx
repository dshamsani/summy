import type { FC } from "react"

import { Helmet } from "react-helmet"
import { ProductCard } from "@/components/products/ProductCard"

import { useFetchProductsList } from "@/services/products"
import { useNavigate, useSearch } from "@tanstack/react-router"

import metadata from "../../../conf/metadata.json"

export const ProductListPage: FC = () => {
  const { page = 1 } = useSearch({ from: "/" })
  const navigate = useNavigate()

  const { data, isLoading } = useFetchProductsList(20, (page - 1) * 20)
  const totalItems = data?.pages[0]?.total ?? 0
  const totalPages = Math.ceil(totalItems / 20)

  const items = data?.pages[0]?.products ?? []

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        {<title>{metadata.productList.title}</title>}
        <meta name='description' content={metadata.productList.description} />
        <meta name='keywords' content={metadata.productList.keywords} />
        <meta property='og:title' content={metadata.productList.title} />
        <meta
          property='og:description'
          content={metadata.productList.description}
        />
        <meta property='og:type' content='website' />
      </Helmet>

      <main className='container py-xl'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {Array.from({ length: 20 }).map((_, i) => (
            <ProductCard product={items[i]} isLoading={isLoading} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className='flex justify-center gap-2 pt-6'>
            {Array.from({ length: totalPages }).map((_, i) => {
              const current = i + 1
              return (
                <button
                  key={current}
                  onClick={() => navigate({ search: { page: current } })}
                  className={`min-w-[36px] rounded border px-3 py-1 text-sm font-medium ${
                    page === current
                      ? "bg-primary text-white"
                      : "text-grayTextPrimary hover:bg-secondaryBg"
                  }`}
                >
                  {current}
                </button>
              )
            })}
          </div>
        )}
      </main>
    </>
  )
}
