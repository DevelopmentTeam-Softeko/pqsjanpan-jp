'use client'

import { useRouter } from 'next/navigation'
import type { FormEvent, LegacyRef } from 'react'
import React, { useCallback, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { changePassword } from '@/api/apiDef'

interface Props {
  customerId: number
  email: string
}
const ChangePasswordForm = (props: Props) => {
  const { replace } = useRouter()
  const [loading, setLoading] = useState(false)
  const passwordRef: LegacyRef<HTMLInputElement> | undefined = useRef(null)
  const confirmPasswordRef: LegacyRef<HTMLInputElement> | undefined =
    useRef(null)
  const handleOnSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        event?.preventDefault()
        setLoading(true)
        const password = passwordRef?.current?.value
        const confirmPassword = confirmPasswordRef?.current?.value
        if (password && confirmPassword && password === confirmPassword) {
          const res: any = await changePassword(
            password,
            props?.customerId,
            props?.email,
          )
          if (res?.error) {
            toast(res?.message, { type: 'error' })
          } else {
            toast(
              'Congratulations, your password has been successfully updated!',
              { type: 'success' },
            )
            replace('/user/dashboard')
          }
        } else {
          toast('Password and confirm password must be same', { type: 'error' })
        }
      } catch (e: any) {
        toast(e || 'Unexpected error', { type: 'error' })
      } finally {
        setLoading(false)
      }
    },
    [confirmPasswordRef, passwordRef, props],
  )
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          New Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          className="block w-full rounded-lg border border-solid border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
          placeholder="New Password"
          required={true}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Confirm New Password
        </label>
        <input
          ref={confirmPasswordRef}
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm New Password"
          className="block w-full rounded-lg border border-solid border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
          required={true}
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
      >
        {loading ? 'Loading...' : 'Change password'}
      </button>
    </form>
  )
}
export default React.memo(ChangePasswordForm)
