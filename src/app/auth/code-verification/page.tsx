import Link from 'next/link'
import React from 'react'

import CodeVerifier from './CodeVerifier'

export default function CodeVerification(props: any) {
  const { email, verificationCode, action } = props?.searchParams || {}
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 px-8 py-24 md:space-y-6">
          {email && verificationCode ? (
            <CodeVerifier
              email={email}
              verificationCode={verificationCode}
              action={action}
            />
          ) : (
            <div className="text-center">
              <p className="mb-10 text-center text-2xl font-bold text-red-500">
                You&apos;ve invalid email or verification Code
              </p>
              <Link
                href="/"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Return to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
