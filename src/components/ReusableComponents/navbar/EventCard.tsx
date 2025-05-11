import image from '../../../assets/event-1.jpg'
import { IoLocationSharp } from 'react-icons/io5'
const EventCard = () => {
  return (
    <div className='p-4 bg-(--white) w-[300px] shadow-lg rounded-md flex flex-col'>
      <div className='w-full h-[200px] '>
        <img src={image} alt='' className='rounded-md' />
      </div>
      <article className='flex flex-col gap-2'>
        <div className='flex justify-between items-center gap-1'>
          <div className='bg-(--light-green) p-1 gap-1 items-center flex   rounded-md'>
            <div className='bg-(--white) rounded-xl px-2'>
              <p className='text-(--primary-green)'>$15</p>
            </div>
            <div>
              <p className='text-(--primary-green)'> 24 of 200 seats </p>
            </div>
          </div>
          <div>
            <p className='text-(--primary-green)'>$15</p>
          </div>
        </div>
        <p>Agriculture & food security</p>
        <div>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            libero ex magni harum perferendis illo cum.
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <IoLocationSharp className='text-(--primary-green)' />
          <p className='text-sm'>Lagos, Kwara Abuja</p>
        </div>
        <div className='flex flex-col'>
          <p>15th October 2025</p>
          {/* <p>
            4:00PM - 5:00PM <span>WAT</span>
          </p> */}
        </div>
      </article>
    </div>
  )
}
export default EventCard
