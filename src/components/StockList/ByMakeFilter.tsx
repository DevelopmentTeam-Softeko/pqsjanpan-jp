'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

import { getIconName } from '@/utils'

interface CarManufacturer {
  id: number
  label: string
  value: string
  count: number
}

interface ByMakeFilterProps {
  makerData: CarManufacturer[]
  isThirdParty?: boolean
}

export default function ByMakeFilter(props: ByMakeFilterProps) {
  const [hoveredItem, setHoveredItem] = useState<CarManufacturer | null>(null)
  const [hoverSingleItem, setHoverSingleItem] = useState<any>()

  const data = useMemo(() => {
    return props?.makerData
      ?.sort((a, b) => (b?.id || 0) - (a?.id || 0))
      ?.slice(0, 10)
  }, [props?.makerData])

  useEffect(() => {
    if (hoveredItem) {
      const fetData = async () => {
        try {
          const url = `https://pqsjapanapi.azurewebsites.net/api/vehicle/getAllStockModelCount/${hoveredItem?.value}`
          const { data: hoverData } = await axios.get(url)
          setHoverSingleItem(hoverData)
        } catch (error) {
          // Handle the error, log it, or display an alert to the user
          console.error('Error fetching hover data:', error)
          // Optional: You can set an error state if needed
          // setErrorState('Failed to load data')
        } finally {
          // Any final cleanup or actions
          console.log('API request completed')
        }
      }
      fetData()
    }
  }, [hoveredItem])

  return (
    <div className="mb-10 rounded-lg bg-white">
      <div className="flex items-center justify-between rounded-t-lg bg-gray-800 p-4">
        <h2 className="text-white">Search by Make</h2>
      </div>
      <div className="rounded-b-lg border border-solid border-gray-300 ">
        <ul className="divide-y divide-gray-200">
          {data?.map((carManu) => {
            const link = `${
              props?.isThirdParty ? '/all-stock' : '/stock-list'
            }?make=${carManu?.value}`

            return (
              <li
                key={carManu?.label}
                className="relative items-center p-4"
                onMouseEnter={() => setHoveredItem(carManu)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={link}
                  className="flex w-full justify-between rounded-md hover:bg-gray-100"
                  onClick={() => {
                    window.location.href = link
                  }}
                >
                  <span className="flex flex-row items-center">
                    <Image
                      className="mr-4 rounded-full"
                      width={30}
                      height={30}
                      src={`https://vl.imgix.net/img/${getIconName(
                        carManu?.label,
                      )}-logo.png?w=100&h=100`}
                      alt={carManu?.label}
                    />
                    <span className="text-xs text-gray-900">
                      {carManu?.label}
                    </span>
                  </span>
                  {carManu?.count && (
                    <span className="inline-block rounded-md bg-gray-400 p-2 text-xs">
                      {carManu?.count}
                    </span>
                  )}
                </Link>
                {/* Modal-like popup on hover */}
                {hoveredItem === carManu && hoverSingleItem && (
                  <div className="absolute left-full top-0 z-10 hidden h-[500px] min-w-[200px] overflow-y-auto rounded-md border border-gray-300 bg-white p-4 shadow-lg sm:block">
                    <ul>
                      {hoverSingleItem?.data?.data?.map((item: any) => {
                        return (
                          <li key={item.Id}>
                            <Link
                              className="flex justify-between border-b p-2 text-xs text-gray-900"
                              href={`${link}&model=${item.Id}`}
                              onClick={() => {
                                window.location.href = `${link}&model=${item.Id}`
                              }}
                            >
                              <span>{item.Name}</span>
                              <span>({item.TotalCount})</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
