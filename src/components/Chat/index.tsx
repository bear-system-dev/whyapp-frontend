import BubbleChat from '@/components/bubblechat'
import { SearchContext } from '@/contexts/searchContext'
import { chatData } from '@/mocks/chats-mocks'
import {
  getLocalActiveIndex,
  getMatchCounts,
} from '@/utils/helpers/activeIndex'
import { Flex } from 'antd'
import { useContext } from 'react'
import Highlighter from 'react-highlight-words'
import './styles.css'

export const Chat = () => {
  const { searchTerm, activeIndex } = useContext(SearchContext)

  const searchWords = searchTerm.split(/\s/).filter((word) => word)

  const matchCounts = getMatchCounts(chatData, searchTerm)

  return (
    <>
      {chatData
        .map((chat, index) => {
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
                  highlightClassName="Highlight"
                  searchWords={searchWords}
                  textToHighlight={chat.message}
                />
              </BubbleChat>
            </Flex>
          )
        })
        .reverse()}
    </>
  )
}
