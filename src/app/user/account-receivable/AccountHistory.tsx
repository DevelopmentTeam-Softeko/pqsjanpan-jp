'use client'

import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useCallback, useRef } from 'react'
import { utils, writeFileXLSX } from 'xlsx'

import { useGetAllHoldOrderByCustomer } from '@/api/useApi'
import Loading from '@/app/loading'
import { buildProductUrl } from '@/utils'

interface Props {
  customerId?: number
}
const AccountHistory = (props: Props) => {
  const customerId = Number(props?.customerId)
  const { data, isLoading } = useGetAllHoldOrderByCustomer(customerId)
  const tableRef = useRef(null)
  const exportFile = useCallback(() => {
    const tableEle = tableRef?.current
    const wb = utils.table_to_book(tableEle)
    writeFileXLSX(wb, 'SalesAgency_AccountReceivable_2023.xlsx')
  }, [tableRef])
  const getColor = useCallback((date: any) => {
    const dueDate: any = new Date(date)
    const today = new Date()
    const day = dueDate.getDate()
    const month = dueDate.getMonth() + 1
    const year = dueDate.getFullYear()
    const dateString = new Date(
      `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
    )
    const sevenDays = new Date(
      `${month}/${day - 7 === 0 ? 1 : day - 7}/${year}`,
    )
    const first = sevenDays.getDate() - sevenDays.getDay()
    const last = first - 6
    const lastDay = new Date(sevenDays.setDate(last))
    const dueDateOneDays = new Date(`${month}/${day + 1}/${year}`)
    if (dateString >= dueDateOneDays) {
      return '#FFCDD2'
    }
    if (lastDay <= dateString) {
      if (dateString >= dueDateOneDays) {
        return '#FFCDD2'
      }
      return '#FFFFC2'
    }
    return '#fff'
  }, [])
  const showDiff = useCallback((d: string) => {
    let days = 0

    const date2: any = new Date()
    const date1: any = new Date(d)

    if (date1 <= date2) {
      let diff = (date2 - date1) / 1000
      diff = Math.abs(Math.floor(diff))

      days = Math.floor(diff / (24 * 60 * 60))
      let leftSec = diff - days * 24 * 60 * 60

      const hrs = Math.floor(leftSec / (60 * 60))
      leftSec -= hrs * 60 * 60

      const min = Math.floor(leftSec / 60)
      leftSec -= min * 60
    }

    if (date1 >= date2) {
      let diff = (date2 - date1) / 1000
      diff = Math.abs(Math.floor(diff))

      days = -Math.floor(diff / (24 * 60 * 60))
    }

    return days
  }, [])
  const cellClasses =
    'whitespace-nowrap border-r border-solid border-gray-700 p-2 font-light text-gray-900 text-xs text-center'
  const thCellClasses = `${cellClasses} bg-gray-800 text-white`
  const rowClasses = 'border-b border-solid border-gray-700'
  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <div className="mb-5 flex flex-col items-center justify-between lg:flex-row">
        <div>
          <table className="mb-5 border-collapse border border-slate-400">
            <tbody>
              <tr>
                <td className="border border-slate-300 bg-gray-800 p-3 text-white">
                  Unassignment Amount Total
                </td>
                <td
                  className="border border-slate-300 p-3"
                  style={
                    (data?.unAssignmentTotalJPY !== 0 && {
                      color: '#2f76b3',
                    }) || { color: '#000000' }
                  }
                >
                  {data?.unAssignmentTotalJPY?.toFixed(2)} JPY
                </td>
                <td
                  className="border border-slate-300 p-3"
                  style={
                    (data?.unAssignmentTotalUSD !== 0 && {
                      color: '#2f76b3',
                    }) || { color: '#000000' }
                  }
                >
                  {data?.unAssignmentTotalUSD?.toFixed(2)} USD
                </td>
                <td
                  className="border border-slate-300 p-3"
                  style={
                    (data?.unAssignmentTotalAUD !== 0 && {
                      color: '#2f76b3',
                    }) || { color: '#000000' }
                  }
                >
                  {data?.unAssignmentTotalAUD.toFixed(2)} AUD
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 bg-gray-800 p-3 text-white">
                  Assignment Amount Total
                </td>
                <td
                  className="border border-slate-300 p-3"
                  style={
                    (data?.assignmentTotalJPY !== 0 && {
                      color: '#2f76b3',
                    }) || {
                      color: '#000000',
                    }
                  }
                >
                  {data?.assignmentTotalJPY?.toFixed(2)} JPY
                </td>
                <td
                  className="border border-slate-300 p-3"
                  style={
                    (data?.assignmentTotalUSD !== 0 && {
                      color: '#2f76b3',
                    }) || {
                      color: '#000000',
                    }
                  }
                >
                  {data?.assignmentTotalUSD?.toFixed(2)} USD
                </td>
                <td
                  className="border border-slate-300 p-3"
                  style={
                    (data?.assignmentTotalAUD !== 0 && {
                      color: '#2f76b3',
                    }) || {
                      color: '#000000',
                    }
                  }
                >
                  {data?.assignmentTotalAUD.toFixed(2)} AUD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={exportFile}
          type="button"
          className="flex items-center justify-center rounded-full border-2 border-primary-700 px-5 py-0.5 text-center text-sm font-medium text-primary-700 hover:bg-primary-600 hover:text-white focus:outline-none"
        >
          <ArrowDownTrayIcon className="mr-2 h-6 w-6" />
          CSV Download (Agent)
        </button>
      </div>
      <div className="relative mb-5 overflow-x-auto shadow-md">
        <table
          className="w-full border-l border-t border-gray-700 text-left text-base text-gray-500"
          ref={tableRef}
        >
          <thead>
            <tr className={rowClasses}>
              <th className={thCellClasses}>Ref No.</th>
              <th className={thCellClasses}>Invoice No.</th>
              <th className={thCellClasses}>
                Model
                <br />
                Chassis No.
              </th>
              <th className={thCellClasses}>
                Sales Agency
                <br />
                Sales Agent
              </th>
              <th className={thCellClasses}>
                Email
                <br />
                Customer Name
              </th>
              <th className={thCellClasses}>
                Price
                <br />
                Quotation
              </th>
              <th className={thCellClasses}>Inspection</th>
              <th className={thCellClasses}>Subtotal</th>
              <th className={thCellClasses}>
                Assignment
                <br />
                Amount
              </th>
              <th className={thCellClasses}>
                Payment
                <br />
                Rate (%)
              </th>
              <th className={thCellClasses}>
                Unassignment
                <br />
                Amount
              </th>
              <th className={thCellClasses}>
                County
                <br />
                Final Destination
              </th>
              <th className={thCellClasses}>
                ATD
                <br />
                (ETD)
              </th>
              <th className={thCellClasses}>Vessel Name</th>
              <th className={thCellClasses}>
                ATA
                <br />
                (ETA)
              </th>
              <th className={thCellClasses}>
                1st Due Date
                <br />
                Cr.Condition
              </th>
              <th className={thCellClasses}>
                Over Due
                <br />
                Days
              </th>
              <th className={thCellClasses}>
                Stock
                <br />
                Days
              </th>
              <th className={thCellClasses}>
                BL Hold
                <br />
                Days
              </th>
              <th className={thCellClasses}>
                BL Status
                <br />
                Days
              </th>
              <th className={thCellClasses}>Booking Status</th>
            </tr>
          </thead>
          {data?.list?.map((order: any) => (
            <tbody key={order?.ID}>
              {order?.vehicleObj?.map((vehicle: any) => (
                <tr
                  key={vehicle?.ID}
                  className={rowClasses}
                  style={{ background: getColor(vehicle?.due_date) }}
                >
                  <td className={cellClasses} key={vehicle?.ID}>
                    <Link
                      target="_blank"
                      href={buildProductUrl(
                        vehicle?.maker?.makers_name,
                        vehicle?.model?.model_name,
                        vehicle?.ID,
                        vehicle?.reference_no,
                        false,
                      )}
                      className="text-blue-600"
                    >
                      RF{vehicle?.ID}
                    </Link>
                  </td>
                  <td className={cellClasses}>
                    <Link
                      target="_blank"
                      className="text-blue-600"
                      href={`${process.env.API_BASE_URL}/api/bfbd/downloadpdf/${order?.ID}`}
                    >
                      {order?.ID}
                    </Link>
                    <br />
                    {new Date(order?.created).toLocaleDateString('en-US')}
                  </td>
                  <td className={cellClasses}>
                    <span>{vehicle?.model?.model_name}</span>
                    <br />
                    <span>{vehicle?.chassis_no}</span>
                  </td>
                  <td className={cellClasses}>
                    <span>{order?.sales_agency_name}</span>
                    <br />
                    <span>{order?.sales_agent_name}</span>
                  </td>
                  <td className={cellClasses}>
                    {order?.customerObj.email} <br />
                    {order?.customerObj?.key_person}
                  </td>
                  <td className={cellClasses}>
                    {order?.quotationTypeObj?.short_name}
                  </td>
                  <td className={cellClasses}>
                    {order?.inspectionTypeObj?.short_name}
                  </td>
                  <td className={cellClasses}>
                    {order?.bf_jp_pi_total?.toFixed(2)}
                  </td>
                  <td className={cellClasses}>
                    <span>{order?.bf_cfr_total.toFixed(2)}</span>
                    <br />
                    <span>
                      {order?.customerPaymentsTransaction[0]?.created ===
                      '1999-01-01T00:00:00'
                        ? '-'
                        : new Date(
                            order?.customerPaymentsTransaction?.[0].created,
                          ).toLocaleDateString('en-US')}
                    </span>
                  </td>
                  <td className={cellClasses}>
                    <span
                      style={
                        (((order?.bf_cfr_total || 0) /
                          (order?.bf_jp_pi_total || 0)) *
                          100 ===
                          100 && { color: '#000000' }) || { color: 'blue' }
                      }
                    >
                      {((order?.bf_cfr_total || 0) /
                        (order?.bf_jp_pi_total || 0)) *
                        100 !==
                        0 || order?.is_dummy_payment === true
                        ? (
                            ((order?.bf_cfr_total || 0) /
                              (order?.bf_jp_pi_total || 0)) *
                            100
                          ).toFixed(2)
                        : ''}
                    </span>
                  </td>
                  <td className={cellClasses}>
                    <span
                      style={
                        ((order?.bf_jp_pi_total || 0) -
                          (order?.bf_cfr_total || 0) !==
                          0 && {
                          color: 'blue',
                        }) || { color: '#000000' }
                      }
                    >
                      {' '}
                      {order?.bf_cfr_total !== 0 ||
                      order?.is_dummy_payment === true
                        ? (
                            (order?.bf_jp_pi_total || 0) -
                            (order?.bf_cfr_total || 0)
                          )?.toFixed(2)
                        : ''}
                    </span>
                  </td>
                  <td className={cellClasses}>
                    <span>{order?.arrivalCountryObj?.name}</span>
                    <br />
                    <span>{order?.addressItemObj[0]?.city}</span>
                  </td>
                  <td className={cellClasses}>
                    <span>{vehicle?.fromport?.name}</span>
                    <br />
                    <span>
                      {vehicle?.etd_date === '1999-01-01T00:00:00' ||
                      vehicle?.etd_date === '2024-01-31T18:00:00' ||
                      vehicle?.etd_date === '2024-01-31T15:00:00'
                        ? '-'
                        : new Date(vehicle?.etd_date).toLocaleDateString(
                            'en-US',
                          )}
                    </span>
                  </td>
                  <td className={cellClasses}>{vehicle?.vessel_name}</td>
                  <td className={cellClasses}>
                    <span>{order?.arrivalPortObj?.name}</span>
                    <br />
                    <span>
                      {vehicle?.eta_date === '1999-01-01T00:00:00' ||
                      vehicle?.eta_date === '2024-01-31T18:00:00' ||
                      vehicle?.eta_date === '2024-01-31T15:00:00'
                        ? '-'
                        : new Date(vehicle?.eta_date).toLocaleDateString(
                            'en-US',
                          )}
                    </span>
                  </td>
                  <td className={cellClasses}>
                    <div>
                      {!(
                        vehicle?.payment_booking_status_id === 3 ||
                        vehicle?.order_status_id === 2 ||
                        vehicle?.etd_eta_id === 0 ||
                        vehicle?.etd_eta_days === 0
                      ) &&
                        `${
                          vehicle?.etd_eta_id === 1 ? 'ETD + ' : 'ETA + '
                        } ${vehicle?.etd_eta_days} Days`}
                    </div>
                    <div>
                      {vehicle?.due_date === '1999-01-16T00:00:00' ||
                      vehicle?.due_date === '1999-01-01T00:00:00' ||
                      vehicle?.due_date === '2024-02-15T00:00:00' ||
                      vehicle.due_date === '2024-02-08T15:00:00' ||
                      vehicle.due_date === '2024-02-09T15:00:00' ||
                      vehicle.due_date === '2024-02-10T00:00:00' ||
                      vehicle.due_date === '2024-02-11T00:00:00' ||
                      vehicle?.due_date === '2024-02-16T00:00:00' ||
                      vehicle?.due_date === '2025-02-09T15:00:00'
                        ? 'TBA'
                        : new Date(vehicle?.due_date).toLocaleDateString(
                            'en-US',
                          )}
                    </div>
                  </td>
                  <td className={cellClasses}>
                    <span style={{ color: '#A02E15' }}>
                      {showDiff(
                        (vehicle?.due_date === '1999-01-01T00:00:00'
                          ? ''
                          : vehicle?.due_date) &&
                          (vehicle?.due_date === '1999-01-16T00:00:00'
                            ? ''
                            : vehicle?.due_date),
                      )}
                    </span>
                  </td>

                  <td className={cellClasses}>
                    <span style={{ color: '#A02E15' }}>
                      {showDiff(
                        (vehicle.auction_date === '1999-01-01T00:00:00'
                          ? ''
                          : vehicle?.auction_date) &&
                          (vehicle?.auction_date === '1999-01-16T00:00:00'
                            ? ''
                            : vehicle?.auction_date),
                      )}
                    </span>
                  </td>
                  <td className={cellClasses}>
                    <span style={{ color: '#A02E15' }}>
                      {showDiff(
                        (order?.customerPaymentsTransaction[0]?.created ===
                        '1999-01-01T00:00:00'
                          ? ''
                          : order?.customerPaymentsTransaction[0]?.created) &&
                          (order?.customerPaymentsTransaction[0]?.created ===
                          '1999-01-16T00:00:00'
                            ? ''
                            : order?.customerPaymentsTransaction[0]?.created),
                      )}
                    </span>
                  </td>
                  <td className={cellClasses}>
                    {vehicle?.attachmentListObj
                      ?.filter((ele: any) => ele?.attachment_type_id === 8)
                      ?.map((ele: any, index: number) => (
                        <span className="font-bold text-blue-600" key={index}>
                          {new Date(ele?.create_date).toLocaleDateString(
                            'en-US',
                          )}
                        </span>
                      ))}
                  </td>
                  <td className={cellClasses}>
                    <a
                      style={
                        (order?.payment_booking_status_id === 1 && {
                          background: '#e11584',
                          padding: '5px 8px 5px 8px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '10px',
                        }) ||
                        (order?.payment_booking_status_id === 4 && {
                          background: '#e11584',
                          padding: '5px 8px 5px 8px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '10px',
                        }) ||
                        (order?.payment_booking_status_id === 2 && {
                          background: '#228B22',
                          padding: '5px 8px 5px 8px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '10px',
                        }) ||
                        (order?.payment_booking_status_id === 3 && {
                          background: '#228B22',
                          padding: '5px 8px 5px 8px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '10px',
                        }) ||
                        {}
                      }
                    >
                      <span>{order?.payment_booking_status_name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}

export default AccountHistory
