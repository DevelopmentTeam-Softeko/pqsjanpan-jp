import Link from 'next/link'
import React from 'react'

import { getBodyTypeList, getMakerList } from '@/api/apiDef'

import FilterSection from '../Common/FilterSection'

interface Props {
  searchParams?: any
  title: string
  description: string
}

const Banner = async (props: Props) => {
  const bodyTypeData = await getBodyTypeList()
  const makerData = await getMakerList()

  return (
    <div className="relative mx-auto h-full bg-[url('/assets/banners/home-page-top-hero-banner/hero-banner.jpg')] bg-cover bg-center py-6 md:py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"></div>
      <div className="container relative z-10 mx-auto gap-6 px-6 lg:px-8">
        <div className="w-full px-1 md:w-2/4 lg:w-1/3">
          <h2 className="font-sans text-3xl font-bold text-white md:text-4xl xl:text-5xl">
            {props?.title}
          </h2>
          <p className="my-6 text-xs text-white xl:text-lg">
            {props?.description}
          </p>
        </div>
        <div className="mb-8 flex gap-x-6 px-1">
          <Link
            href="/stock-list"
            className="flex w-36 items-center justify-center rounded bg-primary-700 px-3 py-1 text-center font-bold text-white hover:bg-pink-900 xl:w-44 xl:px-8 xl:py-4"
          >
            Explore More
          </Link>
        </div>
      </div>
      {props?.searchParams && (
        <div className="relative z-10 ">
          <FilterSection
            searchParams={props?.searchParams}
            bodyTypeData={bodyTypeData}
            makerData={makerData}
            isThirdParty={false}
          />
        </div>
      )}
    </div>
  )
}

export default Banner
