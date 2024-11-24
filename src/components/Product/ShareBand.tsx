'use client'

import React from 'react'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

export default React.memo(function ShareBand() {
  const shareUrl = 'https://www.pqsjapan.jp'
  const title = 'PQS Japan'
  return (
    <div className="mt-10 flex flex-row items-center justify-between">
      <span className="text-base text-gray-500">Share This With</span>
      <div className="flex flex-row gap-6">
        <EmailShareButton url={shareUrl} subject={title} body="body">
          <EmailIcon size={32} round />
        </EmailShareButton>
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <ViberShareButton url={shareUrl} title={title}>
          <ViberIcon size={32} round />
        </ViberShareButton>
      </div>
    </div>
  )
})
