var utils = require("utils");
var EventEmitter = require("events").EventEmitter;

var Server = function(){
  console.log("init");
}

utils.inherits(Server,EventEmitter);
    
var s = new Server();

s.on("abc",function(){
  console.log("abc");
})
