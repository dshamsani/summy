import type { FC } from "react"
import type { Product } from "@/types/productTypes"

import { Link } from "@tanstack/react-router"
import { LoadingSkeleton } from "@/components/global/LoadingSkeleton"

interface ProductCardProps {
  product: Product
  isLoading?: boolean
}

export const ProductCard: FC<ProductCardProps> = ({ product, isLoading }) => {
  return (
    <Link
      to='/product/$id'
      params={{ id: product?.id ? product?.id.toString() : "" }}
      state={{ product } as any}
      className='bg-cardBg block rounded-xl border border-border p-md transition-all duration-300 hover:shadow'
    >
      <div className='mb-2 h-48 w-full overflow-hidden rounded-md'>
        {isLoading ? (
          <LoadingSkeleton width='273px' height='192px' rounded='md' />
        ) : (
          <img
            src={product?.images[0]}
            alt={product?.title}
            className='h-full w-full object-contain'
          />
        )}
      </div>
      <h3 className='mb-1 line-clamp-2 text-lg font-medium text-text'>
        {isLoading ? (
          <LoadingSkeleton height='28px' width='100px' rounded='md' />
        ) : (
          product?.title
        )}
      </h3>
      <p className='text-base font-semibold text-primary'>
        {isLoading ? (
          <LoadingSkeleton height='24px' width='50px' rounded='md' />
        ) : (
          `$${product?.price}`
        )}
      </p>
    </Link>
  )
}
