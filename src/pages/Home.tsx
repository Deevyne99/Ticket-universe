import { CategoryContainer } from '../components/CategoryContainer'
// import DescriptionContainer from '../components/DescriptionContainer'
import Hero from '../components/Hero'
 import EventCardContainer from '../components/ReusableComponents/EventCardContainer'
import DisplayContainer from '../components/DisplayContainer'
import Newsletter from '../components/Newsletter'
const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      {/* <div className='flex flex-col'>
        <DescriptionContainer />
      </div> */}
      <div className='flex flex-col'>
        <CategoryContainer />
      </div>
      <div className='flex flex-col container'>
        <h2>Find your next Event</h2>
        <EventCardContainer />
      </div>
      <div className='py-12'>
        <DisplayContainer />
      </div>
      <div className='py-12'>
        <Newsletter />
      </div>
    </div>
  )
}
export default Home
