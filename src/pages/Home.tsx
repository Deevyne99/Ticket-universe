import { CategoryContainer } from '../components/CategoryContainer'
import DescriptionContainer from '../components/DescriptionContainer'
import Hero from '../components/Hero'
import EventCardContainer from '../components/ReusableComponents/EventCardContainer'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <div className='flex flex-col'>
        <DescriptionContainer />
      </div>
      <div className='flex flex-col container'>
        <h2>Find your next Event</h2>
        <EventCardContainer />
      </div>
      <div className='flex flex-col'>
        <CategoryContainer />
      </div>
    </div>
  )
}
export default Home
