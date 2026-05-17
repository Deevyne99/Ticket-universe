import { useLocation } from 'react-router-dom'

const pageTitles: Record<string, string> = {
  dashboard:    'Dashboard',
  events:       'My Events',
  tickets:      'Tickets',
  attendees:    'Attendees',
  analytics:    'Analytics',
  transactions: 'Revenue',
  nft:          'NFT Tickets',
  settings:     'Settings',
}

const AdminTopBar = () => {
  const { pathname } = useLocation()
  const segment = pathname.split('/').filter(Boolean).at(-1) ?? 'dashboard'
  const title = pageTitles[segment] ?? 'Dashboard'

  return (
    <header className='h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0'>
      <h1 className='text-gray-900 font-semibold text-base tracking-tight'>{title}</h1>

      {/* Right-side actions — extend as needed */}
      <div className='flex items-center gap-3'>
        <button className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors text-sm'>
          🔔
        </button>
        <div className='w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-black text-xs font-bold'>
          AD
        </div>
      </div>
    </header>
  )
}

export default AdminTopBar
