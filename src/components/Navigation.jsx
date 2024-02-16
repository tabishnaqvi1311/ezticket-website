import { ethers } from 'ethers'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const metamaskExtension = "https://chromewebstore.google.com/detail/nkbihfbeogaeaoehlefnkodbefgpgknn"
    if (!window.ethereum) {
      window.open(metamaskExtension, "_blank");
      return
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }

  return (
    <nav className='flex justify-around items-center p-5 border-b border-b-gray-800'>
      <div className='flex items-center gap-5 text-slate-200'>
        <img src={logo} width={50} />
        <h1 className='md:text-3xl text-xl font-bold'>EZ:Ticket</h1>
        {/* <input className='nav__search' type="text" placeholder='Find millions of experiences' /> */}
        <Link to={"/know-more"} className='hover:text-indigo-500 transition-all duration-200'>Know More</Link>
        {/* <Link to={"/know-more"}>About Us</Link> */}
      </div>
      <div className=''>


        {account ? (
          <button
            type="button"
            className='bg-indigo-500 rounded px-3 py-2 hover:rounded-xl text-slate-200 transition-all duration-150'
          >
            {account.slice(0, 6) + '...' + account.slice(38, 42)}
          </button>
        ) : (
          <button
            type="button"
            className='bg-indigo-500 rounded px-3 py-2 hover:rounded-xl text-slate-200 transition-all duration-150'
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