import event from '../assets/event-1.jpg'
const Category = () => {
  return (
    <div className='flex flex-col h-64 w-48 bg-white '>
      <div className='h-[300px] w-[200px]'>
        <img src={event} alt='' className='w-full h-full object-cover' />
      </div>
      <div>
        <p>Dance</p>
      </div>
    </div>
  )
}
export default Category
