import React from 'react'

interface Profile {
  user: string
}
const NameProfile: React.FC<Profile> = ({ user }) => {
  return (
    <p
      style={{
        margin: '0',
        fontWeight: '700',
        fontSize: '.8rem',
      }}
    >
      {user}
    </p>
  )
}
export default NameProfile
