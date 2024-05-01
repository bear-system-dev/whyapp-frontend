import React from 'react'
import style from './profileName.module.css'

interface Profile {
  user?: string
  colortext?: string
}
const ProfileName: React.FC<Profile> = ({ user, colortext }) => {
  return (
    <p
      className={style.name}
      style={{
        color: colortext,
      }}
    >
      {user}
    </p>
  )
}
export default ProfileName
