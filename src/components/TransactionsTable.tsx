import { Transaction } from '../../shared/types';

const statusConfig: Record<string, { color: string; bg: string }> = {
  completed: { color: '#16a34a', bg: '#f0fdf4' },
  pending:   { color: '#d97706', bg: '#fffbeb' },
  refunded:  { color: '#dc2626', bg: '#fef2f2' },
};

const TransactionsTable = ({ transactions }: { transactions: Transaction[] }) => (
  <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)', fontFamily: "'DM Sans', sans-serif" }}>
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
      <h3 className="text-gray-900 font-semibold text-sm">Recent Transactions</h3>
      <button className="text-green-500 text-xs hover:text-green-600 transition-colors font-medium">View all</button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-50">
            {['ID', 'User', 'Event', 'Tickets', 'Amount', 'Date', 'Status'].map((h) => (
              <th key={h} className="text-left px-6 py-3 text-gray-400 text-[0.65rem] tracking-[0.12em] uppercase font-medium whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, i) => {
            const cfg = statusConfig[txn.status];
            return (
              <tr key={txn.id} className={`hover:bg-gray-50/50 transition-colors ${i < transactions.length - 1 ? 'border-b border-gray-50' : ''}`}>
                <td className="px-6 py-4 text-gray-400 text-xs font-mono">{txn.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: txn.userColor }}>
                      {txn.userInitials}
                    </div>
                    <span className="text-gray-700 text-sm">{txn.user}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs max-w-[140px] truncate">{txn.event}</td>
                <td className="px-6 py-4 text-gray-500 text-sm">{txn.tickets}</td>
                <td className="px-6 py-4 text-gray-900 text-sm font-semibold">${txn.amount}</td>
                <td className="px-6 py-4 text-gray-400 text-xs whitespace-nowrap">{txn.date}</td>
                <td className="px-6 py-4">
                  <span className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-full capitalize" style={{ color: cfg.color, background: cfg.bg }}>
                    {txn.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default TransactionsTable;
