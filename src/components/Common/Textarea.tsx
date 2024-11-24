import React from 'react'

interface Props {
  label?: string
  value?: string
  placeholder: string
  classNames?: string
}
export default function Textarea(props: Props) {
  return (
    <div className={props?.classNames}>
      <textarea
        className="block w-full appearance-none rounded border border-solid border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 placeholder:text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        placeholder={props?.placeholder}
      />
    </div>
  )
}
