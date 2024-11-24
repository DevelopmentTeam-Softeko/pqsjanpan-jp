import type { HTMLInputTypeAttribute } from 'react'
import React from 'react'

interface Props {
  label?: string
  value?: string
  placeholder: string
  type: HTMLInputTypeAttribute
}
export default function Input(props: Props) {
  return (
    <div>
      <input
        className="block w-full appearance-none rounded border border-solid border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 placeholder:text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        type={props?.type}
        placeholder={props?.placeholder}
      />
    </div>
  )
}
