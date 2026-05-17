import { createBrowserRouter, Navigate } from 'react-router-dom'

import {
  Home,
  Events,
  Login,
  Register,
  SingleEvent,
  FavouriteEvents,
  Profile,
  NotFound,
} from './pages'
import App from './App'

// import AdminRoute from './pages/Admin/AdminRoutes'
import UserDashboard from './pages/Admin/UserDashboard'
import DashboardPage from './pages/Admin/DashboardPage'
import TicketsPage from './pages/Admin/TicketsPage'
import EventsPage from './pages/Admin/EventsPage'
import AttendeesPage from './pages/Admin/AttendeesPage'
import AnalyticsPage from './pages/Admin/AnalyticsPage'
import SettingsPage from './pages/Admin/SettingsPage'
import NftPage from './pages/Admin/NftPage'
import TransactionsPage from './pages/Admin/TransactionsPage'
import AdminLayout from './pages/Admin/AdminLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/events', element: <Events /> },

      { path: '/events/:id', element: <SingleEvent /> },
      { path: '/favourite-events', element: <FavouriteEvents /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to='/admin/dashboard' replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'tickets', element: <TicketsPage /> },
      { path: 'attendees', element: <AttendeesPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'transactions', element: <TransactionsPage /> },
      { path: 'nft', element: <NftPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '/user',
    element: <UserDashboard />,
  },
  { path: '/user/:id', element: <Profile /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '*', element: <NotFound /> },
])
export default router
