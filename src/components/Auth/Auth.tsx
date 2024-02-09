import { Button, Flex, Form, Input } from 'antd'
import styles from './Auth.module.css'
import { Dispatch, MouseEventHandler, useEffect } from 'react'
import AuthContainer from './AuthContainer'
import { Link } from 'react-router-dom'

const authButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
type Props = {
  type: string
  submitted: boolean
  setValues: Dispatch<null>
  authWithGoogle: MouseEventHandler<HTMLElement>
  authWithFacebook: MouseEventHandler<HTMLElement>
  authWithApple: MouseEventHandler<HTMLElement>
}
const Auth = ({
  type,
  submitted,
  setValues,
  authWithGoogle,
  authWithFacebook,
  authWithApple,
}: Props) => {
  const [form] = Form.useForm()
  useEffect(() => {
    if (submitted) {
      form.resetFields()
    }
  }, [form, submitted])

  return (
    <AuthContainer>
      <h1 className={styles.auth_title}>
        {type === 'login' ? 'Entrar' : 'Criar uma conta'}
      </h1>
      <div className={styles.auth_description}>
        {type === 'login'
          ? 'Bem-vindo ao WhyApp! Vamos bater um papo?'
          : 'Bem-vindo ao WhyApp! Vamos começar?'}
      </div>
      <Form
        className={styles.login_form}
        form={form}
        onFinish={setValues}
        layout="vertical"
      >
        {type === 'register' && (
          <Form.Item
            label="Nome"
            name="name"
            rules={[
              { required: true, message: 'Digite seu nome' },
              { min: 3, message: 'O nome deve ter pelo menos 3 caracteres' },
            ]}
          >
            <Input placeholder="Digite seu nome" size="large" />
          </Form.Item>
        )}
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            { required: true, message: 'Digite seu e-mail' },
            { type: 'email', message: 'E-mail inválido' },
          ]}
        >
          <Input placeholder="Digite seu e-mail" size="large" />
        </Form.Item>
        <Form.Item
          label="Senha"
          name="password"
          rules={[
            { required: true, message: 'Digite sua senha' },
            { min: 8, message: 'A senha deve ter pelo menos 8 caracteres' },
          ]}
        >
          <Input.Password placeholder="Digite sua senha" size="large" />
        </Form.Item>
        {type === 'register' && (
          <Form.Item
            label="Confirmar Senha"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Digite sua senha' },
              { min: 8, message: 'A senha deve ter pelo menos 8 caracteres' },
            ]}
          >
            <Input.Password placeholder="Confirme sua senha" size="large" />
          </Form.Item>
        )}
        <Button htmlType="submit" style={{ width: '100%' }} size="large">
          {type === 'login' ? 'Entrar' : 'Cadastrar'}
        </Button>
      </Form>
      <Flex className={styles.auth_alternative} vertical align="center">
        {type === 'login' ? (
          <div>
            Não tem conta? <Link to="/register">Crie uma</Link>
          </div>
        ) : (
          <div>
            Ja tem conta? <Link to="/login">Entre</Link>
          </div>
        )}
        <div>{type === 'login' ? 'ou entre com' : 'ou cadastre-se com'}</div>
        <Flex align="center" gap={10}>
          <Button
            onClick={authWithGoogle}
            shape="circle"
            icon={
              // eslint-disable-next-line jsx-a11y/alt-text
              <img src="https://img.icons8.com/fluency/24/google-logo.png" />
            }
            style={authButtonStyles}
          />
          <Button
            onClick={authWithFacebook}
            shape="circle"
            icon={
              // eslint-disable-next-line jsx-a11y/alt-text
              <img src="https://img.icons8.com/color/26/facebook-new.png" />
            }
            style={authButtonStyles}
          />
          <Button
            onClick={authWithApple}
            shape="circle"
            icon={
              // eslint-disable-next-line jsx-a11y/alt-text
              <img src="https://img.icons8.com/ios-glyphs/24/mac-os.png" />
            }
            style={authButtonStyles}
          />
        </Flex>
      </Flex>
    </AuthContainer>
  )
}
export default Auth
