import ResetPasswordForm from './ResetPasswordForm'

export default function ResetPassword(props: any) {
  const { email } = props?.searchParams || {}
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Forgot password?
          </h1>
          <ResetPasswordForm email={email} />
        </div>
      </div>
    </div>
  )
}
