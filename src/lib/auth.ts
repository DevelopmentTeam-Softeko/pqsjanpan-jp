import { cookies } from 'next/headers'

export const checkIsAuthenticate = () => {
  const cookiesList = cookies()
  return cookiesList.has('x-token')
}

export const getCustomerId = () => {
  const cookiesList = cookies()
  return Number(cookiesList.get('x-customer-id')?.value)
}
export const getTypeId = () => {
  const cookiesList = cookies()
  return Number(cookiesList.get('x-type-id')?.value)
}

export const getAll = () => {
  const cookiesList = cookies()
  return cookiesList.getAll()
}
export const clearAll = () => {
  const cookiesList = cookies()
  cookiesList.delete('x-token')
  cookiesList.delete('x-type-id')
  cookiesList.delete('x-customer-id')
}
