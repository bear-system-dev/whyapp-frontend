import { Flex, Form } from 'antd'
import styles from './Login.module.css'
import logo from '@/assets/logowhy@2x.png'
import Auth from '../../components/Auth/Auth'

const Login = () => {
  const [form] = Form.useForm()

  const handleSubmit = (values: object | null) => {
    console.log(values)
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
