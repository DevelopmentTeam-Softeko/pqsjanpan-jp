'use client'

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { useCallback, useContext, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { sendEmailQuote } from '@/api/apiDef'
import { useCountryList, usePortByCountry } from '@/api/useApi'
import {
  ACTION,
  LocalStateContext,
  LocalStateDispatchContext,
  MODAL,
} from '@/app/LocalStateProvider'

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default React.memo(function InquiryModal() {
  const [country, setCountry] = useState()
  const [loading, setLoading] = useState(false)
  const [port, setPort] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobileNo, setMobileNo] = useState()
  const [remark, setRemark] = useState()
  const dispatch = useContext(LocalStateDispatchContext)
  const localState = useContext(LocalStateContext)
  const { data: countryList } = useCountryList()
  const { data: portList } = usePortByCountry(country)
  const modalData = useMemo(() => {
    // @ts-ignore
    return localState?.modal?.[MODAL.INQUIRY_MODAL]
  }, [localState?.modal])
  const isModalOpen = !!modalData
  const handleDismiss = useCallback(() => {
    // @ts-ignore
    dispatch({
      type: ACTION.CLOSE_MODAL,
      payload: {
        id: MODAL.INQUIRY_MODAL,
        value: false,
      },
    })
  }, [])

  const handleOnSubmit = async () => {
    if (
      name &&
      mobileNo &&
      email &&
      country &&
      port &&
      modalData?.id &&
      modalData?.vehicle
    ) {
      if (emailPattern.test(email)) {
        setLoading(true)
        const res = await sendEmailQuote({
          name,
          email,
          phone_no: mobileNo,
          remarks: remark || 'na',
          Id: modalData?.id,
          vehicle: modalData?.vehicle,
          country_id: country,
          port_id: port,
        })
        setLoading(false)
        if (res) {
          toast(
            'Thanks for submitting your query, we will get back to you soon!',
            { type: 'success' },
          )
          handleDismiss()
        } else {
          toast('Sorry Something wrong, try again', {
            type: 'error',
          })
        }
      } else {
        toast('Sorry, validation failed! Email is not valid', {
          type: 'error',
        })
      }
    } else {
      toast('Sorry, validation failed! Please fill all required field', {
        type: 'error',
      })
    }
  }

  const handleOnchangeCountry = useCallback((event: any) => {
    setCountry(event?.target?.value)
  }, [])
  const handleOnChangePort = useCallback((event: any) => {
    setPort(event?.target?.value)
  }, [])
  const handleOnChangeEmail = useCallback((event: any) => {
    setEmail(event?.target?.value)
  }, [])
  const handleOnChangeMobileNo = useCallback((event: any) => {
    setMobileNo(event?.target?.value)
  }, [])
  const handleOnChangeName = useCallback((event: any) => {
    setName(event?.target?.value)
  }, [])
  const handleOnChangeRemark = useCallback((event: any) => {
    setRemark(event?.target?.value)
  }, [])
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
                    Get a Free Quotation
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
                  <div className="mb-6 flex flex-row items-center justify-center">
                    {modalData?.image && (
                      <Image
                        className="w-60 rounded"
                        src={modalData?.image}
                        alt={modalData?.vehicle}
                        width={300}
                        height={300}
                      />
                    )}
                    <div className="ml-5 flex-1">
                      <p className="mb-3 text-sm font-semibold">
                        {modalData?.vehicle}
                      </p>
                      <div className="mb-6">
                        <div className="relative">
                          <select
                            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            onChange={handleOnchangeCountry}
                            value={country}
                            disabled={loading}
                          >
                            <option selected disabled>
                              Choose Country
                            </option>
                            {countryList?.map((ele: any) => (
                              <option value={ele?.value} key={ele?.value}>
                                {' '}
                                {ele?.label}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <select
                            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            onChange={handleOnChangePort}
                            value={port}
                            disabled={loading}
                          >
                            <option selected disabled>
                              Choose Port
                            </option>
                            {portList?.map((ele: any) => (
                              <option value={ele?.value} key={ele?.value}>
                                {' '}
                                {ele?.label}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 mb-2 flex flex-wrap">
                    <div className="mb-3 w-full px-3 md:w-1/2">
                      <input
                        className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 placeholder:text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        value={name}
                        onChange={handleOnChangeName}
                        type="text"
                        placeholder="Your Name"
                        disabled={loading}
                      />
                    </div>
                    <div className="mb-3 w-full px-3 md:w-1/2">
                      <input
                        className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 placeholder:text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        value={email}
                        onChange={handleOnChangeEmail}
                        type="email"
                        placeholder="Your Email"
                        disabled={loading}
                      />
                    </div>
                    <div className="mb-3 w-full px-3">
                      <input
                        className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 placeholder:text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        value={mobileNo}
                        onChange={handleOnChangeMobileNo}
                        type="text"
                        placeholder="Your Phone"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <textarea
                    value={remark}
                    onChange={handleOnChangeRemark}
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 placeholder:text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    placeholder="Your Message (Optional)"
                    disabled={loading}
                  />
                </div>

                <div className="mb-2 mt-6 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-3 font-bold text-white hover:bg-primary-900"
                    onClick={handleOnSubmit}
                    disabled={loading}
                  >
                    {loading ? 'Loading...' : 'Inquire Now'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
})
