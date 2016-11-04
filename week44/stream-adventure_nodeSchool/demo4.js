/*
标准答案
// Here is the reference solution:

  var through = require(through2);
  var tr = through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  });
  process.stdin.pipe(tr).pipe(process.stdout);


*/





//	我的答案
var through = require('through2');
var stream = through(write,end);

function write(){
	this.push('I had got some data'+buffer+'\n');
	next();	
}
function end(done){
	done();
}

process.stdin.pipe(through(function(buffer,enc,callback){
	for(var i=0;i<buffer.length;i++)
	if(buffer[i]<=122 && buffer[i]>=97){	
		buffer[i]-=32;
	}
	this.push(buffer);
	callback();
}
)
)
.pipe(process.stdout);


