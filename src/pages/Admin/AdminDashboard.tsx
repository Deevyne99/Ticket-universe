import { useState } from 'react'
// import { IoTrendingUpOutline, IoTicketOutline, IoDiamondOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

import AdminSidebar from '../../components/AdminSidebar'
import AdminTopBar from '../../components/AdminTopBar'
import AdminStatCard from '../../components/AdminStatCard'
import SalesChart from '../../components/SalesChart'
import LiveActivityFeed from '../../components/LiveActivityFeed'
import ActiveEventsTable from '../../components/ActiveEventsTable'
import WalletPanel from '../../components/WalletPanel'
import UsersTable from '../../components/UsersTable'
import TransactionsTable from '../../components/TransactionsTable'
import { mockEvents, mockUsers, mockTransactions } from '../../../mockData'

const pageTitles: Record<string, string> = {
  dashboard: 'Dashboard',
  events: 'My Events',
  tickets: 'Tickets',
  attendees: 'Attendees',
  analytics: 'Analytics',
  transactions: 'Revenue',
  nft: 'NFT Tickets',
  settings: 'Settings',
}

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard')

  const stats = [
    {
      label: 'Total Revenue',
      value: '₦4.2M',
      change: '18.4%',
      positive: true,
      icon: '💰',
      sub: 'vs last month',
      bg: '#fff',
      iconBg: '#fef9c3',
    },
    {
      label: 'Tickets Sold',
      value: '3,847',
      change: '12.1%',
      positive: true,
      icon: '🎫',
      sub: 'across 5 active events',
      bg: '#fff',
      iconBg: '#ede9fe',
    },
    {
      label: 'NFTs Minted',
      value: '1,290',
      change: '34%',
      positive: true,
      icon: '◆',
      sub: 'on Ethereum Sepolia',
      bg: '#fff',
      iconBg: '#f0fdf4',
    },
  ]

  return (
    <div
      className='flex min-h-screen bg-gray-50 overflow-hidden'
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <AdminSidebar active={activePage} onNavigate={setActivePage} />

      <div className='flex-1 ml-[240px] flex flex-col min-h-screen min-w-0 overflow-hidden'>
        <AdminTopBar title={pageTitles[activePage]} />

        <main className='flex-1 p-6 flex flex-col gap-5 overflow-y-auto overflow-x-hidden'>
          {activePage === 'dashboard' && (
            <>
              <div className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
                {stats.map((s) => (
                  <AdminStatCard key={s.label} {...s} />
                ))}
              </div>

              <div className='flex flex-col xl:flex-row gap-4 min-w-0'>
                <div className='flex-1 min-w-0'>
                  <SalesChart />
                </div>
                <div className='xl:w-[280px] shrink-0'>
                  <LiveActivityFeed />
                </div>
              </div>

              <div className='flex flex-col xl:flex-row gap-4 min-w-0'>
                <div className='flex-1 min-w-0 overflow-hidden'>
                  <ActiveEventsTable events={mockEvents} />
                </div>
                <div className='xl:w-[240px] shrink-0'>
                  <WalletPanel />
                </div>
              </div>
            </>
          )}

          {activePage === 'events' && <ActiveEventsTable events={mockEvents} />}
          {activePage === 'attendees' && <UsersTable users={mockUsers} />}
          {activePage === 'transactions' && (
            <TransactionsTable transactions={mockTransactions} />
          )}

          {activePage === 'tickets' && (
            <div
              className='bg-white rounded-2xl p-6'
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
            >
              <h3 className='text-gray-900 font-semibold mb-4'>
                Ticket Management
              </h3>
              <p className='text-gray-400 text-sm'>
                Ticket management panel coming soon.
              </p>
            </div>
          )}

          {activePage === 'analytics' && (
            <div className='flex flex-col xl:flex-row gap-4 min-w-0'>
              <div className='flex-1 min-w-0'>
                <SalesChart />
              </div>
              <div className='xl:w-[280px] shrink-0'>
                <LiveActivityFeed />
              </div>
            </div>
          )}

          {activePage === 'nft' && (
            <div
              className='bg-[#0f0f0f] rounded-2xl p-6 max-w-md'
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}
            >
              <p className='text-green-400 text-xs tracking-widest uppercase mb-2'>
                Web3
              </p>
              <h3 className="font-['Bebas_Neue'] text-white text-2xl tracking-wide mb-4">
                NFT Ticket Panel
              </h3>
              <WalletPanel />
            </div>
          )}

          {activePage === 'settings' && (
            <div
              className='bg-white rounded-2xl p-6 max-w-lg'
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
            >
              <h3 className='text-gray-900 font-semibold mb-5'>
                Platform Settings
              </h3>
              <div className='flex flex-col gap-4'>
                {[
                  'Platform Name',
                  'Contact Email',
                  'Support Phone',
                  'Wallet Address',
                ].map((f) => (
                  <div key={f} className='flex flex-col gap-1.5'>
                    <label className='text-gray-400 text-[0.65rem] tracking-[0.12em] uppercase'>
                      {f}
                    </label>
                    <input
                      className='bg-gray-50 border border-gray-100 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:border-green-400 transition-colors'
                      placeholder={f}
                    />
                  </div>
                ))}
                <button className='w-fit bg-green-400 hover:bg-green-300 text-black font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5'>
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
