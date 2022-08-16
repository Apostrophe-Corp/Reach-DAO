'reach 0.1';

const [isOutcome, NOT_PASSED, PASSED] = makeEnum(2)


const checkStatus = (numMembers, upVotes, downVotes) => {
 const result = downVotes > numMembers * 0.4 ? NOT_PASSED : 
                upVotes > downVotes && upVotes >= numMembers * 0.4 ? PASSED :
                upVotes >= numMembers * 0.6 ? PASSED :
                NOT_PASSED;
   return result;
};

assert(checkStatus(100, 30, 45) == NOT_PASSED);
assert(checkStatus(100, 0, 0) == NOT_PASSED);
assert(checkStatus(100, 35, 30) == NOT_PASSED);
assert(checkStatus(100, 60, 40) == PASSED);
assret(checkStatus(100, 40, 30) == PASSED);

forall(UInt, numMembers => 
 forall(UInt, upVotes => 
  forall(UInt, downVotes => 
   assert(isOutcome(checkStatus(numMembers, upVotes, downVotes))))));

const common = {
 seeOutcome: Fun([UInt, UInt], Null),
 informTimeout: Fun([], Null),
 numMembers: UInt,
}

export const main = Reach.App(() => {
 const Deployer = Participant('Deployer', {
  ...common,
  getProposal: Object({
   title: Bytes(48),
   link: Bytes(128),
   description: Bytes(200),
   owner: Address,
   contract: Contract,
   deadline: UInt,
  }),
  numMembers: UInt,
  // interact interface here
 });
 
 const Voters = API('Voters', {
  ...common,
  upvote: Fun([], Null),
  downvote: Fun([], Null),
  contribute: Fun([UInt], Null),
  // interact interface 
 });
 init();

 Deployer.only(() => {
   const proposal = declassify(interact.getProposal);
   const numMembers = declassify(interact.numMembers);
 });
 Deployer.publish(proposal, numMembers);

 const contributors = new Map(UInt, Object({
   address: Address,
   amt: UInt,
 }));

 const end = lastConsensusTime + proposal.deadline;

 const [
   upvote,
   downvote,
   count,
   amtTotal
 ] = parallelReduce([ 0, 0, 0, 0])
   .invariant(balance() == amtTotal)
   .while(lastConsensusTime() <= end)
   .api(Voters.upvote, (notify) => {
      notify(Null);
      return [upvote + 1, downvote, count, amtTotal]
   })
   .api(Voters.downvote, (notify) => {
      notify(Null);
      return [upvote, downvote + 1, count, amtTotal]
   })
   .api_(Voters.contribute, (amt) => {
      return [amt, (notify) => {
         notify(Null);
         contributors[count] = {address: this, amt: amt}
         return [upvote, downvote, count + 1, amtTotal + amt]
      }]
   })
   .timeout(absoluteTime(end), () => {
   Creator.publish()
   if(checkStatus(numMembers,upvote,downvote) == PASSED){
      transfer(balance()).to(proposal.owner);
      interact.projectPassed();
   } else {
      interact.projectNotPassed();
      let [newCount, currentBalance] = [count, balance()];
      invariant(balance() == currentBalance);
      while(newCount > 0) {
         commit()
         const {address, amtPaid} = contributors[newCount];
         Deployer.publish();
         transfer(amtPaid).to(address);
         [newCount, currentBalance] = [newCount - 1, balance()]
         continue;
      }
   }
   }); 
})

