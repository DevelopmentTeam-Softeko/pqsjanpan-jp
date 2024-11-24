'use client'

import Image from 'next/image'
import React from 'react'

import { CustomerBalance } from '@/components/Common/CustomerBalance'
import HamburgerMenu from '@/components/ContactBand/HamburgerMenu'
import ProfileMenu from '@/components/ContactBand/ProfileMenu'
import { CONTACT_TYPE } from '@/config/staticData'
import { useCustomerData } from '@/hooks/useCustomerData'
import { getCustomerId } from '@/lib/clientAuth'

export default function ContactBand() {
  const customerId: any = getCustomerId()
  const { customerBalance, customerDetails } = useCustomerData(customerId)

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto w-full px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Image
              className="block h-8 w-auto"
              src="/logo.png"
              width={142}
              height={35}
              alt="Your Company"
            />
          </div>
          <div className="flex flex-1 items-stretch justify-center">
            <div className="hidden items-center justify-between xl:block">
              <div className="flex space-x-4">
                <CustomerBalance
                  typeId={1} // Replace with actual typeId logic if necessary
                  customerId={customerId}
                  customerBalance={customerBalance}
                  customerDetails={customerDetails}
                />
                {!customerId &&
                  CONTACT_TYPE.map((ele) => (
                    <a
                      key={ele?.text}
                      href={ele?.link}
                      target="_blank"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
                    >
                      <Image
                        src={ele?.icon}
                        alt={ele?.text}
                        width={20}
                        height={20}
                      />
                      <span className="ml-2">{ele?.text}</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative hidden lg:block">
              <ProfileMenu customerId={customerId} />
            </div>
            <HamburgerMenu
              typeId={1} // Replace with actual typeId logic if necessary
              customerId={customerId}
              customerBalance={customerBalance}
              customerDetails={customerDetails}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
