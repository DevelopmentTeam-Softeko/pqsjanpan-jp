import { ShieldCheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import type { Product } from '@/types'
import { buildImageUrl, buildProductUrl } from '@/utils'

import InquiryButton from '../Common/InquiryButton'

interface Props {
  product: Product
  isStockList: boolean
}

const StockListCard = ({ product, isStockList }: Props) => {
  const productUrl = buildProductUrl(
    product?.maker?.makers_name,
    product?.model?.model_name,
    product?.ID,
    product?.reference_no,
    !isStockList,
  )
  //   isStockList
  // ? buildProductUrl(
  //     product?.maker?.makers_name,
  //     product?.model?.model_name,
  //     product?.ID,
  //   )
  // : `${process?.env?.THIRD_PARTY_STOCK_API_BASE_URL}/api/upload/downloadaucnetimagezip/${product?.reference_no}/${product?.registraion_year}`
  const productName = `${product?.maker?.makers_name} ${product?.model?.model_name} ${product?.manufacturing_year}`
  const subtitle = product?.featureObj
    ?.filter((ele) => ele?.type === 0)
    ?.map((ele) => ele?.features_name)
    ?.join(' / ')
  const mileage = `${product?.milage} Km`
  const regYear = `${product?.manufacturing_year}/${product?.manufacturing_month}`
  const engineCC = product?.engine_cc ? `${product?.engine_cc}` : 'N/A'
  const fuelType = product?.transmissions?.transmission_name
  const location =
    product?.stock_location_port_name ??
    product?.stock_location_country_name ??
    'N/A'
  const imageUrl = buildImageUrl(
    isStockList ? product.profile_pic_url : product?.attachment?.file_url,
    isStockList,
  )
  const fob = product?.fob_price
  const statusId = product?.vehicle_status_id
  const currency = `US $${fob}`

  const data = [
    { label: 'Mileage', value: mileage },
    { label: 'Year', value: regYear },
    { label: 'Engine', value: engineCC },
    { label: 'Trans.', value: fuelType },
    { label: 'Location', value: location },
    {
      label: 'Stock No',
      value: isStockList ? `【RF${product?.ID}】` : product?.reference_no,
    },
  ]

  const additionalData = [
    {
      label: 'Chassis No',
      value: product?.chassis_no,
    },
    { label: 'Steering', value: product?.steering_name },
    { label: 'Fuel', value: product?.fuel_name },
    { label: 'Seats', value: product?.total_seat },
    { label: 'Engine code', value: product?.engine_code },
    { label: 'Color', value: product?.colors?.color_name },
    { label: 'Drive', value: product?.drivetrain_name },
    { label: 'Doors', value: product?.total_door },
  ]

  return (
    <div className="grid grid-cols-1 gap-x-4 border-b border-gray-300 py-4 md:grid-cols-8">
      <div className="col-span-2 flex flex-col justify-center">
        <Link href={productUrl} className="text-black">
          <Image
            className="w-full md:w-80"
            src={imageUrl}
            alt={productName}
            width={460}
            height={460}
          />
        </Link>
      </div>
      <div className="col-span-4 space-y-3">
        <div className="row-span-1">
          <Link href={productUrl}>
            <h3 className="mb-5 font-semibold text-blue-700">{productName}</h3>
          </Link>
        </div>
        <div className="row-span-3 overflow-x-auto">
          <table className="w-full text-center text-sm text-gray-500">
            <thead className="text-xs">
              <tr>
                {data.map((item, index) => (
                  <th key={index} className="border-r px-4 py-2">
                    {item.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {data.map((item, index) => (
                  <td
                    key={index}
                    className="border-r px-4 text-xs font-semibold text-black "
                  >
                    {item.value}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row-span-3 mt-4 overflow-x-auto">
          <table className="w-full text-center text-sm text-black">
            <tbody>
              <tr>
                {additionalData.slice(0, 4).map((item, index) => (
                  <React.Fragment key={index}>
                    <td className="border bg-gray-200 p-2 text-center text-xs">
                      {item.label}
                    </td>
                    <td className="border p-2 text-center text-xs">
                      {item.value ?? 'N/A'}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
              <tr>
                {additionalData.slice(4, 8).map((item, index) => (
                  <React.Fragment key={index}>
                    <td className="border bg-gray-200 p-2 text-center text-xs">
                      {item.label}
                    </td>
                    <td className="border p-2 text-center text-xs">
                      {item.value ?? 'N/A'}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs">{subtitle} </p>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <Link
            href={productUrl}
            className="mb-2 inline-flex items-center justify-center px-4 py-2 font-bold text-white"
          >
            {isStockList ? (
              <ShieldCheckIcon className="mr-2 h-8 w-8 text-green-500" />
            ) : (
              <span className="text-xs font-bold italic text-gray-700">
                Price Negotiable
              </span>
            )}
          </Link>
          <Link
            href={productUrl}
            className="mb-2 inline-flex items-center justify-center px-4 py-2 font-bold text-white"
          >
            <span className="text-green-500">
              {statusId === 1 ? `FOB: ${currency}` : null}
            </span>
          </Link>
          <InquiryButton
            label="Enquire"
            product={{
              vehicle: productName,
              id: (product?.ID || 0) as number,
              image: imageUrl,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default StockListCard
