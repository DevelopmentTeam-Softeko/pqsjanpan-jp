import Image from 'next/image'
import Link from 'next/link'

import { FeaturedMakerList } from '@/config/staticData'
import { getIconName } from '@/utils'

const SearchByMake = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto gap-6 px-6 py-16 lg:px-8">
        <h3 className="text-2xl">Search By Make</h3>
        <div className="mt-6 grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6">
          {FeaturedMakerList.map((brand, index) => (
            <Link
              href={`/stock-list?make=${brand?.id}`}
              key={index}
              className="flex flex-col items-center justify-center rounded-md bg-white p-4 font-semibold shadow-md"
            >
              <Image
                className="rounded-full"
                width={80}
                height={60}
                src={`https://vl.imgix.net/img/${getIconName(
                  brand?.name,
                )}-logo.png?w=100&h=100`}
                alt={brand?.name}
              />
              <p className="mt-2 font-light">{brand.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SearchByMake
