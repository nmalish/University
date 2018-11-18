import Admin from './modules/admin'
import TheNotFound from './TheNotFound'

const routes = [
  {
    path: '/admin',
    component: Admin,
    children: Admin.routes
  },
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '*',
    name: '404',
    component: TheNotFound
  }
]

export default routes
