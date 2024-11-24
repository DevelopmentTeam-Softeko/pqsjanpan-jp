'use client'

import { InboxIcon, UserIcon } from '@heroicons/react/20/solid'
import React from 'react'

import { getAllSessionStorage } from '@/lib/sessionStorage'

interface Props {
  customerId: number
  customerBalance: any
  customerDetails: any
  typeId: number
}
export const CustomerBalance = (props: Props) => {
  const { customerId, customerDetails, customerBalance, typeId } = props
  if (typeId === 2) {
    return (
      <>
        <span
          className={`flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white`}
        >
          <UserIcon width={20} height={20} />
          <span className="ml-2">{customerDetails?.name}</span>
        </span>
        <span
          className={`flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white`}
        >
          <InboxIcon width={20} height={20} />
          <span className="ml-2">{customerDetails?.email}</span>
        </span>
      </>
    )
  }
  if (props?.typeId === 3) {
    const allSessionStorage = getAllSessionStorage()
    // 1000Cars Co., Ltd.  Customer ID: 1239 1000carsbd@gmail.com Deposit: USD 20,000.00 Deposit: JPY 0 Deposit: AUD 0.00 Credit: USD 151,180.95 Credit: JPY 0 Credit: AUD 0.00
    const menu = [
      [
        ...(customerDetails?.name
          ? [
              {
                label: 'Name',
                value: `${customerDetails?.name} (${customerId})`,
              },
            ]
          : []),
        ...(customerDetails?.email
          ? [
              {
                label: 'Email',
                value: customerDetails?.email,
              },
            ]
          : []),
      ],
      [
        {
          label: 'Deposit',
          value: `USD ${Number(
            customerBalance?.actual_balance_usd || 0,
          ).toFixed(2)}`,
        },
        {
          label: 'Credit',
          value: `USD ${Number(allSessionStorage?.totalCreditUSD || 0).toFixed(
            2,
          )}`,
        },
      ],
      [
        {
          label: 'Deposit',
          value: `JPY ${Number(
            customerBalance?.actual_balance_jpy || 0,
          ).toFixed(2)}`,
        },
        {
          label: 'Credit',
          value: `JPY ${Number(allSessionStorage?.totalCreditJPY || 0).toFixed(
            2,
          )}`,
        },
      ],
      [
        {
          label: 'Deposit',
          value: `AUD ${Number(
            customerBalance?.actual_balance_aud || 0,
          ).toFixed(2)}`,
        },
        {
          label: 'Credit',
          value: `AUD ${Number(allSessionStorage?.totalCreditAUD || 0).toFixed(
            2,
          )}`,
        },
      ],
    ]
    return (
      <>
        {menu?.map((ele, index) => {
          return (
            <span
              key={`parent_span_${index}`}
              className={`flex flex-col rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white`}
            >
              {ele?.map((tile, tIndex) => (
                <span key={`${tIndex}_${tile?.label}`}>
                  <span className="flex">
                    <span className="ml-2">{tile?.label}:</span>
                    <span className="ml-2">{tile?.value}</span>
                  </span>
                </span>
              ))}
            </span>
          )
        })}
      </>
    )
  }
  return null
}
