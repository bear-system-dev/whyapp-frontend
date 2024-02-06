import { Button, Form, Input } from 'antd'

const Login = () => {
  return (
    <Form
      style={{
        width: '100%',
        maxWidth: '300px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        padding: '20px',
      }}
    >
      <Form.Item>
        <Input type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Button>Submit</Button>
    </Form>
  )
}
export default Login
