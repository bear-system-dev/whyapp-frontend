import { ReactNode, useState } from 'react'
import {
  ChatBackgroundContext,
  ChatBackgroundProps,
} from './chatBackgroundContext'

interface ChatBackgroundProviderProps {
  children: ReactNode
}

export const ChatBackgroundProvider = ({
  children,
}: ChatBackgroundProviderProps) => {
  const [chatBackgroundStyle, setChatBackgroundStyle] =
    useState<ChatBackgroundProps>(() => {
      const userSavedChatBackgroundColor = localStorage.getItem(
        'chatBackgroundStyle',
      )
      return userSavedChatBackgroundColor
        ? JSON.parse(userSavedChatBackgroundColor)
        : {
            color1: 'rgb(87 132 199) 30%',
            color2: 'rgb(162 77 175 / 50%) 100%',
          }
    })

  return (
    <ChatBackgroundContext.Provider
      value={{ chatBackgroundStyle, setChatBackgroundStyle }}
    >
      {children}
    </ChatBackgroundContext.Provider>
  )
}
