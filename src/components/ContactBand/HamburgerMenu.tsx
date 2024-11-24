'use client'

import { Bars3Icon } from '@heroicons/react/20/solid'
import { useState } from 'react'

import SideDrawer from '@/components/Common/SideDrawer'

interface Props {
  customerId: number
  customerBalance: any
  customerDetails: any
  typeId: number
}
const HamburgerMenu = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleOnStateChange = () => {
    setIsMenuOpen((state) => !state)
  }
  return (
    <>
      <button
        className="relative block lg:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <Bars3Icon className="h-8 w-8 text-white" />
      </button>
      <SideDrawer
        typeId={props?.typeId}
        isOpen={isMenuOpen}
        onStateChange={handleOnStateChange}
        customerId={props?.customerId}
        customerBalance={props?.customerBalance}
        customerDetails={props?.customerDetails}
      />
    </>
  )
}

export default HamburgerMenu
