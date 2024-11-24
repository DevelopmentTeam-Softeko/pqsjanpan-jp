'use client'

import { useLayoutEffect } from 'react'

import { removeAuth } from '@/lib/authClient'

export default function Logout() {
  useLayoutEffect(() => {
    removeAuth()
    window.location.replace('/')
  }, [])
  return (
    <section className="container mx-auto flex w-full flex-col-reverse gap-8 py-5 sm:px-6 lg:flex-row lg:px-8">
      <h3 className="text-center font-bold">You are logging out</h3>
    </section>
  )
}
