import React from 'react'

interface Image {
  image?: string
  size?: string
}
const ImageProfile: React.FC<Image> = ({ image, size }) => {
  return (
    <img
      style={{
        width: size,
        height: size,
        borderRadius: '100%',
      }}
      src={image}
      alt="image profile"
    />
  )
}
export default ImageProfile
