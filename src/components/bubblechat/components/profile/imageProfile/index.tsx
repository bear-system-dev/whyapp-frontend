import React from 'react'

interface Image {
  image: string
}
const ImageProfile: React.FC<Image> = ({ image }) => {
  return (
    <img
      style={{
        width: '3rem',
        borderRadius: '100%',
        marginRight: '1rem',
      }}
      src={image}
      alt="image profile"
    />
  )
}
export default ImageProfile
