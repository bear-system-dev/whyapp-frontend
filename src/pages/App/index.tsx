import { ButtonExample } from '@/components/Button'
import { useState } from 'react'
import Login from '../Login/Login'
import BubbleChat from '@/components/bubblechat'
import { Flex } from 'antd'
import HeaderChat from '@/layout/header'

export function App() {
  const [loggedIn] = useState<boolean>(false)
  return (
    <div>
      <HeaderChat />
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
            chatprivate={true}
            mensage="Hello everyone guys 😊 this is component chat conversation!"
            time="20:58"
          />
          <BubbleChat
            image="031b68882265722dede1080a200f015a.jpg"
            username="calvão buena"
            cargo="admin"
            color="#434455"
            chatprivate={false}
            mensage="Hello everyone guys 😊 this is a component chat conversation!"
            time="20:58"
          />
          <BubbleChat
            image="031b68882265722dede1080a200f015a.jpg"
            username="motoplay_br"
            cargo="member"
            color="#3F7B40"
            chatprivate={false}
            mensage="Hello everyone guys 😊 this is a component chat conversation!"
            time="20:58"
          />
        </Flex>
      </Flex>
    </div>
  )
}
