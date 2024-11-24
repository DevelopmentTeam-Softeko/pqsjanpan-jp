import type { Metadata } from 'next'
import React from 'react'

import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'
import FileUploader from '@/components/Common/FileUploader'
import Input from '@/components/Common/Input'
import Select from '@/components/Common/Select'
import Textarea from '@/components/Common/Textarea'

export const metadata: Metadata = {
  ...generateSEOMeta('Auto Parts'),
}
export default function AutoParts() {
  return (
    <div className="p-2 lg:p-0">
      <Breadcrumb items={[{ title: 'Auto Parts', uri: '/auto-parts' }]} />
      <section className="container mx-auto w-full gap-8 px-6 py-5 lg:px-8">
        <form>
          <div>
            <div className="flex flex-col gap-16 border-b border-solid border-gray-900/10 py-12 lg:flex-row">
              <div className="w-full lg:w-3/12">
                <h2 className="mb-5 text-2xl font-semibold leading-7 text-gray-900">
                  Vehicle Info
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  A Vehicle Information form is a document that contains details
                  about a vehicle, such as its make, model, year, engine type,
                  fuel type, mileage, and VIN (Vehicle Identification Number).
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-6 lg:w-9/12">
                <Select options={[]} placeholder={'Maker'} />
                <Select options={[]} placeholder={'Model Name'} />
                <Select options={[]} placeholder={'Production Year'} />
                <Select options={[]} placeholder={'Transmission Type'} />
                <Input
                  type={'text'}
                  placeholder={'Frame / Vin/ Chassis Number'}
                />
                <Input type={'text'} placeholder={'Parts Name'} />
                <Input type={'text'} placeholder={'Parts Name'} />
                <Input type={'text'} placeholder={'Parts Number'} />
                <Textarea
                  placeholder={'Your Message (Optional)'}
                  classNames="col-span-2"
                />
                <FileUploader />
              </div>
            </div>
            <div className="flex flex-col gap-16 border-b border-solid border-gray-900/10 py-12 lg:flex-row">
              <div className="w-full lg:w-3/12">
                <h2 className="mb-5 text-2xl font-semibold leading-7 text-gray-900">
                  Shipping Address
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  A Vehicle Information form is a document that contains details
                  about a vehicle, such as its make, model, year, engine type,
                  fuel type, mileage, and VIN (Vehicle Identification Number).
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-6 lg:w-9/12">
                <Input type={'text'} placeholder={'Name'} />
                <Input type={'text'} placeholder={'Address'} />
                <Input type={'text'} placeholder={'City'} />
                <Input type={'text'} placeholder={'Nearest Port'} />
                <Select options={[]} placeholder={'Country'} />
                <Input type={'text'} placeholder={'Mobile No.'} />
                <Input type={'text'} placeholder={'E-mail Address'} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-b border-gray-900/10 py-12">
              <div className="mb-10">
                <input
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Keep me updated with News, special offers and more.
                  (Unsubscribe at any time)
                </label>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 font-bold text-white hover:bg-primary-900"
              >
                Submit
              </button>
            </div>
            <div className="flex flex-col gap-6 border-b border-gray-900/10 py-12 lg:flex-row lg:gap-16">
              <div className="w-full lg:w-3/12">
                <h2 className="mb-5 text-2xl font-semibold leading-7 text-gray-900">
                  International shipments
                </h2>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 lg:w-9/12">
                <ul className="list-inside list-disc space-y-1 text-gray-500">
                  <li className="text-justify">
                    PQS JAPAN cannot supply windshields or side or rear windows.
                    We apologise for any inconvenience.
                  </li>
                  <li className="text-justify">
                    Please also note that shock absorbers can be delivered by
                    Fedex only
                  </li>
                  <li className="text-justify">
                    Stock availability changes rapidly. Even if stock is
                    confirmed available it can sell out very quickly during the
                    time the stock was confirmed, and before payment is made and
                    orders are placed with the supplier. Please be aware that in
                    the event stock sells out after having paid for an order,
                    PQS JAPAN Trading will refund the price of the cancelled
                    parts. For orders containing a single cancelled part, or all
                    parts are cancelled in an order, PQS JAPAN Trading will
                    refund the order in full.
                  </li>
                  <li className="text-justify">
                    Orders that contain delayed parts are withheld until all
                    parts are delivered and prepared for shipping. Orders can be
                    sent in two different shipments at extra charge. Please
                    consult your sales manager to arrange separate shipping for
                    delayed orders.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
