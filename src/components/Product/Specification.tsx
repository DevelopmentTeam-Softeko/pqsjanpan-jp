import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import React, { useMemo } from 'react'

import SummarySection from '@/components/Product/SummarySection'
import type { FeatureObj, Product } from '@/types'
import { mergeArr, prettyNumber } from '@/utils'

interface Props {
  product: Product
  features: Array<FeatureObj>
}
// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default React.memo(function Specification({
  product,
  features: allFeatures,
}: Props) {
  const features = useMemo(() => {
    return mergeArr(
      product?.featureObj
        ?.filter((ele) => ele.type === 0)
        ?.map((ele) => ({
          label: ele?.features_name,
          value: false,
        })),
      (allFeatures || [])?.map((ele) => ({
        label: ele?.features_name,
        value: false,
      })),
    )
  }, [product?.featureObj, allFeatures])
  const vehicleDetails = useMemo(() => {
    return [
      {
        key: 'Stock Number',
        value: `RF${product?.ID}`,
      },
      {
        key: 'Stock Country',
        value: product?.stock_location_country_name,
      },
      {
        key: 'Stock Location',
        value: product?.stock_location_port_name,
      },
      {
        key: 'Maker / Model',
        value: `${product?.maker_name} ${product?.model_name}`,
      },
      {
        key: 'Package Name',
        value: product?.product_package_name,
      },
      {
        key: 'Registration Year/Month',
        value: `${product?.registraion_year} / ${product?.registration_month}`,
      },
      {
        key: 'Manufacture Year/Month',
        value: `${product?.manufacturing_year} / ${product?.manufacturing_month}`,
      },
      {
        key: 'Chassis No.',
        value: product?.chassis_no,
      },
      {
        key: 'Transmission',
        value: product?.transmission_name,
      },
      {
        key: 'Fuel Type',
        value: product?.fuel_name,
      },
      {
        key: 'Engine Size',
        value: product?.engine_cc_name,
      },
      {
        key: 'Engine Code ',
        value: product?.engine_code,
      },
      {
        key: 'Mileage',
        value: `${product?.milage} Km`,
      },
      {
        key: 'Color(Exterior)',
        value: product?.exterior_color_name,
      },
      {
        key: 'Seat Capacity',
        value: product?.total_seat,
      },
      {
        key: 'Doors',
        value: product?.total_door,
      },
      {
        key: 'Dimension (L × W × H) Cm',
        value: `${product?.length_size} x ${product?.weidth_size} x ${product?.height_size}`,
      },
      {
        key: 'M3',
        value: prettyNumber(
          Number(product?.length_size || 0) *
            Number(product?.weidth_size || 0) *
            Number(product?.height_size || 0),
        ),
      },
      {
        key: 'Weight (Kg)',
        value: `${prettyNumber(product?.gross_weight)} Kg`,
      },
      {
        key: 'Gross Weight (Kg)',
        value: `${prettyNumber(product?.total_gross_weight)} Kg`,
      },
    ]
  }, [product])
  return (
    <div className="mb-10 w-full">
      <SummarySection
        mileage={`${product?.milage} Km`}
        engine={product?.engine_cc_name}
        year={`${product?.manufacturing_year} / ${product?.manufacturing_month}`}
        trans={product?.transmission_name}
        fuel={product?.fuel_name}
      />
      <div className="relative shadow-md sm:rounded-lg">
        <h3 className="border-b border-solid border-gray-400 p-4 text-xl font-bold text-gray-600">
          Specification
        </h3>
        <table className="w-full text-left text-base text-gray-500">
          <tbody className="hidden xl:block">
            {vehicleDetails.map(
              (detail, index) =>
                index % 2 === 0 && (
                  <tr className="border-b border-gray-200" key={index}>
                    <th
                      scope="row"
                      className="whitespace-nowrap bg-gray-50 px-6 py-2 font-medium text-gray-900"
                    >
                      {detail.key}
                    </th>
                    <td className="px-6 py-2">{detail.value}</td>
                    {vehicleDetails[index + 1] && (
                      <React.Fragment key={index + 1}>
                        <th
                          scope="row"
                          className="whitespace-nowrap bg-gray-50 px-6 py-2 font-medium text-gray-900"
                        >
                          {vehicleDetails[index + 1]?.key}
                        </th>
                        <td className="px-6 py-2">
                          {vehicleDetails[index + 1]?.value}
                        </td>
                      </React.Fragment>
                    )}
                  </tr>
                ),
            )}
          </tbody>
          <tbody className="block xl:hidden">
            {vehicleDetails.map((detail, index) => (
              <tr className="border-b border-gray-200" key={index}>
                <th
                  scope="row"
                  className="whitespace-nowrap bg-gray-50 px-6 py-2 font-medium text-gray-900"
                >
                  {detail.key}
                </th>
                <td className="px-6 py-2">{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <h3 className="border-b border-solid border-gray-400 p-4 text-xl font-bold text-gray-600">
          Features
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {features?.map((ele) => (
            <div
              className={classNames(
                'px-4 py-2 rounded-md text-center flex items-center',
                ele?.value
                  ? 'bg-green-400 text-white'
                  : 'bg-gray-100 text-gray-500',
              )}
              key={ele?.label}
            >
              {ele?.value && (
                <CheckBadgeIcon className="mr-2 h-6 w-6 text-white" />
              )}
              <span>{ele?.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
