'use client'

import { useParams } from 'next/navigation'
import { useLayoutEffect } from 'react'

export default function ScrollToTop() {
  const params = useParams()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [params])
  return null
}
