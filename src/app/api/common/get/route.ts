import axios from 'axios'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const endpoint = searchParams.get('endpoint')

  if (!endpoint) {
    return NextResponse.json(
      { error: 'Missing "endpoint" query parameter.' },
      { status: 400 },
    )
  }

  const url = `${process.env.API_BASE_URL}${endpoint}`

  try {
    const { data } = await axios.get(url)
    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching data:', error)

    const err = error as any
    const statusCode = err.response?.status || 500
    const errorMessage =
      err.response?.data?.message || 'An error occurred while fetching data.'

    return NextResponse.json({ error: errorMessage }, { status: statusCode })
  }
}
