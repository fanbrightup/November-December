// 不要将链表的方法加到Node的类中,思路是错的,节点是独立于链表的,不要把他们扯在一起
class Node{
  constructor(value){
    this.value = value;
    this.nextNode = null;
  }
}
var head = null;
var foot = null;
function createList(first){
  var node = new Node(first);
  head = node;
  foot = node;
  return node;
}
var list = createList('head');
list.add = function(value){
  var node = new Node(value);
  foot.nextNode = node;
  foot = node;
}
list.add('2');
list.add('third');
list.add('fourth');

// console.log(list);
console.log(head);
console.log(foot);
