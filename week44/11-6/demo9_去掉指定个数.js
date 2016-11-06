console.log(

slasher([1, 2, 3], 2)
)



function slasher(arr, howMany) {
      // if(arr.length < howMany){
      //   return [];
      // }else{
      //   return arr.slice(howMany)
      // }
      // return arr.slice(howMany)
      return arr.splice(howMany);
}
