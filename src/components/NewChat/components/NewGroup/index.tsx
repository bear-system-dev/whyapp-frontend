import { apiFunction } from '@/api/api'
import { Group } from '@/model/GroupModel'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Flex, FormInstance, Modal } from 'antd'
import { useRef } from 'react'
import NewGroupForm from './components/NewGroupForm'
import './styles.css'

export const CreateNewGroupButton = () => {
  const [modal, contextHolder] = Modal.useModal()

  const formRef = useRef<FormInstance<Group> | null>(null)

  const handleSubmit = async (values: Partial<Group>) => {
    apiFunction.createGroup({
      nome: values.nome,
      foto: values.foto,
      descricao: values.descricao,
    })
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
      },
      cancelText: 'Voltar',
      className: 'new-group-form-modal',
    })
  }

  return (
    <Flex
      vertical
      gap={24}
      align="center"
      style={{ marginBottom: '1rem', width: '100%' }}
    >
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
