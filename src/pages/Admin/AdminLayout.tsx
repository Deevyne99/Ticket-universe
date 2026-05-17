import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../components/AdminSidebar'
import AdminTopBar from '../../components/AdminTopBar'

/**
 * AdminLayout
 * -----------
 * This is the persistent shell rendered for every /admin/* route.
 * <Outlet /> is where the current page component mounts.
 * Sidebar and TopBar never unmount — only the <Outlet> content changes.
 */
const AdminLayout = () => {
  return (
    <div
      className='flex min-h-screen bg-gray-50 overflow-hidden'
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Always-visible sidebar */}
      <AdminSidebar />

      {/* Right-hand shell */}
      <div className='flex-1 ml-[240px] flex flex-col min-h-screen min-w-0 overflow-hidden'>
        {/* Always-visible top bar */}
        <AdminTopBar />

        {/* Page content swaps here on navigation */}
        <main className='flex-1 p-6 flex flex-col gap-5 overflow-y-auto overflow-x-hidden'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
