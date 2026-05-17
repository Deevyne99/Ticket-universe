import { useState } from 'react'
import { salesData } from '../../mockData'

const SalesChart = () => {
  const [period, setPeriod] = useState<'Week' | 'Month' | 'Year'>('Week')
  const maxVal = Math.max(...salesData.map((d) => d.standard + d.vip + d.nft))

  return (
    <div
      className='bg-white rounded-2xl p-6 w-full'
      style={{
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className='flex items-center justify-between mb-5'>
        <h3 className='text-gray-900 font-semibold text-base'>Ticket Sales</h3>
        <div className='flex items-center gap-1 bg-gray-100 rounded-lg p-1'>
          {(['Week', 'Month', 'Year'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                period === p
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className='flex items-center gap-5 mb-5'>
        {[
          { label: 'Standard', color: '#6366f1' },
          { label: 'VIP', color: '#4ade80' },
          { label: 'NFT', color: '#f59e0b' },
        ].map(({ label, color }) => (
          <div key={label} className='flex items-center gap-1.5'>
            <div
              className='w-2.5 h-2.5 rounded-full'
              style={{ background: color }}
            />
            <span className='text-gray-400 text-xs'>{label}</span>
          </div>
        ))}
      </div>

      <div className='flex items-end gap-3 h-36'>
        {salesData.map((d) => {
          const stdH = (d.standard / maxVal) * 100
          const vipH = (d.vip / maxVal) * 100
          const nftH = (d.nft / maxVal) * 100
          return (
            <div
              key={d.day}
              className='flex-1 flex flex-col items-center gap-1.5'
            >
              <div className='w-full flex items-end gap-0.5 h-32'>
                <div
                  className='flex-1 rounded-t-md transition-all duration-500 hover:opacity-80 cursor-pointer'
                  style={{
                    height: `${stdH}%`,
                    background: '#6366f1',
                    minHeight: '4px',
                  }}
                />
                <div
                  className='flex-1 rounded-t-md transition-all duration-500 hover:opacity-80 cursor-pointer'
                  style={{
                    height: `${vipH}%`,
                    background: '#4ade80',
                    minHeight: '4px',
                  }}
                />
                <div
                  className='flex-1 rounded-t-md transition-all duration-500 hover:opacity-80 cursor-pointer'
                  style={{
                    height: `${nftH}%`,
                    background: '#f59e0b',
                    minHeight: '4px',
                  }}
                />
              </div>
              <span className='text-gray-400 text-[0.65rem]'>{d.day}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SalesChart
