import { Link } from 'react-router-dom'
import { TbUniverse } from 'react-icons/tb'

const imageSlider = [
  {
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop',
    title: 'Concert',
  },
  {
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    title: 'Festival',
  },
  {
    image:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
    title: 'Event',
  },
  {
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop',
    title: 'Show',
  },
  {
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
    title: 'Party',
  },
  {
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
    title: 'Nightlife',
  },
]

const doubledImages = [...imageSlider, ...imageSlider]

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .scroll-up { animation: scroll-up 35s linear infinite; }
        .scroll-down { animation: scroll-down 35s linear infinite; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fade-up 0.7s ease forwards; opacity: 0; }
        .fade-up-2 { animation: fade-up 0.7s 0.15s ease forwards; opacity: 0; }
        .fade-up-3 { animation: fade-up 0.7s 0.28s ease forwards; opacity: 0; }
        .fade-up-4 { animation: fade-up 0.7s 0.42s ease forwards; opacity: 0; }
        .fade-up-5 { animation: fade-up 0.7s 0.56s ease forwards; opacity: 0; }

        .img-col-wrap {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-[#050f05] font-['DM_Sans']">
        {/* Background grid texture */}
        <div
          className='absolute inset-0 opacity-[0.025] pointer-events-none'
          style={{
            backgroundImage:
              'linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Radial green glow */}
        <div className='absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,#4ade8012_0%,transparent_70%)]' />

        {/* Main content */}
        <div className='relative z-10 max-w-[1280px] mx-auto px-8 flex items-center min-h-screen gap-16 pt-[72px]'>
          {/* ── LEFT: Text ── */}
          <article className='flex flex-col gap-6 flex-[0_0_50%] pt-8'>
            {/* Badge */}
            <div className='fade-up-1 inline-flex items-center gap-2 bg-[#0f170f] border border-[#1f2f1f] rounded-full px-4 py-1.5 w-fit'>
              <TbUniverse className='text-green-400 text-base' />
              <span className='text-green-400 text-[0.7rem] tracking-[0.18em] uppercase font-semibold'>
                Ticket Universe
              </span>
            </div>

            {/* Headline */}
            <h1
              className="fade-up-2 font-['Bebas_Neue'] text-white leading-none tracking-wide m-0"
              style={{ fontSize: 'clamp(3rem, 5vw, 4.8rem)' }}
            >
              YOUR GATEWAY TO{' '}
              <span className='text-green-400 drop-shadow-[0_0_40px_#4ade8044]'>
                UNFORGETTABLE
              </span>{' '}
              EVENTS
            </h1>

            {/* Subheading */}
            <p className='fade-up-3 text-[#888] text-base leading-relaxed max-w-[420px] m-0 font-light'>
              Discover concerts, festivals, sports, and more. Book your next
              experience with a platform built for simplicity, security, and
              speed.
            </p>

            {/* CTA Buttons */}
            <div className='fade-up-4 flex gap-3 items-center flex-wrap'>
              <Link
                to='/register'
                className='bg-green-400 hover:bg-green-300 text-black font-bold text-[0.82rem] tracking-[0.1em] px-7 py-3.5 rounded-md no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_#4ade8055]'
              >
                CREATE AN ACCOUNT
              </Link>
              <Link
                to='/events'
                className='bg-transparent text-[#ccc] hover:text-green-400 text-[0.82rem] tracking-[0.08em] px-6 py-3.5 rounded-md border border-[#1f2f1f] hover:border-green-400 no-underline transition-all duration-200'
              >
                BROWSE EVENTS
              </Link>
            </div>

            {/* Stats row */}
            <div className='fade-up-5 flex items-center gap-6 mt-2'>
              {[
                { value: '10K+', label: 'Events Listed' },
                { value: '500K+', label: 'Tickets Sold' },
                { value: '4.9★', label: 'User Rating' },
              ].map((stat, i) => (
                <div key={stat.label} className='flex items-center gap-6'>
                  {i > 0 && <div className='w-px h-8 bg-[#1f2f1f]' />}
                  <div>
                    <div className="text-green-400 text-xl font-bold font-['Bebas_Neue'] tracking-wide">
                      {stat.value}
                    </div>
                    <div className='text-[#555] text-[0.7rem] tracking-[0.1em] uppercase'>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* ── RIGHT: Scrolling image columns ── */}
          <div className='flex-[0_0_48%] grid grid-cols-3 gap-3 h-[600px]'>
            {(['scroll-up', 'scroll-down', 'scroll-up'] as const).map(
              (dir, colIdx) => (
                <div
                  key={colIdx}
                  className='img-col-wrap relative h-[600px] overflow-hidden'
                >
                  <div
                    className={`absolute flex flex-col ${dir}`}
                    style={{ gap: '12px' }}
                  >
                    {doubledImages.map((item, i) => (
                      <div
                        key={i}
                        className='h-[190px] shrink-0 rounded-lg overflow-hidden border border-[#1a2e1a]'
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className='w-full h-full object-cover brightness-90 saturate-90'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Bottom fade */}
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#050f05] pointer-events-none' />
      </section>
    </>
  )
}

export default Hero
