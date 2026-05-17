import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import AdminLayout from '../layouts/AdminLayout'
import DashboardPage from '../pages/admin/DashboardPage'
import EventsPage from '../pages/admin/EventsPage'
import TicketsPage from '../pages/admin/TicketsPage'
import AttendeesPage from '../pages/admin/AttendeesPage'
import AnalyticsPage from '../pages/admin/AnalyticsPage'
import TransactionsPage from '../pages/admin/TransactionsPage'
import NftPage from '../pages/admin/NftPage'
import SettingsPage from '../pages/admin/SettingsPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to admin dashboard */}
        <Route path='/' element={<Navigate to='/admin/dashboard' replace />} />

        {/* Admin layout wraps all admin pages — sidebar + topbar always visible */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard'    element={<DashboardPage />} />
          <Route path='events'       element={<EventsPage />} />
          <Route path='tickets'      element={<TicketsPage />} />
          <Route path='attendees'    element={<AttendeesPage />} />
          <Route path='analytics'    element={<AnalyticsPage />} />
          <Route path='transactions' element={<TransactionsPage />} />
          <Route path='nft'          element={<NftPage />} />
          <Route path='settings'     element={<SettingsPage />} />
          {/* Catch-all inside admin */}
          <Route path='*' element={<Navigate to='dashboard' replace />} />
        </Route>

        {/* Global catch-all */}
        <Route path='*' element={<Navigate to='/admin/dashboard' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
