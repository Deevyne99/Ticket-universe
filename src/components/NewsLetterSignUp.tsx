import { useState } from 'react'
import { TbUniverse } from 'react-icons/tb'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className='relative overflow-hidden mt-20  px-6'>
      {/* Grid texture */}
      <div
        className=''
        style={{
          backgroundImage:
            'linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial glow */}
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none'
        style={{
          background: 'radial-gradient(circle, #4ade8014 0%, transparent 70%)',
        }}
      />

      {/* Top border glow */}
      <div
        className=''
        style={{
          background:
            'linear-gradient(90deg, transparent, #4ade8055, transparent)',
        }}
      />

      <div className='relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-6'>
        {/* Icon badge */}
        <div className='flex items-center gap-2 bg-[#0f170f] border border-[#1a2e1a] rounded-full px-4 py-2'>
          <TbUniverse className='text-green-400 text-lg' />
          <span className="text-green-400 text-[0.65rem] font-semibold tracking-[0.18em] uppercase font-['DM_Sans']">
            Stay in the loop
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-[#000] font-['Bebas_Neue'] leading-none tracking-wide"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
        >
          NEVER MISS AN{' '}
          <span
            className='text-green-400'
            style={{ textShadow: '0 0 40px #4ade8044' }}
          >
            EVENT
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-[] text-sm leading-relaxed max-w-md font-['DM_Sans'] font-light">
          Join thousands of event-goers who get early access to tickets,
          exclusive deals, and personalised event picks — straight to their
          inbox.
        </p>

        {/* Input row or success state */}
        {submitted ? (
          <div className='flex items-center gap-3 bg-[#0f170f] border border-green-400/40 rounded-xl px-6 py-4 mt-2'>
            <div className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
            <p className="text-green-400 text-sm font-semibold tracking-wide font-['DM_Sans']">
              You're on the list — see you at the next event!
            </p>
          </div>
        ) : (
          <div className='flex w-full max-w-md mt-2 rounded-xl overflow-hidden border border-green-400 bg-[#fff] focus-within:border-green-400 transition-colors duration-300'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className="flex-1 bg-transparent px-5 py-4 text-sm text-white placeholder-white/20 outline-none font-['DM_Sans']"
            />
            <button
              onClick={handleSubmit}
              className="bg-green-400 hover:bg-green-300 text-black text-xs font-bold tracking-widest uppercase px-6 py-4 transition-all duration-200 hover:shadow-[0_0_20px_#4ade8044] font-['DM_Sans'] shrink-0"
            >
              Subscribe
            </button>
          </div>
        )}

        {/* Trust note */}
        <p className="text-white/20 text-[0.68rem] tracking-wider uppercase font-['DM_Sans']">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
