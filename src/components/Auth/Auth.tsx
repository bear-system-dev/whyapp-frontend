import { resetButtonStyles } from '@/mocks/mockUserArray'
import { FormValues } from '@/pages/Register/Register'
import {
  ArrowLeftOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Flex, Form, FormInstance, Input, Space } from 'antd'
import { Dispatch, MouseEventHandler } from 'react'
import { PiIdentificationCard } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import styles from './Auth.module.css'
import AuthContainer from './AuthContainer'

const authButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

type Props = {
  type: string
  handleForm: FormInstance<FormValues>
  onSubmit: Dispatch<FormValues>
  authWithGoogle?: MouseEventHandler<HTMLElement>
  authWithFacebook?: MouseEventHandler<HTMLElement>
  authWithApple?: MouseEventHandler<HTMLElement>
  loading: boolean
}

const Auth = ({
  type,
  handleForm,
  onSubmit,
  loading,
  authWithGoogle,
  authWithFacebook,
  authWithApple,
}: Props) => {
  return (
    <AuthContainer>
      {type === 'forgot-password' && (
        <Link to="/login">
          <Button
            style={{
              ...resetButtonStyles,
              color: '#39FF14',
            }}
            icon={<ArrowLeftOutlined />}
          >
            Retornar
          </Button>
        </Link>
      )}

      <Space direction="vertical" size={5}>
        <div
          style={{
            fontSize: 30,
            textDecoration: 'underline',
          }}
        >
          {type === 'login'
            ? 'Entrar'
            : type === 'forgot-password'
              ? 'Redefinir senha'
              : 'Criar uma conta'}
        </div>
        <div className={styles.auth_description}>
          {type === 'login'
            ? 'Bem-vindo ao WhyApp! Entre com sua conta para começar:'
            : type === 'forgot-password'
              ? 'Esqueceu ou precisa alterar a senha? Sem problemas!'
              : 'Bem-vindo ao WhyApp! Registre uma conta para começar:'}
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
              name="wa-name"
              id="wa-name"
              autoComplete="wa-name"
              prefix={<PiIdentificationCard />}
            />
          </Form.Item>
        )}
        {(type === 'register' || type === 'login') && (
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
              id="wa-email"
              autoComplete="wa-email"
              name="wa-email"
              prefix={<UserOutlined />}
            />
          </Form.Item>
        )}

        <Flex vertical style={{ position: 'relative' }}>
          <Form.Item
            label={type === 'forgot-password' ? 'Nova senha' : 'Senha'}
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
              placeholder={
                type === 'forgot-password'
                  ? 'Digite a nova senha'
                  : 'Digite sua senha'
              }
              size="large"
              className={styles.input}
              name="wa-password"
              id="wa-password"
              autoComplete="wa-password"
              prefix={<LockOutlined />}
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
        {(type === 'register' || type === 'forgot-password') && (
          <Form.Item
            label={
              type === 'forgot-password'
                ? 'Confirmar nova senha'
                : 'Confirmar senha'
            }
            name="confirmPassword"
            rules={[
              { required: true, message: 'Digite sua senha' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error('A senha que você digitou não corresponde!'),
                  )
                },
              }),
            ]}
            className={styles.label}
            labelCol={{ className: styles.label_col }}
          >
            <Input.Password
              placeholder={
                type === 'forgot-password'
                  ? 'Confirme a nova senha'
                  : 'Confirme sua senha'
              }
              size="large"
              className={styles.input}
              name="wa-confirm-password"
              id="wa-confirm-password"
              autoComplete="wa-confirm-password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
        )}
        <Button
          htmlType="submit"
          style={{ width: '100%' }}
          size="large"
          className={styles.submit}
          loading={loading}
        >
          {type === 'login'
            ? 'Entrar'
            : type === 'forgot-password'
              ? 'confirmar'
              : 'Cadastrar'}
        </Button>
      </Form>
      {(type === 'register' || type === 'login') && (
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
      )}
    </AuthContainer>
  )
}
export default Auth
