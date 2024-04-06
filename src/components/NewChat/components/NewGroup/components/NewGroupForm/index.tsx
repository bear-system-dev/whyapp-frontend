import { Group } from '@/model/GroupModel'
import { Form, FormInstance, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Dispatch, forwardRef } from 'react'
import UploadAvatar from './components/UploadButton'
import './styles.css'

interface NewGroupFormProps {
  onSubmit: Dispatch<Group>
}

const InputFormStyles: React.CSSProperties = {
  background:
    'linear-gradient(to bottom right, #C9C9C94D, #C4C4C41A) padding-box, linear-gradient(to bottom left, #FFFFFF4D, #D3D3D31A) border-box',
  color: '#FFFFFF',
  width: '100%',
}

const NewGroupForm = forwardRef<FormInstance<Group>, NewGroupFormProps>(
  function NewGroupForm({ onSubmit }, ref) {
    const form = Form.useForm()[0]

    const handleAvatarChange = (url: string) => {
      form.setFieldsValue({ avatar: url })
    }

    const handleFormSubmit = (values: Group) => {
      onSubmit(values)
    }

    return (
      <Form
        onFinish={handleFormSubmit}
        className="form"
        layout="vertical"
        form={form}
        ref={ref}
      >
        <Form.Item
          label="Título do grupo"
          name="nome"
          rules={[
            { required: true, message: 'Digite um título para o novo grupo' },
          ]}
          className="new-group-form-label"
        >
          <Input
            className="new-group-form-field"
            style={InputFormStyles}
            placeholder="Digite um título para o novo grupo"
          />
        </Form.Item>

        <Form.Item
          label="Imagem do grupo"
          name="foto"
          rules={[
            {
              required: true,
              message: 'Selecione uma imagem para o novo grupo',
            },
          ]}
          className="new-group-form-label upload"
        >
          <UploadAvatar onAvatarChange={handleAvatarChange} />
        </Form.Item>

        <Form.Item
          label="Descrição do grupo"
          name="descricao"
          rules={[
            {
              required: true,
              message: 'Digite uma descrição para o novo grupo',
            },
          ]}
          className="new-group-form-label "
        >
          <TextArea
            className="new-group-form-field"
            showCount
            maxLength={240}
            style={InputFormStyles}
            placeholder="Digite uma descrição para o novo grupo"
          />
        </Form.Item>
      </Form>
    )
  },
)

export default NewGroupForm
