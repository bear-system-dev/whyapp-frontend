import React from 'react'

interface Profile {
  user?: string
  colortext?: string
}
const NameProfile: React.FC<Profile> = ({ user, colortext }) => {
  return (
    <p
      style={{
        color: colortext,
        margin: '0',
        width: 'max-content',
        lineHeight: '100%',
        fontWeight: '600',
        fontSize: '1.1rem',
        textShadow: '0px 1px 4px #282828',
        WebkitTextStroke: '0.25px #F8F8F8',
      }}
    >
      {user}
    </p>
  )
}
export default NameProfile
