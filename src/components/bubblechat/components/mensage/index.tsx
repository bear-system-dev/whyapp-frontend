import React from 'react'

interface Text {
  text: string
}

const MensageContent: React.FC<Text> = ({ text }) => {
  return (
    <p
      style={{
        color: 'white',
        paddingRight: '24px',
        maxWidth: '250px',
        fontSize: '.8rem',
        margin: '0px',
      }}
    >
      {text}
    </p>
  )
}
export default MensageContent
