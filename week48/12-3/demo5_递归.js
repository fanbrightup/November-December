var assert = require('assert');
function chirp(n){
  return n>1?chirp(n-1)+"-chirp":"chirp";
}
// console.log(chirp(3));

assert(chirp(3)=="chirp-chirp-chirp","Yes");
