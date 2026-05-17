import AdminStatCard from '../../components/AdminStatCard'
import SalesChart from '../../components/SalesChart'
import LiveActivityFeed from '../../components/LiveActivityFeed'
import ActiveEventsTable from '../../components/ActiveEventsTable'
import WalletPanel from '../../components/WalletPanel'
import { mockEvents } from '../../../mockData'

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
  {
    label: 'Check-in Rate',
    value: '87%',
    change: '2.3%',
    positive: false,
    icon: '✓',
    sub: 'of ticket holders',
    bg: '#fff',
    iconBg: '#fef3c7',
  },
]

const DashboardPage = () => {
  return (
    <>
      {/* Stat cards */}
      <div className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
        {stats.map((s) => (
          <AdminStatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Chart + Activity feed */}
      <div className='flex flex-col xl:flex-row gap-4 min-w-0'>
        <div className='flex-1 min-w-0'>
          <SalesChart />
        </div>
        <div className='xl:w-[280px] shrink-0'>
          <LiveActivityFeed />
        </div>
      </div>

      {/* Events table + Wallet */}
      <div className='flex flex-col xl:flex-row gap-4 min-w-0'>
        <div className='flex-1 min-w-0 overflow-hidden'>
          <ActiveEventsTable events={mockEvents} />
        </div>
        <div className='xl:w-[240px] shrink-0'>
          <WalletPanel />
        </div>
      </div>
    </>
  )
}

export default DashboardPage
