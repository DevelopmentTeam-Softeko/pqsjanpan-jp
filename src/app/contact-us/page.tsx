import type { Metadata } from 'next'

import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'
import ContactUsForm from '@/components/ContactUs/Form'

export const metadata: Metadata = {
  ...generateSEOMeta('Contact Us'),
}
export default function ContactUs() {
  return (
    <div>
      <Breadcrumb items={[{ title: 'Contact Us', uri: '/contact-us' }]} />
      <section className="container mx-auto flex w-full flex-col gap-8 px-6 py-5 lg:flex-row lg:px-8 ">
        <aside className="w-full p-2 lg:w-4/12 lg:p-0">
          <h3 className="mb-4 text-xl">Points of contact</h3>
          <div className="mb-4">
            <h4 className="mb-1 text-base">PQS Japan Co. Ltd.</h4>
            <address className="text-sm italic text-gray-600">
              {' '}
              124-0024, Tokyo-to Katsushika-ku, Shinkoiwa 1-9-8, Japan
            </address>
          </div>
          <div className="mb-4">
            <h6 className="mb-1 text-base">Mobile</h6>
            <p className="text-sm">
              <a href="">+81 80 4616 0505</a>, <a href="">+81 90 5002 9024</a>
            </p>
          </div>
          <div className="mb-4">
            <h6 className="mb-1 text-base">TEL</h6>
            <p className="text-sm">
              <a href="">+81 80 4616 0505</a>
            </p>
          </div>
          <div className="mb-4">
            <h6 className="mb-1 text-base">Fax</h6>
            <p className="text-sm">+81 03 4288 8805</p>
          </div>
          <div className="mb-4">
            <h6 className="mb-1 text-base">Email</h6>
            <p className="text-sm">
              <a href="">top@pqsjapan.jp</a>
            </p>
          </div>
          <div className="mb-4">
            <h6 className="mb-1 text-base">Business Hours</h6>
            <p className="text-sm">10:00AM ~ 7:00PM</p>
            <p className="text-sm italic text-gray-600">
              (Saturday to Thursday except National Holidays)
            </p>
          </div>
        </aside>
        <main className="w-full p-2 lg:w-8/12 lg:p-0">
          <ContactUsForm />
        </main>
      </section>
    </div>
  )
}
