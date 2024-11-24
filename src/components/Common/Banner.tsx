'use client'

import Link from 'next/link'
import React from 'react'

import BannerTitle from './BannerTitle'
import FilterSection from './FilterSection'

interface Props {
  title?: string
  description?: string
  bgImgUrl?: string
  alignment?: string
  isFilter?: boolean
  isButton?: boolean
  searchParams?: any
  isThirdParty?: boolean
  fobPriceRangeData?: any
  bodyTypeData?: any
  makerData?: any
  maxMinEngineCC?: any
  maxMinMileage?: any
  maxMinPrice?: any
}

const Banner = (props: Props) => {
  const {
    bodyTypeData,
    makerData,
    maxMinEngineCC,
    maxMinMileage,
    maxMinPrice,
  } = props

  const getAlignmentClass = () => {
    if (props.alignment === 'left') {
      return 'text-left md:w-2/4 lg:w-2/3'
    }
    if (props.alignment === 'center') {
      return 'text-center md:w-full lg:w-2/3 mx-auto'
    }
    return 'text-center md:w-full lg:w-2/3 mx-auto'
  }

  return (
    <div
      className="relative mx-auto h-full bg-cover bg-center py-6 md:py-12"
      style={{ backgroundImage: `url(${props.bgImgUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"></div>
      <div className="container relative z-10 mx-auto gap-6 px-6 lg:px-8">
        <div className={`w-full px-1 ${getAlignmentClass()}`}>
          <BannerTitle
            bodyTypeData={bodyTypeData}
            makerData={makerData}
            props={props}
          />
          <p className="my-6 text-xs text-white xl:text-sm">
            {props?.description}
          </p>
        </div>
        {props?.isButton && (
          <div className="mb-8 flex gap-x-6 px-1">
            <Link
              href="/stock-list"
              className="flex w-36 items-center justify-center rounded bg-primary-700 px-3 py-1 text-center font-bold text-white hover:bg-pink-900 xl:w-44 xl:px-8 xl:py-4"
            >
              Start Exploring
            </Link>
          </div>
        )}
      </div>
      {props?.isFilter && props?.searchParams && (
        <div className="relative z-10">
          <FilterSection
            searchParams={props?.searchParams}
            bodyTypeData={bodyTypeData}
            makerData={makerData}
            isThirdParty={!!props?.isThirdParty}
            fobPriceRangeData={maxMinPrice}
            maxMinMileage={maxMinMileage}
            maxMinEngineCC={maxMinEngineCC}
          />
        </div>
      )}
    </div>
  )
}

export default Banner
