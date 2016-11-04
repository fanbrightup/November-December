function findLongestWord(str) {
    var arr = str.split(' ').sort((a,b)=>{
          return a.length - b.length;
          });
    // console.log(arr[arr.length-1] +'最长 为 '+ arr[arr.length-1].length)
    return arr[arr.length-1]
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
