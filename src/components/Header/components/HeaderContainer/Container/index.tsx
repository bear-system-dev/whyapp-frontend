import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}
export default Container
