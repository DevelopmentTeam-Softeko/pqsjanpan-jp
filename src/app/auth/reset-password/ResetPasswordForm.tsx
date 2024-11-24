'use client'

import { PrefetchKind } from 'next/dist/client/components/router-reducer/router-reducer-types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { FormEvent, LegacyRef } from 'react'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import Turnstile from 'react-turnstile'

import { sendForgotPassOTP, sendResetPassRequest } from '@/api/apiDef'

interface Props {
  email: string
}
const ResetPasswordForm = (props: Props) => {
  const { prefetch } = useRouter()
  const [turnstile, setTurnstile] = useState('')
  const [loading, setLoading] = useState(false)
  const [currentState, setCurrentState] = useState(-1)

  useEffect(() => {
    if (props?.email) {
      setCurrentState(1)
    } else {
      setCurrentState(0)
    }
  }, [props?.email])

  const emailRef: LegacyRef<HTMLInputElement> | undefined = useRef(null)
  const passwordRef: LegacyRef<HTMLInputElement> | undefined = useRef(null)
  const confirmPasswordRef: LegacyRef<HTMLInputElement> | undefined =
    useRef(null)
  const handleOnSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        event?.preventDefault()
        setLoading(true)
        const email = emailRef?.current?.value
        const password = passwordRef?.current?.value
        const confirmPassword = confirmPasswordRef?.current?.value
        if (currentState === 0) {
          if (email) {
            const res = await sendForgotPassOTP(email)
            // @ts-ignore
            if (res?.IsSuccess) {
              setCurrentState(2)
            } else {
              toast(
                // @ts-ignore
                res?.Message ?? 'Reset password request failed, Try again',
                { type: 'error' },
              )
            }
            setLoading(false)
          } else {
            toast("Field's can't be empty", { type: 'error' })
            setLoading(false)
          }
        } else if (currentState === 1) {
          if (!turnstile) {
            toast('You have not met the security requirements', {
              type: 'error',
            })
            setLoading(false)
            return
          }
          if (props?.email && password && confirmPassword) {
            const res = await sendResetPassRequest(
              props?.email as string,
              password,
              confirmPassword,
            )
            // @ts-ignore
            if (res?.IsSuccess) {
              window.location.href = '/auth/sign-in'
            } else {
              toast(
                // @ts-ignore
                res?.Message ?? 'Reset password request failed, Try again',
                { type: 'error' },
              )
            }
            setLoading(false)
          } else {
            toast("Field's can't be empty", { type: 'error' })
            setLoading(false)
          }
        }
      } catch (e: any) {
        toast(e || 'Unexpected error', { type: 'error' })
        setLoading(false)
      }
    },
    [
      emailRef,
      passwordRef,
      confirmPasswordRef,
      turnstile,
      currentState,
      props?.email,
    ],
  )

  const onVerifyHandle = useCallback((token: string) => {
    if (token) {
      prefetch('/user/dashboard', { kind: PrefetchKind.FULL })
      setTurnstile(token)
    }
  }, [])
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
      {currentState === 1 && (
        <>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="conmfirmPassword"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              ref={confirmPasswordRef}
              type="password"
              name="conmfirmPassword"
              id="conmfirmPassword"
              placeholder="Confirm Password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
            />
          </div>
          <div>
            <Turnstile
              sitekey={process?.env?.TURNSTILE_KEY as string}
              onVerify={onVerifyHandle}
            />
          </div>
        </>
      )}
      {currentState === 0 && (
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg border border-solid border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
            placeholder="name@company.com"
            required={true}
          />
        </div>
      )}
      {currentState === 2 && (
        <div className="text-center">
          <p className="mb-10 text-center text-2xl font-bold text-red-500">
            Your reset password link sent to your email, please check
          </p>
        </div>
      )}
      <div className="flex items-center justify-between">
        <Link
          href="/auth/sign-in"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Return to Login?
        </Link>
      </div>
      <button
        disabled={loading}
        type="submit"
        className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
      >
        {loading ? 'Loading...' : 'Reset Password'}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{' '}
        <Link
          href="/auth/sign-up"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  )
}
export default React.memo(ResetPasswordForm)
