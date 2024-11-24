import type { Metadata } from 'next'
import Image from 'next/image'

import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  ...generateSEOMeta('Shipping Method'),
}
export default function CompanyProfile() {
  return (
    <div className="p-2 lg:p-0">
      <Breadcrumb
        items={[{ title: 'Shipping Method', uri: '/shipping-method' }]}
      />
      <section className="container mx-auto w-full gap-8 py-5 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-lg border border-solid border-gray-300 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              RORO (Roll-on/Roll-off)
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="rounded-lg border border-solid border-gray-200 bg-white shadow">
              <Image
                width={355}
                height={224}
                className="w-full rounded-lg"
                src="/shipping-images1.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow">
              <Image
                width={355}
                height={224}
                className="w-full rounded-lg"
                src="/shipping-images2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow">
              <Image
                width={355}
                height={224}
                className="w-full rounded-lg"
                src="/shipping-images3.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg border border-gray-200 bg-white shadow">
              <Image
                width={355}
                height={224}
                className="w-full rounded-lg"
                src="/shipping-images4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mb-10 rounded-lg border border-gray-300 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              Full Container Loading
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1">
            <div>
              <Image
                width={1422}
                height={390}
                className="w-full"
                src="/shipping-icon.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white shadow">
            <Image
              className="w-full rounded-t-lg"
              src="/shipping-images7.jpg"
              alt=""
              width={348}
              height={232}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                LCL (Less Container Load)
              </h5>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white shadow">
            <Image
              className="w-full rounded-t-lg"
              src="/shipping-images8.jpg"
              alt=""
              width={348}
              height={232}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                DHL Air Cargo
              </h5>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white shadow">
            <Image
              className="w-full rounded-t-lg"
              src="/shipping-images9.jpg"
              alt=""
              width={348}
              height={232}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Fedex Air Cargo
              </h5>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white shadow">
            <Image
              className="w-full rounded-t-lg"
              src="/shipping-images10.jpg"
              alt=""
              width={348}
              height={232}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                EMS Air Cargo
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
