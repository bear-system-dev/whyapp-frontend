import logo from '@/assets/logowhy@2x.png'
import { api } from '@/lib/api'
import { Alert, AlertProps, Flex, Form } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../../components/Auth/Auth'
import { FormValues } from '../Register/Register'
import styles from './ResetPasswordCode.module.css'

const ResetPasswordCode = () => {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertProps | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true)
    try {
      const userEmail = Cookies.get('userEmail')
      const response = await api.post(
        `/user/reset-password/verify-code?resetCode=${values.code}`,
        {
          userEmail,
        },
      )
      setAlert({
        message: response.data.message,
        type: 'success',
      })
      navigate('/reset-password')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setAlert({ message: error.response?.data?.message, type: 'error' })
        console.log(error.response?.data.sessionId)
      }
    }
    setIsLoading(false)
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
          type="reset-password-code"
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
export default ResetPasswordCode
