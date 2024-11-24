'use client'

export const getAllSessionStorage = () => {
  if (typeof window !== 'undefined') {
    const totalCreditJPY = sessionStorage?.getItem('totalCreditJPY')
    const totalCreditAUD = sessionStorage?.getItem('totalCreditAUD')
    const totalCreditUSD = sessionStorage?.getItem('totalCreditUSD')
    return {
      totalCreditJPY,
      totalCreditAUD,
      totalCreditUSD,
    }
  }
  return {
    totalCreditJPY: 0,
    totalCreditAUD: 0,
    totalCreditUSD: 0,
  }
}
