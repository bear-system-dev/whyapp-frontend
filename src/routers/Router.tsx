import App from '@/pages/App'
import ForgotPassword from '@/pages/ForgotPassword/ForgotPassword'
import ResetPassword from '@/pages/ResetPassword/ResetPassword'
import ResetPasswordCode from '@/pages/ResetPasswordCode/ResetPasswordCode'
import Cookies from 'js-cookie'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const loggedIn = Cookies.get('token')

const router = createBrowserRouter([
  {
    path: '*',
    element: <div>404</div>,
  },
  {
    path: '/',
    element: !loggedIn ? <Login /> : <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password/code',
    element: <ResetPasswordCode />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
