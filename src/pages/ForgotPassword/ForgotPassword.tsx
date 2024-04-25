import logo from '@/assets/logowhy@2x.png'
import { Alert, AlertProps, Flex, Form } from 'antd'
import { useState } from 'react'
import Auth from '../../components/Auth/Auth'
import { FormValues } from '../Register/Register'
import styles from '../Auth.module.css';

const ForgotPassword = () => {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertProps | null>(null)

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true)
    try {
      console.log(values.password)
      // const response = await api.post('/auth/entrar', {
      //   email: values.email,
      //   senha: values.password,
      // })
      // const inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000)
      // Cookies.set('token', `${response.data.token}`, { expires: inTenMinutes })
      // Cookies.set('userId', response.data.userId)
      setAlert({
        message: 'Senha redefinida com sucesso! Redirecionando para o login!',
        type: 'success',
      })
      window.location.href = `${import.meta.env.VITE_APP_HOME_URL}/login`
    } catch (error) {
      // if (axios.isAxiosError(error)) {
      //   setAlert({ message: error.response?.data?.message, type: 'error' })
      // }
    }
    setIsLoading(false)
  }

  return (
    <Flex
      vertical
      justify="center"
      gap={40}
      className={styles.auth_container}
    >
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
