import BubbleChat from '@/components/BubbleChat'
import { ChatContext } from '@/contexts/chatContext'
import { SearchContext } from '@/contexts/searchContext'
import {
  getLocalActiveIndex,
  getMatchCounts,
} from '@/utils/helpers/activeIndex'
import { useChatSocket } from '@/utils/hooks/useChatSocket'
import { useGroupChatSocket } from '@/utils/hooks/useGroupChatSocket'
import { Alert, Flex } from 'antd'
import Cookies from 'js-cookie'
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import GroupChatBubble from '../BubbleChat/GroupChatBubble'
import './styles.css'

export const Chat = () => {
  const [tokenExpired, setTokenExpired] = useState(false)
  const { recipient, messages, groupMessages } = useContext(ChatContext)
  const { userId } = useChatSocket()
  const { recipientGroupId } = useGroupChatSocket()

  const endOfMessagesRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'auto' })
  }, [messages, groupMessages])

  const { searchTerm, activeIndex } = useContext(SearchContext)

  const matchCounts = getMatchCounts(messages, searchTerm)

  useEffect(() => {
    const checkTokenValidity = () => {
      const token = Cookies.get('token')
      !token && setTokenExpired(true)
    }

    const checkTokenInterval = setInterval(checkTokenValidity, 5 * 60 * 1000) // 5 minutes

    return () => clearInterval(checkTokenInterval)
  }, [])

  const previousUserIdRef = useRef<string | undefined>()

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
      {recipient &&
        messages.flat().map((chat, index) => {
          const localActiveIndex = getLocalActiveIndex(
            activeIndex,
            matchCounts,
            index,
          )
          return (
            <Flex
              key={index}
              style={{
                justifyContent: chat.fromUserId === userId ? 'flex-end' : 'flex-start',
                maxWidth: '100%',
                overflow: 'hidden',
                border: '1px solid red'
              }}
            >
              <BubbleChat
                mensagem={chat.mensagem}
                createdAt={chat.createdAt}
                fromUserId={chat.fromUserId}
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
                  textToHighlight={chat.mensagem}
                />
              </BubbleChat>
            </Flex>
          )
        })}

      {recipientGroupId &&
        groupMessages?.map((chat, index) => {
          const localActiveIndex = getLocalActiveIndex(
            activeIndex,
            matchCounts,
            index,
          )
          const showProfileContact =
            chat.usuarioId !== previousUserIdRef.current
          previousUserIdRef.current = chat.usuarioId

          return (
            <Flex
              key={index}
              style={{
                alignSelf: chat.usuarioId === userId ? 'end' : 'start',
              }}
            >
              <GroupChatBubble
                mensagem={chat.mensagem || ''}
                createdAt={chat.createdAt}
                usuarioId={chat.usuarioId}
                showProfileContact={showProfileContact}
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
                  textToHighlight={chat.mensagem || ''}
                />
              </GroupChatBubble>
            </Flex>
          )
        })}

      <div ref={endOfMessagesRef} />
    </>
  )
}
