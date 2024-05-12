import React from 'react'
import style from './profileName.module.css'

type ProfileNameProps = {
  name: string
  colortext?: string
}
const ProfileName: React.FC<ProfileNameProps> = ({ name, colortext }) => {
  return (
    <p
      className={style.name}
      style={{
        color: colortext,
      }}
    >
      {name}
    </p>
  )
}
export default ProfileName
