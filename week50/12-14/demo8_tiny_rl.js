var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
      //  可以传一个对象指明input,output,也可以直接传入两个流

rl.setPrompt('OHAI> ');
rl.prompt();

rl.on('line', function(line) {
  switch(line.trim()) {
    case 'hello':
    console.log('world!');
      rl.write("hh\n");
      rl.write("cc");  // 多次write都是写入了缓存,当write里有/n时真正写入,此时就不能被撤销了,所以可以一次性的被撤销
      rl.write(null, {ctrl: true, name: 'u'});  // 只能撤销掉与他相邻的所有没有换行write语句,不呢撤销console语句
      //  ctrl + u  只能撤销缓存中的
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      break;
  }
  rl.prompt();  // 再执行完逻辑后,再次调用prompt提示符,不加的话也能接收line事件,但是没有了提示符
})
rl.on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});
