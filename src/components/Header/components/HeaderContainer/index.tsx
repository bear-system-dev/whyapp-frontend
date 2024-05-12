import { Flex } from 'antd'
import { ReactNode } from 'react'

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      flex={1}
      style={{
        backgroundColor: '#17212B',
        gap: '2rem',
        padding: '0 10px',
        alignItems: 'center',
      }}
    >
      {children}
    </Flex>
  )
}
export default Header
