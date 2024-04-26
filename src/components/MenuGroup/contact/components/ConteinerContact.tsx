import { ReactNode } from 'react'

const ConteinerContact = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 28px',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}
export default ConteinerContact
