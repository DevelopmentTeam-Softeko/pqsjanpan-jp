interface MergeArrParam {
  label: string
  value: boolean
}
export const buildImageUrl = (fileName?: string, isStockList = true) => {
  return fileName
    ? `${
        isStockList
          ? process.env.MEDIA_STORAGE_HOST
          : process.env.THIRD_PARTY_STOCK_RES_BASE_URL
      }/images/${fileName}`
    : '/car-thumb-fallback.png'
}
export const buildDocumentUrl = (fileName: string) => {
  return `${process.env.MEDIA_STORAGE_HOST}/documents/${fileName}`
}
export const buildImageZipUrl = (productId: number) => {
  return `${process.env.API_BASE_URL}/api/bfbd/downloadimagezip/${productId}`
}
export const buildOrderUrl = (orderId: number) => {
  return `${process.env.API_BASE_URL}/api/bfbd/downloadpdf/${orderId}`
}
const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg']
export function isImageMediaType(fileName: string) {
  const fileExtension = fileName?.split('.')?.pop()?.toLowerCase() || ''
  return imageExtensions.includes(fileExtension)
}

export function maskLastThreeDigits(inputString: string) {
  if (inputString?.length < 3) {
    return inputString
  }

  const maskedPart = inputString?.slice(0, -3)
  const lastThreeDigits = '*'.repeat(3)

  return maskedPart + lastThreeDigits
}

export function prettyNumber(number?: number | string) {
  let num = number
  if (typeof number !== 'number') {
    num = Number(number)
  }
  return num?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function mergeArr(
  array1: Array<MergeArrParam>,
  array2: Array<MergeArrParam>,
) {
  array1?.forEach((obj1) => {
    const matchingObj2 = array2?.find((obj2) => obj2.label === obj1.label)
    if (matchingObj2) {
      matchingObj2.value = true
    }
  })
  return array2
}

export function getIconName(str: string) {
  const match = str.match(/^[^\s]*/)
  if (match) {
    return match[0].toLowerCase()
  }
  return str.toLowerCase()
}

export function getSvgFileName(str: string, preFix: string) {
  const fileName = getIconName(str)
  return `${preFix}/${fileName}.svg`
}

export function calculatePagination(
  total: number,
  perPage: number,
  currentPage: number,
) {
  const lastPage = Math.ceil(total / perPage)

  return {
    pagination: {
      total,
      perPage,
      currentPage,
      lastPage,
    },
  }
}
export function urlify(str: string) {
  return str
    ?.toLowerCase()
    ?.trim()
    ?.replace(/\s+/g, '-')
    ?.replace(/[^\w-]/g, '')
}
export const buildProductUrl = (
  maker: string,
  model: string,
  id: number,
  referenceNo: number,
  isThirdParty: boolean,
) => {
  if (isThirdParty) {
    return `/used-cars/${urlify(maker)}/${urlify(
      model,
    )}/${referenceNo}?all-stock=1`
  }
  return `/used-cars/${urlify(maker)}/${urlify(model)}/${id}`
}
