import logo from '@/assets/logowhy@2x.png'
import { api } from '@/lib/api'
import { Alert, AlertProps, Flex, Form } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import Auth from '../../components/Auth/Auth'
import { FormValues } from '../Register/Register'
import styles from './Login.module.css'

const Login = () => {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertProps | null>(null)

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true)
    try {
      const response = await api.post('auth/entrar', {
        email: values.email,
        senha: values.password,
      })
      const inTenMinutes = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
      )
      Cookies.set('token', `${response.data.token}`, { expires: inTenMinutes })
      Cookies.set('userId', response.data.userId)
      setAlert({
        message: 'Login feito com sucesso! Redirecionando para o app!',
        type: 'success',
      })
      window.location.href = import.meta.env.VITE_APP_HOME_URL
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setAlert({ message: error.response?.data?.message, type: 'error' })
      }
    }
    setIsLoading(false)
  }

  return (
    <Flex vertical justify="center" gap={40} className={styles.login_container}>
      <Flex
        style={{ minHeight: '200px' }}
        vertical
        justify="end"
        align="center"
      >
        <div className={styles.login_logo}>
          <img src={logo} alt="logo" />
        </div>
      </Flex>
      <Flex flex={2} vertical align="center" justify="start">
        {alert && (
          <Alert
            message={alert.message}
            type={alert.type}
            showIcon
            style={{ marginBottom: '1rem' }}
          />
        )}
        <Auth
          type="login"
          handleForm={form}
          onSubmit={handleSubmit}
          loading={isLoading}
          authWithGoogle={() => console.log('login with google')}
          authWithFacebook={() => console.log('login with facebook')}
          authWithApple={() => console.log('login with apple')}
        />
      </Flex>
      <div className={styles.login_container_background_color}></div>
      <div className={styles.login_container_background_image}></div>
    </Flex>
  )
}
export default Login
