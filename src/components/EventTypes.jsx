import React from 'react'
import { BiCodeAlt, BiParty } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";

const EventTypes = () => {

    const ICONSIZE = 20

    const eventTypes = [
        {
            title: "Fests",
            icon: <BiParty size={ICONSIZE}/>
        },
        {
            title: "Tech",
            icon: <BiCodeAlt size={ICONSIZE}/>
        },
        {
            title: "More",
            icon: <MdMoreHoriz size={ICONSIZE}/>
        },

    ]

    return (
        <div className='text-slate-200 flex items-center justify-center md:gap-10 gap-6 mb-20'>
            {
                eventTypes.map((item, index) => (
                    <div key={index} className='rounded-full flex flex-col items-center border border-gray-800 md:p-7 p-5 hover:outline-orange-700 hover:outline'>
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default EventTypes
