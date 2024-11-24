import fs from 'fs'
import { NextResponse } from 'next/server'
import fetch from 'node-fetch'
import path from 'path'

import { calculatePagination } from '@/utils'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page')) || 1
    const perPage = Number(searchParams.get('per_page')) || 10
    const makerId = Number(searchParams.get('make'))
    const modelId = Number(searchParams.get('model'))
    const bodyId = Number(searchParams.get('body'))
    const fromYear = Number(searchParams.get('fromYear'))
    const toYear = Number(searchParams.get('toYear'))
    const fromPrice = Number(searchParams.get('fromPrice'))
    const toPrice = Number(searchParams.get('toPrice'))
    const chassisNo = searchParams.get('chassisNo')
    const isThirdParty = Number(searchParams.get('isThirdParty'))
    const hostPath = `/vehicle/${
      isThirdParty ? 'getBulkStockList' : 'getStockList'
    }`
    let body = {
      publish_company_id_1: 3,
      publish_company_id_2: 6,
      PageNo: page,
      PageSize: perPage,
    } as any
    body = {
      ...(makerId > 0 && { fk_makers_id: makerId }),
      ...(modelId > 0 && { fk_model_id: modelId }),
      ...(bodyId > 0 && { fk_vehicle_body_type_id: bodyId }),
      ...(fromYear > 0 && { registraion_year: `${fromYear}` }),
      ...(toYear > 0 && { manufacturing_year: `${toYear}` }),
      ...(toYear > 0 && { manufacturing_year: `${toYear}` }),
      ...(fromPrice > 0 && { fob_price_from: `$${fromPrice}` }),
      ...(toPrice > 0 && { fob_price_to: `$${toPrice}` }),
      ...(chassisNo && { chassis_no: chassisNo }),
      ...body,
    }
    let bannerUrl = '/banner/default-banner.jpg'
    const hasMaker = makerId && makerId > 0
    const hasBody = bodyId && bodyId > 0
    const stockListPath = isThirdParty ? 'third-party-stock-list' : 'stock-list'
    if (hasBody) {
      const bodyImagePath = path.join(
        process.cwd(),
        'public',
        'banner',
        'body',
        stockListPath,
        `${bodyId}.jpg`,
      )
      if (fs.existsSync(bodyImagePath)) {
        bannerUrl = `/banner/body/${stockListPath}/${bodyId}.jpg`
      }
    } else if (hasMaker) {
      const makerImagePath = path.join(
        process.cwd(),
        'public',
        'banner',
        'maker',
        stockListPath,
        `${makerId}.jpg`,
        isThirdParty ? '' : '',
      )
      if (fs.existsSync(makerImagePath)) {
        bannerUrl = `/banner/maker/${stockListPath}/${makerId}.jpg`
      }
    }
    const response = await fetch(
      `${process?.env?.API_BASE_URL}/api${hostPath}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    )
    const res: any = await response?.json()
    const paginationInfo = calculatePagination(res?.data?.Total, perPage, page)
    return NextResponse.json({
      data: res?.data?.DataList || [],
      ...paginationInfo,
      bannerUrl,
    })
  } catch (e: any) {
    return NextResponse.json(
      {
        error: true,
        message: e?.message || 'Unexpected error',
      },
      { status: 500 },
    )
  }
}
