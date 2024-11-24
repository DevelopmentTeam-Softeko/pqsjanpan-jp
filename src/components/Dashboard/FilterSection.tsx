'use client'

import { ArrowPathIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import ScrollToTop from '@/components/Common/ScrollToTop'

interface Props {
  emailParam: string
  keywordParam: string
  pageParam: number
  typeId: number
}
export default function FilterSection({
  emailParam,
  keywordParam,
  pageParam,
  typeId,
}: Props) {
  const [email, setEmail] = useState(emailParam)
  const [keyword, setKeyword] = useState(keywordParam)
  const hasPageApplied = pageParam && Number(pageParam) > 1
  const hasEmailApplied = emailParam?.trim()?.length > 0
  const hasKeywordApplied = keywordParam?.trim()?.length > 0
  const hasAppliedFilter = hasEmailApplied || hasKeywordApplied
  const href = useMemo(() => {
    const queryParams = []
    if (email?.trim()?.length > 0) {
      queryParams.push(`email=${email}`)
    }

    if (keyword?.trim()?.length > 0) {
      queryParams.push(`keyword=${keyword}`)
    }
    const queryString = queryParams.join('&')
    return `/user/dashboard${queryString ? `?${queryString}` : ''}`
  }, [email, keyword, pageParam])

  useEffect(() => {
    if (hasEmailApplied) {
      setEmail(emailParam)
    } else {
      setEmail('')
    }
    if (hasKeywordApplied) {
      setKeyword(keywordParam)
    } else {
      setKeyword('')
    }
  }, [emailParam, keywordParam])

  const handleOnChangeEmail = useCallback((event: any) => {
    setEmail(event?.target?.value)
  }, [])
  const handleOnChangeKeyword = useCallback((event: any) => {
    setKeyword(event?.target?.value)
  }, [])
  return (
    <>
      <ScrollToTop />
      <div
        className={`mx-auto mt-6 grid w-full grid-cols-2 items-center justify-items-stretch gap-4 rounded bg-white px-6 lg:grid-cols-9 lg:px-8`}
      >
        {typeId === 2 && (
          <div className="col-span-2 flex">
            <input
              value={email}
              onChange={handleOnChangeEmail}
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:text-gray-600 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
              placeholder="Search by email"
            />
          </div>
        )}
        <div className="col-span-2 flex">
          <input
            value={keyword}
            onChange={handleOnChangeKeyword}
            type="text"
            name="keyaord"
            id="keyaord"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 placeholder:text-gray-600 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
            placeholder="Search by chassis number"
            required={true}
          />
        </div>
        <div
          className={`${
            hasAppliedFilter ? 'col-span-2' : 'col-span-2 lg:col-span-1'
          } flex`}
        >
          <Link
            className="flex w-full items-center justify-center rounded bg-primary-700 px-4 py-2 text-center font-bold text-white hover:bg-pink-900"
            href={href}
          >
            <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
            <span>Search</span>
          </Link>
          {hasAppliedFilter && (
            <Link
              className="ml-2 flex w-full items-center justify-center rounded bg-gray-400  px-4 py-2 text-center font-bold text-gray-600 hover:bg-gray-800 hover:text-white"
              href={`/user/dashboard${
                hasPageApplied ? `?page=${pageParam}` : ''
              }`}
            >
              <ArrowPathIcon className="mr-2 h-5 w-5" />
              <span>Reset</span>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
