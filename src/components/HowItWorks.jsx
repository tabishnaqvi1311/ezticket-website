// import metamask  from "../assets/metamask.png";
import { BsTicketDetailedFill } from "react-icons/bs";
import { RiNftFill } from "react-icons/ri";
import { IoWallet } from "react-icons/io5";

const HowItWorks = () => {

    const content = [
        {
            icon: <IoWallet size={100} />,
            head: "Connect to a MetaMask Wallet",
            para: "Link your MetaMask wallet to access the DApp securely.",
        },
        {
            icon: <BsTicketDetailedFill size={100} />,
            head: "Book a seat",
            para: "Browse and select events, purchasing NFT tickets directly from your wallet.",
        },
        {
            icon: <RiNftFill size={100} />,
            head: "Receive NFT Ticket",
            para: "Your ticket is instantly minted as an NFT, deducted from your wallet, and ready for event entry.",
        }
    ]


    return (
        <div className="text-slate-200 p-6">
            <h1 className='heading'>How It Works</h1>
            <div className="flex md:flex-row flex-col justify-center items-center">
                {
                    content.map((c, i) => (
                        <div className="flex flex-col justify-center items-center text-center md:w-1/3 p-5">
                            <span className="mb-3">{c.icon}</span>
                            <h1 className={`font-semibold text-2xl bg-clip-text text-transparent ${i === 0 ? "bg-gradient-to-r from-purple-500 to-blue-500" : i === 1 ? "bg-gradient-to-r from-red-500 to-orange-500" : "bg-gradient-to-r from-green-500 to-yellow-500"}`}>{c.head}</h1>
                            <p className="w-3/4">{c.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HowItWorks
