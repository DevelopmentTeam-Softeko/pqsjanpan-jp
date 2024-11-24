import { redirect } from 'next/navigation'
import React from 'react'

import { getCountries, getHomePageProducts } from '@/api/apiDef'
// import Banner from '@/components/Common/Banner'
import BestCar from '@/components/Common/BestCar'
import ProductSection from '@/components/Common/ProductSection'
import Testimonials from '@/components/Common/Testimonials'
import ExportToCountry from '@/components/Home/ExportToCountry'
import SearchByMake from '@/components/Home/SearchByMake'

type Props = {
  params: { countryCode: string }
}
export default async function Home(props: Props) {
  const products = await getHomePageProducts()
  const countries: any = await getCountries()
  const countryName = countries?.find(
    (country: any) =>
      country?.short_name ===
      (props?.params?.countryCode ?? '')?.trim()?.toUpperCase(),
  )?.name
  if (!countryName) {
    redirect('/')
  }
  return (
    <div>
      {/* <Banner
        title={`Welcome to ${countryName}`}
        description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Quidem magni reprehenderit ratione repellat, laudantium delectus, 
  suscipit aliquam!`}
        bgImgUrl="/banner/hero-banner.jpg"
        isButton={true}
        alignment={'left'}
      /> */}
      <SearchByMake />
      <section className="container mx-auto gap-6 px-6 py-16 lg:px-8">
        <ProductSection
          title="Top-Selling Cars"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem error excepturi molestiae perspiciatis quod, voluptatem. Aperiam architecto consectetur cupiditate dolor eaque facere inventore ipsam, natus, necessitatibus placeat tempora voluptates."
          products={products}
        />
      </section>
      <Testimonials />
      <BestCar />
      <ExportToCountry />
    </div>
  )
}
