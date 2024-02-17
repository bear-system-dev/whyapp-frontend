import BubbleChat from '@/components/bubblechat'
import { SearchContext } from '@/contexts/searchContext'
import { chatData } from '@/mocks/chats-mocks'
import { Flex } from 'antd'
import { useContext } from 'react'
import Highlighter from 'react-highlight-words'

export const Chat = () => {
  const { searchTerm } = useContext(SearchContext)

  return (
    <>
      {chatData.map((chat, index) => (
        <Flex
          key={index}
          style={{ alignSelf: chat.color === '#3F7B40' ? 'end' : 'start' }}
        >
          <BubbleChat
            image={chat.image}
            username={chat.username}
            cargo={chat.cargo}
            color={chat.color}
            chatPrivate={chat.chatPrivate}
            time={chat.time}
          >
            <Highlighter
              style={{
                color: 'white',
                paddingRight: '1.5rem',
                maxWidth: '16rem',
                fontSize: '1rem',
                lineHeight: 1.5,
                margin: '0px',
              }}
              searchWords={[searchTerm]}
              autoEscape={true}
              textToHighlight={chat.message}
            />
          </BubbleChat>
        </Flex>
      ))}
    </>
  )
}
