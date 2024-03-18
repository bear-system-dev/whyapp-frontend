import BubbleChat from '@/components/bubblechat'
import { ChatContext } from '@/contexts/chatContext'
import { SearchContext } from '@/contexts/searchContext'
import { Message } from '@/model/MessageModel'
import {
  getLocalActiveIndex,
  getMatchCounts,
} from '@/utils/helpers/activeIndex'
import { useChatSocket } from '@/utils/hooks/useChatSocket'
import { Alert, Flex } from 'antd'
import Cookies from 'js-cookie'
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import './styles.css'

export const Chat = () => {
  const [tokenExpired, setTokenExpired] = useState(false)
  const { messages, setMessages } = useContext(ChatContext)
  const { socket, chatId } = useChatSocket()
  const [isConnected, setIsConnected] = useState(socket.connected)

  const userId = Cookies.get('userId')

  const endOfMessagesRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'auto' })
  }, [])

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

  socket.emit('getMessages', chatId)

  useEffect(() => {
    socket.connect()
    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onIncomingMessages(messages: Message[]) {
      setMessages(messages)
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('messages', onIncomingMessages)
    console.log(messages)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('message', onIncomingMessages)
    }
  }, [chatId])

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
      {isConnected && (
        <Alert
          message="Conectado!!"
          type="success"
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
      {messages.map((chat, index) => {
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
