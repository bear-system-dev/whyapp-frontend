import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Flex, Modal } from 'antd'
import './styles.css'

export const ChatsMenu = () => {
  const [modal, contextHolder] = Modal.useModal()

  const ConfirmActionModal = () => {
    modal.confirm({
      title: 'Tem certeza disto?',
      icon: <ExclamationCircleOutlined />,
      content:
        'Esta ação é permanente e todas as suas mensagens serão perdidas. Tem certeza que deseja prosseguir?',
      okText: 'Apagar',
      cancelText: 'Voltar',
      className: 'confirm-action-modal',
    })
  }

  return (
    <Flex vertical gap={24}>
      <h2 style={{ alignSelf: 'start', fontSize: '1rem' }}>Chats</h2>
      <Flex vertical align="center" gap={16}>
        <h3 style={{ alignSelf: 'start', fontSize: '1rem' }}>
          Histórico de conversas
        </h3>
        <Flex
          vertical
          align="center"
          gap={4}
          style={{ marginBottom: '1rem', width: '100%' }}
        >
          <Button
            danger
            type="primary"
            shape="default"
            style={{ width: '100%' }}
            onClick={ConfirmActionModal}
          >
            Limpar mensagens
          </Button>
          <span style={{ fontSize: '0.75rem', textWrap: 'pretty' }}>
            Essa ação irá excluir todas as mensagens que você enviou e recebeu.
          </span>
        </Flex>
        <Flex vertical>
          <Button
            danger
            type="primary"
            shape="default"
            style={{ width: '100%' }}
            onClick={ConfirmActionModal}
          >
            Apagar histórico de conversas
          </Button>
          <span style={{ fontSize: '0.75rem', textWrap: 'pretty' }}>
            Essa ação irá apagar todo o histórico de mensagens e de interações
            com seus contatos, incluindo grupos.
          </span>
        </Flex>
      </Flex>
      {contextHolder}
    </Flex>
  )
}
