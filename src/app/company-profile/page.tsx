import type { Metadata } from 'next'
import Image from 'next/image'

import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  ...generateSEOMeta('Company Profile'),
}
export default function CompanyProfile() {
  return (
    <div>
      <Breadcrumb
        items={[{ title: 'Company Profile', uri: '/company-profile' }]}
      />
      <section className="container mx-auto w-full gap-8 px-6 py-5 lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full p-2 lg:w-6/12 lg:p-0">
            <Image
              className="w-full"
              alt="Global Excellence through Quality of Service"
              src="/company-banner.jpg"
              width={600}
              height={600}
            />
          </div>
          <div className="w-full p-2 lg:w-6/12 lg:p-0">
            <h1 className="mb-5 text-2xl lg:text-5xl">
              Global Excellence through Quality of Service
            </h1>
            <p className="text-lg leading-8 text-gray-700">
              For decades, Japanese cars have been renowned worldwide for their
              quality and reliability. They are still in high demand across the
              globe this day.As one of many car exporters in business today, we
              at PQS Japan strive to provide you with the most outstanding
              service to be found anywhere.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 p-2 lg:grid-cols-3 lg:p-0">
          <div className="flex items-center justify-center rounded-lg p-6 text-center shadow-lg">
            <p className="text-lg leading-8 text-gray-700">
              We have implemented a new style of business in which we take care
              of all the necessary steps in bringing your car from Japan to your
              country, from the buying in of vehicles to the arranging of their
              shipping.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-lg p-6 text-center shadow-lg">
            <p className="text-lg leading-8 text-gray-700">
              <p>
                Every member of our staff works together as a team in order to
                make this possible. We take pride in making sure that our staff
                is always friendly and knowledgeable in their field of work.
              </p>
              <p>
                It is our desire to continue building a good foundation of trust
                with each of our clients and with every individual we meet, and
                together achieve success.
              </p>
            </p>
          </div>
          <div className="flex items-center justify-center rounded-lg p-6 text-center shadow-lg">
            <p className="text-lg leading-8 text-gray-700">
              <p>
                PQS Japan uses a number of suppliers and sources to locate the
                best quality cars for our customers. Not only do we purchase
                directly from Japanese used car auctions, but we also have
                strong ties with local used cars sales and other domestic
                sellers.
              </p>
              <p>
                Due to our long term relationship with these suppliers and the
                quantity of cars we purchase on a regular basis, we have
                received a number of awards as a Thank You, from our suppliers.
              </p>
            </p>
          </div>
        </div>
        <div className="my-40 flex flex-col items-center justify-between p-2 lg:flex-row lg:p-0">
          <div className="w-full lg:w-6/12 ">
            <h1 className="mb-5 text-3xl">WHY PQS JAPAN ?</h1>
            <p className="text-lg leading-8 text-gray-700">
              Ever since its foundation in 2007, PQS Japan has been delivering
              automobiles to numerous clients worldwide, centering our
              activities in three main areas: the Caribbeans, Africa, and
              Russia. We have been building trustful relationships with all of
              our customers and have been steadily increasing our monthly output
              of vehicles.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              Currently, we export over 7,000 units every month. In the midst of
              this success, our most important commitment has always been to
              handle each and every vehicle with care, seeing it from the
              customers point of view.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6 lg:ml-20 lg:w-6/12">
            <div>
              <h3 className="text-5xl">Speed</h3>
              <p className="text-base font-bold text-gray-700">
                Fast delivery to customers.
              </p>
            </div>
            <div>
              <h3 className="text-5xl">Reliability</h3>
              <p className="text-base font-bold text-gray-700">
                Dependable and consistent service.
              </p>
            </div>
            <div>
              <h3 className="text-5xl">Quality</h3>
              <p className="text-base font-bold text-gray-700">
                High standard of excellence.
              </p>
            </div>
            <div>
              <h3 className="text-5xl">Affordability</h3>
              <p className="text-base font-bold text-gray-700">
                Reasonably priced products or services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
