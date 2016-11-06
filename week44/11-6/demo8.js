console.log(

chunkArrayInGroups2(["a", "b", "c", "d","e"], 4)
)


function chunkArrayInGroups(arr, size) {
    var data = [];
    var v = [];
    for(let i = 0;i<arr.length;i){
      while(v.length <size && i<arr.length){
        v.push(arr[i++]);
      }
      data.push(v);
        v = []
    }
    return data;
}

//方法二
function chunkArrayInGroups2(arr, size) {
    for(var i=0 , myarr =[];i<arr.length;){
      myarr.push(arr.slice(i,i+=size));
    }
    return myarr;
}
