import {
  IoCalendarOutline,
  IoLocationSharp,
  IoTicketOutline,
} from 'react-icons/io5'
import { Ticket } from '../../types'

const statusConfig: Record<string, { color: string; bg: string }> = {
  confirmed: { color: '#16a34a', bg: '#f0fdf4' },
  pending: { color: '#d97706', bg: '#fffbeb' },
  cancelled: { color: '#dc2626', bg: '#fef2f2' },
}

const typeConfig: Record<string, { color: string; bg: string }> = {
  VIP: { color: '#7c3aed', bg: '#ede9fe' },
  NFT: { color: '#16a34a', bg: '#f0fdf4' },
  Standard: { color: '#6b7280', bg: '#f3f4f6' },
}

const TicketCard = ({ ticket }: { ticket: Ticket }) => {
  const sc = statusConfig[ticket.status]
  const tc = typeConfig[ticket.type]

  return (
    <div
      className='bg-white rounded-2xl overflow-hidden flex'
      style={{
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className='w-1.5 shrink-0' style={{ background: tc.color }} />
      <div className='w-20 shrink-0 overflow-hidden'>
        <img
          src={ticket.image}
          alt={ticket.eventTitle}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex-1 px-4 py-4 flex flex-col gap-2'>
        <div className='flex items-start justify-between gap-2'>
          <h4 className='text-gray-900 text-sm font-semibold leading-snug'>
            {ticket.eventTitle}
          </h4>
          <div className='flex gap-1.5 shrink-0'>
            <span
              className='text-[0.6rem] font-semibold px-2 py-0.5 rounded-full'
              style={{ color: tc.color, background: tc.bg }}
            >
              {ticket.type}
            </span>
            <span
              className='text-[0.6rem] font-semibold px-2 py-0.5 rounded-full'
              style={{ color: sc.color, background: sc.bg }}
            >
              {ticket.status}
            </span>
          </div>
        </div>
        <div className='flex flex-wrap gap-3'>
          <div className='flex items-center gap-1.5'>
            <IoCalendarOutline className='text-green-500 text-xs' />
            <span className='text-gray-400 text-xs'>{ticket.date}</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <IoLocationSharp className='text-green-500 text-xs' />
            <span className='text-gray-400 text-xs'>{ticket.location}</span>
          </div>
          {ticket.seat && (
            <div className='flex items-center gap-1.5'>
              <IoTicketOutline className='text-green-500 text-xs' />
              <span className='text-gray-400 text-xs'>Seat {ticket.seat}</span>
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col items-end justify-between px-4 py-4 shrink-0'>
        <p className='text-green-600 font-bold text-sm'>${ticket.price}</p>
        {ticket.status === 'confirmed' && (
          <button className='text-[0.65rem] text-indigo-600 hover:text-indigo-500 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-full transition-all'>
            View QR
          </button>
        )}
      </div>
    </div>
  )
}

export default TicketCard
