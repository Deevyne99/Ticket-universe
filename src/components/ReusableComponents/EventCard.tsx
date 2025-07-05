import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router'

// interface EventCardProps {
//   image: string
//   title: string
//   description: string
//   tickets: number
//   pricing: string
//   date: string
//   location: string
// }

const EventCard = ({
  image,
  description,
  title,
  tickets,
  date,
  location,
  pricing,
  price,
}: {
  image: string
  title: string
  description: string
  tickets: number
  pricing: string
  date: string
  price?: number
  location: string
}) => {
  return (
    <Link
      to={'/events/:id'}
      className='p-4  bg-(--white) w-[300px] shadow-lg hover:shadow-2xl rounded-md flex flex-col cursor-pointer max-w-[280px]'
    >
      <div className='w-full h-[200px] '>
        <img src={image} alt='' className='rounded-md' />
      </div>
      <article className='flex flex-col gap-2'>
        <div className='flex justify-between items-center gap-1'>
          <div className='bg-(--light-green) p-1 gap-1 items-center flex   rounded-md'>
            <div className='bg-(--white) rounded-xl px-2'>
              <p className='text-(--primary-green)'>{pricing}</p>
            </div>
            <div>
              <p className='text-(--primary-green)'>{tickets} </p>
            </div>
          </div>
          <div>
            <p className='text-(--primary-green)'>${price ? price : 0}</p>
          </div>
        </div>
        <p>{title}</p>
        <div>
          <p className='text-sm'>{description}</p>
        </div>
        <div className='flex items-center gap-1'>
          <IoLocationSharp className='text-(--primary-green)' />
          <p className='text-sm'>{location}</p>
        </div>
        <div className='flex flex-col'>
          <p>{date}</p>
          {/* <p>
            4:00PM - 5:00PM <span>WAT</span>
          </p> */}
        </div>
      </article>
    </Link>
  )
}
export default EventCard
