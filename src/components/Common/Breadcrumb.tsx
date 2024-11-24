import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

interface Props {
  items: Array<{
    title: string
    uri: string
  }>
  variant?: 'full' | 'box'
}
export default React.memo(function Breadcrumb(props: Props) {
  const variant = props?.variant || 'box'
  return (
    <div
      className={classNames('mx-auto mt-5 flex w-full sm:px-6 lg:px-8', {
        container: variant === 'box',
      })}
      aria-label="Breadcrumb"
    >
      <nav className="w-full rounded-lg border p-4 shadow">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
          </li>
          {props?.items?.map((item) => (
            <li key={item?.title}>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  href={item?.uri}
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-primary-600 md:ml-2"
                >
                  {item?.title}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
})