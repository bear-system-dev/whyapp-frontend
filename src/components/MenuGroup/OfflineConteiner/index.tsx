import { ReactNode } from 'react'

const OfflineConteiner = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p
        style={{
          color: '#8D8686',
          fontSize: '1rem',
          fontWeight: '700',
          padding: '10px 20px',
        }}
      >
        offline
      </p>
      {children}
    </div>
  )
}
export default OfflineConteiner
