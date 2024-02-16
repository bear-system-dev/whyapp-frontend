import emojiIcon from '@/assets/emojiIcon.png'
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Flex, Input, Space } from 'antd'
import './style.css'
import { resetButtonStyles } from './../../mocks/mockUserArray'

export function InputBar() {
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
        <Input placeholder="type a message..." className="input-bar" />
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
