export default [
  {
    path: '',
    redirect: 'auditories'
  },
  {
    path: 'auditories',
    component: () => import('./components/auditories')
  }
]
