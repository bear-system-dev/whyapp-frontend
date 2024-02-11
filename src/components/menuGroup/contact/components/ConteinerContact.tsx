import { ReactNode } from 'react'

const ConteinerContact = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 28px',
      }}
    >
      {children}
    </div>
  )
}
export default ConteinerContact
