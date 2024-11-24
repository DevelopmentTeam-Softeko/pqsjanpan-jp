import { HomeIcon, InboxIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { getBodyTypeList, getMakerList, getTTBRate } from '@/api/apiDef'
import ContactSection from '@/components/Common/ContactSection'
import { CONTACT_TYPE } from '@/config/staticData'

import COUNTRY_DATA from './Home/ExportToCountry/countryData.json'

// const USEFUL_LINKS = [
//   {
//     title: 'FAQ',
//     link: '#',
//   },
//   {
//     title: 'How to Buy',
//     link: '#',
//   },
//   {
//     title: 'Auto Parts',
//     link: '#',
//   },
//   {
//     title: 'Shipping',
//     link: '#',
//   },
// ]

const PAYMENT_METHODS = [
  {
    title: 'visa',
    image: '/svg/visa_icon.svg',
  },
  {
    title: 'mastercard',
    image: '/svg/mastercard.svg',
  },
  {
    title: 'paypal',
    image: '/svg/paypal.svg',
  },
  {
    title: 'bank transfer',
    image: '/svg/bank-transfer.svg',
  },
  {
    title: 'smbc bank',
    image: '/svg/smbc-logo.svg',
  },
  {
    title: 'equity',
    image: '/svg/equity_bank.svg',
  },
]
interface Props {
  variant: 'sm' | 'lg'
}
const ContactList = (props: Props) => {
  const size = props?.variant === 'sm' ? 20 : 30
  return (
    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
      {CONTACT_TYPE?.filter((ele) => ele?.showInFooter).map((contactType) => (
        <a
          key={contactType?.text}
          href={contactType?.link}
          className="text-gray-500 hover:text-gray-900"
        >
          <Image
            src={contactType?.icon}
            alt={contactType?.text}
            width={size}
            height={size}
          />
          <span className="sr-only">{contactType?.text}</span>
        </a>
      ))}
    </div>
  )
}

type Maker = {
  label: string
  value: number
  count: number
}

const priceRanges = [
  'Under $500',
  '$500 - $1,000',
  '$1,000 - $1,500',
  '$1,500 - $2,000',
  '$2,000 - $3,000',
  '$3,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $15,000',
  '$15,000 - $20,000',
]

const menuLinks = [
  { label: 'Home', link: '/' },
  { label: 'Order Stock', link: '/stock-list' },
  { label: 'All Stock', link: '/all-stock' },
  { label: 'Auto Parts', link: '/auto-parts' },
  { label: 'How To Buy', link: '/how-to-buy' },
  { label: 'Payment', link: '/payment-method' },
  { label: 'Shipping', link: '/shipping-method' },
  { label: 'FAQ', link: '/faq' },
  { label: 'Company Profile', link: '/company-profile' },
  { label: 'Contact Us', link: '/contact-us' },
  { label: 'Login', link: '/auth/sign-in' },
  { label: 'Register', link: '/auth/sign-up' },
]

export default async function Footer() {
  const year = new Date().getFullYear()
  // const uiHost = process.env.UI_HOSTNAME
  const makerData = await getMakerList(1)
  const bodyTypeData = await getBodyTypeList(1)
  const ttbRate = await getTTBRate()

  // Slice the data to show only 15 initially
  const limitedData = makerData.slice(0, 15)
  const limitedBodyTypeData = bodyTypeData.slice(0, 6)

  // Calculate the total count of all makers
  const totalCount = makerData.reduce(
    (acc: number, maker: Maker) => acc + maker.count,
    0,
  )

  return (
    <>
      <ContactSection />
      <footer className="bg-gray-800 p-2 lg:p-0" id="footer ">
        <div className="container mx-auto w-full pt-2 sm:pt-5">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-5 sm:gap-6 sm:text-left">
            {/* MAKER DATA  */}
            <div className="flex flex-col">
              <h3 className="mb-2 text-lg text-white">MAKE</h3>
              <ul>
                {limitedData?.map((maker: Maker) => (
                  <li key={maker?.label}>
                    <Link
                      href={`/stock-list?make=${maker.value}`}
                      className="text-sm font-normal text-white"
                    >
                      {maker?.label} ({maker?.count})
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/stock-list" className="mt-2 text-white">
                All ({totalCount})
              </Link>
            </div>

            {/* BODY DATA  */}
            <div className="flex flex-col">
              <div>
                <h3 className="mb-2 text-lg text-white">BODY TYPE</h3>
                <ul>
                  {limitedBodyTypeData?.map((maker: Maker) => (
                    <li key={maker?.label}>
                      <Link
                        href={`/stock-list?body=${maker.value}`}
                        className="text-sm font-normal text-white"
                      >
                        {maker?.label} ({maker?.count})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <h3 className="mb-2 text-lg text-white">CAR PRICE</h3>
                <ul>
                  {priceRanges?.map((car: string, index: number) => (
                    <li key={index}>
                      <Link
                        href={'#'}
                        className="text-sm font-normal text-white"
                      >
                        {car}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* LOCAL INFO */}
            <div className="flex flex-col items-center justify-center sm:col-span-2 sm:justify-start">
              <div className="">
                <h3 className="mb-2 text-lg text-white">LOCAL INFO</h3>

                <div className="ml-5 md:ml-0">
                  <ul className="grid grid-cols-1 items-center justify-end gap-x-3 md:grid-cols-2 md:items-center md:justify-center">
                    {COUNTRY_DATA.slice(0, 20).map((country) => (
                      <li
                        key={country.code}
                        className="flex items-center gap-1 rounded"
                      >
                        <Image
                          className=" rounded"
                          src={`https://flagsapi.com/${country?.code}/flat/32.png`}
                          alt={country?.name}
                          width={30}
                          height={30}
                        />
                        <span className="text-sm text-white">
                          {country.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-left text-sm text-white sm:mt-5">
                    <p>TTB Rate : {ttbRate?.data?.ttb_rate}</p>
                    <p className="mt-2">
                      TTB Date :{' '}
                      {new Date(
                        ttbRate?.data?.ttb_rate_date || '',
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MENU */}
            <div className="flex flex-col">
              <h3 className="mb-2 text-lg text-white">MENU</h3>
              <ul>
                {menuLinks?.map((menu, index: number) => (
                  <li key={index}>
                    <Link className="text-sm text-white" href={menu.link}>
                      {menu?.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div>
                <h2 className="mt-5 text-lg uppercase text-white">
                  PAYMENT METHOD
                </h2>
                <ul className="grid grid-cols-3 gap-2 ">
                  {PAYMENT_METHODS.map((paymentMethod) => (
                    <li key={paymentMethod?.title}>
                      <Image
                        width={30}
                        className="mx-auto sm:mx-0"
                        height={30}
                        src={paymentMethod.image}
                        alt={paymentMethod.title}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-5">
            <li>
              <span className="flex items-center text-white">
                <HomeIcon className="h-3 sm:h-5 sm:w-5" />
                <span className="ml-1 text-xs">
                  124-0024, Tokyo-to Katsushika-ku, Shinkoiwa 1-9-8, Japan
                </span>
              </span>
            </li>
            <li>
              <Link
                href="tel:+818046160505"
                className="flex items-center text-white"
              >
                <PhoneIcon className="h-3 sm:h-5 sm:w-5" />
                <span className="ml-2 text-sm">+81 80 4616 0505</span>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:top@pqsjapan.jp"
                className="flex items-center text-white"
              >
                <InboxIcon className="h-3 sm:h-5 sm:w-5" />
                <span className="ml-2 text-sm">top@pqsjapan.jp</span>
              </Link>
            </li>
          </ul>

          <hr className="my-3 border-solid border-gray-200 sm:mx-auto lg:my-6" />

          <div className="justify-center pb-5 sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © Copyright {year}{' '}
              <a href="https://www.pqsjapan.jp" className="hover:underline">
                PQS JAPAN CO LTD
              </a>
              . All Rights Reserved.
            </span>
            <div className="">
              <ContactList variant={'sm'} />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
