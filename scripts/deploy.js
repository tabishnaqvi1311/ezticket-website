const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "EZTicket"
  const SYMBOL = "EZ"

  // Deploy contract
  const EZTicket = await ethers.getContractFactory("EZTicket")
  const ezTicket = await EZTicket.deploy(NAME, SYMBOL)
  await ezTicket.deployed()

  console.log(`Deployed EZTicket Contract at: ${ezTicket.address}\n`)

  // List 6 events
  const occasions = [
    {
      name: "Hackathon",
      cost: tokens(3),
      tickets: 0,
      date: "February 9",
      time: "1:00PM IST",
      location: "Manav Rachna University, Faridabad"
    },
    {
      name: "Invictus",
      cost: tokens(1),
      tickets: 125,
      date: "February 11",
      time: "10:00AM IST",
      location: "Delhi Technological University"
    },
    {
      name: "Leetcode Contest",
      cost: tokens(0.25),
      tickets: 200,
      date: "February 15",
      time: "9:00AM IST",
      location: "Online"
    },
    {
      name: "LAN Gaming Tournament",
      cost: tokens(5),
      tickets: 0,
      date: "January 29",
      time: "2:30PM IST",
      location: "B Block Seminar Hall, Manav Rachna University"
    },
    {
      name: "Prototype Developement",
      cost: tokens(1.5),
      tickets: 125,
      date: "March 11",
      time: "11:00AM IST",
      location: "Hybrid"
    }
  ]

  for (var i = 0; i < 5; i++) {
    const transaction = await ezTicket.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});