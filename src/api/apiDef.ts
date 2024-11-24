import axios from 'axios'

import request from '@/api/client'

interface StockListParams {
  make?: number
  model?: number
  body?: number
  fromYear?: number
  toYear?: number
  fromPrice?: number
  toPrice?: number
  chassisNo?: string
  page?: number
  perPage?: number
  isThirdParty?: number
}

export async function getMakerList(is_third_party_stock = 0) {
  try {
    const queryString = new URLSearchParams({
      is_third_party_stock: is_third_party_stock.toString(),
      timeStamp: new Date()?.getTime().toString(),
    }).toString()
    const res = await fetch(
      `${process.env.UI_HOSTNAME}/api/common/makers/?${queryString}`,
      {
        next: {
          revalidate: 5000,
        },
      },
    )
    return await res?.json()
  } catch (e) {
    return []
  }
}

export const getMaxAndMinPrice = async (endpoint: string) => {
  try {
    // Use a relative endpoint if in the same domain or update base URL

    const URL =
      process.env.NODE_ENV === 'production'
        ? `https://seo.pqsjapan.jp/api/common/get?endpoint=${endpoint}`
        : `http://localhost:3000/api/common/get?endpoint=${endpoint}`

    const response = await fetch(URL, {
      next: {
        revalidate: 5000, // Works only in Next.js `app` directory
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`)
    }

    const data = await response?.json()

    if (!data?.data?.data?.length) return []

    // Transform data
    const transformData = data.data.data?.map((ele: any) => ({
      label: ele?.Name,
      value: ele?.Id,
    }))

    return transformData
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error)
    return [] // Return empty array on error
  }
}

export async function getBodyTypeList(is_third_party_stock = 0) {
  try {
    const queryString = new URLSearchParams({
      is_third_party_stock: is_third_party_stock.toString(),
      timeStamp: new Date()?.getTime().toString(),
    }).toString()
    const res = await fetch(
      `${process.env.UI_HOSTNAME}/api/common/bodyTypes/?${queryString}`,
      {
        next: {
          revalidate: 5000,
        },
      },
    )
    return await res?.json()
  } catch (e) {
    return []
  }
}

export async function getHomePageProducts() {
  try {
    const res = await fetch(
      `${
        process.env.UI_HOSTNAME
      }/api/home-stock-list?timeStamp=${new Date()?.getTime()}`,
      {
        next: {
          revalidate: 5000,
        },
      },
    )
    return await res?.json()
  } catch (e) {
    return []
  }
}

export async function getProductDetails(
  id: number,
  maker: string,
  model: string,
  isThirdParty: boolean,
) {
  try {
    const res = await fetch(
      `${
        process.env.UI_HOSTNAME
      }/api/product/${maker}/${model}/${id}?all-stock=${
        isThirdParty ? 1 : 0
      }&timeStamp=${new Date()?.getTime()}`,
      {
        cache: 'no-store',
      },
    )
    return await res.json()
  } catch (e) {
    return {}
  }
}

export async function getBulkStockCount() {
  return request(`/vehicle/getBulkStockCount`)
}

export async function getRelatedProduct(makerId: number, modelId: number) {
  return request(`/vehicle/getSimilarProductList/${makerId}/${modelId}`)
}

export async function getFeatures() {
  return request(`/bfbd/getfeature`)
}

export async function getCountries() {
  return request(`/bfbd/getallcountry`)
}

export async function getStockListData(queryParams: StockListParams) {
  try {
    const {
      make,
      model,
      body,
      fromYear,
      toYear,
      fromPrice,
      toPrice,
      chassisNo,
      page = 1,
      perPage = 10,
      isThirdParty = 0,
    } = queryParams
    const queryString = new URLSearchParams({
      make: make?.toString() || '',
      model: model?.toString() || '',
      body: body?.toString() || '',
      fromYear: fromYear?.toString() || '',
      toYear: toYear?.toString() || '',
      fromPrice: fromPrice?.toString() || '',
      toPrice: toPrice?.toString() || '',
      chassisNo: chassisNo ?? '',
      page: page?.toString(),
      per_page: perPage?.toString(),
      isThirdParty: `${isThirdParty}`,
    }).toString()
    const response = await fetch(
      `${process.env.UI_HOSTNAME}/api/stock-list?${queryString}`,
      { cache: 'no-store' },
    )
    return await response.json()
  } catch (e) {
    return {
      data: [],
    }
  }
}

export const sendEmailQuote = async (body: object) => {
  try {
    const response = await fetch(
      `${process?.env?.API_BASE_URL}/api/authentication/quotequerybymail`,
      {
        cache: 'no-store',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    )
    return response.ok
  } catch (e) {
    return false
  }
}

export const sendForgotPassOTP = async (email: string) => {
  const response = await fetch(
    `${process?.env?.API_BASE_URL}/api/user/sendCodeForgotPass`,
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        client_id: `${process.env.AUTH_CLIENT_ID}`,
        client_secret: `${process.env.AUTH_CLIENT_SECRET}`,
      },
      body: JSON.stringify({
        Email: email,
      }),
    },
  )
  const json = await response.json()
  if (response.ok) {
    return json
  }
  throw json?.Message
}

export const sendResetPassRequest = async (
  email: string,
  password: string,
  confirmPassword: string,
) => {
  const response = await fetch(
    `${process?.env?.API_BASE_URL}/api/user/resetPassword`,
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        client_id: `${process.env.AUTH_CLIENT_ID}`,
        client_secret: `${process.env.AUTH_CLIENT_SECRET}`,
      },
      body: JSON.stringify({
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
      }),
    },
  )
  const json = await response.json()
  if (response.ok) {
    return json
  }
  throw json?.Message
}

export async function signIn(email: string, password: string) {
  const response = await fetch(`${process.env.UI_HOSTNAME}/api/auth/sign-in`, {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
  const json = await response.json()
  if (response.ok) {
    return json
  }
  throw json?.message
}
export async function signUp(
  name: string,
  email: string,
  phoneNumber: string,
  city: string,
  address: string,
  country: number,
  port: number,
) {
  const response = await fetch(
    `${process?.env?.API_BASE_URL}/api/user/insertUser`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        client_id: `${process.env.AUTH_CLIENT_ID}`,
        client_secret: `${process.env.AUTH_CLIENT_SECRET}`,
      },
      body: JSON.stringify({
        name,
        email,
        contact_number_1: phoneNumber,
        city_name: city,
        present_address: address,
        country_id_fk: country,
        pref_port_id_fk: port,
      }),
    },
  )
  const json = await response.json()
  if (response.ok) {
    return json
  }
  throw json?.message
}
export async function codeVerify(
  email: string,
  verificationCode: string,
  initiateFromResetPassword = false,
) {
  const url = `${process?.env?.API_BASE_URL}/api/user/${
    initiateFromResetPassword ? 'sendCode' : 'verifyCode'
  }`
  const response = await fetch(url, {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      client_id: `${process?.env?.AUTH_CLIENT_ID}`,
      client_secret: `${process?.env?.AUTH_CLIENT_SECRET}`,
    },
    body: JSON.stringify({
      Email: email,
      VerificationCode: verificationCode,
    }),
  })
  const json = await response.json()
  if (response.ok) {
    return json
  }
  throw json?.Message
}

export async function changePassword(
  password: string,
  customerId: number,
  email: string,
) {
  return request(`/authentication/changepassword`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      id: customerId,
      login_name: email,
      login_password: password,
    },
  })
}

export async function getCustomerBalance(customerId?: number) {
  if (customerId) {
    return request(`/bfbd/getcustomerbalance/${customerId}`)
  }
  return {}
}
export async function getCustomerDetails(customerId?: number) {
  if (customerId) {
    return request(`/bfbd/getcustomerById/${customerId}`)
  }
  return {}
}

export async function getFobPriceRange() {
  try {
    const res = await fetch(
      `${process.env.UI_HOSTNAME}/api/common/price-range`,
      {
        cache: 'no-store',
      },
    )
    return await res?.json()
  } catch (e) {
    return []
  }
}

export async function getTTBRate() {
  try {
    const { data } = await axios(
      `${process?.env?.API_BASE_URL}/api/ttb/getLastUpdatedTTBRate`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return data
  } catch (e) {
    return []
  }
}
