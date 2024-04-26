import { FormValues } from '@/pages/Register/Register'
import {
  ArrowLeftOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Icon } from '@iconify/react';
import { Button, Flex, Form, FormInstance, Input } from 'antd'
import { Dispatch, MouseEventHandler } from 'react'
import { PiIdentificationCard } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import styles from './Auth.module.css'
import AuthContainer from './AuthContainer'

type Props = {
  type: 'register' | 'login' | 'forgot-password'
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
          className={styles.auth__return_button}
          icon={<ArrowLeftOutlined />}
          >
            Retornar
          </Button>
        </Link>
      )}
      
      {/* Title and subtitle */}
      <Flex style={{ fontFamily: 'var(--secondary-font)' }}
        vertical gap={10}>
        <h1
          className={styles.auth__title}
        >
          {type === 'login'
            ? 'Entrar'
            : type === 'forgot-password'
              ? 'Redefinir senha'
              : 'Criar uma conta'}
        </h1>
        <p className={styles.auth__description}>
          {type === 'login'
            ? 'Bem-vindo ao WhyApp! Entre com sua conta para retomar suas conversas'
            : type === 'forgot-password'
              ? 'Esqueceu ou precisa alterar a senha? Sem problemas!'
              : 'Bem-vindo ao WhyApp! Registre-se para que possa começar a conversar'}
        </p>
      </Flex>
      <Form
        form={handleForm}
        onFinish={onSubmit}
        layout="vertical"
      >
        {/* username */}
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
        {/* email */}
        {(type === 'register' || type === 'login') && (
          <Form.Item
            label="Email"
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
        {/* password and forgot password link */}
        <Flex vertical>
          <Form.Item
            label={type === 'forgot-password' ? 'Nova senha' : 'Senha'}
            name="password"
            rules={[
              { required: true, message: 'Digite sua senha' },
              { min: 8, message: 'Mínimo 8 caracteres' },
            ]}
            className={styles.label}
            labelCol={{ className: styles.label__col }}
          >
            {/* confirm password or enter new password */}
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
          {/* forgot password link */}
          {type === 'login' && (
            <Link className={styles.auth__forgot_password}
              to="/forgot-password">
              Esqueci minha senha
            </Link>
          )}
        </Flex>
        {/* confirm password */}
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
                    new Error('Email ou senha incorretos.'),
                  )
                },
              }),
            ]}
            className={styles.label}
            labelCol={{ className: styles.label__col }}
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
      {/* login thirty party */}
      {(type === 'register' || type === 'login') && (
        <Flex vertical gap={24}>
          <div className={styles.auth__secundary_action}>
            {type === 'login' ? 'Não tem conta?' : 'Já tem conta?'}{' '}
            <Link
              to={type === 'login' ? '/register' : '/login'}
              className={styles.auth__link}
            >
              {type === 'login' ? 'Crie uma' : 'Entre'}
            </Link>
          </div>
          <Flex align='center' vertical gap={8}>
            <div className={styles.auth__login_thirty_party_label}>
              {type === 'login' ? 'ou entre com' : 'ou cadastre-se com'}
            </div>
            <Flex align="center" style={{ width: '100%' }} gap={8}>
              <Button
                block
                onClick={authWithGoogle}
                size={'large'}
                icon={
                  <Icon fontSize={20} icon="mdi:google" />
                }
                className={styles.auth__login_thirty_party}
              />
              <Button
                onClick={authWithFacebook}
                block
                size={'large'}
                icon={
                  <Icon fontSize={20} icon="mdi:facebook" />
                }
                className={styles.auth__login_thirty_party}
              />
              <Button
                onClick={authWithApple}
                size={'large'}
                block
                icon={
                  <Icon fontSize={20} icon="mdi:apple" />
                }
                className={styles.auth__login_thirty_party}
              />
            </Flex>
          </Flex>
        </Flex>
      )}
    </AuthContainer>
  )
}
export default Auth
