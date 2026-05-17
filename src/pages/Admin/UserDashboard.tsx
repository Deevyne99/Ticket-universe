import { useState } from 'react'
import { IoSearchOutline, IoNotificationsOutline } from 'react-icons/io5'
import UserSidebar from '../../components/UserSidebar'
import UserStatCard from '../../components/UserStatCard'
import TicketCard from '../../components/TicketCard'
import UpcomingEventCard from '../../components/UpcomingEventCard'
import { mockTickets, mockEvents } from '../../../mockData'

const pageTitles: Record<string, string> = {
  overview: 'Overview',
  tickets: 'My Tickets',
  upcoming: 'Upcoming Events',
  favourites: 'Favourites',
  profile: 'My Profile',
}

const UserDashboard = () => {
  const [activePage, setActivePage] = useState('overview')

  const stats = [
    {
      label: 'Tickets Purchased',
      value: '4',
      icon: '🎫',
      sub: '2 upcoming',
      iconBg: '#ede9fe',
      change: '2',
      positive: true,
    },
    {
      label: 'Upcoming Events',
      value: '2',
      icon: '📅',
      sub: 'Next: 15 Mar',
      iconBg: '#f0fdf4',
    },
    {
      label: 'Favourited Events',
      value: '5',
      icon: '❤️',
      sub: 'View collection',
      iconBg: '#fef2f2',
    },
    {
      label: 'Total Spent',
      value: '$205',
      icon: '💳',
      sub: 'This year',
      iconBg: '#fef9c3',
    },
  ]

  return (
    <div
      className='flex min-h-screen bg-gray-50'
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <UserSidebar active={activePage} onNavigate={setActivePage} />

      <div className='flex-1 ml-[240px] flex flex-col min-h-screen'>
        {/* Top bar */}
        <header
          className='h-[64px] bg-white border-b border-gray-100 flex items-center justify-between px-8'
          style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}
        >
          <h1 className="font-['Bebas_Neue'] text-gray-900 text-2xl tracking-widest">
            {pageTitles[activePage]}
          </h1>
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-green-400 transition-colors'>
              <IoSearchOutline className='text-gray-400 text-sm' />
              <input
                type='text'
                placeholder='Search events...'
                className='bg-transparent text-gray-700 text-xs outline-none placeholder-gray-300 w-36'
              />
            </div>
            <button className='relative w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-400 hover:text-green-500 transition-all'>
              <IoNotificationsOutline className='text-base' />
              <span className='absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-green-400 border-2 border-white' />
            </button>
            <div className='w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white text-xs font-bold cursor-pointer'>
              AO
            </div>
          </div>
        </header>

        <main className='flex-1 p-6 flex flex-col gap-5 overflow-auto'>
          {/* OVERVIEW */}
          {activePage === 'overview' && (
            <>
              {/* Welcome banner */}
              <div className='relative bg-gradient-to-r from-[#0f0f0f] via-[#0f170f] to-[#0f0f0f] rounded-2xl p-6 overflow-hidden'>
                <div
                  className='absolute inset-0 opacity-[0.04]'
                  style={{
                    backgroundImage:
                      'linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className='absolute right-6 top-1/2 -translate-y-1/2 opacity-10 text-[6rem]'>
                  🎟
                </div>
                <div className='relative z-10'>
                  <p className='text-green-400 text-[0.65rem] tracking-[0.2em] uppercase mb-1'>
                    Welcome back
                  </p>
                  <h2 className="font-['Bebas_Neue'] text-white text-4xl tracking-wide leading-none">
                    Hey, Amara 👋
                  </h2>
                  <p className='text-gray-500 text-sm mt-1'>
                    You have{' '}
                    <span className='text-green-400 font-semibold'>
                      2 upcoming events
                    </span>{' '}
                    this month.
                  </p>
                </div>
              </div>

              {/* Stat cards */}
              <div className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
                {stats.map((s) => (
                  <UserStatCard key={s.label} {...s} />
                ))}
              </div>

              {/* Recent tickets */}
              <div>
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='text-gray-900 font-semibold text-sm'>
                    Recent Tickets
                  </h3>
                  <button
                    className='text-green-500 text-xs hover:text-green-600 transition-colors'
                    onClick={() => setActivePage('tickets')}
                  >
                    View all →
                  </button>
                </div>
                <div className='flex flex-col gap-3'>
                  {mockTickets.slice(0, 3).map((t) => (
                    <TicketCard key={t.id} ticket={t} />
                  ))}
                </div>
              </div>

              {/* Upcoming events */}
              <div>
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='text-gray-900 font-semibold text-sm'>
                    Upcoming Events
                  </h3>
                  <button
                    className='text-green-500 text-xs hover:text-green-600 transition-colors'
                    onClick={() => setActivePage('upcoming')}
                  >
                    View all →
                  </button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                  {mockEvents
                    .filter((e) => e.status === 'upcoming')
                    .slice(0, 3)
                    .map((e) => (
                      <UpcomingEventCard key={e.id} event={e} />
                    ))}
                </div>
              </div>
            </>
          )}

          {/* MY TICKETS */}
          {activePage === 'tickets' && (
            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-between mb-1'>
                <p className='text-gray-400 text-sm'>
                  {mockTickets.length} tickets total
                </p>
                <div className='flex gap-2'>
                  {['All', 'Confirmed', 'Pending', 'Cancelled'].map((f) => (
                    <button
                      key={f}
                      className='text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-green-300 hover:text-green-600 transition-all'
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              {mockTickets.map((t) => (
                <TicketCard key={t.id} ticket={t} />
              ))}
            </div>
          )}

          {/* UPCOMING */}
          {activePage === 'upcoming' && (
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
              {mockEvents
                .filter((e) => e.status === 'upcoming')
                .map((e) => (
                  <UpcomingEventCard key={e.id} event={e} />
                ))}
            </div>
          )}

          {/* FAVOURITES */}
          {activePage === 'favourites' && (
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
              {mockEvents.slice(0, 5).map((e) => (
                <UpcomingEventCard key={e.id} event={e} />
              ))}
            </div>
          )}

          {/* PROFILE */}
          {activePage === 'profile' && (
            <div className='max-w-xl flex flex-col gap-4'>
              <div
                className='bg-white rounded-2xl p-6 flex items-center gap-5'
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                <div className='w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white text-xl font-bold'>
                  AO
                </div>
                <div>
                  <h3 className='text-gray-900 font-semibold'>Amara Obi</h3>
                  <p className='text-gray-400 text-sm'>amara@email.com</p>
                  <p className='text-green-500 text-xs mt-1'>
                    Member since Jan 2025
                  </p>
                </div>
              </div>
              <div
                className='bg-white rounded-2xl p-6 flex flex-col gap-4'
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                <h3 className='text-gray-900 font-semibold text-sm'>
                  Account Info
                </h3>
                {[
                  { label: 'Full Name', value: 'Amara Obi' },
                  { label: 'Email', value: 'amara@email.com' },
                  { label: 'Phone', value: '+234 800 000 0000' },
                  { label: 'Location', value: 'Lagos, Nigeria' },
                ].map(({ label, value }) => (
                  <div key={label} className='flex flex-col gap-1.5'>
                    <label className='text-gray-400 text-[0.65rem] tracking-[0.12em] uppercase'>
                      {label}
                    </label>
                    <input
                      defaultValue={value}
                      className='bg-gray-50 border border-gray-100 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:border-green-400 transition-colors'
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

export default UserDashboard
