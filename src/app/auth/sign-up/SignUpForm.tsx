'use client'

import classNames from 'classnames'
import { PrefetchKind } from 'next/dist/client/components/router-reducer/router-reducer-types'
import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import React, { useCallback, useState } from 'react'
import PinInput from 'react-pin-input'
import { toast } from 'react-toastify'
import Turnstile from 'react-turnstile'

import { codeVerify, signUp } from '@/api/apiDef'
import { useCountryList, usePortByCountry } from '@/api/useApi'
import { usePostSignInProcess } from '@/hooks/usePostSignInProcess'

const SignUpForm = () => {
  const { prefetch, replace } = useRouter()
  const postSignInProcess = usePostSignInProcess()
  const [isSignUpProcessComplete, setIsSignUpProcessComplete] = useState(false)
  const [turnstile, setTurnstile] = useState('')
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState()
  const [port, setPort] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobileNo, setMobileNo] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const { data: countryList } = useCountryList()
  const { data: portList } = usePortByCountry(country)
  const handleOnChangeEmail = useCallback((event: any) => {
    setEmail(event?.target?.value)
  }, [])
  const handleOnChangeAddress = useCallback((event: any) => {
    setAddress(event?.target?.value)
  }, [])
  const handleOnChangeCity = useCallback((event: any) => {
    setCity(event?.target?.value)
  }, [])
  const handleOnchangeCountry = useCallback((event: any) => {
    setCountry(event?.target?.value)
  }, [])
  const handleOnChangePort = useCallback((event: any) => {
    setPort(event?.target?.value)
  }, [])
  const handleOnChangeMobileNo = useCallback((event: any) => {
    setMobileNo(event?.target?.value)
  }, [])
  const handleOnChangeName = useCallback((event: any) => {
    setName(event?.target?.value)
  }, [])

  const handleSignUpOnSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        event?.preventDefault()
        setLoading(true)
        if (!turnstile) {
          toast('You have not met the security requirements', { type: 'error' })
          setLoading(false)
          return
        }
        if (email && name && mobileNo && country && port && city && address) {
          const res = await signUp(
            name,
            email,
            mobileNo,
            city,
            address,
            country,
            port,
          )
          if (res?.IsSuccess) {
            toast(
              'Please check your email for a verification link to complete your registration.',
              {
                type: 'success',
                autoClose: 10000,
              },
            )
            setLoading(false)
            setIsSignUpProcessComplete(false)
            replace('/')
          }
        } else {
          toast("Field's can't be empty", { type: 'error' })
          setLoading(false)
        }
      } catch (e: any) {
        toast(e || 'Unexpected error', { type: 'error' })
        setLoading(false)
      }
    },
    [name, email, mobileNo, city, address, country, port, turnstile],
  )
  const handleOnCodeVerifySubmit = useCallback(
    async (verificationCode: string) => {
      try {
        setLoading(true)
        if (
          email &&
          `${verificationCode}`?.length === 4 &&
          isSignUpProcessComplete
        ) {
          const res = await codeVerify(email, verificationCode)
          postSignInProcess(res)
          setLoading(false)
        } else {
          toast('Your verification code is not valid', { type: 'error' })
          setLoading(false)
        }
      } catch (e: any) {
        toast(e || 'Unexpected error', { type: 'error' })
        setLoading(false)
      }
    },
    [email, isSignUpProcessComplete],
  )
  const handleOnCompletePinInput = useCallback(
    (value: string) => {
      handleOnCodeVerifySubmit(value)
    },
    [email, isSignUpProcessComplete],
  )

  const onVerifyHandle = useCallback((token: string) => {
    if (token) {
      prefetch('/user/dashboard', { kind: PrefetchKind.FULL })
      setTurnstile(token)
    }
  }, [])
  return (
    <div
      className={classNames({
        'py-16': isSignUpProcessComplete,
      })}
    >
      <h1
        className={classNames(
          'mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl',
          {
            'text-center': isSignUpProcessComplete,
          },
        )}
      >
        {isSignUpProcessComplete
          ? 'Please enter verification code'
          : 'Create a new account'}
      </h1>
      {isSignUpProcessComplete ? (
        <form className="space-y-4 md:space-y-6">
          <PinInput
            disabled={loading}
            length={4}
            initialValue=""
            secret
            secretDelay={100}
            type="numeric"
            inputMode="number"
            style={{ padding: 8, textAlign: 'center' }}
            onComplete={handleOnCompletePinInput}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
          {loading && (
            <p className="mt-5 text-center text-lg font-bold text-gray-600">
              Verifying your code.....
            </p>
          )}
        </form>
      ) : (
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSignUpOnSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-lg border border-solid border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:text-gray-500 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
              placeholder="Your Name"
              required={true}
              onChange={handleOnChangeName}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-lg border border-solid border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:text-gray-500 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
              placeholder="name@company.com"
              required={true}
              onChange={handleOnChangeEmail}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your Phone
            </label>
            <input
              onChange={handleOnChangeMobileNo}
              type="text"
              name="phone"
              id="phone"
              className="block w-full rounded-lg border border-solid border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:text-gray-500 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
              placeholder="Your Phone"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Choose Country
            </label>
            <select
              name="country"
              className="mb-3 block w-full appearance-none rounded border border-solid border-gray-300 bg-gray-50 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
          </div>
          <div>
            <label
              htmlFor="port"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Choose Port
            </label>
            <select
              name="port"
              className="block w-full appearance-none rounded border border-gray-300 bg-gray-50 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
          </div>
          <div>
            <label
              htmlFor="City"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Your City"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:text-gray-500 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
              onChange={handleOnChangeCity}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your Address
            </label>
            <textarea
              name="address"
              id="address"
              placeholder="Your Address"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:text-gray-500 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
              onChange={handleOnChangeAddress}
            />
          </div>
          <div>
            <Turnstile
              sitekey={process?.env?.TURNSTILE_KEY as string}
              onVerify={onVerifyHandle}
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
      )}
    </div>
  )
}
export default React.memo(SignUpForm)
