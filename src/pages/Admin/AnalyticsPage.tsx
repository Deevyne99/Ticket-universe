import SalesChart from '../../components/SalesChart'
import LiveActivityFeed from '../../components/LiveActivityFeed'

const AnalyticsPage = () => (
  <div className='flex flex-col xl:flex-row gap-4 min-w-0'>
    <div className='flex-1 min-w-0'>
      <SalesChart />
    </div>
    <div className='xl:w-[280px] shrink-0'>
      <LiveActivityFeed />
    </div>
  </div>
)

export default AnalyticsPage
