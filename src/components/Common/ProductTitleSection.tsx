'use client'

import { ShieldCheckIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import InquiryButton from '@/components/Common/InquiryButton'

interface Props {
  id: number
  title: string
  subtitle: string
  status: string
  fob: number
  vehicle_status_id: number
  registrationYear: string
  image: string
  hasShadow?: boolean
}
export default React.memo(function TitleSection({
  id,
  title,
  fob,
  vehicle_status_id,
  registrationYear,
  status,
  subtitle,
  image,
  hasShadow,
}: Props) {
  const actualTitle = `${title} ${registrationYear} for Sale`
  return (
    <section className="relative z-10 mb-8 w-full">
      <div
        className={classNames('w-full rounded-lg bg-white p-6 sm:rounded-lg', {
          'shadow-lg': hasShadow,
        })}
      >
        <h1 className="mb-2 text-center text-2xl">{actualTitle}</h1>
        <p className="text-center text-base">{subtitle}</p>
        <div className="mb-2 flex flex-row justify-around text-center">
          <span className="inline-flex items-center justify-center p-2 font-bold text-white">
            <ShieldCheckIcon className="mr-2 h-8 w-8 text-green-500" />
            <span className="text-lg text-green-500">{status}</span>
          </span>
          <span className="inline-flex items-center justify-center rounded-lg p-2 font-bold text-white">
            <span className="text-lg text-green-500">
              {vehicle_status_id === 1 ? `FOB: US $${fob}` : '-'}
            </span>
          </span>
        </div>
        <div className="flex flex-col justify-between text-center xl:flex-row">
          <div className="mb-2 w-full xl:mb-0 xl:w-1/2 xl:pr-2">
            <InquiryButton
              variant="default"
              label="E-mail For Price"
              product={{ vehicle: actualTitle, id, image }}
            />
          </div>
          <div className="w-full xl:w-1/2 xl:pl-2">
            <Link
              href="https://api.whatsapp.com/send?phone=818046160505"
              target="_blank"
              className="inline-flex w-full items-center justify-center rounded-full bg-green-600 p-2 text-base text-white hover:bg-green-900"
            >
              <Image
                className="mr-3"
                src="/svg/whatsapp.svg"
                alt="whatsApp"
                width={18}
                height={18}
              />
              WhatsApp Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
})
