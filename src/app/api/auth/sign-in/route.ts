import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

export async function POST(request: Request) {
  try {
    const req = await request.json()
    const { email, password } = req
    if (email && password) {
      const response = await fetch(`${process?.env?.API_BASE_URL}/token`, {
        method: 'POST',
        body: `grant_type=password&username=${email}&password=${password}&client_id=${process?.env?.AUTH_CLIENT_ID}&client_secret=${process?.env?.AUTH_CLIENT_SECRET}`,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
      const res: any = await response.json()
      if (res?.token) {
        return NextResponse.json(res)
      }
      return NextResponse.json(
        {
          error: true,
          message: res?.error_description,
        },
        { status: 500 },
      )
    }
    return NextResponse.json(
      {
        error: true,
        message: "Fields can't be empty",
      },
      { status: 500 },
    )
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
