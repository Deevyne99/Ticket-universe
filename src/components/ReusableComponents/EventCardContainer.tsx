import { events } from '../../../data'
import EventCard from './EventCard'

const EventCardContainer = () => {
  return (
    <div className='my-12 grid grid-cols-4 gap-6'>
      {events.map((event) => {
        return <EventCard key={event.id} {...event} />
      })}
    </div>
  )
}
export default EventCardContainer
