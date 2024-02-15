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
        position: 'absolute',
        left: 0,
        top: 0,
        overflowY: 'scroll',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          padding: '20px',
        }}
      >
        {children}
      </div>
    </Flex>
  )
}
