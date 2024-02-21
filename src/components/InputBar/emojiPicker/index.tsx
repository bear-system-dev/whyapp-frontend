import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'
import React, { useState } from 'react'

const EmojiStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '65px',
  zIndex: '999',
}
type EmojisLibraryProps = {
  handleEmoji: EmojiClickData
}

export const EmojiLibrary: React.FC<EmojisLibraryProps> = ({ handleEmoji }) => {
  return (
    <div style={EmojiStyle}>
      <EmojiPicker theme="dark" onEmojiClick={handleEmoji} />
    </div>
  )
}
