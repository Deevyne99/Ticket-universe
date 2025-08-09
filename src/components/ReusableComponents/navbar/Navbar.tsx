import { TbUniverse } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const links=[
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Favourite Events', path: '/favourite-events' },
  { name: 'Profile', path: '/profile' },
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
]
const Navbar = () => {
  return (
    <nav className=' flex flex-col  bg-[#000] fixed top-0 left-0  py-2 w-full z-20'>
      <div className='flex w-full  items-center justify-between container'>
        <div className='flex '>
          <div>
            <TbUniverse className='text-6xl text-(--primary-green)' />
          </div>
        </div>
        <div className=' gap-4 hidden md:flex'>
          <ul className='flex gap-4 ml-autom '>
            {links.map((link) => (
              <li key={link.name} className='text-(--white) cursor-pointer hover:text-(--primary-green)'>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='gap-4 hidden md:flex'>
          <ul className='flex gap-4 items-center'>
            <li className='text-(--white) cursor-pointer hover:text-(--primary-green)  text-lg'>
              Sign up
            </li>
            <li className=' cursor-pointer bg-(--primary-green) text-lg text-(--white) px-4 py-2 rounded-lg hover:bg-(--primary-green-dark)'>
              Create 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
