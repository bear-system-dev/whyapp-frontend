import { Flex } from 'antd'
import styles from './Register.module.css'
import logo from '@/assets/logowhy@2x.png'
import Auth from '../../components/Auth/Auth'
import { useEffect, useState } from 'react'

const Register = () => {
  const [values, setValues] = useState<object | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)

  useEffect(() => {
    if (values) {
      setSubmitted(true)
      console.log(values)
      setValues(null)
    }
  }, [values])

  return (
    <Flex
      vertical
      justify="center"
      gap={60}
      className={styles.register_container}
    >
      <div className={styles.register_background}></div>
      <Flex style={{ minHeight: '200px' }} vertical justify="end">
        <div className={styles.register_logo}>
          <img src={logo} alt="logo" />
        </div>
      </Flex>
      <Flex flex={1} vertical align="center" justify="start">
        <Auth
          type="register"
          submitted={submitted}
          setValues={setValues}
          authWithGoogle={() => {}}
          authWithFacebook={() => {}}
          authWithApple={() => {}}
        />
      </Flex>
    </Flex>
  )
}
export default Register
