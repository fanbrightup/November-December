// 题目：企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；利润高于10万元，
// 低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可可提成7.5%；20万到40万之间时，
// 高于20万元的部分，可提成5%；40万到60万之间时高于40万元的部分，可提成3%；60万到100万之间时，
// 高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，
// 从键盘输入当月利润I，求应发放奖金总数？
var profit;
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    // process.stdout.write(`data: ${chunk}`);
    profit = chunk;
    console.log(`利润为 ${profit}`);
    var total = parseFloat(cal(profit).toFixed(2));
    console.log(typeof total);
    console.log(`总奖金为：${total}万元`)
    process.exit();
  }
});
function cal(profit){
  var total = -1;
  //10<  10-20  20-40  40-60  60-100  >100
  if(profit<=10){
    total = 10*0.1;
  }
  if(profit>10 && profit <=20){
    total = 10*0.1 + (profit-10)*0.075;
  }
  if(profit > 20&& profit <=40){
    total = 10*0.1 + 10*0.075+(profit-20)*0.05;
  }
  if(profit > 40&& profit <=60){
    total = 10*0.1 + 10*0.075+20*0.05+(profit-40)*0.03;
  }
  if(profit > 60 && profit <=100){
    total = 10*0.1 + 10*0.075+20*0.05+20*0.03+(profit-60)*0.015;
  }
  if(profit >100){
    total = 10*0.1 + 10*0.075+20*0.05+20*0.03+40*0.015+(profit-100)*0.01;
  }
  return total;
}
