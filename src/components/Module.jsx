import React, { useState } from 'react'
import { SiBlockchaindotcom } from "react-icons/si";
import { RiNftFill } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";

const Module = () => {

    const [prompt, setPrompt] = useState(null);
    const [loading, setLoading] = useState(false);

    const starters = [
        {
            title: "Blockchain",
            question: "What is Blockhain?",
            icon: <SiBlockchaindotcom />,
        },
        {
            title: "NFT",
            question: "What are NFTs?",
            icon: <RiNftFill />,
        },
        {
            title: "Etheruem",
            question: "What is Ethereum?",
            icon: <FaEthereum />,
        }
    ]

    const handleSubmit = async (p) => {
        setLoading(true)
        const response = await fetch(`https://layer-production.up.railway.app/api/openai/getPrompt`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                username: "admin",
                passkey: "r92iXCtZmIbILDby7tJkcn3SVSg",
                

            },
            body: JSON.stringify({
                prompt: p
            })
        });
        const json = await response.json();
        setPrompt(() => json.ans);
        setLoading(false);
    }

    if (loading) return (
        <div className='bg-gray-950'>
            <div className='main'>
                <div className='gradient' />
            </div>
            <div className='h-screen flex flex-col justify-center items-center gap-7'>
                <div className='animate-pulse h-3 w-[70%] bg-slate-400 rounded-xl'/>
                <div className='animate-pulse h-3 w-[80%] bg-slate-400 rounded-xl'/>
                <div className='animate-pulse h-3 w-[80%] bg-slate-400 rounded-xl'/>
                <div className='animate-pulse h-3 w-[80%] bg-slate-400 rounded-xl'/>
                <div className='animate-pulse h-3 w-[80%] bg-slate-400 rounded-xl'/>
                <div className='animate-pulse h-3 w-[80%] bg-slate-400 rounded-xl'/>
                <div className='animate-pulse h-3 w-[50%] bg-slate-400 rounded-xl'/>
            </div>

        </div>
    )

    return (
        <div className='bg-gray-950'>
            <div className='main'>
                <div className='gradient' />
            </div>
            {
                !prompt ?
                    (<div className='flex flex-col justify-center items-center h-screen'>
                        <h1 className='heading'>Know More About This New-Age Tech!</h1>
                        <div className='flex '>
                            {
                                starters.map((s) => (
                                    <div className='m-10 p-10 bg-slate-200 text-indigo-500 font-medium text-2xl rounded-xl text-center flex flex-col justify-center items-center hover:bg-slate-300 cursor-pointer transition-all duration-200 gap-2' onClick={() => handleSubmit(s.question)}>
                                        <span>{s.icon}</span>
                                        <span>{s.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <span className='text-indigo-300'>Click on any of the above to learn more!</span>
                    </div>)
                    :
                    (
                        <div className='flex flex-col justify-center items-center h-screen'>
                            <p className='text-slate-200 w-[80%] text-lg font-medium'>{prompt}</p>
                            <div></div>
                        </div>
                    )
            }
        </div>
    )
}

export default Module
