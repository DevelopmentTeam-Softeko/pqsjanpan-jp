import type { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  ...generateSEOMeta('Payment Method'),
}
export default function AutoParts() {
  return (
    <div className="p-2 lg:p-0">
      <Breadcrumb
        items={[{ title: 'Payment Method', uri: '/payment-method' }]}
      />
      <section className="container mx-auto w-full gap-8 px-6 py-5 lg:px-8">
        <div>
          <div className="flex flex-col gap-16 border-b border-solid border-gray-900/10 py-12 lg:flex-row">
            <div className="w-10/12 lg:w-3/12">
              <h2 className="mb-5 text-2xl font-semibold leading-7 text-gray-900">
                Bank Transfer
              </h2>
              <Image
                className="w-full"
                src="/smbc-logo.jpg"
                width={352}
                height={96}
                alt="smbc"
              />
            </div>
            <div className="w-full lg:w-9/12">
              <table className="w-full rounded-lg text-left text-sm text-gray-500 shadow">
                <tbody className="rounded-lg">
                  <tr className=" border-b border-solid bg-white hover:bg-gray-50">
                    <td className="p-4">JAPAN BANK NAME </td>
                    <td className="px-6 py-4 text-gray-900">
                      SUMITOMO MITSUI BANKING CORPORATION
                    </td>
                  </tr>
                  <tr className=" border-b border-solid bg-white hover:bg-gray-50">
                    <td className="p-4">BANK SWIFT CODE </td>
                    <td className="px-6 py-4 text-gray-900">SMBCJPJTXXX</td>
                  </tr>
                  <tr className=" border-b border-solid bg-white hover:bg-gray-50">
                    <td className="p-4">BRANCH NAME </td>
                    <td className="px-6 py-4 text-gray-900">
                      SHINKOIWA BRANCH
                    </td>
                  </tr>
                  <tr className=" border-b bg-white hover:bg-gray-50">
                    <td className="p-4">BRANCH CODE</td>
                    <td className="px-6 py-4 text-gray-900">232</td>
                  </tr>
                  <tr className=" border-b bg-white hover:bg-gray-50">
                    <td className="p-4">BRANCH ADDRESS </td>
                    <td className="px-6 py-4 text-gray-900">
                      〒124-0024, TOKYO-TO KATSUSHIKA-KU, SHINKOIWA 1-48-18,
                      JAPAN
                    </td>
                  </tr>
                  <tr className=" border-b bg-white hover:bg-gray-50">
                    <td className="p-4">ACCOUNT NUMBER </td>
                    <td className="px-6 py-4 text-gray-900">232-7668222</td>
                  </tr>
                  <tr className=" border-b bg-white hover:bg-gray-50">
                    <td className="p-4">
                      BENEFICIARY/ ACCOUNT HOLDER&apos;S NAME{' '}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      PQS JAPAN CO., LTD.
                    </td>
                  </tr>
                  <tr className=" border-b bg-white hover:bg-gray-50">
                    <td className="p-4">
                      BENEFICIARY/ ACCOUNT HOLDER&apos;S ADDRESS
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      〒124-0024, TOKYO-TO KATSUSHIKA-KU, SHINKOIWA 1-48-16,
                      JAPAN
                    </td>
                  </tr>
                  <tr className="border-b bg-white hover:bg-gray-50">
                    <td className="p-4">
                      BENEFICIARY/ ACCOUNT HOLDER&apos;S CONTACTS
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      〒124-0024, TOKYO-TO KATSUSHIKA-KU, SHINKOIWA 1-48-16,
                      JAPAN
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col gap-16 border-b border-gray-900/10 py-12 lg:flex-row">
            <div className="w-full lg:w-3/12">
              <h2 className="mb-5 text-2xl font-semibold leading-7 text-gray-900">
                Paypal Transfer
              </h2>
              <Image
                className="w-full"
                src="/paypal-top-logo.jpg"
                width={352}
                height={90}
                alt="PayPal"
              />
            </div>
            <div className="w-full lg:w-9/12">
              <table className="w-full rounded-lg text-left text-sm text-gray-500 shadow">
                <tbody className="rounded-lg">
                  <tr className="border-b bg-white hover:bg-gray-50">
                    <td className="p-4">OFFICIAL PAYPAL EMAIL ADDRESS</td>
                    <td className="px-6 py-4 text-gray-900">top@pqsjapan.jp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col gap-16 border-b border-gray-900/10 py-12 lg:flex-row">
            <div className="w-full lg:w-3/12">
              <h2 className="mb-5 text-2xl font-semibold leading-7 text-gray-900">
                Additional Information in Case Your Bank Requests It
              </h2>
            </div>
            <div className="w-full lg:w-9/12">
              <div className="rounded-lg border-b bg-white p-4 shadow">
                <p className="mb-4">INTERMEDIARY BANK INFORMATION</p>
                <ol className="mb-6 ml-6 list-decimal">
                  <li>
                    In case your bank still requests you for details for an
                    intermediary Bank in the USA to be specified, we have
                    attached a list of the most commonly used intermediary by
                    our customers from the Caribbean region that your bank can
                    choose from.
                  </li>
                  <li>
                    The intermediary/correspondent bank is a third-party bank in
                    the United States in case of US dollar payments to
                    facilitate international transfer and settlement of funds.
                  </li>
                  <li>
                    AUTOEXPERT JAPAN does not have a specified or fixed
                    intermediary bank in the United States. That means your bank
                    can choose any intermediary bank in the United States to
                    transfer the funds to our account in Japan.
                  </li>
                </ol>
                <p className="mb-4">Commonly Used Intermediary Banks:</p>
                <ol className="ml-6 list-decimal">
                  <li>
                    <strong>BANK:</strong> SMBC (SUMITOMO MITSUI BANKING
                    CORPORATION)
                    <br />
                    <strong>BRANCH:</strong> NEW YORK BRANCH
                    <br />
                    <strong>ADDRESS:</strong> 277 PARK AVENUE, NEW YORK, NY
                    10172, U.S.A.
                    <br />
                    <strong>SWIFT:</strong> SMBCUS33
                  </li>
                  <li>
                    <strong>BANK:</strong> JPMORGAN CHASE BANK
                    <br />
                    <strong>BRANCH:</strong> JPMORGAN CHASE BANK, N.A. /NEW YORK
                    <br />
                    <strong>ADDRESS:</strong> 270 PARK AVENUE, NEW YORK, NY
                    10017, U.S.A.
                    <br />
                    <strong>SWIFT:</strong> CHASUS33
                  </li>
                  <li>
                    <strong>BANK:</strong> BANK OF AMERICA
                    <br />
                    <strong>BRANCH:</strong> BANK OF AMERICA, N.A. / NEW YORK
                    BRANCH
                    <br />
                    <strong>ADDRESS:</strong> 222 BROADWAY, 13TH FLOOR, NEW
                    YORK, NY 10038, U.S.A.
                    <br />
                    <strong>SWIFT:</strong> BOFAUS3N
                  </li>
                  <li>
                    <strong>BANK:</strong> CITIBANK
                    <br />
                    <strong>BRANCH:</strong> CITIBANK, N.A. /NEW YORK (HEAD
                    OFFICE)
                    <br />
                    <strong>ADDRESS:</strong> 399 PARK AVENUE, NEW YORK, NY
                    10043, U.S.A.
                    <br />
                    <strong>SWIFT:</strong> CITIUS33
                  </li>
                </ol>
                <p className="mb-4">
                  OR ANY OTHER INTERMEDIARY BANK IN THE UNITED STATES.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
