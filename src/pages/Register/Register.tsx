import logo from '@/assets/logowhy@2x.png'
import { api } from '@/lib/api'
import { defaultAvatarBase64 } from '@/utils/helpers/toBase64'
import { Flex, Form } from 'antd'
import Auth from '../../components/Auth/Auth'
import styles from './Register.module.css'

export interface FormValues {
  name: string
  email: string
  password: string
}

const Register = () => {
  const [form] = Form.useForm()

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await api.post('auth/cadastrar', {
        nome: values.name,
        email: values.email,
        senha: values.password,
        avatar: defaultAvatarBase64,
      })
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao criar o usuário:', error)
    }
    form.resetFields()
  }

  return (
    <Flex
      vertical
      justify="center"
      gap={40}
      className={styles.register_container}
    >
      <Flex
        style={{ minHeight: '200px' }}
        vertical
        justify="end"
        align="center"
      >
        <div className={styles.register_logo}>
          <img src={logo} alt="logo" />
        </div>
      </Flex>
      <Flex flex={1} vertical align="center" justify="start">
        <Auth
          type="register"
          handleForm={form}
          onSubmit={handleSubmit}
          authWithGoogle={() => console.log('register with google')}
          authWithFacebook={() => console.log('register with facebook')}
          authWithApple={() => console.log('register with apple')}
        />
      </Flex>
    </Flex>
  )
}
export default Register
