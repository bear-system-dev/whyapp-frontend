import { LogoutOutlined } from '@ant-design/icons'

import { Button } from 'antd'

export function ButtonExample() {
  return (
    <Button
      danger
      icon={<LogoutOutlined />}
      shape="round"
      size="large"
      type="primary"
    >
      Logout
    </Button>
  )
}
