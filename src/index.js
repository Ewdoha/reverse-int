module.exports = function reverse (n) {
  let toStr = n.toString();
  let toSplit = toStr.split('');  
  let toRevers = toSplit.reverse();
  let result = 0; 
  for (let i = 0; i < toRevers.length; i++) {
   result += toRevers[i];
  }
   return parseInt(result.slice(1,10));
}
