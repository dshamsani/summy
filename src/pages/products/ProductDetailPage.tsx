import type { Product } from "@/types/productTypes"
import type { FC } from "react"

import { useLocation } from "@tanstack/react-router"
import { Helmet } from "react-helmet"

import metadata from "../../../conf/metadata.json"

export const ProductDetailPage: FC = () => {
  const location = useLocation() as { state?: { product?: Product } }

  const product = location.state?.product

  if (!product) {
    return (
      <main className='container flex min-h-minHeight items-center justify-center py-xl'>
        <p className='text-center text-text'>Product data not available.</p>
      </main>
    )
  }

  const title = metadata.productDetail.title.replace("%title%", product.title)
  const description = metadata.productDetail.description.replace(
    "%title%",
    product.title,
  )
  const keywords = metadata.productDetail.keywords.replace(
    /%title%/g,
    product.title,
  )

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
      </Helmet>

      <main className='container py-xl'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='rounded-lg border border-border bg-secondaryBg p-4'>
            <img
              src={product.images[0]}
              alt={product.title}
              className='w-full object-contain'
            />
          </div>

          <div className='space-y-4'>
            <h1 className='text-2xl font-semibold text-text'>
              {product.title}
            </h1>
            <p className='text-grayTextPrimary'>{product.description}</p>

            <div className='text-xl font-bold text-primary'>
              ${product.price.toFixed(2)}{" "}
              <span className='text-greenText ml-2 text-sm font-medium'>
                -{product.discountPercentage}% off
              </span>
            </div>

            <div className='text-grayTextSecondary text-sm'>
              Rating: {product.rating} ⭐ · Stock: {product.stock}
            </div>
            <div className='text-grayTextSecondary text-sm'>
              Brand: {product.brand} · SKU: {product.sku}
            </div>
            <div className='text-grayTextSecondary text-sm'>
              Availability: {product.availabilityStatus}
            </div>
            <div className='text-grayTextSecondary text-sm'>
              Shipping: {product.shippingInformation}
            </div>
            <div className='text-grayTextSecondary text-sm'>
              Warranty: {product.warrantyInformation}
            </div>
            <div className='text-grayTextSecondary text-sm'>
              Return policy: {product.returnPolicy}
            </div>
          </div>
        </div>

        {product.reviews.length > 0 && (
          <section className='mt-12 space-y-4'>
            <h2 className='text-xl font-semibold text-text'>
              Customer Reviews
            </h2>
            {product.reviews.map((r, i) => (
              <div
                key={i}
                className='bg-cardBg rounded-lg border border-border p-4 shadow-sm'
              >
                <div className='text-grayTextSecondary text-sm'>
                  {r.reviewerName} · {new Date(r.date).toLocaleDateString()}
                </div>
                <div className='text-yellowText text-sm'>
                  Rating: {r.rating} ⭐
                </div>
                <p className='text-text'>{r.comment}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  )
}
