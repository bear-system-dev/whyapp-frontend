import whyAppLogo from '@/assets/whyAppLogo.png'
import { ChatContext } from '@/contexts/chatContext'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { useGetGroupsChats } from '@/utils/hooks/useGroupChats'
import { Avatar, Button, Flex } from 'antd'
import { useContext } from 'react'
import { NewChat } from '../NewChat'
import { Search } from '../Search'
import { SettingsMenu } from '../SettingsMenu'
import styles from './aside.module.css'

export const Aside = () => {
  const { setRecipient, setRecipientGroup } = useContext(ChatContext)
  const { friendsList, usersAndProfileLoading, usersAndProfileError } =
    useGetUsersAndFriends()
  const { groups, groupsLoading, groupsError } = useGetGroupsChats()

  if (usersAndProfileLoading) return 'Carregando...'
  if (usersAndProfileError)
    return 'Ocorreu um erro ao buscar os usuários da sua lista'

  if (groupsLoading) return 'Carregando...'
  if (groupsError) return 'Ocorreu um erro ao buscar os grupos da sua lista'

  return (
    <aside id='sidebar' className={styles.chat__sidebar}>
      <Flex className={styles.chat__usersChatContainer} vertical align="center" gap={16}>
        {friendsList?.map((user) => {
          return (
            <Button
              shape="circle"
              key={user.id}
              className={styles.chat__userAvatar }
              onClick={() => {
                setRecipient({
                  id: user.id,
                  nome: user.nome,
                  avatar: user.avatar,
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

        {groups?.map((group) => {
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
        <img src={whyAppLogo} alt="Símbolo de interrogação com partes verdes e brancas que representam a logo da WhyApp" height={24} width={24} />
      </Flex>
    </aside>
  )
}
