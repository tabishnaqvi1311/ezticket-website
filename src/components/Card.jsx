import { ethers } from 'ethers'
import { Tooltip } from 'react-tooltip'

const Card = ({ occasion, toggle, setToggle, setOccasion }) => {
  const togglePop = () => {
    setOccasion(occasion)
    toggle ? setToggle(false) : setToggle(true)
  }

  return (
    <div className='text-slate-200 card' data-tooltip-id='venue' data-tooltip-content={occasion.location}>
      <div className='card2 p-5 flex flex-col items-center justify-center '>
        <h3 className='font-semibold text-xl text-blue-500 text-center mb-2'>{occasion.name}</h3>
        {/* <p className='text-sm text-center mb-2'>{occasion.location.slice(0, 20)}</p> */}
        <div className='flex flex-col mb-2 text-slate-400'>
          <span>{occasion.date}</span>
          <span>{occasion.time}</span>
        </div>
        <p className='text-xl bg-white text-black p-2 rounded flex '>
          <strong>
            {ethers.utils.formatUnits(occasion.cost.toString(), 'ether')}
          </strong> 
          <span>ETH</span>
        </p>
        <div className='mt-auto'>
          {occasion.tickets.toString() === "0" ? (
            <button
              type="button"
              className='bg-orange-700 text-white py-2 px-4 rounded-md cursor-not-allowed'
              disabled
            >
              Sold Out
            </button>
          ) : (
            <button
              type="button"
              className='bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600'
              onClick={() => togglePop()}
            >
              View Seats
            </button>
          )}
        </div>
      </div>
      <Tooltip id='venue' />
    </div>
  );
}

export default Card;