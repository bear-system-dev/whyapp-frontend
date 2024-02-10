import BubbleChat from '@/components/bubblechat'
import HeaderChat from '@/layout/header'
import { Flex } from 'antd'
import './app.css'

export default function App() {
  return (
    <Flex id="App">
      <div style={{ width: 60, backgroundColor: 'blue' }}>Aside</div>
      <Flex vertical flex={1}>
        <Flex vertical flex={1}>
          <HeaderChat />
          <Flex align="center" vertical flex={1} id="main">
            <Flex id="chat" vertical align="center">
              <Flex vertical style={{ width: '70%' }} gap={20}>
                <Flex justify="end">
                  <BubbleChat
                    color="#3F7B40"
                    chatprivate={true}
                    mensage="Hello everyone guys 😊 this is component chat conversation!"
                    time="20:58"
                  />
                </Flex>
                <Flex>
                  <BubbleChat
                    image="031b68882265722dede1080a200f015a.jpg"
                    username="calvão buena"
                    cargo="admin"
                    color="#434455"
                    chatprivate={false}
                    mensage="Hello everyone guys 😊 this is a component chat conversation!"
                    time="20:58"
                  />
                </Flex>
                <Flex>
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
                <Flex justify="end">
                  <BubbleChat
                    color="#3F7B40"
                    chatprivate={true}
                    mensage="Hello everyone guys 😊 this is component chat conversation!"
                    time="20:58"
                  />
                </Flex>
                <Flex>
                  <BubbleChat
                    image="031b68882265722dede1080a200f015a.jpg"
                    username="calvão buena"
                    cargo="admin"
                    color="#434455"
                    chatprivate={false}
                    mensage="Hello everyone guys 😊 this is a component chat conversation!"
                    time="20:58"
                  />
                </Flex>
                <Flex>
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
                <Flex justify="end">
                  <BubbleChat
                    color="#3F7B40"
                    chatprivate={true}
                    mensage="Hello everyone guys 😊 this is component chat conversation!"
                    time="20:58"
                  />
                </Flex>
                <Flex>
                  <BubbleChat
                    image="031b68882265722dede1080a200f015a.jpg"
                    username="calvão buena"
                    cargo="admin"
                    color="#434455"
                    chatprivate={false}
                    mensage="Hello everyone guys 😊 this is a component chat conversation!"
                    time="20:58"
                  />
                </Flex>
                <Flex>
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
            </Flex>
          </Flex>
        </Flex>
        <div style={{ height: 60, backgroundColor: 'red' }}>input</div>
      </Flex>
    </Flex>
  )
}
