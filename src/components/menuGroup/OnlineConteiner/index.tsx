import { ReactNode } from 'react'

const OnlineConteiner = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ borderBottom: '1px solid #8D8686' }}>
      <p
        style={{
          color: '#FFFFFF',
          fontSize: '1rem',
          fontWeight: '700',
          padding: '10px 20px',
        }}
      >
        online
      </p>
      {children}
    </div>
  )
}
export default OnlineConteiner
