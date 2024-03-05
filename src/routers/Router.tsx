import App from '@/pages/App'
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
    path: '/register',
    element: <Register />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
