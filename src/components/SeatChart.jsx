import { useEffect, useState } from 'react'
import Seat from './Seat'
import close from '../assets/close.svg'

const SeatChart = ({ occasion, ezTicket, provider, setToggle }) => {
  const [seatsTaken, setSeatsTaken] = useState(false)
  const [hasSold, setHasSold] = useState(false)

  const getSeatsTaken = async () => {
    const seatsTaken = await ezTicket.getSeatsTaken(occasion.id)
    setSeatsTaken(seatsTaken)
  }

  const buyHandler = async (_seat) => {
    setHasSold(false)

    const signer = await provider.getSigner()
    const transaction = await ezTicket.connect(signer).mint(occasion.id, _seat, { value: occasion.cost })
    await transaction.wait()

    setHasSold(true)
  }

  useEffect(() => {
    getSeatsTaken()
  }, [hasSold])

  return (
    <div className="h-[100vh] w-[100vw] fixed top-1/2 text-slate-200 bg-gray-950">
      <div className="grid gap-5 grid-cols-25 border border-slate-200 rounded w-[90%] max-w-[1200px] h-[85%] mx-auto p-5 fixed top-20 right-0 left-0  z-2 overflow-x-scroll bg-gray-950">
        <h1 className='col-span-27 row-span-1 font-light'>{occasion.name} Seating Map</h1>

        <button onClick={() => setToggle(false)} className="col-start-27 col-span-1 row-start-1 row-span-1 w-9 h-9 bg-opacity-20 bg-white border border-gray-300 rounded cursor-pointer transition-all duration-250 ease-linear">
          <img src={close} alt="Close" width={25} height={25}/>
        </button>

        <div className="flex justify-center items-center col-span-27 row-start-2 h-40 border-b-3 border-slate-200 rounded-b-lg">
          <strong>STAGE</strong>
        </div>

        {seatsTaken && Array(25).fill(1).map((e, i) =>
          <Seat
            i={i}
            step={1}
            columnStart={0}
            maxColumns={5}
            rowStart={2}
            maxRows={5}
            seatsTaken={seatsTaken}
            buyHandler={buyHandler}
            key={i}
          />
        )}

        <div className="flex justify-center items-center min-w-7 mx-1 border col-start-6 col-span-1 row-start-3 row-span-10">
          <strong>WALKWAY</strong>
        </div>

        {seatsTaken && Array(Number(occasion.maxTickets) - 50).fill(1).map((e, i) =>
          <Seat
            i={i}
            step={26}
            columnStart={6}
            maxColumns={15}
            rowStart={2}
            maxRows={15}
            seatsTaken={seatsTaken}
            buyHandler={buyHandler}
            key={i}
          />
        )}

        <div className="flex justify-center items-center min-w-7 mx-1 border col-start-22 col-span-1 row-start-3 row-span-10">
          <strong>WALKWAY</strong>
        </div>

        {seatsTaken && Array(25).fill(1).map((e, i) =>
          <Seat
            i={i}
            step={(Number(occasion.maxTickets) - 24)}
            columnStart={22}
            maxColumns={5}
            rowStart={2}
            maxRows={5}
            seatsTaken={seatsTaken}
            buyHandler={buyHandler}
            key={i}
          />
        )}
      </div>
    </div >
  );
}

export default SeatChart;