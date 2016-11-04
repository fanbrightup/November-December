let repeatStringNumTimes = (str, num) => {num > 0 && num != Infinity ? str += repeatStringNumTimes(str, num-1)+'__'+num : "";
  console.log(str )};

// console.log(
  repeatStringNumTimes("A", 2)

// )
