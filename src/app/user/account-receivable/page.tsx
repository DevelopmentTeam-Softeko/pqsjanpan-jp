import type { Metadata } from 'next'
import React from 'react'

import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'
import { getCustomerId } from '@/lib/auth'

import AccountHistory from './AccountHistory'

export const metadata: Metadata = {
  ...generateSEOMeta('Account Receivable'),
}
export default function CompanyProfile() {
  const customerId = getCustomerId()
  return (
    <div>
      <Breadcrumb
        items={[
          { title: 'Account Receivable', uri: '/user/account-receivable' },
        ]}
        variant="full"
      />
      <div className="mt-5 px-6">
        <AccountHistory customerId={customerId} />
      </div>
    </div>
  )
}
