'use client'

import { createContext, useReducer } from 'react'
import { ToastContainer } from 'react-toastify'

const initialState = {
  modal: {},
}
export enum MODAL {
  INQUIRY_MODAL = 'INQUIRY_MODAL',
  INVOICE_ADDRESS_DETAILS_MODAL = 'INVOICE_ADDRESS_DETAILS_MODAL',
}
export enum ACTION {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}
export interface LocalStateContextType {
  modal: {
    // @ts-ignore
    [key: keyof MODAL]: string | boolean
  }
}
export const LocalStateContext =
  createContext<LocalStateContextType>(initialState)
export const LocalStateDispatchContext = createContext(null)

function localStateReducer(state: any, action: any) {
  if (action.type === ACTION.OPEN_MODAL) {
    return {
      ...state,
      modal: {
        ...state?.modal,
        [action?.payload?.id]: action?.payload?.value || true,
      },
    }
  }
  if (action.type === ACTION.CLOSE_MODAL) {
    return {
      ...state,
      modal: {
        ...state?.modal,
        [action?.payload?.id]: false,
      },
    }
  }
  return {}
}

export default function LocalStateProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(localStateReducer, initialState)

  return (
    <LocalStateContext.Provider value={state}>
      <LocalStateDispatchContext.Provider value={dispatch as any}>
        {children}
        <ToastContainer />
      </LocalStateDispatchContext.Provider>
    </LocalStateContext.Provider>
  )
}
