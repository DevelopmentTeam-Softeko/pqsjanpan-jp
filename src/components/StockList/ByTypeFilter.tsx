'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { getSvgFileName } from '@/utils'

interface ByTypeFilterProps {
  bodyTypeData: any
  isThirdParty?: boolean
}

export default function ByTypeFilter(props: ByTypeFilterProps) {
  const [showAll, setShowAll] = useState(false)

  // Limit the displayed items to the first 20 if showAll is false
  const displayedItems = showAll
    ? props.bodyTypeData
    : props.bodyTypeData.slice(0, 10)

  return (
    <div className="mb-10 rounded-lg bg-white">
      <div className="flex items-center justify-between rounded-t-lg bg-gray-800 p-4">
        <h2 className="text-white">Shop By Type</h2>
      </div>
      <div className="rounded-b-lg border border-solid border-gray-300">
        <ul className="divide-y divide-gray-200">
          {displayedItems?.map((vehicleType: any) => {
            const link = `${
              props?.isThirdParty ? '/all-stock' : '/stock-list'
            }?body=${vehicleType?.value}`

            return (
              <li
                className="relative items-center p-4"
                key={vehicleType?.label}
              >
                <Link
                  href={link}
                  className="flex justify-between"
                  onClick={() => {
                    window.location.href = link
                  }}
                >
                  <span className="flex flex-row items-center">
                    <Image
                      className="mr-4 rounded-full"
                      width={30}
                      height={30}
                      src={getSvgFileName(
                        vehicleType?.label,
                        '/svg/vehicle-type',
                      )}
                      alt={vehicleType?.label}
                    />
                    <span className="text-xs text-gray-900">
                      {vehicleType?.label}
                    </span>
                  </span>
                  {vehicleType?.count && (
                    <span className="inline-block rounded-md bg-gray-400 p-2 text-xs">
                      {vehicleType?.count}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Toggle Button for See All / Show Less */}
        {props.bodyTypeData.length > 10 && (
          <div className="p-4 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-500 hover:underline"
            >
              {showAll ? 'Show Less' : 'See All'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
