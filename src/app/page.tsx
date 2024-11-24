import type { Metadata } from 'next'
import React, { Suspense } from 'react'

import {
  getBodyTypeList,
  getHomePageProducts,
  getMakerList,
  getMaxAndMinPrice,
} from '@/api/apiDef'
import BestCar from '@/components/Common/BestCar'
import HowIrWorks from '@/components/Common/HowIrWorks'
import ProductSection from '@/components/Common/ProductSection'
import Testimonials from '@/components/Common/Testimonials'
import WhyPQSJapan from '@/components/Common/WhyPQSJapan'
import AboutUs from '@/components/Home/AboutUs'
import ExportToCountry from '@/components/Home/ExportToCountry'
import ShopByType from '@/components/Home/ShopByType'
import HomeClient from '@/components/pages/HomeClient'
import ByMakeFilter from '@/components/StockList/ByMakeFilter'
import ByTypeFilter from '@/components/StockList/ByTypeFilter'

import Loading from './loading'
import { generateSEOMeta } from './next-seo.config'

export const metadata: Metadata = {
  ...generateSEOMeta('PQS Japan: Quality Japanese Used Cars for Sale'),
}

export default async function Home() {
  const products = await getHomePageProducts()
  const bodyTypeData = await getBodyTypeList(1)
  const makerData = await getMakerList(1)

  const maxMinPrice = await getMaxAndMinPrice('/api/common/getFobPriceRange')
  const maxMinMileage = await getMaxAndMinPrice('/api/common/getMileage')
  const maxMinEngineCC = await getMaxAndMinPrice('/api/common/getEngineSizeCC')

  return (
    <div>
      <HomeClient
        bodyTypeData={bodyTypeData}
        makerData={makerData}
        maxMinEngineCC={maxMinEngineCC}
        maxMinMileage={maxMinMileage}
        maxMinPrice={maxMinPrice}
      >
        <section className="container mx-auto flex w-full flex-col-reverse gap-6 px-6 py-10 lg:flex-row lg:px-8">
          <aside className="w-full shrink-0 lg:w-3/12">
            <ByMakeFilter makerData={makerData} isThirdParty={true} />
            <ByTypeFilter bodyTypeData={bodyTypeData} isThirdParty={true} />
          </aside>
          <Suspense fallback={<Loading />}>
            <main className="flex-1">
              <div className="relative overflow-x-auto lg:shadow-md">
                <ProductSection
                  title="Recently Added Cars"
                  description="Check out our latest car additions, featuring a variety of models and top brands. Browse specifications and connect with us to find the perfect car for your needs!"
                  products={products}
                />
              </div>
            </main>
          </Suspense>
        </section>
        <AboutUs />
        <WhyPQSJapan />
        <ShopByType />
        <HowIrWorks externalLinks={true} />
        <Testimonials />
        <BestCar />
        <ExportToCountry />
      </HomeClient>
    </div>
  )
}
