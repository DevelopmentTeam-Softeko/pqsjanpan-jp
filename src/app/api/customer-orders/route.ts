import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

import { calculatePagination } from '@/utils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page')) || 1
  const perPage = Number(searchParams.get('per_page')) || 10
  const url = `${process?.env?.API_BASE_URL}/api/order/getAllOrderzByAgentId`
  const customerId = Number(searchParams.get('customer_id'))
  const email = searchParams.get('email') || ''
  const keyword = searchParams.get('keyword') || ''
  const body = {
    customer_id: customerId,
    PageNo: page,
    PageSize: perPage,
    ...(keyword?.trim()?.length > 0 ? { Keyword: keyword } : {}),
    ...(email?.trim()?.length > 0 ? { customer_email: email } : {}),
  }
  try {
    const response: any = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const res = await response?.json()
    const data = res?.data?.DataList || []
    const paginationInfo = calculatePagination(res?.data?.Total, perPage, page)
    return NextResponse.json({
      data,
      ...paginationInfo,
    })
  } catch (e: any) {
    return NextResponse.json([])
  }
}
