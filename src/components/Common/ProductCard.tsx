import classNames from 'classnames'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import type { Product } from '@/types'
import { buildImageUrl, buildProductUrl } from '@/utils'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const productURL = buildProductUrl(
    product?.maker?.makers_name,
    product?.model?.model_name,
    product?.ID,
    product?.reference_no,
    false,
  )
  return (
    <div className="rounded-lg bg-white shadow-md">
      <Link href={productURL}>
        <Image
          className="relative w-full rounded-t-lg"
          width={250}
          height={200}
          src={buildImageUrl(product?.profile_pic_url)}
          alt=""
        />
      </Link>
      <div className="p-2">
        <Link href={productURL}>
          <h5
            className={classNames(
              'mb-1 text-sm font-bold tracking-tight text-gray-900',
              { [roboto.className]: true },
            )}
          >
            {`${product?.maker?.makers_name} ${product?.model?.model_name} ${product?.manufacturing_year}`}
          </h5>
        </Link>
        <div className="my-1 flex justify-between">
          <span className="flex items-center justify-center">
            <Image
              src="/svg/calender.svg"
              alt="calender"
              width={18}
              height={28}
            />
            <span className="ml-2 text-xs font-normal text-gray-700">
              RF{product?.ID}
            </span>
          </span>
          <span className="flex items-center justify-center">
            <Image
              src="/svg/speed-meter.svg"
              alt="speed meter"
              width={18}
              height={18}
            />
            <span className="ml-2 text-xs font-normal text-gray-700">
              {product?.enginesize?.cc_name}
            </span>
          </span>
          <span className="flex items-center justify-center">
            <Image
              src="/svg/cart_icon.svg"
              alt="calender"
              width={18}
              height={28}
            />
            <span className="ml-2 text-xs font-normal text-gray-700">
              {product.vehicle_status_id === 1
                ? `US$ ${product?.fob_price}`
                : '-'}
            </span>
          </span>
        </div>
      </div>
      <Link
        className="flex items-center justify-center rounded-b-lg border-t border-solid border-gray-300 bg-secondary-900 p-2 text-white"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=818046160505"
      >
        <Image
          src="/svg/whatsapp-original.svg"
          alt="Whatsapp"
          width={20}
          height={20}
        />
        <span className="pl-2 text-xs">Whatsapp</span>
      </Link>
    </div>
  )
}
