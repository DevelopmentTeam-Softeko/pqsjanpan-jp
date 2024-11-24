'use client'

import { InboxIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const ContactSection = () => {
  return (
    <section className="bg-primary-600">
      <div className="container mx-auto flex flex-col items-center justify-between px-10 py-8 lg:flex-row">
        <h4 className="text-center text-lg font-semibold uppercase text-white lg:mr-10 lg:text-left lg:text-2xl">
          Have A Question? Feel Free To Ask...
        </h4>
        <div className="mt-6 flex flex-col items-center md:flex-row lg:mt-0">
          <Link
            className="flex items-center gap-x-2 md:mr-10"
            href="tel:+818046160505"
          >
            <PhoneIcon className="w-8 rounded-full border-2 text-white" />
            <h4 className="font-semibold lg:text-xl">+81 80 4616 0505</h4>
          </Link>
          <Link
            href="mailto:top@pqsjapan.jp"
            className="mt-3 flex items-center justify-center gap-x-2 rounded bg-white px-3 py-2 text-center font-bold text-black md:mt-0 lg:text-left"
          >
            <InboxIcon className="w-8" />
            Feedback Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
