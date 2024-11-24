import type { Metadata } from 'next'
import React from 'react'

import { generateSEOMeta } from '@/app/next-seo.config'
import Breadcrumb from '@/components/Common/Breadcrumb'
import FilterSection from '@/components/Dashboard/FilterSection'
import PurchaseHistory from '@/components/Dashboard/PurchaseHistory'
import { getCustomerId, getTypeId } from '@/lib/auth'

export const metadata: Metadata = {
  ...generateSEOMeta('Dashboard'),
}
export default function Dashboard(props: any) {
  const { page = 1, email = '', keyword = '' } = props?.searchParams || {}
  const customerId = getCustomerId()
  const typeId = getTypeId()
  return (
    <div>
      <Breadcrumb
        items={[{ title: 'Purchase History', uri: '/user/dashboard' }]}
        variant="full"
      />
      <FilterSection
        emailParam={email}
        keywordParam={keyword}
        pageParam={page}
        typeId={typeId}
      />
      <div className="mx-auto mt-5 flex w-full sm:px-6 lg:px-8">
        <PurchaseHistory
          customerId={customerId}
          typeId={typeId}
          page={page}
          email={email}
          keyword={keyword}
        />
      </div>
    </div>
  )
}
