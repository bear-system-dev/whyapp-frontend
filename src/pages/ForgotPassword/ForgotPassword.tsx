import logo from '@/assets/logowhy@2x.png'
import { api } from '@/lib/api'
import { Alert, AlertProps, Flex, Form } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../../components/Auth/Auth'
import styles from '../Auth.module.css'
import { FormValues } from '../Register/Register'

const ForgotPassword = () => {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertProps | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true)
    try {
      const response = await api.post('/user/reset-password/send-code', {
        userEmail: values.email,
      })
      Cookies.set('userEmail', response.data.data.userEmail)

      setAlert({
        message: 'Código enviado para o e-mail com sucesso!',
        type: 'success',
      })
      navigate('/reset-password/code')
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
          type="forgot-password"
          handleForm={form}
          onSubmit={handleSubmit}
          loading={isLoading}
        />
      </Flex>
      <div className={styles.forgot_password_container_background_color}></div>
    </Flex>
  )
}
export default ForgotPassword
