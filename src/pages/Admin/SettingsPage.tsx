const SettingsPage = () => (
  <div
    className='bg-white rounded-2xl p-6 max-w-lg'
    style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
  >
    <h3 className='text-gray-900 font-semibold mb-5'>Platform Settings</h3>
    <div className='flex flex-col gap-4'>
      {['Platform Name', 'Contact Email', 'Support Phone', 'Wallet Address'].map((f) => (
        <div key={f} className='flex flex-col gap-1.5'>
          <label className='text-gray-400 text-[0.65rem] tracking-[0.12em] uppercase'>
            {f}
          </label>
          <input
            className='bg-gray-50 border border-gray-100 text-gray-700 text-sm rounded-xl px-4 py-3 outline-none focus:border-green-400 transition-colors'
            placeholder={f}
          />
        </div>
      ))}
      <button className='w-fit bg-green-400 hover:bg-green-300 text-black font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5'>
        Save Changes
      </button>
    </div>
  </div>
)

export default SettingsPage
