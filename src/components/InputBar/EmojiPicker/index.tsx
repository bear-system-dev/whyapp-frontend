import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react'
import React from 'react'

const EmojiStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '65px',
  left: '70px',
  zIndex: '999',
}
type EmojisLibraryProps = {
  handleEmoji: (emojiData: EmojiClickData) => void
  open: boolean
}

export const EmojiLibrary: React.FC<EmojisLibraryProps> = ({
  handleEmoji,
  open,
}) => {
  return (
    <div style={EmojiStyle}>
      <EmojiPicker open={open} theme={Theme.DARK} onEmojiClick={handleEmoji} />
    </div>
  )
}
