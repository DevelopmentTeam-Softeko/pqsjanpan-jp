import Image from 'next/image'
import Link from 'next/link'
import { ShopByType as ShopByTypeData } from 'src/config/staticData'

const ShopByType = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex w-full flex-col px-6 py-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="mb-6 lg:mb-0">
            <h4 className="inline-block border-b border-dashed border-primary-600 pb-1 font-semibold uppercase text-pink-600">
              types of vehicle
            </h4>
            <h3 className="pb-2 text-4xl font-semibold text-white">
              Shop By Type
            </h3>
            <p className="mb-8 text-xs text-slate-400 sm:w-2/3">
              Car servicing is the regular maintenance and inspection of a
              vehicle to ensure that it is operating safely and efficiently.
            </p>
            <Link
              href="/stock-list"
              className="inline-block rounded-md bg-pink-600 px-4 py-2 text-white hover:bg-pink-900"
            >
              View All Listing
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-0 bg-white sm:grid-cols-3">
            {ShopByTypeData?.map((ele) => (
              <Link
                className="block border p-10 text-center"
                key={ele.id}
                href={`/stock-list?body=${ele.id}`}
              >
                <Image
                  src={ele.logo}
                  alt={ele.name}
                  width={100}
                  height={50}
                  className="mb-3 inline-block"
                />
                <h6 className="font-semibold">{ele.name}</h6>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopByType
