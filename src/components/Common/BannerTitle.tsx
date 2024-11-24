'use client'

import React from 'react'

type Props = {
  props: any
  makerData: any
  bodyTypeData: any
}

const BannerTitle = ({ props }: Props) => {
  const makeParam = Number(props?.searchParams?.make) || -1
  const bodyParam = Number(props?.searchParams?.body) || -1

  const title =
    (props.makerData?.find((body: any) => body.value === makeParam)?.label ||
      props.bodyTypeData?.find((body: any) => body.value === bodyParam)
        ?.label) ??
    'Stock List'
  return (
    <h1 className="font-sans text-base font-bold text-white md:text-4xl">
      {props?.title ? props.title : title}
    </h1>
  )
}

export default BannerTitle
