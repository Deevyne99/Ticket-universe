import { mockActivity } from '../../mockData'

const LiveActivityFeed = () => {
  return (
    <div
      className='bg-white rounded-2xl p-5 w-full flex flex-col'
      style={{
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
          <h3 className='text-gray-900 font-semibold text-sm'>Live Activity</h3>
        </div>
        <span className='text-[0.6rem] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full'>
          {mockActivity.length} events
        </span>
      </div>

      {/* Scrollable list */}
      <div
        className='flex flex-col overflow-y-auto'
        style={{ height: '200px' }}
      >
        {mockActivity.map((item) => (
          <div
            key={item.id}
            className='flex gap-3 py-3 border-b border-gray-50 last:border-b-0'
          >
            <div
              className='w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0'
              style={{ background: item.color }}
            >
              {item.initials}
            </div>
            <div className='flex-1 min-w-0'>
              <p className='text-gray-700 text-xs leading-relaxed'>
                <span className='font-semibold'>{item.user}</span> {item.action}
                {item.event && (
                  <>
                    {' '}
                    <span className='font-semibold text-gray-900'>
                      {item.event}
                    </span>
                  </>
                )}
              </p>
              <div className='flex items-center gap-2 mt-1'>
                <span className='text-gray-300 text-[0.6rem]'>{item.time}</span>
                {item.tag && (
                  <span
                    className='text-[0.6rem] font-medium px-1.5 py-0.5 rounded-full'
                    style={{
                      color: item.tagColor,
                      background: `${item.tagColor}18`,
                    }}
                  >
                    {item.tag}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LiveActivityFeed
