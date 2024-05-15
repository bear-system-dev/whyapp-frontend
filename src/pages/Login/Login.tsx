import { apiFunction } from '@/api/api'
import logo from '@/assets/logowhy@2x.png'
import { api } from '@/lib/api'
import { useQueryClient } from '@tanstack/react-query'
import { Alert, AlertProps, Flex, Form } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Auth from '../../components/Auth/Auth'
import styles from '../Auth.module.css'
import { FormValues } from '../Register/Register'

const Login = () => {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertProps | null>(null)

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true)

    try {
      const response = await api.post('/auth/entrar', {
        email: values.email,
        senha: values.password,
      })
      const inSevenDays = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
      )
      Cookies.set('token', `${response.data.token}`, { expires: inSevenDays })
      Cookies.set('userId', response.data.userId, { expires: inSevenDays })
      setAlert({
        message: 'Login feito com sucesso! Redirecionando para o app!',
        type: 'success',
      })

      await queryClient.prefetchQuery({
        queryKey: ['friends'],
        queryFn: apiFunction.getFriendsList,
      })

      await queryClient.prefetchQuery({
        queryKey: ['groups'],
        queryFn: apiFunction.getUserGroups,
      })

      await queryClient.prefetchQuery({
        queryKey: ['my-profile-info'],
        queryFn: apiFunction.getMyProfileInfo,
      })

      navigate('/')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setAlert({ message: error.response?.data?.message, type: 'error' })
      }
    }
    setIsLoading(false)
  }

  return (
    <Flex vertical justify="center" gap={40} className={styles.auth_container}>
      <Flex
        style={{ minHeight: '200px' }}
        vertical
        justify="end"
        align="center"
      >
        <div className={styles.auth_logo}>
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
    </Flex>
  )
}
export default Login
