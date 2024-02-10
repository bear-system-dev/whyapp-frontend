import { ReactNode } from 'react'

const Conteiner = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '104px',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}
export default Conteiner
