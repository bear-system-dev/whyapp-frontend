import { Recipient } from '@/model/RecipientModel'
import { RootState } from '@/reducer/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface IsOnlineState {
  isOnline: Recipient[]
}

const initialState: IsOnlineState = {
  isOnline: [],
}

const isOnlineReducer = createSlice({
  name: 'isOnlineReducer',
  initialState,
  reducers: {
    setIsOnline(state, action: PayloadAction<Recipient[]>) {
      state.isOnline = action.payload
    },
  },
})

const { setIsOnline } = isOnlineReducer.actions

export const useStateIsOnline = () =>
  useSelector((state: RootState) => state.contextIsOnline)

export const useDispatchIsOnline = () => {
  const dispatch = useDispatch()
  return useMemo(
    () => ({
      setIsOnline: (isOnline: Recipient[]) => dispatch(setIsOnline(isOnline)),
    }),
    [dispatch],
  )
}

export default isOnlineReducer.reducer
