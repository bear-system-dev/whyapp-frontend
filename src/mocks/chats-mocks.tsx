import BubbleChat from '@/components/bubblechat'
import { Flex } from 'antd'

export const ChatContainer = () => {
  return (
    <Flex
      vertical
      style={{
        gap: '2rem',
        height: 'calc(100% - 11.5rem)',
        width: '100%',
        padding: '3rem calc(15.5rem + 6rem) 3rem 15.5rem ',
        position: 'fixed',
        zIndex: 3,
        alignItems: 'flex-end',
      }}
    >
      <BubbleChat
        color="#3F7B40"
        username="calvão buena"
        chatprivate={true}
        mensage="Hello everyone guys 😊 this is component chat conversation!"
        time="20:58"
      />
      <div style={{ alignSelf: 'start' }}>
        <BubbleChat
          image="031b68882265722dede1080a200f015a.jpg"
          username="calvão buena"
          cargo="admin"
          color="#434455"
          chatprivate={false}
          mensage="Hello everyone guys 😊 this is a component chat conversation!"
          time="20:58"
        />
      </div>
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
  )
}
