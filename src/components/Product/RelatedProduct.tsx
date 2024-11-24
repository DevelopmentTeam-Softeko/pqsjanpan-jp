'use client'

import React, { useEffect, useState } from 'react'

import { getRelatedProduct } from '@/api/apiDef'
import ProductSection from '@/components/Common/ProductSection'

interface Props {
  modelId: number
  makerId: number
}
export const RelatedProduct = (props: Props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    if (props?.makerId && props?.modelId) {
      getRelatedProduct(props?.makerId, props?.modelId).then(
        (response: any) => {
          setProducts(response?.data)
        },
      )
    }
  }, [props?.makerId, props?.modelId])
  return <ProductSection title="Related Products" products={products} />
}
