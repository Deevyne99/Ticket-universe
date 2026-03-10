import { useState } from 'react'
import {
  IoSearchOutline,
  IoFilterOutline,
  IoCloseOutline,
} from 'react-icons/io5'
import { IoCalendarOutline, IoLocationSharp } from 'react-icons/io5'
import EventCardContainer from '../components/ReusableComponents/EventCardContainer'

const categories = [
  'All',
  'Music',
  'Sports',
  'Arts',
  'Theatre',
  'Comedy',
  'Tech',
  'Food',
  'Film',
  'Fashion',
]
const locations = [
  'All Locations',
  'Lagos',
  'Abuja',
  'Port Harcourt',
  'London',
  'New York',
]
const sortOptions = [
  'Latest',
  'Oldest',
  'Price: Low to High',
  'Price: High to Low',
]
const priceRanges = [
  'Any Price',
  'Free',
  'Under $20',
  '$20 – $50',
  '$50 – $100',
  '$100+',
]

const Events = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [location, setLocation] = useState('All Locations')
  const [sort, setSort] = useState('Latest')
  const [price, setPrice] = useState('Any Price')
  const [date, setDate] = useState('')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const hasActiveFilters =
    activeCategory !== 'All' ||
    location !== 'All Locations' ||
    sort !== 'Latest' ||
    price !== 'Any Price' ||
    date !== ''

  const clearFilters = () => {
    setActiveCategory('All')
    setLocation('All Locations')
    setSort('Latest')
    setPrice('Any Price')
    setDate('')
    setSearch('')
  }

  return (
    <div className="min-h-screen bg-white font-['DM_Sans'] pt-[72px]">
      {/* ── Page Header ── */}
      <div className='bg-gradient-to-b from-[#0a0a0a] to-[#050f05] relative overflow-hidden'>
        <div
          className='absolute inset-0 opacity-[0.04] pointer-events-none'
          style={{
            backgroundImage:
              'linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className='relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-14 flex flex-col gap-6'>
          <div>
            <p className='text-green-400 text-[0.65rem] tracking-[0.2em] uppercase font-semibold mb-2'>
              Discover
            </p>
            <h1
              className="font-['Bebas_Neue'] text-white leading-none tracking-wide"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              ALL EVENTS
            </h1>
          </div>

          {/* Search bar */}
          <div className='flex gap-3 max-w-2xl'>
            <div className='flex-1 flex items-center gap-3 bg-white/5 border border-[#1a2e1a] focus-within:border-green-400 rounded-xl px-4 py-3 transition-colors duration-200'>
              <IoSearchOutline className='text-green-400 text-lg shrink-0' />
              <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search events, artists, venues...'
                className='flex-1 bg-transparent text-white placeholder-white/20 text-sm outline-none'
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className='text-white/30 hover:text-white transition-colors'
                >
                  <IoCloseOutline />
                </button>
              )}
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                filtersOpen || hasActiveFilters
                  ? 'bg-green-400 border-green-400 text-black'
                  : 'bg-white/5 border-[#1a2e1a] text-white/60 hover:border-green-400 hover:text-white'
              }`}
            >
              <IoFilterOutline className='text-base' />
              Filters
              {hasActiveFilters && (
                <span className='bg-black/20 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
                  !
                </span>
              )}
            </button>
          </div>

          {/* Expandable filters panel */}
          <div
            className={`overflow-hidden transition-all duration-300 ${filtersOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 pb-4'>
              {/* Location */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-white/40 text-[0.65rem] tracking-[0.15em] uppercase flex items-center gap-1.5'>
                  <IoLocationSharp className='text-green-400' /> Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className='bg-white/5 border border-[#1a2e1a] text-white text-sm rounded-lg px-3 py-2.5 outline-none focus:border-green-400 transition-colors cursor-pointer'
                >
                  {locations.map((l) => (
                    <option key={l} value={l} className='bg-[#0a0a0a]'>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-white/40 text-[0.65rem] tracking-[0.15em] uppercase flex items-center gap-1.5'>
                  <IoCalendarOutline className='text-green-400' /> Date
                </label>
                <input
                  type='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className='bg-white/5 border border-[#1a2e1a] text-white text-sm rounded-lg px-3 py-2.5 outline-none focus:border-green-400 transition-colors cursor-pointer'
                />
              </div>

              {/* Price */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-white/40 text-[0.65rem] tracking-[0.15em] uppercase'>
                  Price Range
                </label>
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className='bg-white/5 border border-[#1a2e1a] text-white text-sm rounded-lg px-3 py-2.5 outline-none focus:border-green-400 transition-colors cursor-pointer'
                >
                  {priceRanges.map((p) => (
                    <option key={p} value={p} className='bg-[#0a0a0a]'>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-white/40 text-[0.65rem] tracking-[0.15em] uppercase'>
                  Sort By
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className='bg-white/5 border border-[#1a2e1a] text-white text-sm rounded-lg px-3 py-2.5 outline-none focus:border-green-400 transition-colors cursor-pointer'
                >
                  {sortOptions.map((s) => (
                    <option key={s} value={s} className='bg-[#0a0a0a]'>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className='flex items-center gap-1.5 text-red-400 hover:text-red-300 text-xs tracking-wide transition-colors duration-200'
              >
                <IoCloseOutline className='text-base' /> Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Category Pills ── */}
      <div className='sticky top-[72px] z-30 bg-white border-b border-gray-100 shadow-sm'>
        <div className='max-w-[1280px] mx-auto px-6 md:px-12'>
          <div className='flex gap-2 overflow-x-auto py-3 scrollbar-hide'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-green-400 border-green-400 text-black'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-green-400 hover:text-green-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results Info ── */}
      <div className='max-w-[1280px] mx-auto px-6 md:px-12 pt-6 pb-2 flex items-center justify-between'>
        <p className='text-gray-400 text-sm'>
          Showing results
          {activeCategory !== 'All' && (
            <span className='text-green-600 font-medium'>
              {' '}
              · {activeCategory}
            </span>
          )}
          {location !== 'All Locations' && (
            <span className='text-green-600 font-medium'> · {location}</span>
          )}
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className='text-xs text-red-400 hover:text-red-500 transition-colors flex items-center gap-1'
          >
            <IoCloseOutline /> Clear filters
          </button>
        )}
      </div>

      {/* ── Events Grid ── */}
      <div className='max-w-[1280px] mx-auto px-6 md:px-12 pb-20'>
        <EventCardContainer />
      </div>
    </div>
  )
}

export default Events
