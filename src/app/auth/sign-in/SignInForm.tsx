'use client'

import { PrefetchKind } from 'next/dist/client/components/router-reducer/router-reducer-types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { FormEvent, LegacyRef } from 'react'
import React, { useCallback, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import Turnstile from 'react-turnstile'

import { signIn } from '@/api/apiDef'
import { usePostSignInProcess } from '@/hooks/usePostSignInProcess'

const SignInForm = () => {
  const { prefetch } = useRouter()
  const postSignInProcess = usePostSignInProcess()
  const [turnstile, setTurnstile] = useState('')
  const [loading, setLoading] = useState(false)
  const emailRef: LegacyRef<HTMLInputElement> | undefined = useRef(null)
  const passwordRef: LegacyRef<HTMLInputElement> | undefined = useRef(null)
  const handleOnSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        event?.preventDefault()
        setLoading(true)
        const email = emailRef?.current?.value
        const password = passwordRef?.current?.value
        if (!turnstile) {
          toast('You have not met the security requirements', { type: 'error' })
          setLoading(false)
          return
        }
        if (email && password) {
          const res = await signIn(email, password)
          postSignInProcess(res)
        } else {
          toast("Field's can't be empty", { type: 'error' })
          setLoading(false)
        }
      } catch (e: any) {
        toast(e || 'Unexpected error', { type: 'error' })
        setLoading(false)
      }
    },
    [emailRef, passwordRef, turnstile],
  )

  const onVerifyHandle = useCallback((token: string) => {
    if (token) {
      prefetch('/user/dashboard', { kind: PrefetchKind.FULL })
      setTurnstile(token)
    }
  }, [])
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
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
          placeholder="Your Password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
        />
      </div>
      <div>
        <Turnstile
          sitekey={process?.env?.TURNSTILE_KEY as string}
          onVerify={onVerifyHandle}
        />
      </div>
      <div className="flex items-center justify-between">
        <Link
          href="/auth/reset-password"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </Link>
      </div>
      <button
        disabled={loading}
        type="submit"
        className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
      >
        {loading ? 'Loading...' : 'Sign in'}
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
export default React.memo(SignInForm)
