import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

const NotFound = () => {
  return (
    <div className="rounded-md bg-gray-100 p-4 text-center">
      <p className="text-gray-600">
        <span className="text-2xl">
          <MagnifyingGlassIcon width={100} className="m-auto" />
        </span>
        <span className="text-2xl">Oops! No data found.</span>
      </p>
    </div>
  )
}
export default NotFound
