import type { Metadata } from 'next'

import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'
import { FAQ_DATA } from '@/config/staticData'

export const metadata: Metadata = {
  ...generateSEOMeta('FAQ'),
}
export default function CompanyProfile() {
  return (
    <div className="p-2 lg:p-0">
      <Breadcrumb items={[{ title: 'FAQ', uri: '/faq' }]} />
      <section className="container w-full gap-8 px-6 py-5 lg:px-8">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <div className="border-t border-solid border-gray-200 pt-8 text-left">
          {FAQ_DATA?.map((faq) => (
            <div key={faq?.category} className="mb-10">
              <h2 className="mb-4 text-2xl tracking-tight text-gray-900">
                {faq?.category}
              </h2>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {faq?.items?.map((item) => (
                  <div key={item?.title}>
                    <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900">
                      {item?.title}
                    </h3>
                    <p className="text-gray-500">{item?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
