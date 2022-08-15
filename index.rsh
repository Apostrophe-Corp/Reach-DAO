// TODO implement the contract backend
'reach 0.1';
/**
 * A utility function to retrieve the actual data stored in a map entry
 * @params m A value of type Maybe, usually returned when you try to retrieve data from a Map, this is because the value being referenced may not have been stored yet
 * @returns The indented value if it does exist in the Map, if not returns null
 */
// eslint-disable-next-line no-undef
const getDataFromMap = m => fromMaybe(m, (() => null), ((x) => x));
/**
 * common Interact{
 * ...hasRandom,
 * }
 *
 * Participants
 * Deployer
 * Interact {
 * ...common,
 * getProposal: Fun([Object({
 * id
 * title
 * description
 * link
 * contractInfoStr
 * address
 * })])
 * deadline: UInt,
 * }
 *
 * Attacher
 * Interact {
 * ...common,
 * }
 */
/**
 * APIs
 * Proposer
 * Voter
 * Interact {
 * upvote: Fun([],Null),
 * downvote: Fun([],Null),
 * }
 */


/**
 * const [upvotes,downvotes]= 
 * parallelReduce([0,0])
 * .timeout
 * if 
 * 
 * 
 * 
 * 
 */


// const contributors = new Map(UInt, Object({
//     address: Address,
//     amt: UInt
// }));

// // In the parallel reduce for the Voter contribute call
// contributors[count] = { address: this, amt: amt };

// // -----------contributors Map---------
// 1: { address: "someAddress", amt: 99 }
// 2: { address: "someAddress", amt: 99 }
// 3: { address: "someAddress", amt: 99 }
// 3: { address: "someAddress", amt: 99 }

// // In the while loop, we retrieve the values using
// const { address, amt } = contributors[newCount];

// // Then we proceed with the transfers
// transfer(amt).to(address)

