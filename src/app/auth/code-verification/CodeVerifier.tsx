'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

import { codeVerify } from '@/api/apiDef'
import { usePostSignInProcess } from '@/hooks/usePostSignInProcess'

interface Props {
  email: string
  action: string
  verificationCode: string
}
const CodeVerifier = (props: Props) => {
  const postSignInProcess = usePostSignInProcess()
  const { replace } = useRouter()
  const isStartVerifying = useRef(false)
  useEffect(() => {
    const isResetPassword = props?.action === 'reset-password'
    if (!isStartVerifying.current && props?.email && props?.verificationCode) {
      isStartVerifying.current = true
      codeVerify(props?.email, props?.verificationCode, isResetPassword)
        .then((res) => {
          if (isResetPassword) {
            window.location.replace(
              `/auth/reset-password?email=${props?.email}&verificationCode=${props?.verificationCode}`,
            )
          } else {
            postSignInProcess(res?.data)
          }
        })
        .catch((e) => {
          replace('/')
          toast(e || 'Your verification code is not valid', {
            type: 'error',
            autoClose: 10000,
          })
        })
        .finally(() => {
          isStartVerifying.current = false
        })
    }
  }, [props])
  return (
    <p className="mt-5 py-24 text-center text-2xl font-bold text-gray-600">
      Verifying your code.....
    </p>
  )
}
export default React.memo(CodeVerifier)
