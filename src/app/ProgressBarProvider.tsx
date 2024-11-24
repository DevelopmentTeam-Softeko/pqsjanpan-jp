'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const ProgressBarProvider = ({ children }: { children: any }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#ef1397"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default ProgressBarProvider
