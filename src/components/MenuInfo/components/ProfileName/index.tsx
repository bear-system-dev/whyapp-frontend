import { ReactNode } from 'react'

const NameProfile = ({ children }: { children: ReactNode }) => {
  return (
    <p
      style={{
        color: '#fff',
        margin: '0',
        width: 'max-content',
        fontWeight: '500',
        fontSize: '1rem',
        textTransform: 'capitalize'
      }}
    >
      {children}
    </p>
  )
}
export default NameProfile
