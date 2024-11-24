'use client'

import React from 'react'
import ImageGallery from 'react-image-gallery'

import type { AttachmentObj } from '@/types'

interface Props {
  data: Array<AttachmentObj>
  showThumbnails: boolean
}
export default React.memo(function Gallery(props: Props) {
  if (props?.data?.length > 0) {
    return (
      <div>
        <ImageGallery
          items={props.data as any}
          slideOnThumbnailOver={true}
          showThumbnails={props.showThumbnails}
        />
      </div>
    )
  }
  return null
})
