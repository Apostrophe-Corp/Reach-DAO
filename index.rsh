// TODO implement the contract backend
'reach 0.1';
/**
 * A utility function to retrieve the actual data stored in a map entry
 * @params m A value of type Maybe, usually returned when you try to retrieve data from a Map, this is because the value being referenced may not have been stored yet
 * @returns The indented value if it does exist in the Map, if not returns null
 */
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
 * Interact {
 * stake: Fun([UInt], Null),
 * }
 *
 * Contributor
 * Interact {
 * contribute: Fun([UInt], Null),
 * }
 */