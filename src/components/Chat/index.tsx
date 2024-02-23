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
  const { messages, currentUser } = useContext(ChatContext)

  const endOfMessagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'auto' })
  }, [messages])

  const { searchTerm, activeIndex } = useContext(SearchContext)

  const matchCounts = getMatchCounts(messages, searchTerm)

  return (
    <>
      {currentUser &&
        currentUser.privateMessages?.map((chat, index) => {
          const localActiveIndex = getLocalActiveIndex(
            activeIndex,
            matchCounts,
            index,
          )
          return (
            <Flex
              key={index}
              style={{
                alignSelf: chat.sentByMe ? 'end' : 'start',
              }}
            >
              <BubbleChat
                message={chat.message}
                time={chat.time}
                sentByMe={chat.sentByMe}
              >
                <Highlighter
                  style={{
                    color: '#FFFFFF',
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
