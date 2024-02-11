import React from 'react'

interface Cargo {
  cargo: string
}
const CargoProfile: React.FC<Cargo> = ({ cargo }) => {
  return (
    <p
      style={{
        fontWeight: '700',
        fontSize: '0.8rem',
        lineHeight: 1,
        margin: '0',
        color: '#FFFFFF',

        textShadow: 'px 1px 4px #282828',
      }}
    >
      {cargo}
    </p>
  )
}
export default CargoProfile
