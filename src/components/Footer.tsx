import { Link } from 'react-router-dom'
import { TbUniverse } from 'react-icons/tb'

// Mock categories for preview
const categories = [
  { name: 'Music' },
  { name: 'Sports' },
  { name: 'Arts' },
  { name: 'Theatre' },
  { name: 'Comedy' },
  { name: 'Tech' },
  { name: 'Food' },
  { name: 'Film' },
  { name: 'Fashion' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)',
        borderTop: '1px solid #1a2e1a',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            'linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      {/* Glow accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, #4ade8060, transparent)',
          pointerEvents: 'none',
        }}
      />

      <div className='max-w-7xl mx-auto px-8 pt-16 pb-8'>
        {/* Top section */}
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12 mb-16'>
          {/* Brand */}
          <div className='md:col-span-3 flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
              <TbUniverse
                style={{
                  fontSize: '2.8rem',
                  color: '#4ade80',
                  filter: 'drop-shadow(0 0 12px #4ade8066)',
                }}
              />
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.5rem',
                  letterSpacing: '0.15em',
                  color: '#fff',
                }}
              >
                TICKET<span style={{ color: '#4ade80' }}>UNIVERSE</span>
              </span>
            </div>
            <p
              style={{
                color: '#666',
                fontSize: '0.8rem',
                lineHeight: 1.7,
                maxWidth: '220px',
              }}
            >
              Your one-stop platform for discovering and booking events across
              the universe.
            </p>
            {/* Social icons */}
            <div className='flex gap-3 mt-2'>
              {['𝕏', 'in', 'ig'].map((s) => (
                <button
                  key={s}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    border: '1px solid #1f2f1f',
                    background: '#0f170f',
                    color: '#4ade80',
                    fontSize: '0.7rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                      '#4ade80'
                    ;(e.currentTarget as HTMLButtonElement).style.background =
                      '#162416'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                      '#1f2f1f'
                    ;(e.currentTarget as HTMLButtonElement).style.background =
                      '#0f170f'
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className='md:col-span-2'>
            <h4
              style={{
                color: '#4ade80',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
                fontWeight: 600,
              }}
            >
              Navigation
            </h4>
            <ul className='flex flex-col gap-3'>
              {[
                { label: 'Home', to: '/' },
                { label: 'Events', to: '/events' },
                { label: 'Favourites', to: '/favourite-events' },
                { label: 'Profile', to: '/profile' },
                { label: 'Login', to: '/login' },
                { label: 'Register', to: '/register' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    style={{
                      color: '#999',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#4ade80')
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className='md:col-span-4'>
            <h4
              style={{
                color: '#4ade80',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
                fontWeight: 600,
              }}
            >
              Categories
            </h4>
            <div className='grid grid-cols-3 gap-x-4 gap-y-3'>
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={`/events?category=${cat.name}`}
                  style={{
                    color: '#999',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#4ade80')
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className='md:col-span-3'>
            <h4
              style={{
                color: '#4ade80',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
                fontWeight: 600,
              }}
            >
              Contact
            </h4>
            <ul className='flex flex-col gap-3'>
              {[
                { label: 'support@ticketuniverse.com', icon: '✉' },
                { label: '+1 234 567 890', icon: '☏' },
                { label: 'Lagos, Nigeria', icon: '◎' },
              ].map(({ label, icon }) => (
                <li
                  key={label}
                  className='flex items-start gap-2'
                  style={{ color: '#999', fontSize: '0.82rem' }}
                >
                  <span style={{ color: '#4ade80', minWidth: '14px' }}>
                    {icon}
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className='mt-6'>
              <p
                style={{
                  color: '#555',
                  fontSize: '0.72rem',
                  marginBottom: '0.6rem',
                  letterSpacing: '0.05em',
                }}
              >
                STAY IN THE LOOP
              </p>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='your@email.com'
                  style={{
                    background: '#0f170f',
                    border: '1px solid #1f2f1f',
                    borderRight: 'none',
                    borderRadius: '6px 0 0 6px',
                    padding: '8px 12px',
                    color: '#ccc',
                    fontSize: '0.78rem',
                    outline: 'none',
                    flex: 1,
                    minWidth: 0,
                  }}
                />
                <button
                  style={{
                    background: '#4ade80',
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '0 6px 6px 0',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  JOIN →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, #1a2e1a, transparent)',
            marginBottom: '1.5rem',
          }}
        />

        {/* Bottom bar */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
          <span style={{ color: '#3a3a3a', fontSize: '0.72rem' }}>
            © {year} Ticket Universe. All rights reserved.
          </span>
          <div className='flex gap-6'>
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map(
              (item) => (
                <Link
                  key={item}
                  to='#'
                  style={{
                    color: '#3a3a3a',
                    fontSize: '0.72rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#4ade80')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = '#3a3a3a')
                  }
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>
    </footer>
  )
}

export default Footer
