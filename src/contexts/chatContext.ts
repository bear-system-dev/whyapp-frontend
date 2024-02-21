import { UserProps } from '@/components/bubblechat'
import { Dispatch, SetStateAction, createContext } from 'react'

export const ChatContext = createContext<{
  messages: UserProps[]
  addMessage: (message: UserProps) => void
  currentUser: UserProps | null
  setCurrentUser: Dispatch<SetStateAction<UserProps | null>>
}>({
  messages: [],
  addMessage: () => {},
  currentUser: null,
  setCurrentUser: () => {},
})
