import { ReactNode } from 'react'

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header
      style={{
        backgroundColor: '#17212B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '60px',
        padding: '8px',
      }}
    >
      {children}
    </header>
  )
}
export default Header
