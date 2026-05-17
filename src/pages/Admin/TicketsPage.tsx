import { useState } from 'react'

// ── Mock ticket data ──────────────────────────────────────────────────────────

const mockTickets = [
  {
    id: 'TKT-001',
    tokenId: '#4821',
    event: 'Afrobeats Summit Lagos',
    date: 'Apr 12, 2025',
    time: '7:00 PM',
    venue: 'Eko Convention Centre',
    holder: 'Chidi Okafor',
    tier: 'VIP',
    price: '₦45,000',
    status: 'minted',
    rarity: 'Gold',
    color: ['#f59e0b', '#d97706'],
    pattern: 'triangles',
  },
  {
    id: 'TKT-002',
    tokenId: '#4822',
    event: 'Web3 Lagos Conference',
    date: 'May 3, 2025',
    time: '9:00 AM',
    venue: 'Landmark Event Centre',
    holder: 'Amara Nwosu',
    tier: 'General',
    price: '₦12,000',
    status: 'minted',
    rarity: 'Common',
    color: ['#4ade80', '#16a34a'],
    pattern: 'dots',
  },
  {
    id: 'TKT-003',
    tokenId: '#4823',
    event: 'Lagos Jazz Festival',
    date: 'Jun 21, 2025',
    time: '6:30 PM',
    venue: 'Terra Kulture Arena',
    holder: 'Folake Adeyemi',
    tier: 'VVIP',
    price: '₦85,000',
    status: 'minted',
    rarity: 'Platinum',
    color: ['#818cf8', '#4f46e5'],
    pattern: 'waves',
  },
  {
    id: 'TKT-004',
    tokenId: '#4824',
    event: 'Nollywood Gala Night',
    date: 'Jul 5, 2025',
    time: '8:00 PM',
    venue: 'Federal Palace Hotel',
    holder: 'Emeka Eze',
    tier: 'VIP',
    price: '₦60,000',
    status: 'pending',
    rarity: 'Gold',
    color: ['#f87171', '#dc2626'],
    pattern: 'grid',
  },
  {
    id: 'TKT-005',
    tokenId: '#4825',
    event: 'Tech Founders Summit',
    date: 'Aug 18, 2025',
    time: '10:00 AM',
    venue: 'Radisson Blu Anchorage',
    holder: 'Ngozi Obi',
    tier: 'General',
    price: '₦8,500',
    status: 'pending',
    rarity: 'Common',
    color: ['#38bdf8', '#0284c7'],
    pattern: 'circles',
  },
  {
    id: 'TKT-006',
    tokenId: '#4826',
    event: 'Afrobeats Summit Lagos',
    date: 'Apr 12, 2025',
    time: '7:00 PM',
    venue: 'Eko Convention Centre',
    holder: 'Tunde Bello',
    tier: 'VVIP',
    price: '₦120,000',
    status: 'used',
    rarity: 'Platinum',
    color: ['#a78bfa', '#7c3aed'],
    pattern: 'triangles',
  },
]

// ── SVG Patterns ──────────────────────────────────────────────────────────────

const Triangles = ({ color }: { color: string }) => (
  <svg
    width='100%'
    height='100%'
    xmlns='http://www.w3.org/2000/svg'
    opacity={0.15}
  >
    {[...Array(6)].map((_, i) =>
      [...Array(5)].map((__, j) => (
        <polygon
          key={`${i}-${j}`}
          points={`${i * 40 + 20},${j * 36} ${i * 40},${j * 36 + 36} ${i * 40 + 40},${j * 36 + 36}`}
          fill={color}
        />
      )),
    )}
  </svg>
)

const Dots = ({ color }: { color: string }) => (
  <svg
    width='100%'
    height='100%'
    xmlns='http://www.w3.org/2000/svg'
    opacity={0.2}
  >
    {[...Array(12)].map((_, i) =>
      [...Array(7)].map((__, j) => (
        <circle
          key={`${i}-${j}`}
          cx={i * 24 + 12}
          cy={j * 20 + 10}
          r={2.5}
          fill={color}
        />
      )),
    )}
  </svg>
)

const Waves = ({ color }: { color: string }) => (
  <svg
    width='100%'
    height='100%'
    xmlns='http://www.w3.org/2000/svg'
    opacity={0.15}
  >
    {[...Array(8)].map((_, i) => (
      <path
        key={i}
        d={`M0,${i * 18} Q70,${i * 18 - 12} 140,${i * 18} T280,${i * 18}`}
        stroke={color}
        strokeWidth='2'
        fill='none'
      />
    ))}
  </svg>
)

const Grid = ({ color }: { color: string }) => (
  <svg
    width='100%'
    height='100%'
    xmlns='http://www.w3.org/2000/svg'
    opacity={0.12}
  >
    {[...Array(14)].map((_, i) => (
      <line
        key={`v${i}`}
        x1={i * 24}
        y1={0}
        x2={i * 24}
        y2={200}
        stroke={color}
        strokeWidth='1'
      />
    ))}
    {[...Array(9)].map((_, i) => (
      <line
        key={`h${i}`}
        x1={0}
        y1={i * 20}
        x2={340}
        y2={i * 20}
        stroke={color}
        strokeWidth='1'
      />
    ))}
  </svg>
)

const Circles = ({ color }: { color: string }) => (
  <svg
    width='100%'
    height='100%'
    xmlns='http://www.w3.org/2000/svg'
    opacity={0.12}
  >
    {[20, 50, 80, 110, 140].map((r, i) => (
      <circle
        key={i}
        cx={80}
        cy={60}
        r={r}
        stroke={color}
        strokeWidth='1.5'
        fill='none'
      />
    ))}
    {[20, 50, 80].map((r, i) => (
      <circle
        key={`b${i}`}
        cx={240}
        cy={110}
        r={r}
        stroke={color}
        strokeWidth='1.5'
        fill='none'
      />
    ))}
  </svg>
)

const PatternMap: Record<string, React.FC<{ color: string }>> = {
  triangles: Triangles,
  dots: Dots,
  waves: Waves,
  grid: Grid,
  circles: Circles,
}

// ── Configs ───────────────────────────────────────────────────────────────────

const statusConfig: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  minted: { label: 'Minted', color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
  pending: { label: 'Pending', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
  used: { label: 'Used', color: '#6b7280', bg: 'rgba(107,114,128,0.12)' },
}

const rarityGlow: Record<string, string> = {
  Common: 'rgba(74,222,128,0.25)',
  Gold: 'rgba(245,158,11,0.35)',
  Platinum: 'rgba(167,139,250,0.4)',
}

// ── NFT Ticket Card ───────────────────────────────────────────────────────────

const NFTTicketCard = ({
  ticket,
  selected,
  onClick,
}: {
  ticket: (typeof mockTickets)[0]
  selected: boolean
  onClick: () => void
}) => {
  const Pattern = PatternMap[ticket.pattern]
  const status = statusConfig[ticket.status]
  const [c1, c2] = ticket.color

  return (
    <div
      onClick={onClick}
      className='cursor-pointer'
      style={{
        transition: 'transform 0.25s ease, filter 0.25s ease',
        transform: selected ? 'translateY(-6px) scale(1.01)' : 'translateY(0)',
        filter: selected
          ? `drop-shadow(0 0 20px ${rarityGlow[ticket.rarity]})`
          : 'drop-shadow(0 4px 12px rgba(0,0,0,0.35))',
      }}
    >
      <div
        className='rounded-2xl overflow-hidden relative'
        style={{
          background: 'linear-gradient(150deg, #141428, #0f1729)',
          border: selected
            ? `1.5px solid ${c1}88`
            : '1.5px solid rgba(255,255,255,0.07)',
          boxShadow: selected
            ? `inset 0 1px 0 ${c1}22`
            : 'inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Pattern overlay */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <Pattern color={c1} />
        </div>

        {/* Top gradient stripe */}
        <div
          className='h-1.5'
          style={{ background: `linear-gradient(90deg, ${c1}, ${c2}, ${c1})` }}
        />

        {/* Body */}
        <div className='px-5 pt-4 pb-5 relative z-10'>
          {/* Token ID row */}
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center gap-1.5'>
              <span
                className='text-[0.58rem] font-black tracking-[0.18em] uppercase px-2 py-0.5 rounded-lg'
                style={{
                  background: `${c1}18`,
                  color: c1,
                  border: `1px solid ${c1}30`,
                }}
              >
                ◆ NFT {ticket.tokenId}
              </span>
              <span
                className='text-[0.58rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full'
                style={{ background: status.bg, color: status.color }}
              >
                {status.label}
              </span>
            </div>
            <span className='text-[0.58rem] text-gray-600 font-mono'>
              {ticket.id}
            </span>
          </div>

          {/* Event name */}
          <h3
            className='text-white font-black leading-tight mb-0.5'
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: '1.25rem',
              letterSpacing: '0.06em',
            }}
          >
            {ticket.event}
          </h3>
          <p className='text-gray-500 text-[0.68rem] mb-4'>
            {ticket.date} &nbsp;·&nbsp; {ticket.time} &nbsp;·&nbsp;{' '}
            {ticket.venue}
          </p>

          {/* Perforated divider */}
          <div className='flex items-center relative my-3'>
            <div
              className='w-4 h-4 rounded-full absolute -left-5 z-20'
              style={{
                background: '#0f172a',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            />
            <div
              className='flex-1 border-t-2 border-dashed'
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            />
            <div
              className='w-4 h-4 rounded-full absolute -right-5 z-20'
              style={{
                background: '#0f172a',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            />
          </div>

          {/* Bottom row */}
          <div className='flex items-end justify-between mt-3'>
            <div className='flex flex-col gap-2'>
              <div>
                <p className='text-gray-600 text-[0.58rem] uppercase tracking-widest'>
                  Holder
                </p>
                <p className='text-white text-xs font-semibold mt-0.5'>
                  {ticket.holder}
                </p>
              </div>
              <div>
                <p className='text-gray-600 text-[0.58rem] uppercase tracking-widest'>
                  Tier
                </p>
                <span
                  className='text-[0.62rem] font-black uppercase px-2 py-0.5 rounded-md mt-0.5 inline-block'
                  style={{
                    background: `${c1}18`,
                    color: c1,
                    letterSpacing: '0.1em',
                  }}
                >
                  {ticket.tier}
                </span>
              </div>
            </div>

            <div className='text-right'>
              <p className='text-gray-600 text-[0.58rem] uppercase tracking-widest mb-1'>
                Mint Price
              </p>
              <p
                className='font-black leading-none'
                style={{
                  color: c1,
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: '1.6rem',
                }}
              >
                {ticket.price}
              </p>
              <p className='text-gray-700 text-[0.58rem] mt-1 uppercase tracking-widest'>
                {ticket.rarity}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom glow line */}
        <div
          className='h-px w-full'
          style={{
            background: `linear-gradient(90deg, transparent, ${c1}44, transparent)`,
          }}
        />
      </div>
    </div>
  )
}

// ── Stats bar ─────────────────────────────────────────────────────────────────

const StatsBar = () => {
  const counts = {
    total: mockTickets.length,
    minted: mockTickets.filter((t) => t.status === 'minted').length,
    pending: mockTickets.filter((t) => t.status === 'pending').length,
    used: mockTickets.filter((t) => t.status === 'used').length,
  }
  return (
    <div
      className='rounded-2xl p-5 flex flex-wrap items-center gap-6'
      style={{
        background: 'linear-gradient(135deg, #141428 0%, #0f1729 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {[
        { label: 'Total Tickets', value: counts.total, color: '#e2e8f0' },
        { label: 'Minted', value: counts.minted, color: '#4ade80' },
        { label: 'Pending', value: counts.pending, color: '#f59e0b' },
        { label: 'Used', value: counts.used, color: '#6b7280' },
      ].map((s) => (
        <div key={s.label} className='flex flex-col'>
          <span
            className='font-black leading-none'
            style={{
              color: s.color,
              fontFamily: "'Bebas Neue', cursive",
              fontSize: '2rem',
            }}
          >
            {s.value}
          </span>
          <span className='text-gray-600 text-[0.6rem] uppercase tracking-widest mt-0.5'>
            {s.label}
          </span>
        </div>
      ))}

      <div className='ml-auto flex items-center gap-2'>
        <button
          className='text-[0.68rem] font-black uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all hover:opacity-90 active:scale-95'
          style={{
            background: 'linear-gradient(135deg, #4ade80, #16a34a)',
            color: '#030712',
          }}
        >
          ◆ Mint New Ticket
        </button>
        <button
          className='text-[0.68rem] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl'
          style={{
            background: 'rgba(255,255,255,0.04)',
            color: '#6b7280',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          Export CSV
        </button>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

const filters = ['All', 'Minted', 'Pending', 'Used']

const TicketsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filtered =
    activeFilter === 'All'
      ? mockTickets
      : mockTickets.filter((t) => t.status === activeFilter.toLowerCase())

  return (
    <div
      className='flex flex-col gap-5'
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>

      <StatsBar />

      {/* Heading + filters */}
      <div className='flex items-center justify-between flex-wrap gap-3'>
        <div>
          <h2 className='text-gray-900 font-bold text-lg tracking-tight'>
            NFT Ticket Collection
          </h2>
          <p className='text-gray-400 text-xs mt-0.5'>
            On-chain tickets · Ethereum Sepolia · {mockTickets.length} total
          </p>
        </div>

        <div
          className='flex items-center gap-1 p-1 rounded-xl'
          style={{
            background: 'rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.07)',
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className='text-xs font-semibold px-4 py-1.5 rounded-lg transition-all duration-150'
              style={
                activeFilter === f
                  ? {
                      background: '#0f172a',
                      color: '#fff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                    }
                  : { color: '#9ca3af' }
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {filtered.map((ticket) => (
          <NFTTicketCard
            key={ticket.id}
            ticket={ticket}
            selected={selectedId === ticket.id}
            onClick={() =>
              setSelectedId(selectedId === ticket.id ? null : ticket.id)
            }
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className='flex flex-col items-center justify-center py-24'>
          <p className='text-5xl mb-4'>🎫</p>
          <p className='text-gray-400 text-sm'>
            No {activeFilter.toLowerCase()} tickets
          </p>
        </div>
      )}
    </div>
  )
}

export default TicketsPage
