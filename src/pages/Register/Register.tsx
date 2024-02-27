import logo from '@/assets/logowhy@2x.png'
import { api } from '@/lib/api'
import { defaultAvatarBase64 } from '@/utils/helpers/toBase64'
import { Alert, AlertProps, Flex, Form } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import Auth from '../../components/Auth/Auth'
import styles from './Register.module.css'

export interface FormValues {
  name: string
  email: string
  password: string
}

const Register = () => {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertProps | null>(null)

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true)
    try {
      await api.post('auth/cadastrar', {
        nome: values.name,
        email: values.email,
        senha: values.password,
        avatar: defaultAvatarBase64,
      })
      setAlert({
        message: 'Registro feito com sucesso! Redirecionando para o login!',
        type: 'success',
      })
      window.location.href = 'http://localhost:5173/login'
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setAlert({ message: error.response?.data?.message, type: 'error' })
      }
    }
    setIsLoading(false)
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
        {alert && (
          <Alert
            message={alert.message}
            type={alert.type}
            showIcon
            style={{ marginBottom: '1rem' }}
          />
        )}
        <Auth
          type="register"
          handleForm={form}
          onSubmit={handleSubmit}
          loading={isLoading}
          authWithGoogle={() => console.log('register with google')}
          authWithFacebook={() => console.log('register with facebook')}
          authWithApple={() => console.log('register with apple')}
        />
      </Flex>
    </Flex>
  )
}
export default Register
