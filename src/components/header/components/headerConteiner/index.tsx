import { ReactNode } from 'react'

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header
      style={{
        backgroundColor: '#17212B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
<<<<<<< HEAD:src/layout/header/components/headerConteiner/index.tsx
        padding: '8px',
=======
        maxHeight: '104px',
>>>>>>> upstream/main:src/components/header/components/headerConteiner/index.tsx
      }}
    >
      {children}
    </header>
  )
}
export default Header
