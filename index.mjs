import {loadStdlib, ask} from "@reach-sh/stdlib"
import * as backend from "./build/index.main.mjs"
const reach = loadStdlib()

/**
 * Necessary functionalities
 */

const sleep = mSecs => new Promise(resolve => setTimeout(resolve, mSecs))

let [user, contractInstance, contract, proposals, bounties, views] = [
  {},
  null,
  {},
  [],
  [],
  {},
]

const connectAccount = async () => {
  const createAcc = await ask.ask(
    `Would you like to create an account? (Only available on DevNet)`,
    ask.yesno,
  )

  if (createAcc) {
    const account = await reach.newTestAccount(reach.parseCurrency(1000))
    const balAtomic = await reach.balanceOf(account)
    const balance = reach.formatCurrency(balAtomic, 4)
    user = {
      account,
      balance,
    }
  } else {
    const secret = await ask.ask(`What is your account secret?`, x => x)
    const account = await reach.newAccountFromSecret(secret)
    const balAtomic = await reach.balanceOf(account)
    const balance = reach.formatCurrency(balAtomic, 4)
    user = {
      account,
      balance,
    }
  }
  setRole()
}

const setRole = async () => {
  console.clear()
  const isDeployer = await ask.ask("Are you the Admin? [y/n]", ask.yesno)

  if (isDeployer) {
    console.clear()
    console.log("Welcome Admin")
    const shouldDeploy = await ask.ask(
      `Enter 'y' to proceed with deployment, 'n' to abort`,
      ask.yesno,
    )
    if (shouldDeploy) {
      deploy()
    } else {
      setRole()
    }
  } else {
    console.log("Hello Attacher")
    const info = await ask.ask("Please enter the contract information", attach)
  }
}

const attach = async ctcInfoStr => {
  console.clear()
  try {
    console.log("[..] Attaching")
    const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr))
    contractInstance = ctc
    contract = {ctcInfoStr}
    ctc.events.create.monitor(createProposal)
    ctc.events.that.monitor(acknowledge)
    showInfoCenter()
  } catch (error) {
    console.log({error})
  }
}

const connectAndUpvote = async (id, ctcInfoStr) => {
  try {
    const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr))
    const upvotes = await ctc.apis.Voters.upvote()
    await contractInstance.apis.Voters.upvoted(id, parseInt(upvotes))
  } catch (error) {
    console.log({error})
  }
}

const connectAndDownvote = async (id, ctcInfoStr) => {
  try {
    const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr))
    const downvotes = await ctc.apis.Voters.downvote()
    await contractInstance.apis.Voters.downvoted(id, parseInt(downvotes))
  } catch (error) {
    console.log({error})
  }
}

const makeContribution = async (amount, id, ctcInfoStr) => {
  try {
    const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr))
    const contribs = await ctc.apis.Voters.contribute(
      reach.parseCurrency(amount),
    )
    await contractInstance.apis.Voters.contributed(id, parseInt(contribs))
  } catch (error) {
    console.log({error})
  }
}

const connectAndClaimRefund = async ctcInfoStr => {
  try {
    const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr))
    const didRefund = await ctc.apis.Voters.claimRefund()
    if (didRefund) {
      console.log("[+] Refund Success")
    } else {
      console.log(
        "[‼] It seems you don't have funds to claim, did you contribute to this proposal?",
      )
    }
  } catch (error) {
    console.log({error})
  }
}

const DeployerInteract = {
  getProposal: {
    id: 1,
    title: "AroTable",
    link: "https://github.com/Aro1914/AroTable/blob/main/README.md",
    description: `A self-sorting number data structure`,
    owner: user.account,
    deadline,
    isProposal: false,
  },
}

const updateProposals = async ({when, what}) => {
  await contractInstance.apis.Voters.created({
    id: parseInt(what[0]),
    title: noneNull(what[1]),
    link: noneNull(what[2]),
    description: noneNull(what[3]),
    owner: noneNull(what[4]),
    contractInfo: what[5],
  })
}

const createProposal = ({when, what}) => {
  proposals.push({
    id: parseInt(what[0]),
    title: noneNull(what[1]),
    link: noneNull(what[2]),
    description: noneNull(what[3]),
    owner: noneNull(what[4]),
    contract: JSON.stringify(what[5]),
    upvotes: 0,
    downvotes: 0,
    contribs: 0,
    timedOut: false,
    didPass: false,
    isDown: false,
  })
  showProposals()
}

const acknowledge = async ({when, what}) => {
  const ifState = x => x.padEnd(20, "\u0000")
  switch (what[0]) {
    case ifState("upvoted"):
      const upProposals = proposals.map(el => {
        if (Number(el.id) === Number(parseInt(what[1]))) {
          el["upvotes"] = parseInt(what[2])
        }
        return el
      })
      proposals = upProposals
      showProposals()
      break
    case ifState("downvoted"):
      const downProposals = proposals.map(el => {
        if (Number(el.id) === Number(parseInt(what[1]))) {
          el["downvotes"] = parseInt(what[2])
        }
        return el
      })
      proposals = downProposals
      showProposals()
      break
    case ifState("contributed"):
      const conProposals = proposals.map(el => {
        if (Number(el.id) === Number(parseInt(what[1]))) {
          el["contribs"] = reach.formatCurrency(what[2], 4)
        }
        return el
      })
      proposals = conProposals
      showProposals()
      break
    case ifState("timedOut"):
      if (parseInt(what[2])) {
        const nBounty = proposals.filter(
          el => Number(el.id) === Number(parseInt(what[1])),
        )[0]
        bounties.push(nBounty)

        const xXProposals = proposals.filter(
          el => Number(el.id) !== Number(parseInt(what[1])),
        )
        proposals = xXProposals
      } else {
        const fProposals = proposals.map(el => {
          if (Number(el.id) === Number(parseInt(what[1]))) {
            el["timedOut"] = true
            el["didPass"] = false
          }
          return el
        })
        proposals = fProposals
      }
      break
    case ifState("projectDown"):
      const remainingProposals = proposals.filter(el => {
        if (Number(el.id) === Number(parseInt(what[1]))) {
          el["isDown"] = true
        }
        return Number(el.id) !== Number(parseInt(what[1]))
      })
      proposals = remainingProposals
      break
    default:
      break
  }
}

const timeoutProposal = async ({when, what}) => {
  const ifState = x => x.padEnd(20, "\u0000")
  switch (what[0]) {
    case ifState("passed"):
      await contractInstance.apis.Voters.timedOut(parseInt(what[1]), 1)
      break
    case ifState("failed"):
      await contractInstance.apis.Voters.timedOut(parseInt(what[1]), 0)
      break
    case ifState("down"):
      await contractInstance.apis.Voters.projectDown(parseInt(what[1]))
      break
    default:
      break
  }
}

const deploy = async () => {
  console.clear()
  console.log("[..] Deploying")
  const ctc = user.account.contract(backend)
  contractInstance = ctc
  const interact = {
    ...DeployerInteract,
  }
  ctc.p.Deployer(interact)
  const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2)
  ctc.events.create.monitor(createProposal)
  ctc.events.that.monitor(acknowledge)
  contract = {ctcInfoStr}
  console.clear()
  console.log(`[✔] Deployed`)
  console.group(`Here is the contract information`)
  console.log(`${contract.ctcInfoStr}`)
  console.groupEnd(`Here is the contract information`)
  await sleep(3000)
  showInfoCenter()
}

const makeProposal = async proposal => {
  const proposalSetup = async () => {
    const deadline = {ETH: 5, ALGO: 50, CFX: 500}[reach.connector]
    const ctc = user.account.contract(backend)
    ctc.p.Deployer({
      getProposal: {
        ...proposal,
        deadline: deadline,
        isProposal: true,
      },
    })
    ctc.events.log.monitor(timeoutProposal)
    ctc.events.created.monitor(updateProposals)
  }
  console.log(`[..] Creating Proposal`)
  await proposalSetup()
}

/**
 * End of declarations and definitions
 */

/**
 * The build for interactivity
 */

const showInfoCenter = async () => {
  console.clear()

  console.log(`Reach DAO by Team 18`)
  console.log(`${contract.ctcInfoStr ?? ""}`)
  console.group(`Info Center`)
  console.log(`Welcome! To the new Hub!`)
  console.groupEnd(`Info Center`)

  const respondTo = request => {
    switch (request) {
      case 1:
        showProposals()
        break
      case 2:
        showBounties()
        break
      case 3:
        setRole()
        break
      case 0:
        process.exit(0)
        break
      default:
        break
    }
  }

  const userInput = await ask.ask(
    `[+] Console Menu\n
        1. View Proposals\n
        2. View Bounties\n
        3. Back to Select Roles\n
        0. Exit Application`,
    input => {
      try {
        input = Number(input)
      } catch (error) {
        throw Error("Please enter a valid input")
      }
      return input
    },
  )

  respondTo(userInput)
}

const showProposals = async () => {
  console.clear()

  console.log(`Reach DAO by Team 18`)
  console.log(`${contract.ctcInfoStr ?? ""}`)
  console.group(`Proposals`)
  console.log(`Get the chance to bring your ideas to life!`)
  console.groupEnd(`Proposals`)

  const getProposalInfo = async () => {
    let [title, link, description] = ["", "", ""]

    title = await ask.ask(`Enter the  Proposal's Title Max (25)`, value =>
      String(value).slice(0, 25),
    )

    link = await ask.ask(
      `Enter the Link to the Proposal's details (Max 150)`,
      value => String(value).slice(0, 150),
    )

    description = await ask.ask(
      `Enter a breif description of the Proposal (Max 180)`,
      value => String(value).slice(0, 180),
    )

    const satisfied = await ask.ask(
      `Are you satisfied with these details?\n
            Title: ${title}\n
            Link: ${link}\n
            Description: ${description}`,
      ask.yesno,
    )

    if (satisfied) {
      proposal = {
        id:
          proposals.length > 0
            ? proposals.length === 1
              ? proposals[0].id + 1
              : Number(
                  proposals.reduce((a, b) => (a.id > b.id ? a.id : b.id)),
                ) + 1
            : 1,
        title,
        link,
        description,
        owner: user.account.networkAccount.addr,
      }
      await makeProposal(proposal)
    } else {
      await getProposalInfo()
    }
  }

  const selectActiveProposal = async (page = 1) => {
    let [i, section, activeProposals, proposalsOnDisplay] = [
      0,
      page,
      proposals.filter(el => !el.timedOut),
      [],
    ]

    proposalsOnDisplay = activeProposals.filter(
      (el, i) => i + 1 > (section - 1) * 5 && i + 1 <= section * 5,
    )
    const lenOfProposals = proposalsOnDisplay.length
    console.group("Active Proposals")
    if (lenOfProposals) {
      for (i; i < lenOfProposals; i++) {
        const p = proposalsOnDisplay[i]
        console.log(`
                      [${i + 1}]\n
                          ${p.title ?? "Title"}\n
                          ${p.description ?? "Description"}\n
                          ${p.owner ?? user.account.networkAccount.addr}\n
                          ${p.link ?? "Link"}\n
                          Amount Contributed: ${p.contribs ?? 0} ${
          reach.standardUnit
        }\n
                          Up Votes: ${p.upvotes}\n
                          Down Votes: ${p.downvotes}\n`)
      }
    } else {
      console.log("[+] None at the moment.")
    }
    console.groupEnd("Active Proposals")

    await ask.ask(
      `Enter the Proposal's ID of interest\n
                ${
                  section < Math.ceil(activeProposals.length / 5)
                    ? "Enter 99 to view the next list\n"
                    : ""
                }
                ${section > 1 ? "Enter 88 to view the previous list\n" : ""}
                Enter 0 to exit`,
      async input => {
        if (input === 0) {
          showProposals()
        } else if (
          Number(input) <= proposalsOnDisplay.length &&
          Number(input) >= 1
        ) {
          const selectedProposal = proposalsOnDisplay[input - 1]
          const action = ask.ask(
            `What would you like to do?\n
                            1. Contribute\n
                            2. Up vote\n
                            3. Down vote\n
                            0. Cancel`,
            x => {
              try {
                x = Number(x)
              } catch (error) {
                throw Error("Please enter a valid input")
              }
              return x
            },
          )

          switch (action) {
            case 1:
              const amount = ask.ask(
                `Please enter the amount in ${reach.standardUnit}`,
                x => {
                  try {
                    x = Number(x)
                  } catch (error) {
                    throw Error("Please enter a valid number")
                  }
                  return x
                },
              )
              await makeContribution(
                amount,
                selectedProposal.id,
                selectedProposal.contract,
              )
              break
            case 2:
              await connectAndUpvote(
                selectedProposal.id,
                selectedProposal.contract,
              )
              break
            case 3:
              await connectAndDownvote(
                selectedProposal.id,
                selectedProposal.contract,
              )
              break
            case 0:
              selectActiveProposal(section)
              break
            default:
              break
          }
        } else if (input === 88) {
          selectActiveProposal(section - 1)
        } else if (input === 99) {
          selectActiveProposal(section + 1)
        } else {
          throw Error("Please enter a valid input")
        }
      },
    )
  }

  const selectTimedOutProposal = async (page = 1) => {
    let [i, section, timeoutProposals, proposalsOnDisplay] = [
      0,
      page,
      proposals.filter(el => el.timedOut),
      [],
    ]

    proposalsOnDisplay = timeoutProposals.filter(
      (el, i) => i + 1 > (section - 1) * 5 && i + 1 <= section * 5,
    )
    const lenOfProposals = proposalsOnDisplay.length
    console.group("Timed Out Proposals")
    if (lenOfProposals) {
      for (i; i < lenOfProposals; i++) {
        const p = proposalsOnDisplay[i]
        console.log(`
                      [${i + 1}]\n
                          ${p.title ?? "Title"}\n
                          ${p.description ?? "Description"}\n
                          ${p.owner ?? user.account.networkAccount.addr}\n
                          ${p.link ?? "Link"}\n`)
      }
    } else {
      console.log("[+] None at the moment.")
    }
    console.groupEnd("Timed Out Proposals")

    await ask.ask(
      `Enter the Proposal's ID to claim a refund\n
                ${
                  section < Math.ceil(timeoutProposals.length / 5)
                    ? "Enter 99 to view the next list\n"
                    : ""
                }
                ${section > 1 ? "Enter 88 to view the previous list\n" : ""}
                Enter 0 to exit`,
      async input => {
        if (input === 0) {
          showProposals()
        } else if (
          Number(input) <= proposalsOnDisplay.length &&
          Number(input) >= 1
        ) {
          const selectedProposal = proposalsOnDisplay[input - 1]
          await connectAndClaimRefund(selectedProposal.contract)
          showProposals()
        } else if (input === 88) {
          selectActiveProposal(section - 1)
        } else if (input === 99) {
          selectActiveProposal(section + 1)
        } else {
          throw Error("Please enter a valid input")
        }
      },
    )
  }

  const respondTo = request => {
    switch (request) {
      case 1:
        getProposalInfo()
        break
      case 2:
        selectActiveProposal()
        break
      case 3:
        selectTimedOutProposal()
        break
      case 4:
        showBounties()
        break
      case 5:
        showInfoCenter()
        break
      case 6:
        setRole()
        break
      case 0:
        process.exit(0)
        break
      default:
        break
    }
  }

  const userInput = await ask.ask(
    `[+] Console Menu\n
        1. Make a Proposal\n
        2. Select an Active Proposal\n
        3. Select a Timed Out Proposal\n
        4. View Bounties\n
        5. View Info Center\n
        6. Back to Select Roles\n
        0. Exit Application`,
    nput => {
      try {
        input = Number(input)
      } catch (error) {
        throw Error("Please enter a valid input")
      }
      return input
    },
  )

  respondTo(userInput)
}

const showBounties = async () => {
  console.clear()

  console.log(`Reach DAO by Team 18`)
  console.log(`${contract.ctcInfoStr ?? ""}`)
  console.group(`Bounties`)
  console.log(`Lets Hack and claim the Bounty...`)
  console.groupEnd(`Bounties`)

  const selectActiveBounty = async (page = 1) => {
    let [i, section, activeBounties, bountiesOnDisplay] = [
      0,
      page,
      bounties,
      [],
    ]

    bountiesOnDisplay = activeBounties.filter(
      (el, i) => i + 1 > (section - 1) * 5 && i + 1 <= section * 5,
    )
    const lenOfBounties = bountiesOnDisplay.length
    console.group("Active Bounties")
    if (lenOfBounties) {
      for (i; i < lenOfBounties; i++) {
        const p = bountiesOnDisplay[i]
        console.log(`
                        [${i + 1}]\n
                            ${p.title ?? "Title"}\n
                            ${p.description ?? "Description"}\n
                            ${p.owner ?? user.account.networkAccount.addr}\n
                            ${p.link ?? "Link"}\n
                            Grand Prize: 999999 ${reach.standardUnit}\n`)
      }
    } else {
      console.log("[+] None at the moment.")
    }
    console.groupEnd("Active Bounties")

    await ask.ask(
      `Enter the Bounty's ID of interest\n
                  ${
                    section < Math.ceil(activeBounties.length / 5)
                      ? "Enter 99 to view the next list\n"
                      : ""
                  }
                  ${section > 1 ? "Enter 88 to view the previous list\n" : ""}
                  Enter 0 to exit`,
      async input => {
        if (input === 0) {
          showBounties()
        } else if (
          Number(input) <= bountiesOnDisplay.length &&
          Number(input) >= 1
        ) {
          console.log(
            "Thanks for showing your interest in this quest. Stick around a while and our Guild would be fully operational. Until then, get your weapons, armor and, party members ready!!!",
          )
          await sleep(4000)
          showBounties()
        } else if (input === 88) {
          selectActiveBounty(section - 1)
        } else if (input === 99) {
          selectActiveBounty(section + 1)
        } else {
          throw Error("Please enter a valid input")
        }
      },
    )
  }

  const respondTo = request => {
    switch (request) {
      case 1:
        selectActiveBounty()
        break
      case 2:
        showInfoCenter()
        break
      case 3:
        showProposals()
        break
      case 4:
        setRole()
        break
      case 0:
        process.exit(0)
        break
      default:
        break
    }
  }

  const userInput = await ask.ask(
    `[+] Console Menu\n
          1. Select an Active Bounty\n
          2. View Info Center\n
          3. View Proposals\n
          4. Back to Select Roles\n
          0. Exit Application`,
    input => {
      try {
        input = Number(input)
      } catch (error) {
        throw Error("Please enter a valid input")
      }
      return input
    },
  )

  respondTo(userInput)
}

/**
 * End of build
 */

process.exit(0)
