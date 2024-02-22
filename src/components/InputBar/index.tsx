import emojiIcon from '@/assets/emojiIcon.png'
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Flex, Input, Space } from 'antd'
import './style.css'
import { resetButtonStyles } from './../../mocks/mockUserArray'
import { useState } from 'react'
import { EmojiClickData } from 'emoji-picker-react'
import { EmojiLibrary } from './emojiPicker'

export function InputBar() {
  const [inputValue, setInputValue] = useState<string>('')
  const [showEmojis, setShowEmojis] = useState(false)
  const [emojidata, setemojidata] = useState('')

  const handleEmoji = (emojiData: EmojiClickData) => {
    const emoji = emojiData.emoji
    setemojidata((prevInput) => prevInput + emoji)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && emojidata.length > 0) {
      setemojidata((prevInput) => prevInput.slice(0, -1))
    }
  }

  return (
    <div className="input-bar__background">
      <Flex align="center" gap={10}>
        {showEmojis ? (
          <>
            <EmojiLibrary handleEmoji={handleEmoji} />
            <Button
              className="emoji-button"
              type="text"
              style={{ ...resetButtonStyles, height: 30 }}
            >
              <img
                src={emojiIcon}
                alt="emoji icon"
                height={'100%'}
                onClick={() => setShowEmojis(!showEmojis)}
              />
            </Button>
          </>
        ) : (
          <Button
            className="emoji-button"
            type="text"
            style={{ ...resetButtonStyles, height: 30 }}
          >
            <img
              src={emojiIcon}
              alt="emoji icon"
              height={'100%'}
              onClick={() => setShowEmojis(!showEmojis)}
            />
          </Button>
        )}
        <Button
          className="attach-button"
          icon={<PaperClipOutlined style={{ fontSize: 25 }} />}
          type="text"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </Flex>
      <Space.Compact className="input-bar__container">
        <Input
          placeholder="type a message..."
          className="input-bar"
          value={inputValue + emojidata}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          className="send-button"
          icon={<SendOutlined />}
          size="large"
          type="text"
        />
      </Space.Compact>
    </div>
  )
}
