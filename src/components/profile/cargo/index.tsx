import React from 'react'

interface Cargo {
  cargo: string
}
const CargoProfile: React.FC<Cargo> = ({ cargo }) => {
  return (
    <p
      style={{
        fontWeight: '700',
        fontSize: '.6rem',
        margin: '0',
      }}
    >
      {cargo}
    </p>
  )
}
export default CargoProfile
