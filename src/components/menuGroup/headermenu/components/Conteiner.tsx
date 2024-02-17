import { Flex } from 'antd'
import { ReactNode } from 'react'
const headerMenuStyle: React.CSSProperties = {
  position: 'fixed',
  top: '0',
  backgroundColor: 'rgba(18, 29, 40, 1)',
  padding: '20px 20px',
  width: '100%',
}
const Conteiner = ({ children }: { children: ReactNode }) => {
  return (
    <Flex style={headerMenuStyle} justify="space-between">
      {children}
    </Flex>
  )
}
export default Conteiner
