import type { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

import { getProductDetails } from '@/api/apiDef'
import { generateSEOMeta } from '@/app/next-seo.config'
import Gallery from '@/components/Common/Gallery'
import TitleSection from '@/components/Common/ProductTitleSection'
import Testimonials from '@/components/Common/Testimonials'
import InquiryModal from '@/components/Modal/Inquiry'
import SummarySection from '@/components/Product/SummarySection'
import type { Product } from '@/types'
import { buildImageUrl, isImageMediaType } from '@/utils'

type Props = {
  params: { id: number; maker: string; model: string }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, maker, model } = params
  const product: Product = (await getProductDetails(
    Number(id),
    maker,
    model,
    false,
  )) as Product
  const title = `${product?.maker_name} ${product?.model_name} ${product?.registraion_year}`
  const subtitle = product?.featureObj
    ?.filter((ele) => ele?.type === 0)
    ?.map((ele) => ele?.features_name)
    ?.join(' / ')
  const attachment = product?.attachmentObj?.find(
    (ele) => ele?.attachment_type_id === 1 && isImageMediaType(ele?.file_url),
  )
  const attachmentUrl = buildImageUrl(attachment?.file_url as string) as string
  return generateSEOMeta(title, subtitle, `/product/${maker}/${model}/${id}`, {
    url: attachmentUrl,
    secureUrl: attachmentUrl,
    alt: title,
    width: 1024,
    height: 768,
    type: 'image/jpg',
  })
}

export default async function ProductDetails(props: Props) {
  const { id: productId, maker, model } = props?.params || {}
  const product: Product = (await getProductDetails(
    productId,
    maker,
    model,
    false,
  )) as Product
  const title = `${product?.maker_name} ${product?.model_name}`
  const images =
    product?.attachmentObj
      ?.filter(
        (ele) =>
          ele?.attachment_type_id === 1 && isImageMediaType(ele?.file_url),
      )
      ?.map((image) => {
        const url = buildImageUrl(image?.file_url)
        return {
          original: url,
          thumbnail: url,
        }
      }) || []
  return (
    <div>
      <div className="container mx-auto flex w-full flex-row content-between justify-between px-6 py-5 lg:px-8">
        <div className="flex flex-row items-center">
          <Image
            src={'/japan-flag.png'}
            width={30}
            height={30}
            alt="Japan Flag"
          />
          <p className="ml-2">JAPAN STOCK</p>
        </div>
        <p>RF{product.ID}</p>
      </div>
      <div className="container mx-auto w-full px-6 py-5 lg:px-8">
        <section className="flex flex-col gap-8 lg:flex-row">
          <main className="w-full lg:w-5/12">
            <Gallery data={(images || []) as any} showThumbnails={false} />
          </main>
          <aside className="relative z-10 w-full lg:w-7/12">
            <SummarySection
              mileage={`${product?.milage} Km`}
              engine={product?.engine_cc_name}
              year={`${product?.manufacturing_year} / ${product?.manufacturing_month}`}
              trans={product?.transmission_name}
              fuel={product?.fuel_name}
              grade={product?.grade_name || 'N/A'}
              color={product?.exterior_color_name || 'N/A'}
              steering={product?.steering_name || 'N/A'}
              drivetrain={product?.drivetrain_name || 'N/A'}
              chassisCode={product?.chassis_code || 'N/A'}
            />
            <TitleSection
              id={productId}
              title={title}
              subtitle={`PACKAGE: ${product?.product_package_name}`}
              status={product?.status_name}
              fob={product?.fob_price}
              vehicle_status_id={product?.vehicle_status_id}
              registrationYear={product?.registraion_year}
              image={images?.[0]?.thumbnail || ''}
              hasShadow={false}
            />
          </aside>
        </section>
        <Testimonials />
      </div>
      <InquiryModal />
    </div>
  )
}
