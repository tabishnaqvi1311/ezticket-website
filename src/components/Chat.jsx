import React, { useEffect, useRef, useState } from 'react'
import { IoChatbox } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion"

const Chat = () => {

    const initialMessages = [
        {
            from: "bot",
            message: "Hey, how can I help you?"
        }
    ]

    const [toggle, setToggle] = useState(false);

    const [messages, setMessages] = useState(initialMessages);
    const [message, setMessage] = useState("");
    const messageBoxRef = useRef(null);

    const response = (m) => {
        if (m.toLowerCase().includes("metamask")) {
            setMessages((prev) => [...prev, {
                from: "bot",
                message: "Metamask is a cryptocurrency wallet for Ethereum and ERC-20 tokens. To connect your wallet: Install MetaMask, create or import a wallet, then click 'Connect'."
            }])
        }
        else if (m.toLowerCase().includes("event")) {
            setMessages((prev) => [...prev, {
                from: "bot",
                message: "Use our platform to events such as hackathons, fests, concerts and much more! Head over to the events page and check seat availability"
            }])
        }
        else if (m.toLowerCase().includes("ticket")) {
            setMessages((prev) => [...prev, {
                from: "bot",
                message: "Use our platform to events such as hackathons, fests, concerts and much more! Head over to the events page and check seat availability"
            }])
        }
        else if (m.toLowerCase().includes("contact")) {
            setMessage((prev) => [...prev], {
                from: "bot",
                message: "You can purchase tickets for upcoming events on our platform. Simply navigate to the events page, select the event you want to attend, and follow the instructions to purchase tickets."
            })
        }
        else {
            setMessages((prev) => [...prev, {
                from: "bot",
                message: "If you have any questions or need assistance, you can contact our support team at tabish.naqvi2003@gmail.com or through our contact form on the website."
            }])
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages((prev) => [...prev, {
            from: "user",
            message: message
        }])
        response(message);
        messageBoxRef.current?.scrollIntoView({ behavior: "smooth" });
        setMessage("");

    }

    useEffect(() => {
        return () => {
            setMessages(() => initialMessages);
        }
    }, [])

    const modalVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <AnimatePresence>
            <div className='bg-purple-500 hover:bg-purple-600 bottom-7 p-5 inline-block rounded-full cursor-pointer fixed right-7' onClick={() => setToggle(prev => !prev)}>
                <IoChatbox size={27} color='white' />
            </div>
            
           {toggle && <motion.div
                className={
                    `bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-4 fixed bottom-20 right-7  w-56`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalVariants}>
                {/* Chatbot content */}
                <div className=" h-60 overflow-y-auto flex flex-col gap-2">
                    {
                        messages.map((m, i) => (
                            <div className={`${m.from === "bot" ? "bg-purple-500 text-slate-200" : "bg-slate-200 text-gray-900 "} p-2 text-sm rounded-lg h-auto break-words`} key={i}>
                                {m.message}
                            </div>
                        ))
                    }
                    <div ref={messageBoxRef} />
                </div>
                {/* Chat input */}
                <form onSubmit={handleSubmit} className='flex justify-between item-center gap-2'>
                    <input
                        type="text"
                        placeholder="Ask me something"
                        className="border border-gray-200 rounded-xl p-2 mt-2 w-full focus:outline-none text-sm bg-slate-200"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </form>
            </motion.div>}
        </AnimatePresence>
    )
}

export default Chat
