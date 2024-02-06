import { ButtonExample } from '@/components/Button'
import { useState } from 'react'
import Login from '../Login/Login'
import BubbleChat from '@/components/bubblechat'
import { Flex } from 'antd'

export function App() {
  const [loggedIn] = useState<boolean>(false)
  return (
    <div>
      <Flex align="center" justify="center" gap={200}>
        <Flex vertical align="center">
          {loggedIn ? (
            <>
              <h1>Hello, World!</h1>
            </>
          ) : (
            <Login />
          )}
          <ButtonExample />
        </Flex>
        <Flex vertical>
          <BubbleChat
            color="#3F7B40"
            chatprivate={false}
            mensage="Hello everyone guys 😊 this is component chat conversation!"
            time="20:58"
          />
          <BubbleChat
            username="calvão buena"
            cargo="admin"
            color="#434455"
            chatprivate={true}
            mensage="Hello everyone guys 😊 this is a component chat conversation!"
            time="20:58"
          />
          <BubbleChat
            username="motoplay_br"
            cargo="member"
            color="#3F7B40"
            chatprivate={true}
            mensage="Hello everyone guys 😊 this is a component chat conversation!"
            time="20:58"
          />
        </Flex>
      </Flex>
    </div>
  )
}
