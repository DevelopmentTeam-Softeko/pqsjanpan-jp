'use client'

import { ChevronRightIcon, XCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import { CustomerBalance } from '@/components/Common/CustomerBalance'
import {
  AuthenticateManusAgent,
  AuthenticateManusCustomer,
  ProfileAuthManus,
  ProfileUnAuthManus,
  UnAuthenticateManus,
} from '@/config/staticData'

interface Props {
  isOpen: boolean
  onStateChange: () => void
  customerId: number
  customerBalance: any
  customerDetails: any
  typeId: number
}

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#2d3748',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#2d3748',
    padding: '1.2em 1em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#2d3748',
  },
  bmItem: {
    display: 'block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const SideDrawer = (props: Props) => {
  const ProfileMenus =
    props?.customerId > 0 ? ProfileAuthManus : ProfileUnAuthManus
  const menus = [
    props?.typeId === 2 && AuthenticateManusAgent,
    props?.typeId === 3 && AuthenticateManusCustomer,
    UnAuthenticateManus,
  ]?.find((i) => i) as any
  return (
    <Menu
      right
      isOpen={props?.isOpen}
      noOverlay={true}
      styles={styles}
      customBurgerIcon={false}
      customCrossIcon={false}
      outerContainerId="body"
    >
      <div>
        <div className="px-3 py-2 text-center">
          <button onClick={props?.onStateChange}>
            <XCircleIcon className="h-8 w-8 text-white" />
          </button>
        </div>
        <div>
          <div className="mb-3 border-b-2 border-solid border-gray-700 pb-5">
            <CustomerBalance
              customerId={props?.customerId}
              customerBalance={props?.customerBalance}
              customerDetails={props?.customerDetails}
              typeId={props?.typeId}
            />
          </div>
          <div className="mb-3 border-b-2 border-solid border-gray-700 pb-5">
            <ul className="list-none">
              {ProfileMenus?.map((ele: any) => {
                return (
                  <li key={ele?.name} onClick={props?.onStateChange}>
                    <Link
                      key={ele?.name}
                      href={ele?.href}
                      {...(ele?.isExternal ? { target: '_blank' } : {})}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <span>{ele?.name}</span>
                      <ChevronRightIcon className="h-6 w-6" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className="list-none">
            {menus
              ?.reduce(
                // @ts-ignore
                (acc, item) => [...acc, ...(item.manus || [item])],
                [],
                // @ts-ignore
              )
              ?.map((ele: any) => {
                // if (ele?.manus && ele?.manus?.length > 0) {
                //   return <DropDownMenu key={ele?.name} {...ele} />
                // }
                return (
                  <li key={ele?.name} onClick={props?.onStateChange}>
                    <Link
                      key={ele?.name}
                      href={ele?.href}
                      {...(ele?.isExternal ? { target: '_blank' } : {})}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <span>{ele?.name}</span>
                      <ChevronRightIcon className="h-6 w-6" />
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </Menu>
  )
}

export default SideDrawer
