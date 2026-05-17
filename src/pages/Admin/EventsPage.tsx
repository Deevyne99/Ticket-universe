import ActiveEventsTable from '../../components/ActiveEventsTable'
import { mockEvents } from '../../../mockData'
import type { Event } from '../../shared/types'

// ── Classification card ──────────────────────────────────────────────────────

interface EventClassCardProps {
  label: string
  count: number
  description: string
  icon: string
  accent: string
  iconBg: string
  events: Event[]
}

const EventClassCard = ({
  label,
  count,
  description,
  icon,
  accent,
  iconBg,
  events,
}: EventClassCardProps) => {
  const previews = events.slice(0, 3)

  return (
    <div
      className='bg-white rounded-2xl p-5 flex flex-col gap-4'
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
    >
      {/* Header */}
      <div className='flex items-start justify-between'>
        <div
          className='w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0'
          style={{ background: iconBg }}
        >
          {icon}
        </div>
        <span
          className='text-2xl font-bold tracking-tight'
          style={{ color: accent }}
        >
          {count}
        </span>
      </div>

      {/* Label + description */}
      <div>
        <p className='text-gray-900 font-semibold text-sm'>{label}</p>
        <p className='text-gray-400 text-xs mt-0.5'>{description}</p>
      </div>

      {/* Mini event list */}
      <div className='flex flex-col gap-2'>
        {previews.length === 0 ? (
          <p className='text-gray-300 text-xs italic'>No events</p>
        ) : (
          previews.map((e) => (
            <div key={e.id} className='flex items-center justify-between gap-2'>
              <p className='text-gray-600 text-xs truncate flex-1'>{e.title}</p>
              <p className='text-gray-400 text-[0.65rem] whitespace-nowrap shrink-0'>
                {e.date}
              </p>
            </div>
          ))
        )}
        {events.length > 3 && (
          <p className='text-xs mt-0.5' style={{ color: accent }}>
            +{events.length - 3} more
          </p>
        )}
      </div>

      {/* Bottom divider + CTA */}
      <div className='border-t border-gray-50 pt-3 mt-auto'>
        <button
          className='text-xs font-medium transition-colors'
          style={{ color: accent }}
        >
          View all {label.toLowerCase()} →
        </button>
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

const EventsPage = () => {
  const liveEvents = mockEvents.filter((e) => e.status === 'live')
  const upcomingEvents = mockEvents.filter((e) => e.status === 'upcoming')
  const endedEvents = mockEvents.filter(
    (e) => e.status === 'ended' || e.status === 'draft',
  )

  const cards = [
    {
      label: 'Live Events',
      count: liveEvents.length,
      description: 'Currently active and selling',
      icon: '🟢',
      accent: '#16a34a',
      iconBg: '#f0fdf4',
      events: liveEvents,
    },
    {
      label: 'Upcoming Events',
      count: upcomingEvents.length,
      description: 'Scheduled and open for sale',
      icon: '📅',
      accent: '#d97706',
      iconBg: '#fffbeb',
      events: upcomingEvents,
    },
    {
      label: 'Past & Drafts',
      count: endedEvents.length,
      description: 'Ended events and saved drafts',
      icon: '🗂️',
      accent: '#6b7280',
      iconBg: '#f9fafb',
      events: endedEvents,
    },
  ]

  return (
    <>
      {/* Classification cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {cards.map((c) => (
          <EventClassCard key={c.label} {...c} />
        ))}
      </div>

      {/* Full events table */}
      <ActiveEventsTable events={mockEvents} />
    </>
  )
}

export default EventsPage
