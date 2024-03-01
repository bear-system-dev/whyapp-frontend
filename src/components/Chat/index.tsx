import BubbleChat from '@/components/bubblechat'
import { ChatContext } from '@/contexts/chatContext'
import { SearchContext } from '@/contexts/searchContext'
import {
  getLocalActiveIndex,
  getMatchCounts,
} from '@/utils/helpers/activeIndex'
import { Alert, Flex } from 'antd'
import Cookies from 'js-cookie'
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import './styles.css'

export const Chat = () => {
  const [tokenExpired, setTokenExpired] = useState(false)
  const { messages, currentUser } = useContext(ChatContext)

  const endOfMessagesRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'auto' })
  }, [messages])

  const { searchTerm, activeIndex } = useContext(SearchContext)

  const matchCounts = getMatchCounts(messages, searchTerm)

  useEffect(() => {
    const checkTokenValidity = () => {
      const token = Cookies.get('token')
      !token && setTokenExpired(true)
    }

    checkTokenValidity()

    const checkTokenInterval = setInterval(checkTokenValidity, 5 * 60 * 1000) // 5 minutes

    return () => clearInterval(checkTokenInterval)
  }, [])

  return (
    <>
      {tokenExpired && (
        <Alert
          message="Token expirado ou inexistente. Por favor, realize o login novamente!"
          type="error"
          showIcon
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            placeSelf: 'center',
            textAlign: 'center',
            width: '240px',
          }}
        />
      )}
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
