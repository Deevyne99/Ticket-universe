import EventCardContainer from '../components/ReusableComponents/EventCardContainer'

const Events = () => {
  return (
    <div className='bg-(--white) flex flex-col justify-center items-center w-full  '>
      <h1 className='mt-4 text-3xl'>Events</h1>
      <EventCardContainer />
    </div>
  )
}
export default Events
