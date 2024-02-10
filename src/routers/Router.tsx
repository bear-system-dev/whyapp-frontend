import App from '@/pages/App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const router = createBrowserRouter([
  {
    path: '*',
    element: <div>404</div>,
  },
  {
    path: '/',
    element: <App />,
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
