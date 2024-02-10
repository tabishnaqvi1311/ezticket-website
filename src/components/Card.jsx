import { ethers } from 'ethers'

const Card = ({ occasion, toggle, setToggle, setOccasion }) => {
  const togglePop = () => {
    setOccasion(occasion)
    toggle ? setToggle(false) : setToggle(true)
  }

  return (
    <div className='text-slate-200 card'>
      <div className='card2 p-5 flex flex-col items-center justify-center '>
        <h3 className='font-semibold text-xl text-blue-500 text-center mb-2'>{occasion.name}</h3>
        <p className='text-sm text-center mb-2'>{occasion.location.slice(0, 20)}</p>
        <div className='flex flex-col mb-2'>
          <span>{occasion.date}</span>
          <span>{occasion.time}</span>
        </div>
        {occasion.tickets.toString() === "0" ? (
          <button
            type="button"
            className='bg-purple-800 text-white py-2 px-4 rounded-md cursor-not-allowed'
            disabled
          >
            Sold Out
          </button>
        ) : (
          <button
            type="button"
            className='bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500'
            onClick={() => togglePop()}
          >
            View Seats
          </button>
        )}
        <p className='text-xl mt-auto bg-white text-black p-2'>
          <strong>
            {ethers.utils.formatUnits(occasion.cost.toString(), 'ether')}
          </strong> ETH
        </p>
      </div>

    </div >
  );
}

export default Card;