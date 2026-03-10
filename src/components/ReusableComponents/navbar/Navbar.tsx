import { useState } from 'react'
import { TbUniverse } from 'react-icons/tb'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Favourites', path: '/favourite-events' },
  { name: 'Profile', path: '/profile' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;600&display=swap');
      `}</style>

      <nav className="fixed top-0 left-0 w-full z-50 font-['DM_Sans']">
        {/* Top border glow */}
        <div
          className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px pointer-events-none'
          style={{
            background:
              'linear-gradient(90deg, transparent, #4ade8044, transparent)',
          }}
        />

        {/* Backdrop */}
        <div className='absolute inset-0 bg-black/90 backdrop-blur-md border-b border-[#1a2e1a]' />

        <div className='relative z-10 max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[72px]'>
          {/* ── Logo ── */}
          <Link to='/' className='flex items-center gap-2.5 no-underline'>
            <TbUniverse className='text-green-400 text-4xl drop-shadow-[0_0_10px_#4ade8066]' />
            <span className="font-['Bebas_Neue'] text-xl tracking-[0.15em] text-white leading-none">
              TICKET<span className='text-green-400'>UNIVERSE</span>
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <ul className='hidden md:flex items-center gap-8'>
            {links.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative text-sm tracking-wide no-underline transition-colors duration-200 pb-1 group ${
                      isActive
                        ? 'text-green-400'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {/* Active / hover underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-green-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* ── Desktop CTA buttons ── */}
          <div className='hidden md:flex items-center gap-3'>
            <Link
              to='/login'
              className='text-white/60 hover:text-white text-sm tracking-wide no-underline transition-colors duration-200'
            >
              Login
            </Link>
            <Link
              to='/register'
              className='bg-green-400 hover:bg-green-300 text-black font-bold text-xs tracking-[0.1em] uppercase px-5 py-2.5 rounded-lg no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_#4ade8044]'
            >
              Sign Up
            </Link>
          </div>

          {/* ── Mobile menu toggle ── */}
          <button
            className='md:hidden text-white/70 hover:text-green-400 transition-colors duration-200 text-2xl'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`relative z-10 md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='bg-black/95 border-t border-[#1a2e1a] px-8 py-6 flex flex-col gap-5'>
            {links.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm tracking-wide no-underline transition-colors duration-200 ${
                    isActive
                      ? 'text-green-400'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}

            <div className='h-px bg-[#1a2e1a] my-1' />

            <div className='flex gap-3'>
              <Link
                to='/login'
                onClick={() => setMenuOpen(false)}
                className='flex-1 text-center border border-[#1a2e1a] hover:border-green-400 text-white/60 hover:text-green-400 text-sm tracking-wide py-2.5 rounded-lg no-underline transition-all duration-200'
              >
                Login
              </Link>
              <Link
                to='/register'
                onClick={() => setMenuOpen(false)}
                className='flex-1 text-center bg-green-400 hover:bg-green-300 text-black font-bold text-xs tracking-[0.1em] uppercase py-2.5 rounded-lg no-underline transition-all duration-200'
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
