import { User } from '../../shared/types';

const UsersTable = ({ users }: { users: User[] }) => (
  <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)', fontFamily: "'DM Sans', sans-serif" }}>
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
      <h3 className="text-gray-900 font-semibold text-sm">All Users</h3>
      <span className="text-gray-400 text-xs">{users.length} total</span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-50">
            {['User', 'Joined', 'Tickets', 'Total Spent', 'Status'].map((h) => (
              <th key={h} className="text-left px-6 py-3 text-gray-400 text-[0.65rem] tracking-[0.12em] uppercase font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.id} className={`hover:bg-gray-50/50 transition-colors ${i < users.length - 1 ? 'border-b border-gray-50' : ''}`}>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: user.color }}>
                    {user.initials}
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">{user.name}</p>
                    <p className="text-gray-400 text-xs">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-400 text-xs">{user.joined}</td>
              <td className="px-6 py-4 text-gray-700 text-sm font-medium">{user.tickets}</td>
              <td className="px-6 py-4 text-green-600 text-sm font-semibold">${user.spent}</td>
              <td className="px-6 py-4">
                <span className={`text-[0.65rem] font-semibold px-2.5 py-1 rounded-full ${user.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UsersTable;
