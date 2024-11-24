import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

import { getProductDetails } from '@/api/apiDef'
import { generateSEOMeta } from '@/app/next-seo.config'
import type { Product } from '@/types'
import { buildProductUrl } from '@/utils'

type Props = {
  params: { maker: number }
}
export const metadata: Metadata = {
  ...generateSEOMeta('Product'),
}

export default async function ProductDetailsLegacy(props: Props) {
  const { maker: productId } = props?.params || {}
  const product: Product = (await getProductDetails(
    productId,
    'maker',
    'model',
    false,
  )) as Product
  const productURL = buildProductUrl(
    product?.maker_name,
    product?.model_name,
    product?.ID,
    product?.reference_no,
    false,
  )
  if (productId && product?.maker_name && product?.model_name) {
    redirect(productURL)
  }
  return (
    <section className="container mx-auto flex w-full flex-col-reverse gap-8 py-5 sm:px-6 lg:flex-row lg:px-8">
      <h3 className="text-center font-bold">Redirecting....</h3>
    </section>
  )
}
