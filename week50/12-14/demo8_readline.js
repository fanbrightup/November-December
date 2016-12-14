var readline = require("readline");
var rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
rl.setPrompt("++")
rl.question("what do you think of nodejs?\n",(answer)=>{
  console.log(`Your answer is ${answer}`);
  rl.close();
})
