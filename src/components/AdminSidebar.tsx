import { useNavigate, useLocation } from 'react-router-dom'
import { TbUniverse } from 'react-icons/tb'
import {
  IoGridOutline,
  IoCalendarOutline,
  IoPeopleOutline,
  IoReceiptOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoTicketOutline,
  IoAnalyticsOutline,
} from 'react-icons/io5'

const navGroups = [
  {
    label: 'Overview',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <IoGridOutline /> },
      { id: 'events',    label: 'My Events', icon: <IoCalendarOutline />, badge: 3 },
      { id: 'tickets',   label: 'Tickets',   icon: <IoTicketOutline /> },
    ],
  },
  {
    label: 'Management',
    items: [
      { id: 'attendees',     label: 'Attendees', icon: <IoPeopleOutline /> },
      { id: 'analytics',    label: 'Analytics', icon: <IoAnalyticsOutline /> },
      { id: 'transactions',  label: 'Revenue',   icon: <IoReceiptOutline /> },
    ],
  },
  {
    label: 'Web3',
    items: [
      { id: 'nft', label: 'NFT Tickets', icon: '◆' },
    ],
  },
]

const AdminSidebar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Derives active page from the last URL segment: /admin/events → "events"
  const active = pathname.split('/').filter(Boolean).at(-1) ?? 'dashboard'

  const go = (id: string) => navigate(`/admin/${id}`)

  return (
    <aside
      className='fixed left-0 top-0 h-full w-[240px] bg-white flex flex-col z-40 border-r border-gray-200'
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Logo */}
      <div className='flex items-center gap-3 px-5 py-5 border-b border-gray-200'>
        <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-sm'>
          <TbUniverse className='text-black text-xl' />
        </div>
        <div>
          <p className="font-['Bebas_Neue'] text-black text-lg tracking-[0.1em] leading-none">
            TICKET<span className='text-green-500'>UNIVERSE</span>
          </p>
          <p className='text-gray-500 text-[0.55rem] tracking-[0.18em] uppercase mt-0.5'>
            Admin Panel
          </p>
        </div>
      </div>

      {/* Navigation groups */}
      <nav className='flex-1 px-3 py-5 flex flex-col gap-6 overflow-y-auto'>
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className='text-gray-400 text-[0.58rem] tracking-[0.22em] uppercase px-3 mb-2'>
              {group.label}
            </p>

            <div className='flex flex-col gap-1'>
              {group.items.map((item) => {
                const isActive = active === item.id

                return (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 text-left relative ${
                      isActive
                        ? 'bg-green-50 text-green-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`text-base ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
                      {item.icon}
                    </span>

                    <span className='flex-1'>{item.label}</span>

                    {'badge' in item && item.badge && (
                      <span className='bg-green-100 text-green-600 text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full'>
                        {item.badge}
                      </span>
                    )}

                    {isActive && (
                      <span className='absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-green-500 rounded-r-full' />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom: settings, logout, user chip */}
      <div className='px-3 pb-5 border-t border-gray-200 pt-4 flex flex-col gap-1'>
        <button
          onClick={() => go('settings')}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 ${
            active === 'settings'
              ? 'bg-green-50 text-green-600'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <IoSettingsOutline className='text-base' />
          Settings
        </button>

        <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all'>
          <IoLogOutOutline className='text-base' />
          Sign Out
        </button>

        <div className='flex items-center gap-3 px-3 py-3 mt-2 bg-gray-50 rounded-xl border border-gray-200'>
          <div className='w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-black text-xs font-bold shrink-0'>
            AD
          </div>
          <div className='min-w-0'>
            <p className='text-gray-800 text-xs font-medium truncate'>Admin User</p>
            <p className='text-gray-500 text-[0.6rem] truncate'>admin@ticketuniverse.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default AdminSidebar
