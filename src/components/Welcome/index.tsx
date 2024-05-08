import logo from '@/assets/whyAppLogo.png'
import { Flex } from 'antd'

export const Welcome = () => {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      flex={1}
      gap={'2rem'}
      style={{ width: '100%', zIndex: '1' }}
    >
      <img width={180} src={logo} alt="logo" />
      <Flex vertical align="center" style={{ color: 'var(--neutral-100)' }}>
        <span>Bem-vindo ao WhyApp Web</span>
        <span>Interaja com amigos e grupos de forma fácil e divertida.</span>
        <span>Clique em um dos chats abertos, ou inicie um agora mesmo!</span>
      </Flex>
    </Flex>
  )
}
