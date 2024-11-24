'use client'

import { InboxIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import React, { useCallback, useContext } from 'react'

import {
  ACTION,
  LocalStateDispatchContext,
  MODAL,
} from '@/app/LocalStateProvider'

interface Props {
  variant?: 'default' | 'large'
  label: string
  product?: {
    vehicle: string
    id: number
    image: string
  }
}
export default React.memo(function InquiryButton(props: Props) {
  const dispatch = useContext(LocalStateDispatchContext)
  const handleOpenModal = useCallback(() => {
    // @ts-ignore
    dispatch({
      type: ACTION.OPEN_MODAL,
      payload: {
        id: MODAL.INQUIRY_MODAL,
        value: props?.product,
      },
    })
  }, [])
  const isLarge = props?.variant === 'large'
  return (
    <button
      onClick={handleOpenModal}
      className={classNames(
        'inline-flex items-center justify-center rounded-full bg-primary-700 py-2 px-4 text-white hover:bg-primary-900 w-full',
        { 'py-4': isLarge, 'text-xl': isLarge },
      )}
    >
      <InboxIcon
        className={classNames('mr-2 h-4 w-4 text-white', {
          'mr-4': isLarge,
          'w-8': isLarge,
          'h-8': isLarge,
        })}
      />
      {props?.label}
    </button>
  )
})
