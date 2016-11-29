var empty = {title:"tt"};
for(let prop in empty.prototype){
  console.log(prop);
}
