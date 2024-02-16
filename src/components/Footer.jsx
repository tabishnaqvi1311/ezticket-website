import React from 'react'
import QRCode from "../assets/qrcodeApp.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className='bg-gray-900 p-20 flex flex-col gap-10'>
      <div className='flex items-center gap-5 text-slate-200 md:justify-normal justify-center'>
        <img src={logo} width={50} />
        <h1 className='text-3xl font-bold'>EZ:Ticket</h1>
        {/* <input className='nav__search' type="text" placeholder='Find millions of experiences' /> */}
      </div>
      <div className='flex md:flex-row flex-col-reverse justify-between md:gap-0 gap-10'>
        <div className='flex flex-col gap-5 justify-center items-center text-slate-400 text-center'>
          Designed and Developed by Team EndPoint @2023
          <div className='flex gap-5'>
            <span>Privacy Policy</span>
            <span>Terms Of Service</span>
            <span>About NFTs</span>
          </div>
        </div>
        <div className='flex md:flex-row flex-col justify-center items-center gap-10'>
          <h1 className='text-4xl font-semibold text-slate-200 text-center'>Download the <br /> App</h1>
          <img src={QRCode} alt={"download"} width={200} />
        </div>
      </div>
    </div>
  )
}

export default Footer
