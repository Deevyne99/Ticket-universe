// routes/AdminRoute.jsx
// import { Navigate } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'

// import { ReactNode } from 'react'

const AdminRoute = () => {
  // const user = JSON.parse(localStorage.getItem('user'))

  // if (!user || user.role !== 'admin') {
  //   return <Navigate to='/login' replace />
  // }

  return <AdminDashboard />
}

export default AdminRoute
