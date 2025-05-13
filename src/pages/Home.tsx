import DescriptionContainer from '../components/DescriptionContainer'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <div className='flex flex-col'>
        <DescriptionContainer />
      </div>
    </div>
  )
}
export default Home
