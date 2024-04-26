import { ReactNode } from 'react'

const NameProfile = ({ children }: { children: ReactNode }) => {
  return (
    <p
      style={{
        color: 'white',
        margin: '0',
        width: 'max-content',
        lineHeight: '100%',
        fontWeight: '600',
        fontSize: '1rem',
        textShadow: '0px 1px 4px #282828',
        WebkitTextStroke: '0.25px #F8F8F8',
      }}
    >
      {children}
    </p>
  )
}
export default NameProfile
