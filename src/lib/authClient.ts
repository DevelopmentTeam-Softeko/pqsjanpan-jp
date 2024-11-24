import Cookies from 'js-cookie'

export const removeAuth = () => {
  Cookies?.remove('x-token')
  Cookies?.remove('x-customer-id')
  Cookies?.remove('x-type-id')
}
