import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ExternalLinkCard from '@/components/Home/ExternalLinkCard'

interface Props {
  externalLinks?: boolean
  wrapContainer?: boolean
}
export default function HowIrWorks(props: Props) {
  return (
    <div className="container mx-auto w-full py-8 lg:py-20">
      <div className="mb-8">
        <h2 className="mb-4 text-center text-3xl font-semibold">How to Buy?</h2>
        <p className="mx-auto w-full text-xs md:w-1/2">
          Buying with PQS Japan is easy. Just follow these steps to find and bid
          on your ideal vehicle.
        </p>
      </div>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 lg:mb-32">
        <div className="relative p-6 text-center lg:mt-4">
          <span className="mb-3 inline-block rounded-2xl bg-primary-50 p-6">
            <Image
              src="/resgistration-and-account.png"
              height={50}
              width={50}
              alt="browse and select a vehicle"
            />
          </span>
          <h3 className="mb-2 text-center text-lg font-semibold">
            1. Register and Account Setup
          </h3>
          <p className="text-center text-xs font-semibold text-gray-700 lg:px-12">
            Create an account to access our extensive inventory and start your
            car-buying journey with PQS Japan.
          </p>
          <Image
            className={`invisible absolute top-6 xl:visible ${
              !props?.wrapContainer ? 'left-80 2xl:left-96' : 'left-80'
            }`}
            src="/arrow-line.png"
            height={200}
            width={200}
            alt="arrow line"
          />
        </div>
        <div className="relative mt-4 p-6 text-center">
          <span className="mb-3 inline-block rounded-2xl bg-primary-600 p-6">
            <Image
              src="/browse-and-select-a-vehicle.png"
              height={50}
              width={50}
              alt="browse and select a vehicle"
            />
          </span>
          <h3 className="mb-2 text-center text-lg font-semibold">
            2. Browse and Select a Vehicle
          </h3>
          <p className="text-center text-xs font-semibold text-gray-700 lg:px-12">
            Explore thousands of vehicles across various makes and models,
            tailored to your preferences.
          </p>
          <Image
            className={`invisible absolute -bottom-16 xl:visible ${
              !props?.wrapContainer ? 'left-80 2xl:left-96' : 'left-80'
            }`}
            src="/arrow-line-reverse.png"
            height={200}
            width={200}
            alt="arrow line"
          />
        </div>
        <div className="mt-4 p-6 text-center">
          <span className="mb-3 inline-block rounded-2xl bg-primary-50 p-6">
            <Image
              src="/place-bids-and-monitor.png"
              height={50}
              width={50}
              alt="browse and select a vehicle"
            />
          </span>
          <h3 className="mb-2 text-center text-lg font-semibold">
            3. Place Bids and Monitor
          </h3>
          <p className="text-center text-xs font-semibold text-gray-700 lg:px-12">
            Bid confidently on your chosen car and stay updated throughout the
            auction process to secure the best deal.
          </p>
        </div>
      </div>

      <div className="mb-8 flex justify-center gap-x-6 px-1">
        <Link
          href="/stock-list"
          className="flex w-36 items-center justify-center rounded bg-primary-700 px-3 py-1 text-center font-bold text-white hover:bg-pink-900 xl:w-44 xl:px-8 xl:py-4"
        >
          Start Exploring
        </Link>
      </div>

      {props?.externalLinks && (
        <div className="px-4 lg:px-0">
          <div className="grid w-full shrink-0 grid-cols-1 gap-4 rounded-2xl bg-primary-600 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
            <ExternalLinkCard
              title="Auction"
              media="/auction.png"
              link="https://auction.pqsjapan.jp/manager/?p=project/register"
            />
            <ExternalLinkCard
              title="Vessel Schedule"
              media="/vessel-schedule.png"
              link="http://www.spx-1982.co.jp/doc/sailing_schedule.pdf"
            />
            <ExternalLinkCard
              title="Vessel Tracking"
              media="/vessel-tracking.png"
              link="https://www.myshiptracking.com/"
            />
            <ExternalLinkCard
              title="Manugacture Year Check"
              media="/manugacture-year-check.png"
              link="http://oliac.com/autos/"
            />
          </div>
        </div>
      )}
    </div>
  )
}
