import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { id: string; maker: string; model: string }
  },
) {
  let res = {}
  try {
    const { searchParams } = new URL(request.url)
    const timeStamp = Number(searchParams.get('time-stamp')) || -1
    const isThirdParty = Number(searchParams.get('all-stock')) === 1
    const { id, maker, model } = params
    const url = isThirdParty
      ? `${process?.env?.API_BASE_URL}/api/vehicle/getBulkProductDetailsById/${id}?time-stamp=${timeStamp}`
      : `${process?.env?.API_BASE_URL}/api/vehicle/getProductDetailsById/${maker}/${model}/${id}?time-stamp=${timeStamp}`
    const response: any = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0, no-cache',
        Pragma: 'no-cache',
        ETag: 'false',
        client_id: `${process.env.AUTH_CLIENT_ID}`,
        client_secret: `${process.env.AUTH_CLIENT_SECRET}`,
      },
    })
    const productRes = await response?.json()
    res = productRes?.data || {}
  } catch (e: any) {
    return NextResponse.json(res)
  }
  return NextResponse.json(res)
}
