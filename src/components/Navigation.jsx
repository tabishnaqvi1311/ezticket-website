import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }

  return (
    <nav className='flex justify-around items-center p-5 border-b border-b-gray-800'>
      <div className='flex items-center gap-5 text-slate-200'>
        <h1 className='text-3xl font-bold'>EZ:Ticket</h1>

        {/* <input className='nav__search' type="text" placeholder='Find millions of experiences' /> */}

        <ul className=' items-center gap-5 md:block hidden'>
          Events
        </ul>
      </div>
      <div className=''>

        {account ? (
          <button
            type="button"
            className='bg-purple-500 rounded-xl px-3 py-2 hover:bg-purple-800 text-slate-200 transition-all duration-150'
          >
            {account.slice(0, 6) + '...' + account.slice(38, 42)}
          </button>
        ) : (
          <button
            type="button"
            className='bg-purple-500 rounded-xl px-3 py-2 hover:bg-purple-800 text-slate-200 transition-all duration-150'
            onClick={connectHandler}
          >
            Connect
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;