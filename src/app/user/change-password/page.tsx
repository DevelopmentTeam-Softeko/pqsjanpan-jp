import { getCustomerDetails } from '@/api/apiDef'
import { getCustomerId } from '@/lib/auth'

import ChangePasswordForm from './ChangePasswordForm'

export default async function ChangePassword() {
  const customerId = getCustomerId()
  const customerDetails: any = await getCustomerDetails(customerId)
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Change Password
          </h1>
          <ChangePasswordForm
            customerId={customerId}
            email={customerDetails?.email}
          />
        </div>
      </div>
    </div>
  )
}
