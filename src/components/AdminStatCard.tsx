interface AdminStatCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
  sub: string;
  bg: string;
  iconBg: string;
}

const AdminStatCard = ({ label, value, change, positive, icon, sub, bg, iconBg }: AdminStatCardProps) => {
  return (
    <div
      className="relative rounded-2xl p-5 overflow-hidden"
      style={{
        background: bg,
        fontFamily: "'DM Sans', sans-serif",
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
      }}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
          style={{ background: iconBg }}
        >
          {icon}
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${
            positive
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {positive ? '▲' : '▼'} {change}
        </span>
      </div>

      <p className="font-['Bebas_Neue'] text-gray-900 text-4xl tracking-wide leading-none">{value}</p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
      <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
    </div>
  );
};

export default AdminStatCard;
