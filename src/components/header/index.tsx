import ImageProfile from '@/components/profile/imageProfile'
import NameProfile from '@/components/profile/nameprofile'
import { ChatContext } from '@/contexts/chatContext'
import { MoreOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import { useContext } from 'react'
import { resetButtonStyles } from './../../mocks/mockUserArray'
import ContactGroup from './components/contactsgroups'
import HeaderContainer from './components/headerConteiner'
import StatusContact from './components/statusgroups'

const HeaderChat = () => {
  const { recipient, recipientGroup } = useContext(ChatContext)

  return (
    <HeaderContainer>
      <Flex
        align="center"
        style={{
          gap: '20px',
        }}
      >
        {recipient ? (
          <>
            <Button
              shape="circle"
              style={{
                ...resetButtonStyles,
                height: '45px',
                width: '45px',
              }}
              onClick={() => console.log('abrir info')}
            >
              <ImageProfile size={'45px'} image={recipient?.avatar} />
            </Button>
            <div
              onClick={() => console.log('abrir info')}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Flex vertical gap={5}>
                <NameProfile user={recipient?.nome} colortext="#FFFFFF" />
                <StatusContact status="online" />
              </Flex>
            </div>
          </>
        ) : recipientGroup ? (
          <>
            <Button
              shape="circle"
              style={{
                ...resetButtonStyles,
                height: '45px',
                width: '45px',
              }}
              onClick={() => console.log('abrir info')}
            >
              <ImageProfile size={'45px'} image={recipientGroup?.foto} />
            </Button>
            <div
              onClick={() => console.log('abrir info')}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Flex vertical gap={5}>
                <NameProfile user={recipientGroup?.nome} colortext="#FFFFFF" />
                <ContactGroup />
              </Flex>
            </div>
          </>
        ) : null}
      </Flex>
      {recipient && (
        <Button
          shape="circle"
          style={{
            ...resetButtonStyles,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => console.log('abrir info')}
        >
          <MoreOutlined
            style={{
              color: '#FFFFFF',
              fontWeight: '800',
              fontSize: '20px',
            }}
          />
        </Button>
      )}
    </HeaderContainer>
  )
}
export default HeaderChat
