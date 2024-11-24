import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const timeStamp = Number(searchParams.get('time-stamp')) || -1
  const url = `${process?.env?.API_BASE_URL}/api/vehicle/getHomeStockList?time-stamp=${timeStamp}`
  const controller = new globalThis.AbortController()
  const timeout = setTimeout(() => {
    controller.abort()
  }, 20000)
  try {
    const response: any = await fetch(url, {
      signal: controller.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0, no-cache',
        Pragma: 'no-cache',
        ETag: 'false',
      },
      body: JSON.stringify({
        publish_company_id_1: 3,
        publish_company_id_2: 6,
        PageNo: 1,
        PageSize: 10,
        timeStamp,
      }),
    })
    const products = await response?.json()
    const data = products?.data?.DataList || []
    if (data?.length >= 8) {
      return NextResponse.json(data?.slice(0, 8))
    }
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json([])
  } finally {
    clearTimeout(timeout)
  }
}
