import React from 'react'

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-t-4 border-solid border-primary-600"></div>
    </div>
  )
}

export default Loader
