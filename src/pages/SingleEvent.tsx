import { useState } from 'react'
import {
  IoLocationSharp,
  IoCalendarOutline,
  IoTimeOutline,
  IoTicketOutline,
} from 'react-icons/io5'
import { HiOutlineUsers } from 'react-icons/hi'
import { TbUniverse } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const EVENT_IMAGE =
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=600&fit=crop'

const SingleEvent = () => {
  const [quantity, setQuantity] = useState(1)
  const pricePerTicket = 10
  const totalSlots = 20
  const takenSlots = 10
  const availableSlots = totalSlots - takenSlots
  const soldPercent = (takenSlots / totalSlots) * 100

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      <div className="min-h-screen bg-white font-['DM_Sans'] pt-[72px]">
        {/* ── Hero Banner ── */}
        <div className='relative w-full h-[340px] md:h-[480px] overflow-hidden'>
          <img
            src={EVENT_IMAGE}
            alt='event'
            className='w-full h-full object-cover object-center'
          />

          {/* Blurred side fills */}
          <div className='absolute left-0 top-0 h-full w-1/4 overflow-hidden -z-0'>
            <img
              src={EVENT_IMAGE}
              alt=''
              className='w-full h-full object-cover blur-xl scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent' />
          </div>
          <div className='absolute right-0 top-0 h-full w-1/4 overflow-hidden -z-0'>
            <img
              src={EVENT_IMAGE}
              alt=''
              className='w-full h-full object-cover blur-xl scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-l from-black/40 to-transparent' />
          </div>

          {/* Bottom fade */}
          <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent' />

          {/* Category pill */}
          <div className='absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2'>
            <TbUniverse className='text-green-400 text-sm' />
            <span className='text-white text-[0.65rem] font-semibold tracking-[0.18em] uppercase'>
              Agriculture
            </span>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className='max-w-[1280px] mx-auto px-6 md:px-12 pb-20 -mt-6'>
          <div className='flex flex-col lg:flex-row gap-10 items-start'>
            {/* ── LEFT: Event Info ── */}
            <div className='flex-1 flex flex-col gap-8'>
              {/* Title + breadcrumb */}
              <div>
                <div className='flex items-center gap-2 text-xs text-gray-400 mb-3'>
                  <Link
                    to='/events'
                    className='hover:text-green-600 transition-colors no-underline text-gray-400'
                  >
                    Events
                  </Link>
                  <span>/</span>
                  <span className='text-gray-600'>
                    Agriculture Food Security
                  </span>
                </div>
                <h1
                  className="font-['Bebas_Neue'] text-gray-900 leading-none tracking-wide"
                  style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
                >
                  Agriculture Food Security
                </h1>
              </div>

              {/* Meta pills */}
              <div className='flex flex-wrap gap-3'>
                {[
                  {
                    icon: <IoCalendarOutline />,
                    text: 'Saturday, 22 March 2025',
                  },
                  { icon: <IoTimeOutline />, text: '4:00 PM – 8:00 PM WAT' },
                  { icon: <IoLocationSharp />, text: 'Lagos, Nigeria' },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className='flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2'
                  >
                    <span className='text-green-500 text-sm'>{icon}</span>
                    <span className='text-gray-600 text-xs'>{text}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className='h-px bg-gray-100' />

              {/* Description */}
              <div>
                <h3 className='font-semibold text-gray-900 text-base mb-3'>
                  About this Event
                </h3>
                <p className='text-gray-500 text-sm leading-relaxed'>
                  Join us for an immersive conference on Agriculture and Food
                  Security, bringing together leading voices in sustainable
                  farming, food policy, and agricultural innovation. Whether
                  you're a farmer, researcher, policymaker, or enthusiast — this
                  event is for you.
                </p>
                <p className='text-gray-500 text-sm leading-relaxed mt-3'>
                  Expect keynote speeches, panel discussions, live demos, and
                  networking opportunities across the full day. Lunch and
                  refreshments are included with your ticket.
                </p>
              </div>

              {/* Divider */}
              <div className='h-px bg-gray-100' />

              {/* Organiser */}
              <div>
                <h3 className='font-semibold text-gray-900 text-base mb-4'>
                  Organised by
                </h3>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center'>
                    <TbUniverse className='text-green-500 text-lg' />
                  </div>
                  <div>
                    <p className='text-gray-900 text-sm font-semibold'>
                      Ticket Universe
                    </p>
                    <p className='text-gray-400 text-xs'>
                      support@ticketuniverse.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Location map placeholder */}
              <div>
                <h3 className='font-semibold text-gray-900 text-base mb-4'>
                  Location
                </h3>
                <div className='w-full h-[180px] rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden relative'>
                  <div
                    className='absolute inset-0 opacity-10'
                    style={{
                      backgroundImage:
                        'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <div className='flex flex-col items-center gap-2 z-10'>
                    <IoLocationSharp className='text-green-500 text-3xl' />
                    <p className='text-gray-500 text-sm font-medium'>
                      Eko Hotel & Suites, Lagos
                    </p>
                    <p className='text-gray-400 text-xs'>
                      Victoria Island, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Ticket Purchase Card ── */}
            <div className='w-full lg:w-[360px] lg:sticky lg:top-[90px]'>
              <div
                className='rounded-2xl border border-gray-100 bg-white overflow-hidden'
                style={{
                  boxShadow:
                    '0 4px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                {/* Card header */}
                <div className='bg-gradient-to-br from-[#0a0a0a] to-[#0f170f] p-6 relative overflow-hidden'>
                  <div
                    className='absolute inset-0 opacity-[0.04]'
                    style={{
                      backgroundImage:
                        'linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className='relative z-10'>
                    <p className='text-green-400 text-[0.65rem] tracking-[0.2em] uppercase font-semibold mb-1'>
                      Ticket Price
                    </p>
                    <div className='flex items-end gap-2'>
                      <span className="font-['Bebas_Neue'] text-white text-5xl tracking-wide leading-none">
                        ${pricePerTicket}
                      </span>
                      <span className='text-white/40 text-sm mb-1'>
                        / person
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability bar */}
                <div className='px-6 pt-5 pb-2'>
                  <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center gap-1.5'>
                      <HiOutlineUsers className='text-green-500 text-sm' />
                      <span className='text-gray-500 text-xs'>
                        {takenSlots} attending
                      </span>
                    </div>
                    <span className='text-green-600 text-xs font-semibold'>
                      {availableSlots} spots left
                    </span>
                  </div>
                  <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-green-400 rounded-full transition-all duration-500'
                      style={{ width: `${soldPercent}%` }}
                    />
                  </div>
                </div>

                {/* Ticket details */}
                <div className='px-6 py-4 flex flex-col gap-3'>
                  {[
                    {
                      icon: <IoCalendarOutline />,
                      label: 'Date',
                      value: 'Saturday, 22 March 2025',
                    },
                    {
                      icon: <IoTimeOutline />,
                      label: 'Time',
                      value: '4:00 PM – 8:00 PM WAT',
                    },
                    {
                      icon: <IoLocationSharp />,
                      label: 'Venue',
                      value: 'Eko Hotel, Lagos',
                    },
                    {
                      icon: <IoTicketOutline />,
                      label: 'Type',
                      value: 'General Admission',
                    },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className='flex items-center gap-3'>
                      <span className='text-green-500 text-base shrink-0'>
                        {icon}
                      </span>
                      <div className='flex items-center justify-between w-full'>
                        <span className='text-gray-400 text-xs'>{label}</span>
                        <span className='text-gray-700 text-xs font-medium text-right max-w-[180px]'>
                          {value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='h-px bg-gray-100 mx-6' />

                {/* Quantity selector */}
                <div className='px-6 py-4'>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-gray-600 text-sm'>Quantity</span>
                    <div className='flex items-center gap-3 border border-gray-100 rounded-lg overflow-hidden'>
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className='w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-green-600 transition-colors duration-150 text-lg font-light'
                      >
                        −
                      </button>
                      <span className='text-gray-900 font-semibold text-sm w-4 text-center'>
                        {quantity}
                      </span>
                      <button
                        onClick={() =>
                          setQuantity((q) => Math.min(availableSlots, q + 1))
                        }
                        className='w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-green-600 transition-colors duration-150 text-lg font-light'
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className='flex items-center justify-between py-3 border-t border-gray-100'>
                    <span className='text-gray-500 text-sm'>Total</span>
                    <span className="font-['Bebas_Neue'] text-gray-900 text-2xl tracking-wide">
                      ${(pricePerTicket * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className='px-6 pb-6'>
                  <button className='w-full bg-green-400 hover:bg-green-300 text-black font-bold text-xs tracking-[0.12em] uppercase py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_#4ade8033]'>
                    Buy {quantity} Ticket{quantity > 1 ? 's' : ''} →
                  </button>
                  <p className='text-center text-gray-300 text-[0.65rem] tracking-wide uppercase mt-3'>
                    Secure checkout · Instant confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleEvent
