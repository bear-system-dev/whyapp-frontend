import { Button, Flex, Form, FormInstance, Input, Space } from 'antd'
import styles from './Auth.module.css'
import { Dispatch, MouseEventHandler } from 'react'
import AuthContainer from './AuthContainer'
import { Link } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const authButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
type Props = {
  type: string
  handleForm: FormInstance<null>
  onSubmit: Dispatch<null>
  authWithGoogle: MouseEventHandler<HTMLElement>
  authWithFacebook: MouseEventHandler<HTMLElement>
  authWithApple: MouseEventHandler<HTMLElement>
}
const Auth = ({
  type,
  handleForm,
  onSubmit,
  authWithGoogle,
  authWithFacebook,
  authWithApple,
}: Props) => {
  return (
    <AuthContainer>
      <Space direction="vertical" size={5}>
        <div
          style={{
            fontSize: 30,
            textDecoration: 'underline',
          }}
        >
          {type === 'login' ? 'Entrar' : 'Criar uma conta'}
        </div>
        <div className={styles.auth_description}>
          {type === 'login'
            ? 'Bem-vindo ao WhyApp! Vamos bater um papo?'
            : 'Bem-vindo ao WhyApp! Vamos começar?'}
        </div>
      </Space>
      <Form
        className={styles.login_form}
        form={handleForm}
        onFinish={onSubmit}
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
            className={styles.label}
            labelCol={{ className: styles.label_col }}
          >
            <Input
              placeholder="Digite seu nome"
              size="large"
              className={styles.input}
              autoComplete="off"
            />
          </Form.Item>
        )}
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            { required: true, message: 'Digite seu e-mail' },
            { type: 'email', message: 'E-mail inválido' },
          ]}
          className={styles.label}
          labelCol={{ className: styles.label_col }}
        >
          <Input
            placeholder="Digite seu e-mail"
            size="large"
            className={styles.input}
            prefix={type === 'login' && <UserOutlined />}
            autoComplete="off"
          />
        </Form.Item>
        <Flex vertical style={{ position: 'relative' }}>
          <Form.Item
            label="Senha"
            name="password"
            rules={[
              { required: true, message: 'Digite sua senha' },
              { min: 8, message: 'Mínimo 8 caracteres' },
            ]}
            className={styles.label}
            labelCol={{ className: styles.label_col }}
            style={{
              position: 'relative',
              marginBottom: type === 'login' ? 30 : '',
            }}
          >
            <Input.Password
              placeholder="Digite sua senha"
              size="large"
              className={styles.input}
              prefix={type === 'login' && <LockOutlined />}
            />
          </Form.Item>
          {type === 'login' && (
            <Link
              to="/forgot-password"
              style={{
                color: '#39FF14',
                textDecoration: 'underline',
                position: 'absolute',
                right: 0,
                bottom: 10,
                fontSize: '.8rem',
              }}
            >
              Esqueci minha senha
            </Link>
          )}
        </Flex>
        {type === 'register' && (
          <Form.Item
            label="Confirmar Senha"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Digite sua senha' },
              { min: 8, message: 'Mínimo 8 caracteres' },
            ]}
            className={styles.label}
            labelCol={{ className: styles.label_col }}
          >
            <Input.Password
              placeholder="Confirme sua senha"
              size="large"
              className={styles.input}
            />
          </Form.Item>
        )}
        <Button
          htmlType="submit"
          style={{ width: '100%' }}
          size="large"
          className={styles.submit}
        >
          {type === 'login' ? 'Entrar' : 'Cadastrar'}
        </Button>
      </Form>
      <Flex
        className={styles.auth_alternative}
        vertical
        align="center"
        gap={10}
      >
        <div
          style={{
            color: 'rgb(255 255 255 / 81%)',
            borderBottom: '2px solid rgb(255 255 255 / 51%)',
            paddingBottom: 5,
          }}
        >
          {type === 'login' ? 'Não tem conta?' : 'Ja tem conta?'}{' '}
          <Link
            to={type === 'login' ? '/register' : '/login'}
            style={{
              color: 'rgb(255 255 255 / 81%)',
              fontWeight: '600',
            }}
          >
            {type === 'login' ? 'Crie uma' : 'Entre'}
          </Link>
        </div>
        <div style={{ fontSize: '.8rem' }}>
          {type === 'login' ? 'ou entre com' : 'ou cadastre-se com'}
        </div>
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
