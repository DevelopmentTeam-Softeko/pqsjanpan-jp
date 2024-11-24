import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <div className="flex flex-col bg-gray-100 sm:flex-row">
      <div className="relative h-64 w-full sm:h-auto sm:w-1/3 md:w-1/2">
        <Image
          src={'/banner/about-us.jpg'}
          layout="fill"
          objectFit="cover"
          alt={'about us image'}
          className="sm:block"
        />
      </div>
      <div className="w-full p-8 sm:w-2/3 md:w-1/2 lg:px-10 lg:py-16">
        <div className="w-full">
          {/* <h4 className="mb-6 text-lg font-bold text-primary-600">About Us</h4> */}
          <h2 className="mb-6 text-xl font-bold lg:text-4xl">
            About PQS Japan | Your Trusted Auction Car Destination
          </h2>
          <p className="mb-6">
            At PQS Japan, we make owning a quality auction car simple and
            secure. Here’s why we’re trusted worldwide:
          </p>
          <ul className="list-disc pl-4">
            <li className="mb-1">
              <b>Global Reach:</b> Serving regions like the Caribbean, Africa,
              and Russia, with over 7,000 cars exported monthly.
            </li>
            <li className="mb-1">
              <b>Serving Over 20 Countries:</b> PQS Japan proudly serves
              individuals, dealerships, and partners in regions across the
              globe, delivering a seamless buying experience.
            </li>
            <li className="mb-1">
              <b>Quality You Can Trust:</b> WSince 2007, we’ve provided reliable
              Japanese used cars at fair prices.
            </li>
            <li className="mb-1">
              <b>Thorough Inspections:</b> Every vehicle is carefully inspected
              to ensure top quality and value.
            </li>
            <li>
              <b>Customer-Focused Service:</b> We make the buying process
              easy,transparent, and customer-centred.
            </li>
            <li>
              <b>Strong Partnerships:</b> Long-term relationships with suppliers
              and Japanese auctions allow us to offer the best cars.
            </li>
            <li>
              <b>Our Core Values:</b> Speed, Reliability, Quality, and
              Affordability are what drive PQS Japan.
            </li>
          </ul>
          {/* <div className="mb-8 mt-6 flex gap-x-6 px-1">
            <Link
              href="/"
              className="flex w-36 items-center justify-center rounded bg-primary-700 px-3 py-1 text-center font-bold text-white hover:bg-pink-900 xl:w-44 xl:px-8 xl:py-4"
            >
              About Us
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
