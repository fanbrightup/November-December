console.log(

  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
)

function largestOfFour(arr) {
    // for(let i = 0;i<arr.length;i++){
    //   arr[i].sort((a,b)=>{ return a - b});
    //   arr[i] = arr[i][arr[i].length-1];
    // }
    // return arr;

    return  arr.map((val)=>{ return val.sort((a,b)=>{ return a - b})[val.length-1]});
}
