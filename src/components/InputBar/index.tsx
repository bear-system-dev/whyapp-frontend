import emojiIcon from '@/assets/emojiIcon.png'
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons'
import { Button, Input, Space } from 'antd'
import './style.css'

export function InputBar() {
  return (
    <div className="input-bar__background">
      <Button
        className="emoji-button"
        icon={<img src={emojiIcon} alt="emoji icon" />}
        type="text"
      />
      <Space.Compact className="input-bar__container">
        <Input
          placeholder="type a message..."
          prefix={
            <Button
              className="attach-button"
              icon={<PaperClipOutlined />}
              type="text"
            />
          }
          className="input-bar"
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
