import { ReactNode } from 'react'

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header
      style={{
        backgroundColor: '#17212B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '104px',
      }}
    >
      {children}
    </header>
  )
}
export default Header
