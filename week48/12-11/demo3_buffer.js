// const buf1 = new Buffer(10);
// console.log(buf1);
// const buf2 = new Buffer([1,2,3])
// console.log(buf2);
//
// const buf3 = new Buffer('f')
// console.log(buf3.toString("binary"));

const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;
const buf1 = new Buffer(arr);  // arr就是arr[0];
const buf2 = new Buffer(arr.buffer);
console.log(buf1);
console.log(buf2);
arr[1] = 6000;
console.log(buf1);
console.log(buf2);
// console.log(Buffer.byteLength());
console.log(Buffer.compare(buf1,buf1));
console.log(Buffer.isBuffer(buf2));
console.log(Buffer.isEncoding('utf8'));
