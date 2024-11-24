'use client'

import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import Link from 'next/link'
import { Fragment } from 'react'

import { ProfileAuthManus, ProfileUnAuthManus } from '@/config/staticData'

interface Props {
  customerId: number
}
export default function ProfileMenu(props: Props) {
  const Menus = props?.customerId > 0 ? ProfileAuthManus : ProfileUnAuthManus
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none">
          <span className="sr-only">Open user menu</span>
          <UserCircleIcon className="h-8 w-8 text-white" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none">
          <>
            {Menus?.map((ele: any) => {
              return (
                <Menu.Item key={ele?.href}>
                  {({ active }) => (
                    <Link
                      href={ele?.href}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      )}
                    >
                      {ele?.name}
                    </Link>
                  )}
                </Menu.Item>
              )
            })}
          </>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
