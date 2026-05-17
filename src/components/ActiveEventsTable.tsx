import { Event } from '../../types'

interface ActiveEventsTableProps {
  events: Event[]
}

const statusConfig: Record<
  string,
  { label: string; color: string; bg: string; dot: string }
> = {
  live: { label: 'Live', color: '#16a34a', bg: '#f0fdf4', dot: '#4ade80' },
  upcoming: {
    label: 'Upcoming',
    color: '#d97706',
    bg: '#fffbeb',
    dot: '#f59e0b',
  },
  ended: { label: 'Ended', color: '#6b7280', bg: '#f9fafb', dot: '#9ca3af' },
  draft: { label: 'Draft', color: '#6b7280', bg: '#f9fafb', dot: '#9ca3af' },
}

const ActiveEventsTable = ({ events }: ActiveEventsTableProps) => {
  return (
    <div
      className='bg-white rounded-2xl overflow-hidden'
      style={{
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className='flex items-center justify-between px-6 py-4 border-b border-gray-50'>
        <h3 className='text-gray-900 font-semibold text-sm'>Active Events</h3>
        <button className='text-green-500 text-xs hover:text-green-600 transition-colors font-medium'>
          Manage all →
        </button>
      </div>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-gray-50'>
              {[
                'Event',
                'Date',
                'Tickets Sold',
                'Revenue',
                'NFTs',
                'Status',
              ].map((h) => (
                <th
                  key={h}
                  className='text-left px-6 py-3 text-gray-400 text-[0.65rem] tracking-[0.12em] uppercase font-medium whitespace-nowrap'
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {events.map((event, i) => {
              const cfg = statusConfig[event.status]
              const pct = Math.round((event.sold / event.tickets) * 100)
              return (
                <tr
                  key={event.id}
                  className={`hover:bg-gray-50/50 transition-colors ${i < events.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <td className='px-6 py-4'>
                    <p className='text-gray-900 text-sm font-medium'>
                      {event.title}
                    </p>
                  </td>
                  <td className='px-6 py-4 text-gray-400 text-xs whitespace-nowrap'>
                    {event.date}
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3 min-w-[160px]'>
                      <div className='flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden'>
                        <div
                          className='h-full rounded-full transition-all'
                          style={{
                            width: `${pct}%`,
                            background:
                              event.status === 'live'
                                ? '#4ade80'
                                : event.status === 'upcoming'
                                  ? '#f59e0b'
                                  : '#e5e7eb',
                          }}
                        />
                      </div>
                      <span className='text-gray-500 text-xs whitespace-nowrap'>
                        {event.sold.toLocaleString()}/
                        {event.tickets.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4 text-gray-900 text-sm font-semibold'>
                    {event.revenue}
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-1.5 bg-purple-50 text-purple-600 text-xs font-medium px-2.5 py-1 rounded-full w-fit'>
                      ◆ {event.nfts}
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <span
                      className='flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full w-fit'
                      style={{ color: cfg.color, background: cfg.bg }}
                    >
                      <span
                        className='w-1.5 h-1.5 rounded-full'
                        style={{ background: cfg.dot }}
                      />
                      {cfg.label}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ActiveEventsTable
