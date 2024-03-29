import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Navigation from './components/Navigation'
import Sort from './components/Sort'
import Card from './components/Card'
import SeatChart from './components/SeatChart'
import EZTicket from "./abis/EZTicket.json";
import config from './config.json'
import Hero from './components/Hero'
import Explain from './components/Explain'
import EventTypes from './components/EventTypes'
import Footer from './components/Footer'
import Chat from './components/Chat'
import HowItWorks from './components/HowItWorks'
import AppPrompt from './components/AppPrompt'

function App() {
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)

  const [ezTicket, setezTicket] = useState(null)
  const [occasions, setOccasions] = useState([])

  const [occasion, setOccasion] = useState({})
  const [toggle, setToggle] = useState(false)

  const [error, setError] = useState("");

  const loadBlockchainData = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      setProvider(provider)

      const network = await provider.getNetwork()
      const ezTicket = new ethers.Contract(config[network.chainId].EZTicket.address, EZTicket, provider)
      setezTicket(ezTicket)

      const totalOccasions = await ezTicket.totalOccasions()
      const occasions = []

      for (var i = 1; i <= totalOccasions; i++) {
        const occasion = await ezTicket.getOccasion(i)
        occasions.push(occasion)
      }

      setOccasions(occasions)

      window.ethereum.on('accountsChanged', async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account)
      })
    } catch (error) {
      console.log(error.code);
      setError(() => error.code);
    }
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <div className='bg-gray-950 '>
      <div className='main'>
        <div className='gradient' />
      </div>
      <header>
        <Navigation account={account} setAccount={setAccount} />

        <h2 className="header__title"><strong>Event</strong> Tickets</h2>
      </header>

      {/* <Sort /> */}
      <Hero />
      <EventTypes />
      <HowItWorks/>
      

      <div id='events' className='flex flex-col justify-center items-center'>
        <h1 className='md:pt-20 md:px-20 p-10 font-bold md:text-6xl text-5xl text-slate-200 text-center'>Discover Events</h1>
        {
          error === "INVALID_ARGUMENT" ?
            <div className='text-slate-200 bg-red-900 rounded p-5'>
              Seems you are not connected to your wallet. Please connect your Metamask Wallet to attend events
            </div>
            :
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:p-20 p-10'>
              {occasions.map((occasion, index) => (
                <Card
                  occasion={occasion}
                  id={index + 1}
                  ezTicket={ezTicket}
                  provider={provider}
                  account={account}
                  toggle={toggle}
                  setToggle={setToggle}
                  setOccasion={setOccasion}
                  key={index}
                />
              ))}
            </div>
        }
      </div>
      {toggle && (
        <SeatChart
          occasion={occasion}
          ezTicket={ezTicket}
          provider={provider}
          setToggle={setToggle}
        />
      )}

      <Explain />

      <Chat />
      <Footer />
    </div>
  );
}

export default App;