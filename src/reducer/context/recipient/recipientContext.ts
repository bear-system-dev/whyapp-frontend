import { Recipient, RecipientGroup } from '@/model/RecipientModel'
import { RootState } from '@/reducer/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

interface RecipientState {
  recipient: Recipient | null
  recipientGroup: RecipientGroup | null
}

const initialState: RecipientState = {
  recipient: null,
  recipientGroup: null,
}

const recipientReducer = createSlice({
  name: 'recipientReducer',
  initialState,
  reducers: {
    setRecipient(state, action: PayloadAction<Recipient | null>) {
      state.recipient = action.payload
    },
    setRecipientGroup(state, action: PayloadAction<RecipientGroup | null>) {
      state.recipientGroup = action.payload
    },
  },
})

const { setRecipient, setRecipientGroup } = recipientReducer.actions

export const useStateRecipient = () =>
  useSelector((state: RootState) => state.contextRecipient)

export const useDispatchRecipient = () => {
  const dispatch = useDispatch()
  return {
    setRecipient: (recipient: Recipient | null) =>
      dispatch(setRecipient(recipient)),
    setRecipientGroup: (recipientGroup: RecipientGroup | null) =>
      dispatch(setRecipientGroup(recipientGroup)),
  }
}

export default recipientReducer.reducer
