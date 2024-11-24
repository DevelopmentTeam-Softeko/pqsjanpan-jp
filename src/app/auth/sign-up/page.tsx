import SignUpForm from '@/app/auth/sign-up/SignUpForm'

export default function SignUp() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
