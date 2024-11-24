import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

export const usePostSignInProcess = () => {
  const oneMonth = 30 * 24 * 60 * 60 * 1000
  const expires = Date.now() - oneMonth
  return (res: any) => {
    if (res?.token && res?.CustomerId) {
      Cookies.set('x-token', res?.token, { expires })
      Cookies.set('x-customer-id', res?.CustomerId, { expires })
      Cookies.set('x-type-id', res?.TypeId, { expires })
      toast("You've successfully logged in, Redirecting...", {
        type: 'success',
        delay: 2000,
      })
      window.location.replace('/user/dashboard')
    } else {
      toast('Unexpected error, please try again', {
        type: 'error',
        delay: 2000,
      })
    }
  }
}
