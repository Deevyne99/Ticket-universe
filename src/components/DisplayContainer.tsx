import { useState, useEffect, useRef } from 'react'
import { display } from '../../data.ts';
import EventCard from './Display.tsx'


const EventCardContainer = () => {
  const [active, setActive] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Function to go to next event
 

  // Function to set a specific event
  const handleChange = (event: number) => setActive(event)

  // Auto-advance with setInterval
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % display.length)
    }, 3000) // Change every 3 seconds
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className='bg-[#000]'>
      <EventCard
        img={display[active].image}
        description={display[active].description}
        name={display[active].name}
        events={display}
        active={active}
        handleChange={handleChange}
        
      />
    </div>
  )
}

export default EventCardContainer