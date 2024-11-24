import React from 'react'

interface Props {
  label?: string
  options: Array<{ label: string; value: string }>
  placeholder: string
}
export default function Select(props: Props) {
  return (
    <div className="relative">
      <select
        className="block w-full appearance-none rounded border border-solid border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id="grid-state"
      >
        <option selected disabled>
          {props?.placeholder}
        </option>
        {props?.options?.map((ele) => (
          <option key={ele?.value}>{ele?.label}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}
