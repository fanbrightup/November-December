var mystdin = process.stdin;
var mystdout = process.stdout;

// var out = process.out;
mystdin.setEncoding('utf8');
mystdin.on('data', function (chunk) {
mystdout.write('data: ' + chunk);
});
mystdin.on('end', function () {
  mystdout.write('end');
});
