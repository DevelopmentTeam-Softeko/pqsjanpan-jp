import { useEffect, useState } from 'react'

interface YearObject {
  value: number
  label: string
}

function useYearList(): YearObject[] {
  const [yearList, setYearList] = useState<YearObject[]>([])

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: currentYear - 1997 }, (_, index) => ({
      value: 1998 + index,
      label: (1998 + index).toString(),
    }))
    setYearList(years)
  }, [])

  return yearList
}

export default useYearList
