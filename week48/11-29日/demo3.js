var book = {
  title:"bookName",
  say:function(){
    console.log("h");
  },
  toString:function(){
    return this.title;
  }
};
var prototype = Object.getPrototypeOf(book);
console.log(prototype == Object.prototype);
var now = new Date();
var early = new Date(2010,1,1);
var message = "Bookis" + book;
console.log(message)
console.log(book.hasOwnProperty('say'))
