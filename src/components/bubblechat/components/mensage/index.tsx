import React from 'react'

interface Text {
  text: string
}

const MensageContent: React.FC<Text> = ({ text }) => {
  return (
    <p
      style={{
        color: 'white',
        paddingRight: '1.5rem',
        maxWidth: '16rem',
        fontSize: '1rem',
        lineHeight: 1.5,
        margin: '0px',
      }}
    >
      {text}
    </p>
  )
}
export default MensageContent
