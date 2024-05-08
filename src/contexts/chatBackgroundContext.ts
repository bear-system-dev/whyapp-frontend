import { SetStateAction, createContext } from 'react'

export interface ChatBackgroundProps {
  color1: string
  color2?: string
}

export interface ChatBackgroundContextProps {
  chatBackgroundStyle: ChatBackgroundProps
  setChatBackgroundStyle: React.Dispatch<SetStateAction<ChatBackgroundProps>>
}

export const ChatBackgroundContext = createContext<ChatBackgroundContextProps>({
  chatBackgroundStyle: { color1: '' },
  setChatBackgroundStyle: () => {},
})
