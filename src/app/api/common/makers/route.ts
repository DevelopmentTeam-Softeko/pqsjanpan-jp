import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const isThirdPartyStock =
    Number(searchParams.get('is_third_party_stock')) || 0
  const path = isThirdPartyStock
    ? '/vehicle/getBulkStockCount'
    : '/bfbd/getmakercount'
  try {
    const response = await fetch(`${process?.env?.API_BASE_URL}/api${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0, no-cache',
        Pragma: 'no-cache',
        ETag: 'false',
      },
    })
    const res: any = await response?.json()
    if (isThirdPartyStock) {
      return NextResponse.json(
        res?.data?.MakerList?.map((ele: any) => ({
          label: ele?.Name,
          value: ele?.Id,
          count: ele?.TotalCount,
        })),
      )
    }
    return NextResponse.json(
      res?.map((ele: any) => ({
        label: ele?.makers_name,
        value: ele?.id,
      })),
    )
  } catch (e: any) {
    return NextResponse.json({
      message: e?.message,
      url: `${process?.env?.API_BASE_URL}/api${path}`,
    })
  }
}
