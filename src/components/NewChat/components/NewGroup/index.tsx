import { Group } from '@/model/GroupModel'

import { CreateNewGroupMutation } from '@/utils/hooks/useCreateNewGroup'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Flex, FormInstance, Modal } from 'antd'
import { useRef } from 'react'
import NewGroupForm from './components/NewGroupForm'
import './styles.css'

interface CreateNewGroupButtonProps {
  onClose: () => void
}

export const CreateNewGroupButton = ({
  onClose,
}: CreateNewGroupButtonProps) => {
  const createNewGroupMutation = CreateNewGroupMutation()
  const [modal, contextHolder] = Modal.useModal()

  const formRef = useRef<FormInstance<Group> | null>(null)

  const handleSubmit = async (values: Partial<Group>) => {
    if (values.nome && values.foto && values.descricao) {
      createNewGroupMutation.mutate({
        nome: values.nome,
        foto: values.foto,
        descricao: values.descricao,
      })
    }

    console.error(
      'Algo saiu mal: verifique se nome, foto e descrição foram preenchidos.',
    )
  }

  const NewGroupFormModal = () => {
    modal.confirm({
      title: 'Criar um novo grupo',
      icon: <ExclamationCircleOutlined />,
      content: <NewGroupForm ref={formRef} onSubmit={handleSubmit} />,
      okText: 'Criar',
      onOk: () => {
        if (formRef.current) {
          handleSubmit(formRef.current.getFieldsValue())
        }
        onClose()
      },
      cancelText: 'Voltar',
      className: 'new-group-form-modal',
    })
  }

  return (
    <Flex vertical gap={24} align="center">
      <Button
        className="create-new-goup-button"
        type="primary"
        shape="default"
        style={{ width: '100%' }}
        onClick={NewGroupFormModal}
      >
        Criar um novo grupo
      </Button>
      {contextHolder}
    </Flex>
  )
}
