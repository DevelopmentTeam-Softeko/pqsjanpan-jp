'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

import Banner from '@/components/Common/Banner'

type Props = {
  children: React.ReactNode
  bodyTypeData: any
  makerData: any
  maxMinEngineCC: any
  maxMinMileage: any
  maxMinPrice: any
}

export default function HomeClient({
  children,
  bodyTypeData,
  makerData,
  maxMinEngineCC,
  maxMinMileage,
  maxMinPrice,
}: Props) {
  const searchParams = useSearchParams()
  return (
    <div>
      <Banner
        title={'Find Japanese Used Cars at Unbeatable Prices'}
        description={`Explore our handpicked collection of quality used Japanese cars – affordable, reliable, and ready to drive. With thousands of collections in stock, your dream car is just a click away.`}
        bgImgUrl="/banner/hero-banner.jpg"
        isFilter={true}
        isButton={true}
        alignment={'left'}
        searchParams={searchParams}
        isThirdParty={true}
        bodyTypeData={bodyTypeData}
        makerData={makerData}
        maxMinEngineCC={maxMinEngineCC}
        maxMinMileage={maxMinMileage}
        maxMinPrice={maxMinPrice}
      />

      {children}
    </div>
  )
}
