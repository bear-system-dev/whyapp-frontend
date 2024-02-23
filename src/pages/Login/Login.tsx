import logo from '@/assets/logowhy@2x.png'
import { api } from '@/lib/api'
import { Flex, Form } from 'antd'
import Cookies from 'js-cookie'
import Auth from '../../components/Auth/Auth'
import { FormValues } from '../Register/Register'
import styles from './Login.module.css'

const Login = () => {
  const [form] = Form.useForm()

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await api.post('auth/entrar', {
        email: values.email,
        senha: values.password,
      })
      const inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000)
      Cookies.set('token', `${response.data.token}`, { expires: inTenMinutes })
      Cookies.set('userId', response.data.userId)
      console.log(response.data)
      alert('Login feito com sucesso! Redirecionando para o app!')
      window.location.href = 'http://localhost:5173/'
    } catch (error) {
      console.error('Erro ao criar o usuário:', error)
    }
    form.resetFields()
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
        <Auth
          type="login"
          handleForm={form}
          onSubmit={handleSubmit}
          authWithGoogle={() => console.log('login with google')}
          authWithFacebook={() => console.log('login with facebook')}
          authWithApple={() => console.log('login with apple')}
        />
      </Flex>
    </Flex>
  )
}
export default Login
