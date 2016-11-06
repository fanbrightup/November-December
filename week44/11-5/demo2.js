var err = {
	message:'me',
	name:'err'
};
function f() {
  try {
    console.log(0);
    throw err;
  } catch(e) {
    console.log(1);
    console.log(e.name);
    console.log(e.message);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now  
  console.log(5); // not reachable
}
console.log(f()); // console 0, 1, 3; returns false
