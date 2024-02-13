import ImageProfile from '@/components/profile/imageProfile'
import NameProfile from '@/components/profile/nameprofile'
import { Button, Flex } from 'antd'
// import StatusContact from './components/statusgroups'
import { username, users } from '@/mocks/mockUserArray'
import { MoreOutlined } from '@ant-design/icons'
import ContactGroup from './components/contactsgroups'
import HeaderContainer from './components/headerConteiner'
import { resetButtonStyles } from './../../mocks/mockUserArray'

const HeaderChat = () => {
  return (
    <HeaderContainer>
      <Flex
        align="center"
        style={{
          gap: '20px',
        }}
      >
        <Button
          shape="circle"
          style={{
            ...resetButtonStyles,
            height: '45px',
            width: '45px',
          }}
          onClick={() => console.log('abrir info')}
        >
          <ImageProfile
            size={'45px'}
            image="031b68882265722dede1080a200f015a.jpg"
          />
        </Button>
        <div
          onClick={() => console.log('abrir info')}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          <Flex vertical gap={5}>
            <NameProfile user={username} colortext="#FFFFFF" />
            {/* <StatusContact status="online" /> */}
            <ContactGroup contact={users} />
          </Flex>
        </div>
      </Flex>
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
    </HeaderContainer>
  )
}
export default HeaderChat
// 17212B
