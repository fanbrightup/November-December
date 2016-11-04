var spawn = require('child_process').spawn;

var child = spawn('tail',['-f','/var/log/mintsystem.log']);

child.stdout.on('data',function(data){
  console.log(data.toString());
});
