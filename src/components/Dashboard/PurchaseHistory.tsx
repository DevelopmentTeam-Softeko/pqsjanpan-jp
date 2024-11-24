'use client'

import {
  ArrowDownCircleIcon,
  CakeIcon,
  ViewColumnsIcon,
} from '@heroicons/react/20/solid'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useContext, useEffect } from 'react'
import { Tooltip } from 'react-tooltip'

import { useGetAllOrderByCustomer } from '@/api/useApi'
import Loading from '@/app/loading'
import {
  ACTION,
  LocalStateDispatchContext,
  MODAL,
} from '@/app/LocalStateProvider'
import NotFound from '@/components/Common/NotFound'
import Pagination from '@/components/Common/Pagination'
import InvoiceAddressDetails from '@/components/Modal/InvoiceAddressDetails'
import {
  buildDocumentUrl,
  buildImageUrl,
  buildImageZipUrl,
  buildOrderUrl,
  buildProductUrl,
} from '@/utils'

interface Props {
  customerId?: number
  typeId?: number
  page?: number
  email?: string
  keyword?: string
}
const PurchaseHistory = (props: Props) => {
  const customerId = Number(props?.customerId)
  const typeId = Number(props?.typeId)
  const { data, isLoading } = useGetAllOrderByCustomer(
    customerId,
    props?.page,
    props?.keyword,
    props?.email,
  )
  const dispatch = useContext(LocalStateDispatchContext)
  const handleOpenModal = useCallback((order: any) => {
    // @ts-ignore
    dispatch({
      type: ACTION.OPEN_MODAL,
      payload: {
        id: MODAL.INVOICE_ADDRESS_DETAILS_MODAL,
        value: order,
      },
    })
  }, [])
  const cellClasses =
    'whitespace-nowrap border-r border-gray-700 p-2 font-light text-gray-900 text-xs text-center'
  const rowClasses = 'border-b border-gray-700'

  useEffect(() => {
    if (data?.list?.length > 0) {
      sessionStorage.setItem('totalCreditJPY', `${data?.totalCreditJPY || 0}`)
      sessionStorage.setItem('totalCreditAUD', `${data?.totalCreditAUD || 0}`)
      sessionStorage.setItem('totalCreditUSD', `${data?.totalCreditUSD || 0}`)
    }
  }, [data])
  const bgGreen = {
    background: '#b6d7a8',
  }
  const bgBlue = {
    background: '#a4c2f4',
  }
  const bgYellow = {
    background: '#fff2cc',
  }
  const bgPink = {
    background: '#ead1dc',
  }
  const bgViolet = {
    background: '#8e7cc3',
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="relative mb-5 w-full overflow-x-auto shadow-md">
      <table className="w-full border-l border-t border-gray-700 text-left text-base text-gray-500">
        {data?.list?.length > 0 && (
          <thead>
            <tr className={rowClasses}>
              <th colSpan={3} className={cellClasses} style={bgGreen}>
                SPECIFICATION
              </th>
              <th colSpan={5} className={cellClasses} style={bgBlue}>
                INVOICE
              </th>
              <th colSpan={7} className={cellClasses} style={bgYellow}>
                PAYMENT
              </th>
              <th colSpan={3} className={cellClasses} style={bgPink}>
                SHIPMENT
              </th>
              <th colSpan={7} className={cellClasses} style={bgViolet}>
                DOCUMENTS
              </th>
            </tr>
            <tr className={rowClasses}>
              <td className={cellClasses} style={bgGreen}>
                REFERENCE <br /> NUMBER
              </td>
              <td className={cellClasses} style={bgGreen}>
                PHOTO
              </td>
              <td className={cellClasses} style={bgGreen}>
                VEHICLE <br /> DETAIL
              </td>
              <td className={cellClasses} style={bgBlue}>
                QUOTE
                <br />
                INSPECTION
              </td>
              <td className={cellClasses} style={bgBlue}>
                INVOICE <br />
                STATUS
              </td>
              <td className={cellClasses} style={bgBlue}>
                ISSUE <br />
                DATE
              </td>
              <td className={cellClasses} style={bgBlue}>
                SHIPMENT <br />
                TYPE
              </td>
              <td className={cellClasses} style={bgBlue}>
                INVOICE <br />
                AMOUNT
              </td>
              <td
                className={cellClasses}
                style={{ width: '90px', ...bgYellow }}
              >
                BANK REF.
                <br />
                NUMBER
              </td>
              <td
                className={cellClasses}
                style={{ width: '90px', ...bgYellow }}
              >
                TRANSACTION
                <br />
                DATE
              </td>
              <td
                className={cellClasses}
                style={{ width: '90px', ...bgYellow }}
              >
                ALLOCATION
                <br /> DATE
              </td>
              <td
                className={cellClasses}
                style={{ width: '90px', ...bgYellow }}
              >
                PAID <br /> AMOUNT
              </td>
              <td className={cellClasses} style={bgYellow}>
                PAYMENT <br />
                RATE %{' '}
              </td>
              <td className={cellClasses} style={bgYellow}>
                BALANCE DUE <br />
                AMOUNT
              </td>
              <td className={cellClasses} style={bgYellow}>
                BALANCE
                <br />
                DUE DATE
              </td>
              <td className={cellClasses} style={bgPink}>
                LOADING PORT
                <br /> ETD
              </td>
              <td className={cellClasses} style={bgPink}>
                VESSEL <br />
                NAME
              </td>
              <td className={cellClasses} style={bgPink}>
                ARRIVAL PORT
                <br />
                ETA
              </td>
              <td className={cellClasses} style={bgViolet}>
                PIC. <br /> ZIP
              </td>
              <td className={cellClasses} style={bgViolet}>
                COM.
                <br /> INV.
              </td>
              <td className={cellClasses} style={bgViolet}>
                ECJP <br /> ECEN
              </td>
              <td className={cellClasses} style={bgViolet}>
                INSP <br /> CERT.
              </td>
              <td className={cellClasses} style={bgViolet}>
                OBL <br /> SBL
              </td>
              <td className={cellClasses} style={bgViolet}>
                BL <br /> STATUS
              </td>
              <td className={cellClasses} style={bgViolet}>
                DOC.STATUS
                <br /> DOC.TRACKING
              </td>
            </tr>
          </thead>
        )}
        <tbody>
          {data?.list?.map((order: any) => {
            const vehicleObj = order?.vehicleObj?.[0] || {}
            const orderStatusId = order?.order_status_id
            const amountPercentage = (
              ((order?.total_assignment_amount || 0) /
                (order?.bf_jp_pi_total || 0)) *
              100
            ).toFixed(2)
            const amountTextColor =
              ((order?.bf_cfr_total || 0) / (order?.bf_jp_pi_total || 0)) *
                100 ===
              100
                ? '#000000'
                : '#0000FF'
            const bfDifference = order.bf_jp_pi_total - order.bf_cfr_total
            const bfIsDifferenceNonZero = bfDifference !== 0
            const bfIsDummyPayment =
              order.bf_cfr_total !== 0 || order.is_dummy_payment === true
            const textColor = bfIsDifferenceNonZero ? '#0000FF' : '#000000'
            const displayText = bfIsDummyPayment ? bfDifference.toFixed(2) : ''
            const isFullPaid =
              (order?.payment_booking_status_id === 2 ||
                order?.payment_booking_status_id === 3 ||
                order?.payment_booking_status_id === 4 ||
                order?.order_status_id === 2 ||
                order?.order_status_id === 0 ||
                vehicleObj?.etd_eta_id === 0 ||
                vehicleObj?.etd_eta_days === 0) &&
              order?.payment_booking_status_id !== 8

            // Condition for hiding the div
            const shouldHideDiv =
              order.payment_booking_status_id === 2 ||
              order.payment_booking_status_id === 3 ||
              order.payment_booking_status_id === 4 ||
              order.order_status_id === 2 ||
              order.order_status_id === 0 ||
              vehicleObj.etd_eta_id === 0 ||
              vehicleObj.etd_eta_days === 0

            // const dueDate = vehicleObj?.due_date
            // const isTba =
            //   dueDate === '1999-01-16T00:00:00' ||
            //   dueDate === '1999-01-01T00:00:00' ||
            //   dueDate === '2024-02-15T00:00:00' ||
            //   dueDate === '2024-02-11T00:00:00' ||
            //   dueDate === '2024-02-10T00:00:00' ||
            //   dueDate === '2024-02-08T15:00:00' ||
            //   dueDate === '2024-02-09T15:00:00' ||
            //   dueDate === '2024-02-16T00:00:00' ||
            //   dueDate === '2025-02-09T15:00:00'

            // const displayDate = isTba ? 'TBA' : dueDate

            const compareDate = (date1: any, date2: any) => {
              const d1 = new Date(date1)
              const d2 = new Date(date2)

              if (d1.getFullYear() + 2 === d2.getFullYear()) {
                return 'TBA'
              }

              return d2.toISOString().slice(0, 10)
            }

            const status = order?.payment_booking_status_name

            const backgroundColor =
              // eslint-disable-next-line no-nested-ternary
              status === 'Pending'
                ? '#e11584'
                : status === 'Completed'
                ? '#228B22'
                : '#e11584'

            const dhlNo = vehicleObj?.dhl_no
            const dhlDocSentDate = vehicleObj?.dhl_doc_sent_date
            const formatCurrency = (amount: number) => {
              if (
                order?.currencyTypeObj?.short_name === 'USD' ||
                order?.currencyTypeObj?.short_name === 'AUD'
              ) {
                return amount.toFixed(2)
              }
              return amount.toFixed(0)
            }
            return (
              <tr className={rowClasses} key={order?.id}>
                <td className={cellClasses}>
                  <Link
                    href={buildProductUrl(
                      vehicleObj?.maker?.makers_name,
                      vehicleObj?.model?.model_name,
                      vehicleObj?.ID,
                      vehicleObj?.reference_no,
                      false,
                    )}
                    style={{ color: 'blue', textDecoration: 'underline' }}
                    target="_blank"
                  >{`RF${vehicleObj?.ID}`}</Link>
                </td>
                <td className={cellClasses}>
                  <Image
                    alt="image"
                    src={buildImageUrl(vehicleObj?.profile_pic_url)}
                    width={100}
                    height={100}
                    className="rounded border-4 border-white"
                  />
                </td>
                <td className={cellClasses}>
                  {vehicleObj?.registraion_year}
                  <br />
                  {vehicleObj?.model?.model_name} <br />
                  {vehicleObj?.chassis_no}
                  <br />
                  {vehicleObj?.chassis_code && (
                    <span style={{ color: 'blue' }}>
                      {vehicleObj?.engine_no}
                    </span>
                  )}
                </td>
                <td className={cellClasses}>
                  {order?.quotationTypeObj?.short_name} <br />{' '}
                  {order?.inspectionTypeObj?.name}
                </td>
                <td className={cellClasses}>
                  <div className="flex flex-col">
                    {orderStatusId === 1 && (
                      <button className="w-full rounded bg-green-500 p-2 text-xs text-white hover:bg-green-700">
                        Valid
                      </button>
                    )}
                    {orderStatusId === 2 && (
                      <button className="w-full rounded bg-red-500 p-2 text-xs text-white hover:bg-red-700">
                        Invalid
                      </button>
                    )}
                    <button
                      className="mt-2 w-full rounded bg-primary-700 p-2 text-xs text-white hover:bg-primary-900"
                      onClick={() => handleOpenModal(order)}
                    >
                      Details
                    </button>
                  </div>
                </td>
                <td className={cellClasses}>
                  <span>{order?.ID}</span>
                  <br />
                  <span style={{ color: 'blue' }}>
                    {moment(order?.created).format('YYYY-MM-DD')}
                  </span>
                </td>
                <td className={cellClasses}>
                  <div className="flex flex-col items-center justify-center">
                    {order?.shipment_type_id_fk === 1 && (
                      <span>
                        <CakeIcon className="h-5 w-5" />
                        <span>{order?.shipmentTypeObj?.name}</span>
                      </span>
                    )}
                    {order.shipment_type_id_fk === 2 && (
                      <span>
                        <ViewColumnsIcon className="h-5 w-5" /> <br />
                        {order?.shipmentTypeObj?.name}
                      </span>
                    )}
                  </div>
                </td>
                <td className={cellClasses}>
                  {order?.currencyTypeObj?.short_name} <br />
                  <span style={{ color: 'blue' }}>
                    {formatCurrency(order?.bf_jp_pi_total)}
                  </span>
                </td>
                <td colSpan={4} className={cellClasses}>
                  <table className="border-collapse border border-slate-400">
                    <tbody>
                      {order?.customerPaymentsTransaction?.map(
                        (p: any, index: number) => (
                          <tr
                            key={index}
                            style={{ background: index % 2 ? '#ddd' : '#fff' }}
                          >
                            <td
                              style={{ width: '90px' }}
                              className="border border-slate-600"
                            >
                              <span
                                style={{
                                  color:
                                    p.trans_type_id === 20003
                                      ? 'red'
                                      : 'inherit',
                                }}
                              >
                                {p.bank_ref_detail.slice(0, 10)}
                              </span>
                            </td>
                            <td
                              style={{ width: '115px' }}
                              className="border border-slate-600"
                            >
                              <span
                                style={{
                                  color:
                                    p.trans_type_id === 20003
                                      ? 'red'
                                      : 'inherit',
                                }}
                              >
                                {moment(p.transaction_date).format(
                                  'YYYY-MM-DD',
                                )}
                              </span>
                            </td>
                            <td
                              style={{ width: '90px' }}
                              className="border border-slate-600"
                            >
                              <span
                                style={{
                                  color:
                                    p.trans_type_id === 20003
                                      ? 'red'
                                      : 'inherit',
                                }}
                              >
                                {new Date(p.created).toISOString().slice(0, 10)}
                              </span>
                            </td>
                            <td
                              style={{ width: '90px' }}
                              className="border border-slate-600"
                            >
                              <span
                                style={{
                                  color:
                                    p.trans_type_id === 20003
                                      ? 'red'
                                      : 'inherit',
                                }}
                              >
                                {p.trans_type_id === 20003
                                  ? (-p.amount).toFixed(2)
                                  : p.amount.toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </td>
                <td className={cellClasses}>
                  <span style={{ color: amountTextColor }}>
                    {amountPercentage !== '0.00' || order?.is_dummy_payment
                      ? `${amountPercentage}%`
                      : ''}
                  </span>
                </td>

                <td className={cellClasses}>
                  <span style={{ color: textColor }}>{displayText}</span>
                </td>
                <td className={cellClasses}>
                  {isFullPaid ? (
                    <div>Full Paid</div>
                  ) : (
                    !shouldHideDiv && (
                      <div>
                        {vehicleObj?.etd_eta_id === 1 ? 'ETD + ' : 'ETA + '}
                        {vehicleObj?.etd_eta_days} Days
                        <br />
                        {compareDate(
                          moment(order?.bl_hold_date).format('YYYY-MM-DD'),
                          moment(vehicleObj?.due_date).format('YYYY-MM-DD'),
                        )}
                      </div>
                    )
                  )}
                </td>
                <td className={cellClasses}>
                  {order?.payment_booking_status_id !== 8 && (
                    <div>
                      {order.stockCountryObj.name} <br />{' '}
                      {order.stockPortObj.name} <br />
                      {[
                        '1999-01-01T00:00:00',
                        '2024-01-31T18:00:00',
                        '2024-01-30T18:00:00',
                        '2024-01-30T06:00:00',
                        '2024-02-08T15:00:00',
                        '2024-01-31T15:00:00',
                      ].includes(vehicleObj?.etd_date)
                        ? '-'
                        : new Date(vehicleObj?.etd_date)
                            .toISOString()
                            .slice(0, 10)}
                    </div>
                  )}
                </td>
                <td className={cellClasses}>
                  {vehicleObj?.vessel_name !== '1' &&
                    order.payment_booking_status_id !== 8 && (
                      <span>{vehicleObj?.vessel_name}</span>
                    )}
                </td>
                <td className={cellClasses}>
                  {Number(order?.payment_booking_status_id || 0) !== 8 && (
                    <div>
                      {order.arrivalCountryObj.name} <br />{' '}
                      {order.arrivalPortObj.name}
                      <br />
                      {[
                        '1999-01-01T00:00:00',
                        '2024-01-31T18:00:00',
                        '2024-01-30T18:00:00',
                        '2024-01-30T06:00:00',
                        '2024-02-08T15:00:00',
                        '2024-01-31T15:00:00',
                      ].includes(vehicleObj?.eta_date)
                        ? '-'
                        : new Date(vehicleObj?.eta_date)
                            .toISOString()
                            .slice(0, 10)}
                    </div>
                  )}
                </td>
                <td className={cellClasses} valign="middle">
                  {order?.payment_booking_status_id !== 8 && (
                    <div>
                      <Link
                        href={buildImageZipUrl(vehicleObj?.ID)}
                        target="_blank"
                        type="button"
                        className="mb-2 block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                      >
                        <ArrowDownCircleIcon className="h-5 w-5" />
                      </Link>
                    </div>
                  )}
                </td>
                <td className={cellClasses} valign="middle">
                  {order?.payment_booking_status_id !== 8 && (
                    <Link
                      href={buildOrderUrl(order?.ID)}
                      target="_blank"
                      title="Invoice"
                      className="mb-2 block rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                    >
                      <ArrowDownCircleIcon className="h-5 w-5" />
                    </Link>
                  )}
                </td>
                <td className={cellClasses} valign="middle">
                  {order?.payment_booking_status_id !== 8 && (
                    <div>
                      {vehicleObj?.attachmentListObj.map(
                        (k: any, index: number) => (
                          <div key={index}>
                            {k.attachment_type_id === 6 && (
                              <div>
                                <Link
                                  {...(order?.payment_booking_status_id === 1 &&
                                  typeId === 3
                                    ? {
                                        href: '#',
                                      }
                                    : {
                                        href: buildDocumentUrl(k?.file_url),
                                        target: '_blank',
                                      })}
                                  data-tooltip-id="export_certificate_jp_tooltip"
                                  data-tooltip-content={
                                    order?.payment_booking_status_id === 1 &&
                                    typeId === 3
                                      ? "Payment due you can't download! Please consult your salesperson."
                                      : 'Export Certificate_JP'
                                  }
                                  className="mb-2 block rounded bg-green-300 px-2 py-1 text-gray-600 hover:bg-gray-400 hover:text-gray-800"
                                >
                                  <ArrowDownCircleIcon className="h-5 w-5" />
                                </Link>
                                <Tooltip
                                  id="export_certificate_jp_tooltip"
                                  place="top"
                                />
                              </div>
                            )}
                            {k.attachment_type_id === 5 && (
                              <span>
                                <Link
                                  {...(order?.payment_booking_status_id === 1 &&
                                  typeId === 3
                                    ? {
                                        href: '#',
                                      }
                                    : {
                                        href: buildDocumentUrl(k?.file_url),
                                        target: '_blank',
                                      })}
                                  data-tooltip-content={
                                    order?.payment_booking_status_id === 1 &&
                                    typeId === 3
                                      ? "Payment due you can't download! Please consult your salesperson."
                                      : 'Export Certificate_Eng'
                                  }
                                  data-tooltip-id="export_certificate_eng_tooltip"
                                  className="mb-2 block rounded bg-green-300 px-2 py-1 text-gray-600 hover:bg-gray-400 hover:text-gray-800"
                                  type="button"
                                >
                                  <ArrowDownCircleIcon className="h-5 w-5" />
                                </Link>
                                <Tooltip
                                  id="export_certificate_eng_tooltip"
                                  place="top"
                                />
                              </span>
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </td>
                <td className={cellClasses} valign="middle">
                  {order?.payment_booking_status_id !== 8 && (
                    <div>
                      {vehicleObj?.attachmentListObj?.map(
                        (k: any, index: number) => (
                          <div key={index}>
                            {k.attachment_type_id === 7 && (
                              <span>
                                <Link
                                  {...(order?.payment_booking_status_id === 1 &&
                                  typeId === 3
                                    ? {
                                        href: '#',
                                      }
                                    : {
                                        href: buildDocumentUrl(k?.file_url),
                                        target: '_blank',
                                      })}
                                  data-tooltip-content={
                                    order?.payment_booking_status_id === 1 &&
                                    typeId === 3
                                      ? "Payment due you can't download! Please consult your salesperson."
                                      : 'Inspection Certificate'
                                  }
                                  data-tooltip-id="payment_due_2_tooltip"
                                  className="rounded bg-green-300 px-2 py-1 text-gray-600 hover:bg-gray-400 hover:text-gray-800"
                                  type="button"
                                >
                                  <ArrowDownCircleIcon className="h-5 w-5" />
                                </Link>
                                <Tooltip
                                  id="payment_due_2_tooltip"
                                  place="top"
                                />
                              </span>
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </td>
                <td className={cellClasses} valign="middle">
                  {order?.payment_booking_status_id !== 8 && (
                    <div>
                      {vehicleObj?.attachmentListObj?.map(
                        (k: any, index: number) => (
                          <div key={index}>
                            {k.attachment_type_id === 8 && (
                              <span>
                                <Link
                                  {...(order?.payment_booking_status_id === 1 &&
                                  typeId === 3
                                    ? {
                                        href: '#',
                                      }
                                    : {
                                        href: buildDocumentUrl(k?.file_url),
                                        target: '_blank',
                                      })}
                                  data-tooltip-content={
                                    order?.payment_booking_status_id === 1 &&
                                    typeId === 3
                                      ? "Payment due you can't download! Please consult your salesperson."
                                      : 'BL'
                                  }
                                  data-tooltip-id="bl_tooltip"
                                  className="mb-2 block rounded bg-orange-200 px-2 py-1 text-orange-600 hover:bg-orange-400"
                                  type="button"
                                >
                                  <ArrowDownCircleIcon className="h-5 w-5" />
                                </Link>
                                <Tooltip id="bl_tooltip" place="top" />
                              </span>
                            )}
                            {k.attachment_type_id === 9 && (
                              <>
                                <Link
                                  href={buildDocumentUrl(k?.file_url)}
                                  target="_blank"
                                  data-tooltip-id="bl_surrender_tooltip"
                                  data-tooltip-content="BL Surrender"
                                  className="mb-2 block rounded bg-orange-200 px-2 py-1 text-orange-600 hover:bg-orange-400"
                                  type="button"
                                >
                                  <ArrowDownCircleIcon className="h-5 w-5" />
                                </Link>
                                <Tooltip
                                  id="bl_surrender_tooltip"
                                  place="top"
                                />
                              </>
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </td>
                <td className={cellClasses} valign="middle">
                  <div>
                    {vehicleObj?.attachmentListObj
                      ?.filter((a: any) => a.attachment_type_id === 8)
                      .map((k: any) => (
                        <div key={k?.id} style={{ width: '43%' }}>
                          <a className="font-bold">
                            {new Date(k?.create_date)
                              ?.toISOString()
                              .slice(0, 10)}
                          </a>
                        </div>
                      ))}
                  </div>
                </td>
                <td className={cellClasses}>
                  <a
                    className={`block rounded p-1 text-xs text-white`}
                    style={{ backgroundColor }}
                    title={status}
                  >
                    <span>{status}</span>
                  </a>
                  <br />
                  {dhlNo && dhlNo !== 'n/a' && (
                    <>
                      <a
                        href={`https://www.dhl.com/jp-en/home/tracking/tracking-express.html?submit=1&tracking-id=${dhlNo}`}
                        className="flex flex-col items-center text-xs text-black"
                        target="_blank"
                      >
                        <Image
                          width={35}
                          height={35}
                          src="/dhl_logo.png"
                          alt="DHL"
                        />
                        <div className="mt-2">
                          {dhlDocSentDate !== '1999-01-01T00:00:00' &&
                            new Date(dhlDocSentDate)
                              ?.toISOString()
                              .slice(0, 10)}
                        </div>
                      </a>
                    </>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {data?.list?.length === 0 && <NotFound />}
      {data?.pagination?.total && (
        <Pagination
          total={data?.pagination?.total || 0}
          perPage={data?.pagination?.perPage || 0}
          currentPage={data?.pagination?.currentPage || 0}
          lastPage={data?.pagination?.lastPage || 0}
          link="/user/dashboard"
        />
      )}
      <InvoiceAddressDetails />
    </div>
  )
}

export default PurchaseHistory
