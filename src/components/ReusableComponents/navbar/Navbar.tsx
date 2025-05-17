import { TbUniverse } from 'react-icons/tb'
const Navbar = () => {
  return (
    <nav className=' flex flex-col  bg-(--primary-black) py-4 '>
      <div className='flex w-full items-center justify-between container'>
        <div className='flex '>
          <div>
            <TbUniverse className='text-6xl text-(--primary-green)' />
          </div>
        </div>
        <div className='flex gap-4'>
          <ul className='flex gap-4 ml-auto '>
            <li className='text-(--white) cursor-pointer text-lg hover:text-(--primary-green)'>
              Home
            </li>
            <li className='text-(--white) cursor-pointer text-lg hover:text-(--primary-green)'>
              About
            </li>
            <li className='text-(--white) cursor-pointer text-lg hover:text-(--primary-green)'>
              Contact
            </li>
          </ul>
        </div>
        <div className='flex gap-4'>
          <ul className='flex gap-4 items-center'>
            <li className='text-(--white) cursor-pointer hover:text-(--primary-green)  text-lg'>
              Sign up
            </li>
            <li className=' cursor-pointer bg-(--primary-green) text-lg text-(--white) px-4 py-2 rounded-lg hover:bg-(--primary-green-dark)'>
              Create an account
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
