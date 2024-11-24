'use client'

import React from 'react'

export default React.memo(function Map() {
  return (
    <div className="flex-1">
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyASxqZB8s7nCJeLNPtI4-0Zx6TPwHFawbQ
    &q=Space+Needle,Seattle+WA"
      ></iframe>
    </div>
  )
})
