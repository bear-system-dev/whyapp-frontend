import logo from '@/assets/logowhy@2x.png'
import { api } from '@/lib/api'
import { Alert, AlertProps, Flex, Form } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../../components/Auth/Auth'
import { FormValues } from '../Register/Register'
import styles from './ResetPassword.module.css'

const ResetPassword = () => {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertProps | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true)
    try {
      const userEmail = Cookies.get('userEmail')
      const response = await api.post('/user/reset-password/reset', {
        userEmail,
        newPassword: values.password,
      })
      setAlert({
        message:
          response.data.message + '.\n' + '\nRedirecionando para o Login!',
        type: 'success',
      })
      setTimeout(() => {
        navigate('/login')
        setIsLoading(false)
      }, 5000)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setAlert({ message: error.response?.data?.message, type: 'error' })
      }
    }
  }

  return (
    <Flex
      vertical
      justify="center"
      gap={40}
      className={styles.forgot_password_container}
    >
      <Flex
        style={{ minHeight: '200px' }}
        vertical
        justify="end"
        align="center"
      >
        <div className={styles.forgot_password_logo}>
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
          type="reset-password"
          handleForm={form}
          onSubmit={handleSubmit}
          loading={isLoading}
        />
      </Flex>
      <div className={styles.forgot_password_container_background_color}></div>
      <div className={styles.forgot_password_container_background_image}></div>
    </Flex>
  )
}
export default ResetPassword
