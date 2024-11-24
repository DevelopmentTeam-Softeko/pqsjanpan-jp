import type { Metadata } from 'next'
import React from 'react'

import { getFeatures, getProductDetails } from '@/api/apiDef'
import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'
import Gallery from '@/components/Common/Gallery'
import HowIrWorks from '@/components/Common/HowIrWorks'
import TitleSection from '@/components/Common/ProductTitleSection'
import Testimonials from '@/components/Common/Testimonials'
import InquiryModal from '@/components/Modal/Inquiry'
import DownloadButton from '@/components/Product/DownloadButton'
import { RelatedProduct } from '@/components/Product/RelatedProduct'
import Specification from '@/components/Product/Specification'
import StockRemarks from '@/components/Product/StockRemarks'
import type { FeatureObj, Product } from '@/types'
import { buildImageUrl, buildProductUrl, isImageMediaType } from '@/utils'

type Props = {
  params: { id: number; maker: string; model: string }
  searchParams: any
}
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { id, maker, model } = params
  const productId = id ? Number(id) : null
  const productMaker = maker || 'Unknown Maker'
  const productModel = model || 'Unknown Model'

  const isThirdParty = Number(searchParams?.['all-stock']) === 1

  if (!productId) {
    return generateSEOMeta('Product Not Found', '', '/product-not-found')
  }

  // Fetch product details safely
  let product: Product | null = null
  try {
    product = (await getProductDetails(
      productId,
      productMaker,
      productModel,
      isThirdParty,
    )) as Product
  } catch (error) {
    return generateSEOMeta(
      'Product Not Found',
      '',
      `/product/${productMaker}/${productModel}/${productId}`,
    )
  }

  const title = product
    ? `Used ${product.maker_name || 'Unknown Maker'} ${
        product.model_name || 'Unknown Model'
      } ${product.manufacturing_year || ''} for sale ${
        product.milage || ''
      } `.trim()
    : 'Product Unavailable'

  const description = `Used ${product.manufacturing_year || ''} 
  ${product?.maker_name} ${product.model_name} 
  ${product?.product_package_name && product?.product_package_name}
  ${product?.colors?.color_name || ''} quipped with a ${
    product?.enginesize?.cc_name || ''
  } ${product?.fuels?.fuel_name || ''} engine and
      ${product?.transmissions?.transmission_name || ''}. Spacious
      ${product?.total_seat || ''}-seater, driven
      ${product?.milage || ''} kb in total.
     `

  // const description =
  //   product?.featureObj
  //     ?.filter((ele) => ele?.type === 0)
  //     ?.map((ele) => ele?.features_name || 'Unknown Feature')
  //     ?.join(' / ') || 'No features available'

  const attachment = product?.attachmentObj?.find((ele) =>
    isThirdParty
      ? isImageMediaType(ele?.file_url)
      : ele?.attachment_type_id === 1 && isImageMediaType(ele?.file_url),
  )

  const attachmentUrl =
    attachment && attachment.file_url
      ? buildImageUrl(attachment.file_url as string)
      : ''

  return generateSEOMeta(
    title,
    description,
    `/product/${productMaker}/${productModel}/${productId}`,
    {
      url: attachmentUrl || '/default-image.jpg',
      secureUrl: attachmentUrl || '/default-image.jpg',
      alt: title,
      width: attachmentUrl ? 1024 : 0,
      height: attachmentUrl ? 768 : 0,
      type: attachmentUrl ? 'image/jpg' : '',
    },
  )
}

export default async function ProductDetails(props: Props) {
  const { id: productId, maker, model } = props?.params || {}
  const isThirdParty = Number(props?.searchParams?.['all-stock']) === 1
  const product: Product = (await getProductDetails(
    productId,
    maker,
    model,
    isThirdParty,
  )) as Product
  const features: Array<FeatureObj> = (await getFeatures()) as Array<FeatureObj>
  const title = `Used ${product?.maker_name} ${product?.model_name}`

  const images =
    product?.attachmentObj
      ?.filter((ele) =>
        isThirdParty
          ? isImageMediaType(ele?.file_url)
          : ele?.attachment_type_id === 1 && isImageMediaType(ele?.file_url),
      )
      ?.map((image) => {
        const url = buildImageUrl(image?.file_url, !isThirdParty)
        return {
          original: url,
          thumbnail: url,
        }
      }) || []
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: isThirdParty ? 'All Stock' : 'Stock List',
            uri: isThirdParty ? '/all-stock' : '/stock-list',
          },
          {
            title,
            uri: buildProductUrl(
              maker,
              model,
              productId,
              productId,
              isThirdParty,
            ),
          },
        ]}
      />
      <div className="container mx-auto w-full px-6 py-5 lg:px-8">
        <section className="flex flex-col gap-8 lg:flex-row">
          <main className="w-full lg:w-5/12">
            <TitleSection
              id={productId}
              title={title}
              subtitle={`PACKAGE: ${product?.product_package_name}`}
              status={product?.status_name}
              fob={product?.fob_price}
              vehicle_status_id={product?.vehicle_status_id}
              registrationYear={product?.manufacturing_year}
              image={images?.[0]?.thumbnail || ''}
              hasShadow={true}
            />
            <Gallery data={(images || []) as any} showThumbnails />
            <DownloadButton
              id={productId}
              registrationYear={product?.registraion_year}
              isThirdParty={isThirdParty}
            />
            {isThirdParty && <StockRemarks />}
          </main>
          <aside className="relative z-10 w-full lg:w-7/12">
            <Specification product={product} features={features} />
          </aside>
        </section>
        <HowIrWorks externalLinks={false} />
        <RelatedProduct
          modelId={product?.fk_model_id}
          makerId={product?.fk_makers_id}
        />
        <Testimonials />
        {!isThirdParty && (
          <RelatedProduct
            modelId={product?.fk_model_id}
            makerId={product?.fk_makers_id}
          />
        )}
      </div>
      <InquiryModal />
    </div>
  )
}
