import { IoLocationSharp, IoCalendarOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const EventCard = ({
  image,
  title,
  description,
  tickets,
  pricing,
  date,
  location,
  price,
}: {
  image: string
  title: string
  description: string
  tickets: number
  pricing: string
  date: string
  price?: number
  location: string
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={'/events/:id'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative flex flex-col no-underline rounded-2xl overflow-hidden bg-white w-[280px] transition-all duration-300 hover:-translate-y-1.5'
      style={{
        boxShadow: hovered
          ? '0 16px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)'
          : '0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Image */}
      <div className='relative h-[180px] w-full overflow-hidden'>
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition-all duration-500 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-3 p-4'>
        {/* Pricing & Price row */}
        <div className='flex items-center justify-between'>
          <span className='bg-green-50 text-green-600 text-[0.62rem] font-semibold tracking-widest uppercase rounded-full px-3 py-1'>
            {pricing}
          </span>
          <span className='text-green-600 text-sm font-bold'>
            {price ? `$${price}` : 'Free'}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-semibold text-base leading-snug transition-colors duration-300 ${
            hovered ? 'text-green-600' : 'text-gray-900'
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className='text-gray-400 text-xs leading-relaxed line-clamp-2'>
          {description}
        </p>

        {/* Divider */}
        <div className='h-px bg-gray-100' />

        {/* Meta */}
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <IoLocationSharp className='text-green-500 text-sm shrink-0' />
            <p className='text-gray-400 text-xs truncate'>{location}</p>
          </div>
          <div className='flex items-center gap-2'>
            <IoCalendarOutline className='text-green-500 text-sm shrink-0' />
            <p className='text-gray-400 text-xs'>{date}</p>
          </div>
        </div>

        {/* Footer row */}
        <div className='flex items-center justify-between pt-1'>
          <div className='flex items-center gap-1.5'>
            <div className='w-1.5 h-1.5 rounded-full bg-green-400' />
            <p className='text-gray-400 text-[0.68rem] tracking-wide uppercase'>
              {tickets} tickets left
            </p>
          </div>
          <div
            className={`text-green-500 text-xs font-medium transition-all duration-300 ${
              hovered ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'
            }`}
          >
            View →
          </div>
        </div>
      </div>

      {/* Bottom green line */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-green-400 transition-all duration-500 ${
          hovered ? 'w-full' : 'w-0'
        }`}
      />
    </Link>
  )
}

export default EventCard
