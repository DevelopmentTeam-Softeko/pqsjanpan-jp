import { getCustomerDetails } from '@/api/apiDef'
import { getCustomerId } from '@/lib/auth'

export default async function MyProfile() {
  const customerId = getCustomerId()
  const customerDetails: any = await getCustomerDetails(customerId)
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full rounded-lg bg-white shadow sm:max-w-xl md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Account Information
          </h1>
          <hr className="my-4" />
          <div className="grid grid-cols-1 gap-4">
            <div>
              <strong>Name:</strong>{' '}
              <span className="ml-2 text-gray-600">
                {customerDetails?.name}
              </span>
            </div>
            <div>
              <strong>Address:</strong>{' '}
              <span className="ml-2 text-gray-600">
                {customerDetails?.present_address}
              </span>
            </div>
            <div>
              <strong>City:</strong>{' '}
              <span className="ml-2 text-gray-600">
                {customerDetails?.city_name}
              </span>
            </div>
            <div>
              <strong>Nearest Port:</strong>{' '}
              <span className="ml-2 text-gray-600">
                {customerDetails?.port_name}
              </span>
            </div>
            <div>
              <strong>Country:</strong>{' '}
              <span className="ml-2 text-gray-600">
                {customerDetails?.country_name}
              </span>
            </div>
            <div>
              <strong>Mobile No.:</strong>{' '}
              <span className="ml-2 text-gray-600">
                {customerDetails?.contact_number_1}
              </span>
            </div>
            <div>
              <strong>Email:</strong>{' '}
              <span className="ml-2 text-gray-600">
                {customerDetails?.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
