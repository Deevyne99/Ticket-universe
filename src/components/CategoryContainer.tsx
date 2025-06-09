import { useRef } from 'react'
import Category from './Category'

export const CategoryContainer = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 200 // Adjust this value to match your item width

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className='flex flex-col'>
      <div className='flex mx-4 md:mx-12 items-center justify-between'>
        <h3 className='text-xl font-bold'>Categories</h3>
        <div className='flex gap-2'>
          <button
            onClick={handlePrev}
            className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'
          >
            Next
          </button>
        </div>
      </div>
      <div className='flex mt-4'>
        <div
          ref={scrollRef}
          className='overflow-x-auto overflow-y-hidden no-scrollbar'
        >
          <div className='flex gap-6'>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
        </div>
      </div>
    </div>
  )
}
