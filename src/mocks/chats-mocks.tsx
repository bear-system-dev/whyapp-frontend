import BubbleChat from '@/components/bubblechat'
import { Flex } from 'antd'

export const MockChats = () => {
  return (
    <>
      <Flex style={{ alignSelf: 'end' }}>
        <BubbleChat
          username="calvão buena"
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
      <Flex style={{ alignSelf: 'end' }}>
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
      <Flex style={{ alignSelf: 'end' }}>
        <BubbleChat
          username="calvão buena"
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
      <Flex style={{ alignSelf: 'end' }}>
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
      <Flex style={{ alignSelf: 'end' }}>
        <BubbleChat
          username="calvão buena"
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
      <Flex style={{ alignSelf: 'end' }}>
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
    </>
  )
}
