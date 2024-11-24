import useSWR from 'swr'

import { fetcher } from '@/api/client'

export function useGetMakerList() {
  const { data, error, isLoading }: any = useSWR(
    '/bfbd/getmakercount',
    fetcher(),
  )
  return {
    data: data?.map((ele: any) => ({
      label: ele?.makers_name,
      value: ele?.id,
    })),
    isLoading,
    isError: error,
  }
}

export function useGetModelList(
  makerId: number,
  isThirdPartyStock: boolean = false,
) {
  const path = isThirdPartyStock
    ? `/vehicle/getAllStockModelCount/${makerId}`
    : `/bfbd/getmodelcount/${makerId}`
  const { data, error, isLoading }: any = useSWR(
    makerId > 0 ? path : null,
    fetcher(),
  )
  if (isThirdPartyStock) {
    return {
      data: data?.data?.data?.map((ele: any) => ({
        label: ele?.Name,
        value: ele?.Id,
        count: ele?.TotalCount,
      })),
      isLoading,
      isError: error,
    }
  }
  return {
    data: data?.map((ele: any) => ({
      label: ele?.model_name,
      value: ele?.id,
    })),
    isLoading,
    isError: error,
  }
}

export function useGetMaxAndMinPrice() {
  const { data, error, isLoading }: any = useSWR(
    '/common/getFobPriceRange',
    fetcher(),
  )

  return {
    data: data?.data?.data?.map((ele: any) => ({
      label: ele?.Name,
      value: ele?.Id,
    })),
    isLoading,
    isError: error,
  }
}

export function useGetBodyTypeList() {
  const { data, error, isLoading }: any = useSWR(
    '/`bfbd/getbodytypecount',
    fetcher(),
  )
  return {
    data: data?.map((ele: any) => ({
      label: ele?.bodytype_name,
      value: ele?.ID,
    })),
    isLoading,
    isError: error,
  }
}

export function useCountryList() {
  const { data, error, isLoading }: any = useSWR(
    '/bfbd/getallcountry',
    fetcher(),
  )
  return {
    data: data
      ?.filter((ele: any) => !ele?.is_removed)
      .map((ele: any) => ({
        label: ele?.name,
        value: ele?.ID,
      })),
    isLoading,
    isError: error,
  }
}

export function usePortByCountry(countryId?: number) {
  const { data, error, isLoading }: any = useSWR(
    (countryId || 0) > 0 ? `/bfbd/getportbycountryid/${countryId}` : null,
    fetcher(),
  )
  return {
    data: data
      ?.filter((ele: any) => !ele?.is_removed)
      .map((ele: any) => ({
        label: ele?.name,
        value: ele?.ID,
      })),
    isLoading,
    isError: error,
  }
}
export function useGetAllOrderByCustomer(
  customerId?: number,
  page = 1,
  keyword = '',
  email = '',
) {
  const {
    data: resData,
    error,
    isLoading,
  }: any = useSWR(
    (customerId || 0) > 0
      ? `/customer-orders?customer_id=${customerId}&page=${page}&keyword=${keyword}&email=${email}`
      : null,
    fetcher(process.env.UI_HOSTNAME),
  )
  const { data, pagination } = resData || {}
  let totalCreditUSD = 0
  let totalCreditAUD = 0
  let totalCreditJPY = 0

  for (let i = 0; i < data?.length; i += 1) {
    const order = data?.[i]
    if (order?.currencyTypeObj?.name === 'USD') {
      if (order?.bf_cfr_total === 0 && order?.is_dummy_payment === true) {
        totalCreditUSD += order?.bf_jp_pi_total || 0
      }

      if (order?.bf_cfr_total !== 0) {
        totalCreditUSD +=
          (order?.bf_jp_pi_total || 0) - (order?.bf_cfr_total || 0)
      }
    } else if (order.currencyTypeObj.name === 'AUD') {
      if (order?.bf_cfr_total === 0 && order?.is_dummy_payment === true) {
        totalCreditAUD += order?.bf_jp_pi_total || 0
      }

      if (order?.bf_cfr_total !== 0) {
        totalCreditAUD +=
          (order?.bf_jp_pi_total || 0) - (order?.bf_cfr_total || 0)
      }
    } else {
      if (order?.bf_cfr_total === 0 && order?.is_dummy_payment === true) {
        totalCreditJPY += order?.bf_jp_pi_total || 0
      }

      if (order?.bf_cfr_total !== 0) {
        totalCreditJPY +=
          (order?.bf_jp_pi_total || 0) - (order?.bf_cfr_total || 0)
      }
    }
  }
  return {
    data: {
      list: data,
      totalCreditJPY,
      totalCreditAUD,
      totalCreditUSD,
      pagination,
    },
    isLoading,
    isError: error,
  }
}

export function useGetAllHoldOrderByCustomer(customerId?: number) {
  const { data, error, isLoading }: any = useSWR(
    (customerId || 0) > 0 ? `/bfbd/getallorderzbyblhold` : null,
    fetcher(),
  )
  let unAssignmentTotalUSD = 0
  let unAssignmentTotalAUD = 0
  let unAssignmentTotalJPY = 0
  let assignmentTotalUSD = 0
  let assignmentTotalAUD = 0
  let assignmentTotalJPY = 0
  const filteredData = data?.filter((v: any) => {
    return v?.sales_incharge_id === customerId
  })
  for (let i = 0; i < filteredData?.length; i += 1) {
    const order = filteredData?.[i]
    if (order?.order_status_id === 1) {
      if (order?.currencyTypeObj?.name === 'USD') {
        if (order?.bf_cfr_total === 0 && order?.is_dummy_payment === true) {
          unAssignmentTotalUSD += order?.bf_jp_pi_total || 0
        }

        if (order?.bf_cfr_total > 0) {
          assignmentTotalUSD += order?.bf_cfr_total || 0

          unAssignmentTotalUSD +=
            (order?.bf_jp_pi_total || 0) - (order?.bf_cfr_total || 0)
        }
      } else if (order?.currencyTypeObj?.name === 'AUD') {
        if (order?.bf_cfr_total === 0 && order?.is_dummy_payment === true) {
          unAssignmentTotalAUD += order?.bf_jp_pi_total || 0
        }

        if (order?.bf_cfr_total > 0) {
          assignmentTotalAUD += order?.bf_cfr_total || 0

          unAssignmentTotalAUD +=
            (order?.bf_jp_pi_total || 0) - (order?.bf_cfr_total || 0)
        }
      } else {
        if (order?.bf_cfr_total === 0 && order?.is_dummy_payment === true) {
          unAssignmentTotalJPY += order?.bf_jp_pi_total || 0
        }

        if (order?.bf_cfr_total > 0) {
          assignmentTotalJPY += order?.bf_cfr_total || 0

          unAssignmentTotalJPY +=
            (order?.bf_jp_pi_total || 0) - (order?.bf_cfr_total || 0)
        }
      }
    }
  }
  return {
    data: {
      list: filteredData,
      unAssignmentTotalAUD,
      assignmentTotalAUD,
      unAssignmentTotalJPY,
      assignmentTotalJPY,
      unAssignmentTotalUSD,
      assignmentTotalUSD,
    },
    isLoading,
    isError: error,
  }
}
