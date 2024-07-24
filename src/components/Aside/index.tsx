import whyAppLogo from '@/assets/whyAppLogo.png'
import { useGetFriendsList } from '@/utils/hooks/useGetFriendsList'
import { useGetGroupsChats } from '@/utils/hooks/useGroupChats'
import { Avatar, Button, Flex } from 'antd'
import { NewChat } from '../NewChat'
import { Search } from '../Search'
import { SettingsMenu } from '../SettingsMenu'
import styles from './aside.module.css'
import { useDispatchRecipient } from '@/reducer/context/recipient/recipientContext'

interface AsideProps {
  setOpenMainAside: React.Dispatch<React.SetStateAction<boolean>>
  openMainAside: boolean
}

export const Aside = ({ openMainAside, setOpenMainAside }: AsideProps) => {
  const { setRecipient, setRecipientGroup } = useDispatchRecipient()
  const { friendsList } = useGetFriendsList()
  const { groupsList } = useGetGroupsChats()

  return (
    <aside id="sidebar" className={styles.chat__sidebar}>
      <Flex
        className={styles.chat__usersChatContainer}
        vertical
        align="center"
        gap={16}
      >
        {friendsList?.map((user) => {
          return (
            <Button
              shape="circle"
              key={user.id}
              className={styles.chat__userAvatar}
              onClick={() => {
                setRecipient({
                  id: user.id,
                  nome: user.nome,
                  avatar: user.avatar,
                  isOnline: user.isOnline,
                })
                setRecipientGroup(null)
              }}
            >
              <Avatar
                className={styles.chat__avatar}
                src={user.avatar}
                size={50}
              />
            </Button>
          )
        })}
        {groupsList?.map((group) => {
          return (
            <Button
              shape="circle"
              key={group.grupo.id}
              className={styles.chat__userAvatar}
              onClick={() => {
                setRecipientGroup(group.grupo)
                setRecipient(null)
              }}
            >
              <Avatar
                className={styles.chat__avatar}
                src={group.grupo.foto}
                size={50}
              />
            </Button>
          )
        })}
      </Flex>

      <Flex vertical align="center" justify="end" gap={24}>
        <NewChat />
        <Search />
        <SettingsMenu />
        <img
          onClick={() => setOpenMainAside(!openMainAside)}
          src={whyAppLogo}
          alt="Símbolo de interrogação com partes verdes e brancas que representam a logo da WhyApp"
          height={24}
          width={24}
        />
      </Flex>
    </aside>
  )
}
