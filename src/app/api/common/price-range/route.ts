import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

export async function GET() {
  const url = `${process?.env?.API_BASE_URL}/api/common/getFobPriceRange`
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0, no-cache',
        Pragma: 'no-cache',
        ETag: 'false',
      },
    })
    const res: any = await response?.json()
    return NextResponse.json(
      res?.data?.map((ele: any) => ({
        value: parseInt(ele?.Name?.replace('$', ''), 10),
        label: ele?.Name,
      })),
    )
  } catch (e: any) {
    return NextResponse.json({
      message: e?.message,
      url,
    })
  }
}
