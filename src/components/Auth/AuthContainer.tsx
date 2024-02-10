import { Flex } from 'antd'
import styles from './AuthContainer.module.css'

type Props = {
  children: React.ReactNode
}
const AuthContainer = (props: Props) => {
  return (
    <Flex vertical className={styles.auth_container} gap={10}>
      {props.children}
    </Flex>
  )
}
export default AuthContainer
