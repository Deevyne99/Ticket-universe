import { useRef } from 'react'

interface EventProps {
  id: string | number
  name: string
  description: string
  image: string
}

const DisplayCard = ({
  name,
  description,
  img,
  events,
  active,
  handleChange,
}: {
  name: string
  description: string
  img: string
  events: EventProps[]
  active: number
  handleChange: (index: number) => void
}) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const articleRef = useRef<HTMLElement>(null)

  return (
    <div className='relative w-full h-[680px] md:h-[600px] overflow-hidden'>
      {/* Full-bleed background image */}
      <img
        ref={imgRef}
        src={img}
        alt={name}
        className='absolute inset-0 w-full h-full object-cover object-center transition-all duration-700'
      />

      {/* Dark gradient overlay — stronger on left for text legibility */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

      {/* Subtle grid texture */}
      <div
        className='absolute inset-0 opacity-[0.03] pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className='relative z-10 flex items-center h-full max-w-7xl mx-auto px-8 md:px-16'>
        <article ref={articleRef} className='flex flex-col max-w-xl gap-5'>
          {/* Label */}
          <div className='flex items-center gap-2 w-fit'>
            <div className='w-6 h-px bg-green-400' />
            <span className='text-green-400 text-[0.65rem] font-semibold tracking-[0.2em] uppercase'>
              Featured Event
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-white font-['Bebas_Neue'] leading-none tracking-wide"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
          >
            {name}
          </h2>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed font-['DM_Sans'] line-clamp-3">
            {description}
          </p>

          {/* CTA */}
          <div className='flex items-center gap-4 mt-2'>
            <button className='bg-green-400 hover:bg-green-300 text-black text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_#4ade8033]'>
              Get Tickets
            </button>
            <button className='text-white/70 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200'>
              Learn More →
            </button>
          </div>

          {/* Dot indicators */}
          <div className='flex gap-3 mt-4'>
            {events.map((event, index) => (
              <button
                key={event.id}
                onClick={() => handleChange(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer border-0 outline-none ${
                  active === index
                    ? 'w-6 h-2 bg-green-400'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

export default DisplayCard
