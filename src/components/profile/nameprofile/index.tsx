import React from 'react'

interface Profile {
  user: string
  colortext: string
}
const NameProfile: React.FC<Profile> = ({ user, colortext }) => {
  return (
    <p
      style={{
        color: colortext,
        margin: '0',
        width: 'max-content',
        fontWeight: '700',
        fontSize: '.8rem',
      }}
    >
      {user}
    </p>
  )
}
export default NameProfile
