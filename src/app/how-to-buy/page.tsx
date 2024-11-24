import type { Metadata } from 'next'
import Image from 'next/image'

import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  ...generateSEOMeta('How To Buy'),
}

export default function HowToBuy() {
  return (
    <div>
      <Breadcrumb items={[{ title: 'How To Buy', uri: '/how-to-buy' }]} />
      <section className="container relative mx-auto w-full gap-8 overflow-x-auto py-5 sm:px-6 lg:px-8">
        <table
          className="my-5 w-full rounded text-left text-sm text-gray-700 shadow-lg"
          style={{ minWidth: 1024 }}
        >
          <thead className="bg-gray-50 text-xs uppercase">
            <tr>
              <th scope="col" className="p-4">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="p-4">
                WHICH STEPS
              </th>
              <th scope="col" className="p-4">
                HOW TO
              </th>
              <th scope="col" className="p-4">
                WHO WILL
              </th>
              <th scope="col" className="p-4">
                WHAT TO DO
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b border-solid bg-white hover:bg-gray-50">
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/info_icon.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Country Regulation
              </td>
              <td className="w-52 p-4">Ask to local authority</td>
              <td className="w-40 bg-gray-200 p-4">Customer</td>
              <td className="p-4">
                Before you start purchase please confirm that the imported
                product will match with your country import regulation and
                custom duty for a smooth clearing process. If any help needs
                please ask to us.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/cart_icon.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Select Product
              </td>
              <td className="w-52 p-4">Email, Whatsaap</td>
              <td className="w-52 bg-gray-200 p-4">Customer</td>
              <td className="p-4">
                Please select your car or auto parts if available in the stock
                or please order us through Whatsapp or Email.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/funnel_money_icon.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Price Negotiation
              </td>
              <td className="w-52 p-4">Email, Whatsaap</td>
              <td className="w-52 bg-gray-200 p-4">Customer↔PQS JP</td>
              <td className="p-4">
                Please get your purchase order item through our official email
                and check item specification and price.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/invoice_icon.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Invoice
              </td>
              <td className="w-52 p-4">Email</td>
              <td className="w-52 bg-gray-200 p-4">Customer↔PQS JP</td>
              <td className="p-4">
                Get invoice by email with Consignee Name and Address, Item
                specifications, Price, Shipment conditions from us.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/send_money.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Payment Transfer
              </td>
              <td className="w-52 p-4">Bank / Paypal</td>
              <td className="w-52 bg-gray-200 p-4">Customer</td>
              <td className="p-4">
                Please check the Bank Account Details on the invoice, once you
                paid to the bank or Paypal please send the TT Application scan
                or picture by email as payment proof.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/payment_confirmation_icon.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Payment Confirmation{' '}
              </td>
              <td className="w-52 p-4">Email</td>
              <td className="w-52 bg-gray-200 p-4">PQS JP</td>
              <td className="p-4">
                <b>Once we receive the payment</b> we will inform you about the
                payment confirmation receipt for your purchase, also please
                double check Consignee details to make any correction on the
                document free of cost.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/shipment_tracking_icon.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Shipment Status
              </td>
              <td className="w-52 p-4">Email</td>
              <td className="w-52 bg-gray-200 p-4">PQS JP</td>
              <td className="p-4">
                Once we prepare international shipping arrangements, vessel
                booking then you will get an update about the progress.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/document_status_icon.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Document Status
              </td>
              <td className="w-52 p-4">Email</td>
              <td className="w-52 bg-gray-200 p-4">Customer↔PQS JP</td>
              <td className="p-4">
                We will send the shipping documents verification copy for final
                check before dispatching. If there any correction needs please
                contact with us.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/document_tracking.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Document Tracking
              </td>
              <td className="w-52 p-4">Email</td>
              <td className="w-52 bg-gray-200 p-4">PQS JP</td>
              <td className="p-4">
                Once we prepare shipping documents we will send document
                shipment DHL Tracking Number to track the parcel.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/purchase_history_icon.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Purchase History
              </td>
              <td className="w-52 p-4">My Page Login</td>
              <td className="w-52 bg-gray-200 p-4">Customer</td>
              <td className="p-4">
                Please register and log in to my page from our website and enjoy
                the features.
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-gray-200 p-4">
                <Image
                  style={{ margin: '0 auto' }}
                  src="/svg/handshake_icon.svg"
                  width={36}
                  height={36}
                  alt="Country Regulation"
                />
              </td>
              <td className="w-60 bg-gray-200 p-4 text-base font-bold">
                Receive Your Cargo{' '}
              </td>
              <td className="w-52 p-4">Local Custom Authority </td>
              <td className="w-52 bg-gray-200 p-4">Customer</td>
              <td className="p-4">
                Please visit your local Customs Authority to release your car or
                parts submitting the shipping document which you got from us.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
