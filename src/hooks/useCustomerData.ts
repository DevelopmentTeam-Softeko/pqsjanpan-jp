'use client'

import { useEffect, useState } from 'react'

import { getCustomerBalance, getCustomerDetails } from '@/api/apiDef'

export const useCustomerData = (customerId: number | null) => {
  const [customerBalance, setCustomerBalance] = useState<any>(null)
  const [customerDetails, setCustomerDetails] = useState<any>(null)

  useEffect(() => {
    if (customerId) {
      ;(async () => {
        const balance = await getCustomerBalance(customerId)
        const details = await getCustomerDetails(customerId)
        setCustomerBalance(balance)
        setCustomerDetails(details)
      })()
    }
  }, [customerId])

  return { customerBalance, customerDetails }
}
