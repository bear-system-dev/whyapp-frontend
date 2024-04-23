import BubbleChat from '@/components/bubblechat'
import { ChatContext } from '@/contexts/chatContext'
import { SearchContext } from '@/contexts/searchContext'
import { Message } from '@/model/MessageModel'
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
import './styles.css'

export const Chat = () => {
  const [tokenExpired, setTokenExpired] = useState(false)
  const { recipient, recipientGroup, messages, setMessages } =
    useContext(ChatContext)
  const { chatId, userId, socket } = useChatSocket()
  const { recipientGroupId } = useGroupChatSocket()

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

    const checkTokenInterval = setInterval(checkTokenValidity, 5 * 60 * 1000) // 5 minutes

    return () => clearInterval(checkTokenInterval)
  }, [])

  useEffect(() => {
    if (recipientGroup) {
      setMessages([])

      socket?.emit('join group', recipientGroupId)

      socket?.on('newGroupMessage', (message) => {
        setMessages((previousMessages) => [...previousMessages, message])
        console.log(message)
      })

      socket?.on('error', (data: { mensagem: string }) => {
        console.log(data)
      })
    }
  }, [socket])

  useEffect(() => {
    const onMessages = (messages: Message[]) => {
      setMessages(messages)
    }

    const onNewMessage = (message: Message) => {
      setMessages((previousMessages) => [...previousMessages, message])
    }

    if (recipient) {
      setMessages([])

      socket?.emit('join private', chatId)
      socket?.emit('getMessages', chatId)

      socket?.on('messages', onMessages)
      socket?.on('newMessage', onNewMessage)
    }

    return () => {
      if (recipient) {
        socket?.off('newMessage', onNewMessage)
      }
    }
  }, [socket])

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
      {messages.flat().map((chat, index) => {
        const localActiveIndex = getLocalActiveIndex(
          activeIndex,
          matchCounts,
          index,
        )
        return (
          <Flex
            key={index}
            style={{
              alignSelf: chat.fromUserId === userId ? 'end' : 'start',
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
                textToHighlight={chat.mensagem || ''}
              />
            </BubbleChat>
          </Flex>
        )
      })}
      <div ref={endOfMessagesRef} />
    </>
  )
}
