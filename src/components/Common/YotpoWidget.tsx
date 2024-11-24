import Script from 'next/script'
import React from 'react'

const YotpoWidget = () => {
  return (
    <>
      <Script src="//staticw2.yotpo.com/ab6bOJ030BjsaF6hJcljgRka0CLDzfybzHAtNhuh/widget.js" />
      <div id="yotpo-testimonials-custom-tab"></div>
    </>
  )
}

export default YotpoWidget
