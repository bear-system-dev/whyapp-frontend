import ImageProfile from '@/components/profile/imageProfile'
import NameProfile from '@/components/profile/nameprofile'
import { Button, Flex } from 'antd'
// import StatusContact from './components/statusgroups'
import { ChatContext } from '@/contexts/chatContext'
import { MoreOutlined } from '@ant-design/icons'
import { useContext } from 'react'
import { resetButtonStyles } from './../../mocks/mockUserArray'
import HeaderContainer from './components/headerConteiner'
import StatusContact from './components/statusgroups'

const HeaderChat = () => {
  const { currentUser } = useContext(ChatContext)

  return (
    <HeaderContainer>
      <Flex
        align="center"
        style={{
          gap: '20px',
        }}
      >
        {currentUser && (
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
              <ImageProfile size={'45px'} image={currentUser?.image} />
            </Button>
            <div
              onClick={() => console.log('abrir info')}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Flex vertical gap={5}>
                <NameProfile user={currentUser?.username} colortext="#FFFFFF" />
                <StatusContact status="online" />
                {/* <ContactGroup contact={users} /> */}
              </Flex>
            </div>
          </>
        )}
      </Flex>
      {currentUser && (
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
// 17212B
