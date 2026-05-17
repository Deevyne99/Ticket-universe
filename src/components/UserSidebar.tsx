import { TbUniverse } from 'react-icons/tb';
import {
  IoGridOutline, IoTicketOutline, IoCalendarOutline,
  IoHeartOutline, IoPersonOutline, IoLogOutOutline, IoSettingsOutline,
} from 'react-icons/io5';

interface UserSidebarProps {
  active: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: <IoGridOutline /> },
  { id: 'tickets', label: 'My Tickets', icon: <IoTicketOutline />, badge: 4 },
  { id: 'upcoming', label: 'Upcoming Events', icon: <IoCalendarOutline /> },
  { id: 'favourites', label: 'Favourites', icon: <IoHeartOutline /> },
  { id: 'profile', label: 'Profile', icon: <IoPersonOutline /> },
];

const UserSidebar = ({ active, onNavigate }: UserSidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] bg-white border-r border-gray-100 flex flex-col z-40"
      style={{ fontFamily: "'DM Sans', sans-serif", boxShadow: '2px 0 12px rgba(0,0,0,0.04)' }}>

      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-gray-100">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_0_12px_#4ade8033]">
          <TbUniverse className="text-black text-xl" />
        </div>
        <div>
          <p className="font-['Bebas_Neue'] text-gray-900 text-lg tracking-[0.1em] leading-none">
            TICKET<span className="text-green-500">UNIVERSE</span>
          </p>
          <p className="text-green-500 text-[0.55rem] tracking-[0.18em] uppercase mt-0.5">My Account</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 flex flex-col gap-0.5">
        <p className="text-gray-300 text-[0.58rem] tracking-[0.22em] uppercase px-3 mb-2">Menu</p>
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 text-left relative ${
                isActive
                  ? 'bg-green-50 text-green-600 border border-green-100'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50 border border-transparent'
              }`}
            >
              <span className={`text-base ${isActive ? 'text-green-500' : ''}`}>{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {'badge' in item && item.badge && (
                <span className="bg-green-100 text-green-600 text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
              {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-green-400 rounded-r-full" />}
            </button>
          );
        })}
      </nav>

      <div className="px-3 pb-5 border-t border-gray-100 pt-4 flex flex-col gap-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-all border border-transparent">
          <IoSettingsOutline className="text-base" /> Settings
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all border border-transparent">
          <IoLogOutOutline className="text-base" /> Sign Out
        </button>
        <div className="flex items-center gap-3 px-3 py-3 mt-1 bg-gray-50 rounded-xl border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
            AO
          </div>
          <div className="min-w-0">
            <p className="text-gray-700 text-xs font-medium truncate">Amara Obi</p>
            <p className="text-gray-300 text-[0.6rem] truncate">amara@email.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default UserSidebar;
