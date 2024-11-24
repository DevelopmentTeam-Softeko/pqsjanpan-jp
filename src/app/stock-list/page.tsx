import type { Metadata } from 'next'
import React, { Suspense } from 'react'

import { getBodyTypeList, getMakerList, getStockListData } from '@/api/apiDef'
import Loading from '@/app/loading'
import { generateSEOMeta } from '@/app/next-seo.config'
// import Banner from '@/components/Common/Banner'
import BestCar from '@/components/Common/BestCar'
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
  ...generateSEOMeta('Stock List of Sold-Out Cars'),
}
export default async function StockList(props: any) {
  const {
    page = 1,
    make,
    model,
    body,
    fromYear,
    toYear,
  } = props?.searchParams || {}
  const bodyTypeData = await getBodyTypeList()
  const makerData = await getMakerList()
  const stockList = await getStockListData({
    make,
    model,
    body,
    fromYear,
    toYear,
    page,
  })
  return (
    <div>
      {/* <Banner
        searchParams={props?.searchParams ?? {}}
        title="Stock List of Sold-Out Cars"
        description={
          'Check out our archive of sold-out Japanese used cars at PQS Japan. Browse popular models that were previously available in our stock and see the quality vehicles we offer.'
        }
        bgImgUrl={stockList?.bannerUrl}
        alignment={'center'}
        isFilter={true}
        isThirdParty={true}
      /> */}
      <Breadcrumb items={[{ title: 'Stock List', uri: '/stock-list' }]} />
      <section className="container mx-auto flex w-full flex-col gap-6 px-6 py-10 lg:flex-row lg:px-8">
        <aside className="w-full shrink-0 lg:w-3/12">
          <ByMakeFilter makerData={makerData} />
          <ByTypeFilter bodyTypeData={bodyTypeData} />
        </aside>
        <Suspense fallback={<Loading />}>
          <main className="flex-1">
            <div className="relative overflow-x-auto lg:shadow-md">
              <div>
                {stockList?.data?.map((product: Product, index: number) => (
                  <StockListCard
                    key={index}
                    product={product}
                    isStockList={true}
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
                  link="/stock-list"
                />
              )}
            </div>
            <WhyPQSJapan />
            <BestCar />
            <HowIrWorks wrapContainer={true} />
          </main>
        </Suspense>

        <InquiryModal />
      </section>
    </div>
  )
}
