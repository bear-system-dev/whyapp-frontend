import emojiIcon from '@/assets/emojiIcon.png'
import { ChatContext } from '@/contexts/chatContext'
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Flex, Input, Space } from 'antd'
import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react'
import { resetButtonStyles } from './../../mocks/mockUserArray'
import './style.css'

export function InputBar() {
  const { addMessage } = useContext(ChatContext)
  const [inputValue, setINputValue] = useState('')

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      addMessage({
        username: 'user1',
        message: inputValue,
        time: Date.now().toString(),
        chatPrivate: true,
        color: '#3F7B40',
      })

      setINputValue('')
    }
  }

  const handleKeyboardEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && handleSendMessage()
  }

  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setINputValue(event?.target.value)
  }

  return (
    <div className="input-bar__background">
      <Flex align="center" gap={10}>
        <Button
          className="emoji-button"
          type="text"
          style={{ ...resetButtonStyles, height: 30 }}
        >
          <img src={emojiIcon} alt="emoji icon" height={'100%'} />
        </Button>
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
          value={inputValue}
          onChange={handleInputOnChange}
          onKeyDown={handleKeyboardEnter}
        />
        <Button
          className="send-button"
          icon={<SendOutlined />}
          size="large"
          type="text"
          onClick={handleSendMessage}
        />
      </Space.Compact>
    </div>
  )
}
