import { CloudArrowDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
  id: number
  registrationYear: string
  isThirdParty: boolean
}
export default React.memo(function DownloadButton(props: Props) {
  const link = props?.isThirdParty
    ? `${process?.env?.THIRD_PARTY_STOCK_API_BASE_URL}/api/upload/downloadaucnetimagezip/${props?.id}/${props.registrationYear}`
    : `${process?.env?.API_BASE_URL}/api/bfbd/downloadimagezip/${props?.id}`
  return (
    <div className="mt-5 text-center">
      <a
        href={link}
        download={true}
        className="inline-flex items-center justify-center rounded-full border-2 border-primary-700 px-4 py-2 text-white"
      >
        <CloudArrowDownIcon className="mr-2 h-4 w-4 text-primary-700" />
        <span className="text-primary-700">Download All Images</span>
      </a>
    </div>
  )
})
