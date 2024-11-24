'use client'

import { Dialog, Transition } from '@headlessui/react'
import React, { useCallback, useContext, useMemo } from 'react'

import {
  ACTION,
  LocalStateContext,
  LocalStateDispatchContext,
  MODAL,
} from '@/app/LocalStateProvider'

export default React.memo(function InvoiceAddressDetails() {
  const dispatch = useContext(LocalStateDispatchContext)
  const localState = useContext(LocalStateContext)
  const modalData = useMemo(() => {
    // @ts-ignore
    return localState?.modal?.[MODAL.INVOICE_ADDRESS_DETAILS_MODAL]
  }, [localState?.modal])
  const isModalOpen = !!modalData
  const handleDismiss = useCallback(() => {
    // @ts-ignore
    dispatch({
      type: ACTION.CLOSE_MODAL,
      payload: {
        id: MODAL.INVOICE_ADDRESS_DETAILS_MODAL,
        value: false,
      },
    })
  }, [])
  const vehicleObj = modalData?.vehicleObj?.[0] || {}
  const consigneeAddress = modalData?.addressItemObj?.[0] || {}
  const notifyAddress = modalData?.addressItemObj?.[1] || {}
  const dhlAddress = modalData?.addressItemObj?.[2] || {}
  const tableClassName =
    'mb-5 border border-gray-300 divide-y divide-gray-300 w-full'
  const tableCellClassName = 'p-2 border-b text-gray-600'
  const tableHeadClassName = 'p-2 border-b bg-gray-800 text-white min-width-130'
  const tableTitleClassName = 'mb-5 border-b border-b-gray-300 py-2 text-lg'
  return (
    <Transition appear show={isModalOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleDismiss}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-60"
          leave="ease-in duration-200"
          leaveFrom="opacity-60"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="mb-6 flex items-start justify-between rounded-t border-b pb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold text-gray-900"
                  >
                    CONSIGNEE / NOTIFY PARTY / DHL DELIVERY OF YOUR REQUEST{' '}
                    <br />{' '}
                    <span>
                      RF{vehicleObj?.ID} / INVOICE {modalData?.ID} /{' '}
                      {vehicleObj?.model?.model_name} /{' '}
                      {vehicleObj?.registraion_year}
                    </span>
                  </Dialog.Title>
                  <button
                    type="button"
                    className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                    data-modal-hide="defaultModal"
                    onClick={handleDismiss}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div>
                  <div className="mt-3">
                    <h3 className={tableTitleClassName}>CONSIGNEE</h3>
                    <table className={tableClassName}>
                      <tbody>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Name
                          </th>
                          <td className={tableCellClassName}>
                            {consigneeAddress?.name}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Address
                          </th>
                          <td className={tableCellClassName}>
                            {consigneeAddress?.address}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            City
                          </th>
                          <td className={tableCellClassName}>
                            {consigneeAddress?.city}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Country
                          </th>
                          <td className={tableCellClassName}>
                            {consigneeAddress?.country_name}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Phone No.
                          </th>
                          <td className={tableCellClassName}>
                            {consigneeAddress?.mobile}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Email
                          </th>
                          <td className={tableCellClassName}>
                            {consigneeAddress?.email}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-3">
                    <h3 className={tableTitleClassName}>NOTIFY PARTY</h3>
                    <table className={tableClassName}>
                      <tbody>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Name
                          </th>
                          <td className={tableCellClassName}>
                            {notifyAddress?.name}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Address
                          </th>
                          <td className={tableCellClassName}>
                            {notifyAddress?.address}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            City
                          </th>
                          <td className={tableCellClassName}>
                            {notifyAddress?.city}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Country
                          </th>
                          <td className={tableCellClassName}>
                            {notifyAddress?.country_name}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Phone No.
                          </th>
                          <td className={tableCellClassName}>
                            {notifyAddress?.mobile}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Email
                          </th>
                          <td className={tableCellClassName}>
                            {notifyAddress?.email}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-3">
                    <h3 className={tableTitleClassName}>
                      DHL DOCUMENT DELIVERY ADDRESS
                    </h3>
                    <table className={tableClassName}>
                      <tbody>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Name
                          </th>
                          <td className={tableCellClassName}>
                            {dhlAddress?.name}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Address
                          </th>
                          <td className={tableCellClassName}>
                            {dhlAddress?.address}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            City
                          </th>
                          <td className={tableCellClassName}>
                            {dhlAddress.city}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Country
                          </th>
                          <td className={tableCellClassName}>
                            {dhlAddress?.country_name}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Phone No.
                          </th>
                          <td className={tableCellClassName}>
                            {dhlAddress?.mobile}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className={tableHeadClassName}>
                            Email
                          </th>
                          <td className={tableCellClassName}>
                            {dhlAddress?.email}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
})
