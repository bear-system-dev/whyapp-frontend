import emojiIcon from '@/assets/emojiIcon.png'
import { ChatContext } from '@/contexts/chatContext'
import {
  currentHours,
  currentMinutes,
} from '@/utils/helpers/dateInHoursAndMinutes'
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Flex, Input, Space } from 'antd'
import { EmojiClickData } from 'emoji-picker-react'
import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react'
import { resetButtonStyles } from './../../mocks/mockUserArray'
import { EmojiLibrary } from './emojiPicker'
import './style.css'

export function InputBar() {
  const { addMessage, currentUser } = useContext(ChatContext)
  const [inputValue, setInputValue] = useState<string>('')
  const [showEmojis, setShowEmojis] = useState(false)

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      addMessage({
        username: 'user1',
        privateMessages: [
          {
            message: inputValue,
            time: `${currentHours}:${currentMinutes}`,
            sentByMe: true,
          },
        ],
        chatPrivate: true,
      })

      setInputValue('')
    }
  }

  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.target.value)
  }

  const handleOpenEmojiDrawer = () => setShowEmojis(!showEmojis)

  const handleEmoji = (emojiData: EmojiClickData) => {
    const emoji = emojiData.emoji
    setInputValue((prevInput) => prevInput + emoji)
  }

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && handleSendMessage()
  }

  return (
    <div className="input-bar__background">
      <Flex align="center" gap={10}>
        <Button
          className="emoji-button"
          type="text"
          style={{ ...resetButtonStyles, height: 30 }}
          onClick={handleOpenEmojiDrawer}
          disabled={!currentUser}
        >
          <img src={emojiIcon} alt="emoji icon" height={'100%'} />
        </Button>
        <EmojiLibrary open={showEmojis} handleEmoji={handleEmoji} />

        <Button
          className="attach-button"
          icon={<PaperClipOutlined style={{ fontSize: 25 }} />}
          type="text"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          disabled={!currentUser}
        />
      </Flex>
      <Space.Compact className="input-bar__container">
        <Input
          placeholder="type a message..."
          className="input-bar"
          value={inputValue}
          onChange={handleInputOnChange}
          onKeyDown={handleOnKeyDown}
          disabled={!currentUser}
        />
        <Button
          className="send-button"
          icon={<SendOutlined />}
          size="large"
          type="text"
          onClick={handleSendMessage}
          disabled={!currentUser}
        />
      </Space.Compact>
    </div>
  )
}
