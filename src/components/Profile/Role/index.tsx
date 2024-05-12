import React from 'react'

type Role = {
  role: string
}
const UserRole: React.FC<Role> = ({ role }) => {
  return (
    <p
      style={{
        fontWeight: '700',
        fontSize: '0.6rem',
        lineHeight: 1,
        margin: '0',
        color: '#FFFFFF',

        textShadow: 'px 1px 4px #282828',
      }}
    >
      {role}
    </p>
  )
}
export default UserRole
