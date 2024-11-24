import type { Metadata } from 'next'
import React, { Suspense } from 'react'

import {
  getBodyTypeList,
  // getFobPriceRange,
  getMakerList,
  getStockListData,
} from '@/api/apiDef'
import Loading from '@/app/loading'
import { generateSEOMeta } from '@/app/next-seo.config'
// import Banner from '@/components/Common/Banner'
import Breadcrumb from '@/components/Common/Breadcrumb'
import HowIrWorks from '@/components/Common/HowIrWorks'
import NotFound from '@/components/Common/NotFound'
import Pagination from '@/components/Common/Pagination'
import WhyPQSJapan from '@/components/Common/WhyPQSJapan'
import InquiryModal from '@/components/Modal/Inquiry'
import ByMakeFilter from '@/components/StockList/ByMakeFilter'
import ByTypeFilter from '@/components/StockList/ByTypeFilter'
import StockListCard from '@/components/StockList/StockListCard'
import type { Product } from '@/types'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  ...generateSEOMeta('All Stock of Japanese Used Cars for Sale'),
}
export default async function StockList(props: any) {
  const {
    page = 1,
    make,
    model,
    body,
    fromYear,
    toYear,
    fromPrice,
    toPrice,
    chassisNo,
  } = props?.searchParams || {}
  const bodyTypeData = await getBodyTypeList(1)
  const makerData = await getMakerList(1)
  // const fobPriceRange = await getFobPriceRange()
  const stockList = await getStockListData({
    make,
    model,
    body,
    fromYear,
    toYear,
    page,
    fromPrice,
    toPrice,
    chassisNo,
    isThirdParty: 1,
  })
  return (
    <div>
      {/* <Banner
        searchParams={props?.searchParams ?? {}}
        title="All Stock of Japanese Used Cars Available for Sale"
        description={
          'Explore our top-quality Japanese used cars. Discover reliable options that meet your needs and budget!'
        }
        bgImgUrl={stockList?.bannerUrl}
        alignment={'center'}
        isFilter={true}
        isThirdParty={true}
        fobPriceRangeData={fobPriceRange}
      /> */}
      <Breadcrumb items={[{ title: 'All Stock', uri: '/all-stock' }]} />
      <section className="container mx-auto flex w-full flex-col gap-6 px-6 py-10 lg:flex-row lg:px-8">
        <aside className="w-full shrink-0 lg:w-3/12">
          <ByMakeFilter makerData={makerData} isThirdParty={true} />
          <ByTypeFilter bodyTypeData={bodyTypeData} isThirdParty={true} />
        </aside>
        <Suspense fallback={<Loading />}>
          <main className="flex-1">
            <div className="relative overflow-x-auto lg:shadow-md">
              <div>
                {stockList?.data?.map((product: Product, index: number) => (
                  <StockListCard
                    key={index}
                    product={product}
                    isStockList={false}
                  />
                ))}
              </div>
              {stockList?.data?.length === 0 && <NotFound />}
              {stockList?.pagination?.total && (
                <Pagination
                  total={stockList?.pagination?.total || 0}
                  perPage={stockList?.pagination?.perPage || 0}
                  currentPage={stockList?.pagination?.currentPage || 0}
                  lastPage={stockList?.pagination?.lastPage || 0}
                  link="/all-stock"
                />
              )}
            </div>
            <WhyPQSJapan />
            <HowIrWorks externalLinks={true} />
          </main>
        </Suspense>
        <InquiryModal />
      </section>
    </div>
  )
}
