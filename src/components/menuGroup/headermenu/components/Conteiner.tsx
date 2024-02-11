import { Flex } from 'antd'
import { ReactNode } from 'react'

const Conteiner = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      style={{
        backgroundColor: '#17212B',
        padding: '32px',
      }}
      justify="space-between"
    >
      {children}
    </Flex>
  )
}
export default Conteiner
