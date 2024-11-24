'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

interface PaginationProps {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
  link: string
}

function Pagination({
  total,
  perPage,
  currentPage,
  lastPage,
  link,
}: PaginationProps) {
  const searchParams = useSearchParams()

  const getPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString()) // Set the new page number
    return `${link}?${params.toString()}`
  }

  const renderPageLink = (page: number, isActive: boolean) => {
    const pageLink = getPageLink(page)
    return (
      <li key={page}>
        <a
          href={pageLink}
          onClick={(e) => {
            e.preventDefault()
            window.location.href = pageLink
          }}
          className={`${
            isActive
              ? 'z-10 border border-solid border-primary-300 bg-primary-50 px-3 py-2 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700'
              : 'border border-solid border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          }`}
        >
          {page}
        </a>
      </li>
    )
  }

  const renderPageLinks = () => {
    const pageLinks = []

    if (currentPage > 1) {
      pageLinks.push(
        <li key="prev">
          <a
            href={getPageLink(currentPage - 1)}
            onClick={(e) => {
              e.preventDefault()
              window.location.href = getPageLink(currentPage - 1)
            }}
            className="border border-solid border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Prev
          </a>
        </li>,
      )
    }

    for (let page = 1; page <= lastPage; page += 1) {
      const isActive = page === currentPage
      const shouldDisplay =
        Math.abs(page - currentPage) <= 1 || page === 1 || page === lastPage

      if (shouldDisplay) {
        pageLinks.push(renderPageLink(page, isActive))
      } else if (page === 2 || page === lastPage - 1) {
        pageLinks.push(
          <li key={`ellipsis-${page}`}>
            <span className="text-gray-500">...</span>
          </li>,
        )
      }
    }

    if (currentPage < lastPage) {
      pageLinks.push(
        <li key="next">
          <a
            href={getPageLink(currentPage + 1)}
            onClick={(e) => {
              e.preventDefault()
              window.location.href = getPageLink(currentPage + 1)
            }}
            className="border border-solid border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </a>
        </li>,
      )
    }

    return pageLinks
  }

  return (
    <nav
      className="flex items-center justify-between p-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500">
        Showing{' '}
        <span className="font-semibold text-gray-900">
          {(currentPage - 1) * perPage + 1}-
          {Math.min(currentPage * perPage, total)}
        </span>{' '}
        of <span className="font-semibold text-gray-900">{total}</span>
      </span>
      <ul className="inline-flex items-center -space-x-px">
        {renderPageLinks()}
      </ul>
    </nav>
  )
}

export default Pagination
