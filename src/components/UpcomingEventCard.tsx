import { IoCalendarOutline, IoLocationSharp } from 'react-icons/io5';
import { Event } from '../../shared/types';

const UpcomingEventCard = ({ event }: { event: Event }) => (
  <div className="bg-white rounded-2xl overflow-hidden group cursor-pointer transition-all duration-200 hover:-translate-y-1" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)', fontFamily: "'DM Sans', sans-serif" }}>
    <div className="relative h-36 overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <span className="absolute top-3 left-3 bg-white/90 text-gray-700 text-[0.6rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full">{event.category}</span>
      <span className="absolute bottom-3 right-3 text-white font-bold text-sm font-['Bebas_Neue']">${event.price}</span>
    </div>
    <div className="p-4 flex flex-col gap-2">
      <h4 className="text-gray-900 text-sm font-semibold group-hover:text-green-600 transition-colors">{event.title}</h4>
      <div className="flex items-center gap-1.5"><IoCalendarOutline className="text-green-500 text-xs" /><span className="text-gray-400 text-xs">{event.date}</span></div>
      <div className="flex items-center gap-1.5"><IoLocationSharp className="text-green-500 text-xs" /><span className="text-gray-400 text-xs">{event.location}</span></div>
      <div className="flex items-center gap-2 mt-1">
        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-green-400 rounded-full" style={{ width: `${Math.round((event.sold / event.tickets) * 100)}%` }} />
        </div>
        <span className="text-gray-400 text-[0.65rem]">{event.tickets - event.sold} left</span>
      </div>
    </div>
  </div>
);

export default UpcomingEventCard;
