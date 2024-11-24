import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import ProductCard from '@/components/Common/ProductCard'
import type { Product } from '@/types'

interface Props {
  title: string
  description?: string
  products: Array<Product>
}

export default function ProductSection(props: Props) {
  const products = props?.products || []
  return (
    <div className=" border-gray-300 bg-white ">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 w-full md:w-2/4">
          <h2 className="mb-4 text-4xl tracking-tight text-black">
            {props?.title}
          </h2>
          {props?.description && (
            <p className="text-base text-gray-700 ">{props?.description}</p>
          )}
        </div>
        <Link
          href="/stock-list"
          type="button"
          className="flex items-center justify-center rounded-md border-2 border-solid border-primary-700 px-5 py-0.5 text-center text-sm font-medium text-primary-700 hover:bg-primary-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
        >
          Show All
          <ArrowSmallRightIcon className="h-8 w-8" />
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
        {products?.map((product) => (
          <ProductCard key={product?.ID} product={product} />
        ))}
      </div>
    </div>
  )
}
