import { Flex } from 'antd'
import { ReactNode } from 'react'

interface ChatContainerProps {
  children: ReactNode
}

export const ChatContainer = ({ children }: ChatContainerProps) => {
  return (
    <Flex
      vertical
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        gap: '2rem',
        alignItems: 'start',
        position: 'absolute',
        left: 96,
        top: 104,
        overflowY: 'scroll',
        padding: '3rem calc(15.5rem + 6rem) 3rem 15.5rem',
        height: 'calc(100% - 184px)',
        width: 'calc(100% - 96px)',
        zIndex: 3,
      }}
    >
      {children}
    </Flex>
  )
}
