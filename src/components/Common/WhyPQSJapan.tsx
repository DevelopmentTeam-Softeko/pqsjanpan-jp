import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const WhyPQSJapan = () => {
  return (
    <div className="container mx-auto my-0 gap-6 px-6 py-10 md:my-12 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-pink-600">Best Car Agency</p>
        <h2 className="py-2 text-3xl font-semibold">
          Why Only Choose PQSJapan?
        </h2>
        <p className="mx-auto w-full text-xs md:w-1/2">
          At PQSJapan, We prioritize quality, great pricing, and customer
          satisfaction, providing a reliable and enjoyable car buying experience
          you can trust.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-3 md:gap-y-6">
        <div className="rounded-md bg-gradient-to-r from-primary-600 p-1">
          <div className="rounded-md bg-gradient-to-r from-pink-50 to-white px-6 py-8">
            <div className="mb-2 flex items-center gap-x-2">
              <Image
                width={48}
                height={48}
                src={'/icon-img-14-05-24/Affordable-price.png'}
                alt="icon"
              />
              <h3 className="text-xl font-semibold">
                <span className="text-pink-600">1. Affordable</span> Price
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              We offer competitive pricing to suit all budgets, giving you
              access to quality vehicles at prices that are hard to beat.
            </p>
          </div>
        </div>
        <div className="rounded-md bg-gradient-to-r from-primary-600 p-1">
          <div className="rounded-md bg-gradient-to-r from-pink-50 to-white px-6 py-8">
            <div className="mb-2 flex items-center gap-x-2">
              <Image
                width={48}
                height={48}
                src="/icon-img-14-05-24/month-warranty.png"
                alt="icon"
              />
              <h3 className="text-xl font-semibold">
                2.Money back <span className="text-pink-600">Guarantee</span>
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              Shop with confidence! We provide a hassle-free, money-back
              guarantee if you’re not completely satisfied with your purchase.
            </p>
          </div>
        </div>
        <div className="rounded-md bg-gradient-to-r from-primary-600 p-1">
          <div className="rounded-md bg-gradient-to-r from-pink-50 to-white px-6 py-8">
            <div className="mb-2 flex items-center gap-x-2">
              <Image
                width={48}
                height={48}
                src="/icon-img-14-05-24/money-warrenty-guarantee.png"
                alt="icon"
              />
              <h3 className="text-xl font-semibold">
                3.8-Month
                <span className="text-pink-600"> Warranty</span>
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              Enjoy peace of mind with our 8-month warranty on all vehicles,
              covering you in case of any unexpected issues or malfunctions.
            </p>
          </div>
        </div>

        <div className="rounded-md bg-gradient-to-r from-primary-600 p-1">
          <div className="rounded-md bg-gradient-to-r from-pink-50 to-white px-6 py-8">
            <div className="mb-2 flex items-center gap-x-2">
              <Image
                width={48}
                height={48}
                src="/icon-img-14-05-24/money-warrenty-guarantee.png"
                alt="icon"
              />
              <h3 className="text-xl font-semibold">
                4.
                <span className="text-pink-600"> Speed</span>
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              Enjoy peace of mind with our 8-month warranty on all vehicles,
              covering you in case of any unexpected issues or malfunctions.
            </p>
          </div>
        </div>

        <div className="rounded-md bg-gradient-to-r from-primary-600 p-1">
          <div className="rounded-md bg-gradient-to-r from-pink-50 to-white px-6 py-8">
            <div className="mb-2 flex items-center gap-x-2">
              <Image
                width={48}
                height={48}
                src="/icon-img-14-05-24/money-warrenty-guarantee.png"
                alt="icon"
              />
              <h3 className="text-xl font-semibold">
                5.
                <span className="text-pink-600"> Reliability</span>
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              Consistent and dependable service you can trust.
            </p>
          </div>
        </div>

        <div className="rounded-md bg-gradient-to-r from-primary-600 p-1">
          <div className="rounded-md bg-gradient-to-r from-pink-50 to-white px-6 py-8">
            <div className="mb-2 flex items-center gap-x-2">
              <Image
                width={48}
                height={48}
                src="/icon-img-14-05-24/money-warrenty-guarantee.png"
                alt="icon"
              />
              <h3 className="text-xl font-semibold">
                6. Quality
                <span className="text-pink-600"> Assurance</span>
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              High standards with thorough inspections for every car, ensuring
              top condition.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-2 border-y border-gray-200 p-2 text-sm md:grid-cols-4 md:gap-x-6 md:gap-y-4 md:p-4 md:py-8 md:text-base">
        <div className="flex md:justify-center ">
          <Image
            width={48}
            height={48}
            src="/icon-img-14-05-24/288k.png"
            alt="icon"
            className="h-8 w-8 md:h-12 md:w-12"
          />
          <div className="ml-2 md:ml-4">
            <p className="text-base font-semibold md:text-lg">288k+</p>
            <p className="text-xs font-normal text-gray-700 md:font-semibold">
              Car Available
            </p>
          </div>
        </div>
        <div className="flex md:justify-center ">
          <Image
            width={48}
            height={48}
            src="/icon-img-14-05-24/196k.png"
            alt="icon"
            className="h-8 w-8 md:h-12 md:w-12"
          />
          <div className="ml-2 md:ml-4">
            <p className="text-base font-semibold md:text-lg">196k+</p>
            <p className="text-xs font-normal text-gray-700 md:font-semibold">
              Car Sold
            </p>
          </div>
        </div>
        <div className="flex md:justify-center ">
          <Image
            width={48}
            height={48}
            src="/icon-img-14-05-24/98k.png"
            alt="icon"
            className="h-8 w-8 md:h-12 md:w-12"
          />
          <div className="ml-2 md:ml-4">
            <p className="text-base font-semibold md:text-lg">98k+</p>
            <p className="text-xs font-normal text-gray-700 md:font-semibold">
              Used Cars
            </p>
          </div>
        </div>
        <div className="flex md:justify-center ">
          <Image
            width={48}
            height={48}
            src="/icon-img-14-05-24/48.png"
            alt="icon"
            className="h-8 w-8 md:h-12 md:w-12"
          />
          <div className="ml-2 md:ml-4">
            <p className="text-base font-semibold md:text-lg">48.27%</p>
            <p className="text-xs font-normal text-gray-700 md:font-semibold">
              Customer Satisfaction
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center text-center md:flex-row">
        <span className="mr-2 text-xl font-semibold">Excellent!</span>
        <div className="flex">
          {new Array(5).fill(1).map((_ele, index) => (
            <StarIcon
              key={index}
              className="mr-1 rounded bg-teal-500 p-1 text-white"
              width={20}
            />
          ))}
        </div>
        <span className="pl-2 text-xs">
          5 Rating out of 5.0 based On{' '}
          <Link href={'/'}>
            <span className="underline">2348 Reviews</span>
          </Link>
        </span>
        <h4 className="ml-6 mt-4 flex items-center font-semibold md:mt-0">
          {' '}
          <StarIcon width={40} className="text-teal-500" />
          Trustpilot
        </h4>
      </div>
    </div>
  )
}

export default WhyPQSJapan
