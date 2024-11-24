'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import DropDownMenu from '@/components/NavBar/DropDownMenu'
import {
  AuthenticateManusAgent,
  AuthenticateManusCustomer,
  UnAuthenticateManus,
} from '@/config/staticData'
import { getTypeId } from '@/lib/clientAuth'

export interface Menu {
  name: string
  href: string
  manus?: Array<Menu>
}

export default function NavBar() {
  const [typeId, setTypeId] = useState<number | null>(null)

  useEffect(() => {
    const id = getTypeId()
    setTypeId(id)
  }, [])
  const menus = [
    typeId === 2 && AuthenticateManusAgent,
    typeId === 3 && AuthenticateManusCustomer,
    UnAuthenticateManus,
  ]?.find((i) => i) as any
  return (
    <nav className="hidden bg-gray-800 lg:block">
      <div className="container mx-auto w-full sm:px-6 lg:px-8">
        <div
          className={classNames(
            `relative grid h-16 items-center justify-items-stretch border-t border-gray-900 grid-cols-8`,
          )}
        >
          {menus.map((ele: any) => {
            if (ele?.manus && ele?.manus?.length > 0) {
              return <DropDownMenu key={ele?.name} {...ele} />
            }
            return (
              <Link
                key={ele?.name}
                href={ele?.href}
                {...(ele?.isExternal ? { target: '_blank' } : {})}
                className="flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {ele?.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
