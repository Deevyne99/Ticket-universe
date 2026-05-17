interface UserStatCardProps {
  label: string;
  value: string;
  icon: string;
  sub: string;
  iconBg: string;
  change?: string;
  positive?: boolean;
}

const UserStatCard = ({ label, value, icon, sub, iconBg, change, positive }: UserStatCardProps) => (
  <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)', fontFamily: "'DM Sans', sans-serif" }}>
    <div className="flex items-start justify-between mb-4">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: iconBg }}>
        {icon}
      </div>
      {change && (
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
          {positive ? '▲' : '▼'} {change}
        </span>
      )}
    </div>
    <p className="font-['Bebas_Neue'] text-gray-900 text-3xl tracking-wide leading-none">{value}</p>
    <p className="text-gray-500 text-sm mt-1">{label}</p>
    <p className="text-green-500 text-xs mt-0.5">{sub}</p>
  </div>
);

export default UserStatCard;
