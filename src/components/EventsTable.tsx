import { IoEllipsisVertical } from 'react-icons/io5';
import { Event } from '../../shared/types';

interface EventsTableProps {
  events: Event[];
}

const statusStyle: Record<string, string> = {
  upcoming: 'bg-green-400/10 text-green-400 border-green-400/20',
  live: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  ended: 'bg-[#333] text-[#666] border-[#333]',
};

const EventsTable = ({ events }: EventsTableProps) => {
  return (
    <div className="bg-[#0a0a0a] border border-[#1a2e1a] rounded-xl overflow-hidden font-['DM_Sans']">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a2e1a]">
        <h3 className="text-white font-semibold text-sm">All Events</h3>
        <button className="text-green-400 text-xs tracking-wide hover:text-green-300 transition-colors">
          + Add Event
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1a2e1a]">
              {['Event', 'Date', 'Location', 'Price', 'Sold / Total', 'Status', ''].map((h) => (
                <th key={h} className="text-left px-6 py-3 text-[#444] text-[0.65rem] tracking-[0.15em] uppercase font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {events.map((event, i) => (
              <tr
                key={event.id}
                className={`border-b border-[#111] transition-colors hover:bg-white/[0.02] ${
                  i === events.length - 1 ? 'border-b-0' : ''
                }`}
              >
                {/* Event */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={event.image} alt={event.title} className="w-9 h-9 rounded-lg object-cover border border-[#1a2e1a]" />
                    <div>
                      <p className="text-white text-sm font-medium">{event.title}</p>
                      <p className="text-[#444] text-xs">{event.category}</p>
                    </div>
                  </div>
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-[#888] text-xs whitespace-nowrap">{event.date}</td>

                {/* Location */}
                <td className="px-6 py-4 text-[#888] text-xs whitespace-nowrap">{event.location}</td>

                {/* Price */}
                <td className="px-6 py-4 text-green-400 text-sm font-semibold">${event.price}</td>

                {/* Progress */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 min-w-[120px]">
                    <div className="flex-1 h-1.5 bg-[#1a2e1a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-400 rounded-full"
                        style={{ width: `${Math.round((event.sold / event.tickets) * 100)}%` }}
                      />
                    </div>
                    <span className="text-[#666] text-xs whitespace-nowrap">
                      {event.sold}/{event.tickets}
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span className={`text-[0.65rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full border ${statusStyle[event.status]}`}>
                    {event.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <button className="text-[#444] hover:text-white transition-colors">
                    <IoEllipsisVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsTable;
