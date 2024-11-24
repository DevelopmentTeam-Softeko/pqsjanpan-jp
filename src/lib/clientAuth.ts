'use client'

export const getCustomerId = () => {
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/x-customer-id=([^;]*)/)
    return match ? Number(match[1]) : null
  }
  return null
}

export const getTypeId = (): number | null => {
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/x-type-id=([^;]*)/)
    return match ? Number(match[1]) : null
  }
  return null
}
