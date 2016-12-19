function taskA() {
       console.log("Task A");
       console.log(arguments[0]);
   }
   function taskB() {
       console.log("Task B");
   }
   function onRejected(error) {
       console.log("Catch Error: A or B", error);
   }
   function finalTask() {
       console.log("Final Task");
   }
// 可以不传参数,这里需要的只是一个Promise对象
// 如果taskA要给taskB传参数,则在taskA中加return即可,不加的话就单独调用
// 如果resolve(1)就代表着传来一个参数给接下来的then内的函数,即taskA接收到1
   var promise = Promise.resolve(1);
       promise
       .then(taskA)
       .then(taskB)
       .catch(onRejected)
       .then(finalTask);
