import { Flex, Form } from 'antd'
import styles from './Register.module.css'
import logo from '@/assets/logowhy@2x.png'
import Auth from '../../components/Auth/Auth'

const Register = () => {
  const [form] = Form.useForm()

  const handleSubmit = (values: object | null) => {
    console.log(values)
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
