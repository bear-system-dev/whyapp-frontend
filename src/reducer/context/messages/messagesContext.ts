import { GroupMessage } from '@/model/GroupMessageModel'
import { Message } from '@/model/MessageModel'
import { RootState } from '@/reducer/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'

interface MessagesState {
  messages: Message[]
  groupMessages: GroupMessage[]
}

const initialState: MessagesState = {
  messages: [],
  groupMessages: [],
}

const messagesReducer = createSlice({
  name: 'messagesReducer',
  initialState,
  reducers: {
    setMessages(state, action: PayloadAction<Message>) {
      const payload = action.payload
      const messageExists = state.messages.some((message) => {
        return message.id === payload.id
      })
      if (!messageExists) {
        state.messages = [...state.messages, payload]
      }
    },
    setMessagesArray(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload
    },
    setGroupMessages(state, action: PayloadAction<GroupMessage>) {
      const payload = action.payload
      const groupMessageExists = state.groupMessages.some((message) => {
        return message.id === payload.id
      })
      if (!groupMessageExists) {
        state.groupMessages = [...state.groupMessages, payload]
      }
    },
    setGroupMessagesArray(state, action: PayloadAction<GroupMessage[]>) {
      state.groupMessages = action.payload
    },
  },
})

const {
  setMessages,
  setMessagesArray,
  setGroupMessages,
  setGroupMessagesArray,
} = messagesReducer.actions

export const useStateMessages = () =>
  useSelector((state: RootState) => state.contextMessages)

export const useDispatchMessages = () => {
  const dispatch = useDispatch()
  return useMemo(
    () => ({
      setMessages: (message: Message) => dispatch(setMessages(message)),
      setMessagesArray: (messages: Message[]) =>
        dispatch(setMessagesArray(messages)),
      setGroupMessages: (groupMessage: GroupMessage) =>
        dispatch(setGroupMessages(groupMessage)),
      setGroupMessagesArray: (groupMessages: GroupMessage[]) =>
        dispatch(setGroupMessagesArray(groupMessages)),
    }),
    [dispatch],
  )
}

export default messagesReducer.reducer
