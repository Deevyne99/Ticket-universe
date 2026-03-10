import { Link } from 'react-router-dom'
import { useState } from 'react'

interface CategoryProps {
  name?: string
  image?: string
}

const Category = ({
  name = 'Dance',
  image = 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=300&fit=crop',
}: CategoryProps) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/events?category=${name}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative block w-full overflow-hidden rounded-xl border border-[#1a2e1a] bg-[#0a0a0a] no-underline transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4ade80] hover:shadow-[0_12px_36px_#4ade8020]'
      style={{ aspectRatio: '3 / 4' }}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className={`h-full w-full object-cover transition-all duration-500 ${
          hovered
            ? 'scale-110 brightness-50 saturate-75'
            : 'scale-100 brightness-75 saturate-90'
        }`}
      />

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80' />

      {/* Bottom content */}
      <div className='absolute bottom-0 left-0 right-0 p-4'>
        {/* Name */}
        <p
          className={`font-['Bebas_Neue'] text-2xl tracking-widest transition-all duration-300 ${
            hovered
              ? 'text-[#4ade80] drop-shadow-[0_0_12px_#4ade8066]'
              : 'text-white'
          }`}
        >
          {name}
        </p>

        {/* Animated underline */}
        <div
          className={`mt-2 h-0.5 rounded-full bg-[#4ade80] transition-all duration-500 ${
            hovered ? 'w-full' : 'w-7'
          }`}
        />
      </div>

      {/* Arrow */}
      <div
        className={`absolute bottom-4 right-4 text-[#4ade80] transition-all duration-300 ${
          hovered ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
        }`}
      >
        →
      </div>
    </Link>
  )
}

export default Category
