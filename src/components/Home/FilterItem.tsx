'use client'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import React, { Fragment, useMemo } from 'react'

export interface FilterItemType {
  label: string
  value: number
  count?: number
}
interface Props {
  placeholder: string
  data: Array<FilterItemType>
  value: number
  setValue: (value: number) => void
  showCount?: boolean
}

export default React.memo(function FilterItem(props: Props) {
  const selectedLabel = useMemo(() => {
    if (props?.value < 1) {
      return undefined
    }
    const item = props?.data?.find(
      (ele) => Number(ele?.value) === Number(props?.value),
    )
    return item?.label
  }, [props?.value, props?.data])

  return (
    <Listbox value={props?.value} onChange={props?.setValue}>
      <div className="relative flex-1">
        <Listbox.Button className="relative w-full cursor-default rounded border border-gray-300 bg-gray-100 py-2 pl-3 pr-10 text-left sm:text-sm">
          <span className="block truncate">
            {selectedLabel || props?.placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
            {props?.data?.map((item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-gray-400 text-gray-700' : 'text-gray-900'
                  }`
                }
                value={item?.value}
              >
                {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                {({ selected }) => (
                  <>
                    <span
                      className={`flex justify-between truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      <span>{item.label}</span>
                      {props?.showCount && item?.count && (
                        <span className="ml-2">({item.count})</span>
                      )}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
})
