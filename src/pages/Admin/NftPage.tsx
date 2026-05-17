import WalletPanel from '../../components/WalletPanel'

const NftPage = () => (
  <div
    className='bg-[#0f0f0f] rounded-2xl p-6 max-w-md'
    style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}
  >
    <p className='text-green-400 text-xs tracking-widest uppercase mb-2'>Web3</p>
    <h3 className="font-['Bebas_Neue'] text-white text-2xl tracking-wide mb-4">
      NFT Ticket Panel
    </h3>
    <WalletPanel />
  </div>
)

export default NftPage
