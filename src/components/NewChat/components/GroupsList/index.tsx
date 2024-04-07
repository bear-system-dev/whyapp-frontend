import { ChatContext } from '@/contexts/chatContext'
import { useGetGroupsChats } from '@/utils/hooks/useGroupChats'
import { Flex } from 'antd'
import { useContext } from 'react'
import { CreateNewGroupButton } from '../NewGroup'
import { UserCard } from '../UserCard'

interface GroupsListProps {
  onClose: () => void
}

export const GroupsList = ({ onClose }: GroupsListProps) => {
  const { setRecipientGroup } = useContext(ChatContext)
  const { groups, groupsLoading, groupsError } = useGetGroupsChats()

  return (
    <Flex vertical gap={16}>
      <h3>Lista de grupos</h3>
      <Flex vertical style={{ gap: '1.5rem', height: '100%', width: '100%' }}>
        {groupsLoading && <h3>carregando...</h3>}
        {groupsError && (
          <h3>
            Não foi possível carregar a lista de usuários. Por favor, tente
            novamente.
          </h3>
        )}
        {groups?.map((group) => {
          return (
            <div key={group.grupo.id} className="userCardStyle">
              <UserCard
                name={group.grupo.nome}
                image={group.grupo.foto}
                onClick={() => {
                  setRecipientGroup(group.grupo)
                  onClose()
                }}
              />
            </div>
          )
        })}
      </Flex>
      <CreateNewGroupButton onClose={onClose} />
    </Flex>
  )
}
