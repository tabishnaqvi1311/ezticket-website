import React, { useEffect, useState } from 'react'

const Hero = () => {

    const [animationStep, setAnimationStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationStep(prevStep => (prevStep + 1) % 3);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center gap-10 py-20 '>
            <h1 className='text-slate-200 font-bold text-6xl text-center'>
                <span className={animationStep === 1 ? 'bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300' : ''}>Easy. </span>
                <span className={animationStep === 2 ? 'bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent transition-all duration-300' : ''}>Fast. </span>
                <span className={animationStep === 0 ? 'bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent transition-all duration-300' : ''}>Secure. </span>
            </h1>
            <p className='text-md text-slate-200 font-medium text-center md:p-0 px-5'>A event ticketing system built for colleges, the right way</p>
            <a href='#events' className={`px-4 py-3 text-white font-medium hover:rounded-xl ${
                animationStep === 1 
                ? "bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300" 
                : animationStep === 2 
                ? "bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300" 
                : "bg-gradient-to-r from-green-500 to-yellow-500 transition-all duration-300"}`}>Find Your Next Event</a>
        </div>
    )
}

export default Hero
