// api.ts
const API_BASE_URL = process?.env?.API_BASE_URL // Replace this with your API base URL

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  data?: any
  params?: Record<string, string | number>
}

interface ErrorResponse {
  error: boolean
  message: string
}

async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
  cache: boolean = true,
): Promise<T | ErrorResponse> {
  const url = new URL(`${API_BASE_URL}/api${endpoint}`)

  // Append query parameters to the URL
  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value))
    })
  }
  const requestOptions: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      cache: 'no-store',
    },
  }

  if (options.data) {
    requestOptions.body = JSON.stringify(options.data)
  }

  try {
    const response = await fetch(url.toString(), {
      ...requestOptions,
      ...(!cache && { cache: 'no-store' }),
    })
    if (!response.ok) {
      const errorData = await response.json()
      return {
        error: true,
        message: errorData.message || 'Request failed',
      }
    }
    try {
      return await response.json()
    } catch (e) {
      return {
        error: false,
        message: 'unable to parse',
      }
    }
  } catch (error: any) {
    return {
      error: true,
      message: error?.message || 'Request failed',
    }
  }
}

export default request
export const fetcher =
  (baseURL = API_BASE_URL) =>
  async <T>(url: RequestInfo | URL, options?: RequestInit): Promise<T> => {
    const fullUrl =
      typeof url === 'string' ? new URL(`/api${url}`, baseURL) : url

    const response = await fetch(fullUrl, options)
    return response.json()
  }
