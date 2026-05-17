import { useState } from 'react'
import { TbUniverse } from 'react-icons/tb'
import {
  IoCopyOutline,
  IoTimeOutline,
  IoArrowDownOutline,
} from 'react-icons/io5'

const WalletPanel = () => {
  const [copied, setCopied] = useState(false)

  const ticketTypes = [
    { label: 'Standard', pct: 51, color: '#6366f1', count: 1968 },
    { label: 'NFT', pct: 27, color: '#4ade80', count: 1040 },
    { label: 'VIP', pct: 22, color: '#f59e0b', count: 848 },
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText('0x4f3ae92b')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className='flex flex-col gap-3 w-full'
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Wallet Card ── white card with green accent top border */}
      <div
        className='bg-white rounded-2xl overflow-hidden relative'
        style={{
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          border: '1px solid #f0fdf4',
        }}
      >
        {/* Green accent strip at top */}
        <div className='h-1 w-full bg-gradient-to-r from-green-400 via-green-300 to-emerald-400' />

        <div className='p-5'>
          {/* Top row */}
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center'>
                <TbUniverse className='text-green-500 text-base' />
              </div>
              <div>
                <p className='text-gray-400 text-[0.58rem] tracking-[0.15em] uppercase'>
                  Connected Wallet
                </p>
                <div className='flex items-center gap-1.5 mt-0.5'>
                  <div className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse' />
                  <span className='text-green-500 text-[0.6rem] font-semibold'>
                    Live
                  </span>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 border border-gray-100 rounded-xl px-3 py-1.5 text-right'>
              <p className='text-gray-400 text-[0.58rem] tracking-wide uppercase'>
                Network
              </p>
              <p className='text-gray-700 text-[0.65rem] font-semibold'>
                Ethereum
              </p>
            </div>
          </div>

          {/* Wallet address */}
          <div className='flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 mb-4'>
            <p className='text-gray-500 text-xs font-mono tracking-wider flex-1'>
              0x4f3a...e92b
            </p>
            <button
              onClick={handleCopy}
              className='text-gray-300 hover:text-green-500 transition-colors shrink-0'
            >
              {copied ? (
                <span className='text-green-500 text-[0.6rem] font-medium'>
                  Copied!
                </span>
              ) : (
                <IoCopyOutline className='text-sm' />
              )}
            </button>
          </div>

          {/* Balance */}
          <div className='bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl px-4 py-3 mb-4'>
            <p className='text-gray-400 text-[0.6rem] tracking-[0.15em] uppercase mb-1'>
              ETH Balance
            </p>
            <div className='flex items-end gap-2'>
              <p className="font-['Bebas_Neue'] text-gray-900 text-4xl tracking-wide leading-none">
                2.847
              </p>
              <p className='text-gray-400 text-sm mb-0.5 font-medium'>ETH</p>
              <p className='text-green-500 text-xs mb-0.5 ml-auto font-semibold'>
                ≈ $8,420
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className='grid grid-cols-3 gap-2'>
            <button className='flex flex-col items-center gap-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 py-3 rounded-xl transition-all group'>
              <IoArrowDownOutline className='text-gray-400 group-hover:text-gray-700 text-base transition-colors' />
              <span className='text-gray-400 group-hover:text-gray-700 text-[0.6rem] font-medium transition-colors'>
                Receive
              </span>
            </button>
            <button className='flex flex-col items-center gap-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 py-3 rounded-xl transition-all group'>
              <IoTimeOutline className='text-gray-400 group-hover:text-gray-700 text-base transition-colors' />
              <span className='text-gray-400 group-hover:text-gray-700 text-[0.6rem] font-medium transition-colors'>
                History
              </span>
            </button>
            <button className='flex flex-col items-center gap-1.5 bg-green-400 hover:bg-green-300 py-3 rounded-xl transition-all hover:shadow-[0_4px_12px_#4ade8044]'>
              <TbUniverse className='text-black text-base' />
              <span className='text-black text-[0.6rem] font-bold'>
                Mint NFTs
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Ticket Types Card ── */}
      <div
        className='bg-white rounded-2xl p-5'
        style={{
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          border: '1px solid #f3f4f6',
        }}
      >
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-gray-900 font-semibold text-sm'>Ticket Types</h3>
          <span className='text-gray-400 text-[0.65rem] bg-gray-50 border border-gray-100 px-2 py-1 rounded-full'>
            3,856 total
          </span>
        </div>

        {/* Donut */}
        <div className='flex justify-center mb-5 relative'>
          <div
            className='w-28 h-28 rounded-full'
            style={{
              background:
                'conic-gradient(#6366f1 0% 51%, #4ade80 51% 78%, #f59e0b 78% 100%)',
              WebkitMaskImage:
                'radial-gradient(circle, transparent 35%, black 35%)',
              maskImage: 'radial-gradient(circle, transparent 35%, black 35%)',
            }}
          />
          <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
            <p className="font-['Bebas_Neue'] text-gray-900 text-xl leading-none">
              3.8K
            </p>
            <p className='text-gray-400 text-[0.55rem] tracking-wide'>
              tickets
            </p>
          </div>
        </div>

        {/* Legend with bars */}
        <div className='flex flex-col gap-3'>
          {ticketTypes.map(({ label, pct, color, count }) => (
            <div key={label}>
              <div className='flex items-center justify-between mb-1.5'>
                <div className='flex items-center gap-2'>
                  <div
                    className='w-2 h-2 rounded-full shrink-0'
                    style={{ background: color }}
                  />
                  <span className='text-gray-600 text-xs'>{label}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-gray-400 text-[0.65rem]'>
                    {count.toLocaleString()}
                  </span>
                  <span className='text-gray-700 text-xs font-semibold w-8 text-right'>
                    {pct}%
                  </span>
                </div>
              </div>
              <div className='h-1.5 bg-gray-100 rounded-full overflow-hidden'>
                <div
                  className='h-full rounded-full'
                  style={{ width: `${pct}%`, background: color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WalletPanel
