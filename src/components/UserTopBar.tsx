import { IoSearchOutline, IoNotificationsOutline } from 'react-icons/io5';

interface UserTopBarProps {
  title: string;
}

const UserTopBar = ({ title }: UserTopBarProps) => {
  return (
    <header className="h-[64px] border-b border-gray-100 flex items-center justify-between px-8 bg-white font-['DM_Sans']"
      style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
      <h1 className="font-['Bebas_Neue'] text-gray-900 text-2xl tracking-widest">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 focus-within:border-green-400 transition-colors">
          <IoSearchOutline className="text-gray-300 text-sm" />
          <input
            type="text"
            placeholder="Search events..."
            className="bg-transparent text-gray-700 text-xs outline-none placeholder-gray-300 w-36"
          />
        </div>

        <button className="relative w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-200 transition-all">
          <IoNotificationsOutline className="text-base" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-green-400" />
        </button>

        <div className="w-9 h-9 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-500 text-xs font-bold cursor-pointer">
          AO
        </div>
      </div>
    </header>
  );
};

export default UserTopBar;
