
console.log(confirmEnding("Bastian-", "an-"))
function confirmEnding(str, target) {
  // return  str.substr(str.length-target.length) == target;
  return str.endsWith(target);
}
