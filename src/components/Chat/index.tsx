import BubbleChat from '@/components/bubblechat'
import { ChatContext } from '@/contexts/chatContext'
import { SearchContext } from '@/contexts/searchContext'
import {
  getLocalActiveIndex,
  getMatchCounts,
} from '@/utils/helpers/activeIndex'
import { Flex } from 'antd'
import { useContext, useEffect, useRef } from 'react'
import Highlighter from 'react-highlight-words'
import './styles.css'

export const Chat = () => {
  const { messages } = useContext(ChatContext)

  const endOfMessagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'auto' })
  }, [messages])

  const { searchTerm, activeIndex } = useContext(SearchContext)

  const matchCounts = getMatchCounts(messages, searchTerm)

  return (
    <>
      {messages.map((chat, index) => {
        const localActiveIndex = getLocalActiveIndex(
          activeIndex,
          matchCounts,
          index,
        )
        return (
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
                activeClassName="Active"
                activeIndex={localActiveIndex}
                autoEscape={true}
                highlightClassName="Highlight"
                searchWords={[searchTerm]}
                textToHighlight={chat.message || ''}
              />
            </BubbleChat>
          </Flex>
        )
      })}
      <div ref={endOfMessagesRef} />
    </>
  )
}
