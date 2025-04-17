class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// singlylinked list
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //push method to add a new node at the end of the list
  // Time complexity: O(1)
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  //pop method to remove the last node from the list
  // Time complexity: O(n)
  pop() {
    if (!this.head) return undefined;

    let tem = this.head;
    let cur = this.head;

    while (cur.next) {
      tem = cur;
      cur = tem.next;
    }

    tem.next = null;
    this.tail = tem;
    this.length--;

    if (this.head === 0) {
      this.head = null;
      this.tail = null;
    }

    return cur;
  }

  //unshift adding elements to the start of the list
  // Time complexity: O(1)
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  //shift is remove one from start of the list
  // Time complexity: O(1)
  shift() {
    if (!this.head) return undefined;

    let tem = this.head;

    this.head = this.head.next;
    tem.next = null;
    this.length--;

    if (this.head === 0) {
      this.tail = null;
    }

    return tem;
  }

  //used to get first element of the list
  // Time complexity: O(1)
  getHead() {
    if (!this.head) return undefined;
    return this.head;
  }


  //used to get last element of the list
  // Time complexity: O(1)
  getTail() {
    if (!this.tail) return undefined;
    return this.tail;
  }


  get(index){
    if(index < 0 || index >= this.length) return undefined;
    
    let current = this.head;
    for(let i = 0; i < index; i++){
      current = current.next;
    }
    return current.value;
  }

  //this method is used to get length of the linked list
  // Time complexity: O(n)
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  //print function for console linkedlist value
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.value;
      if (current.next) {
        result += " -> ";
      }
      current = current.next;
    }

    console.log(result);
  }
}


const singlyList = new LinkedList(10);
singlyList.push(20);
singlyList.push(30);
singlyList.push(40);
singlyList.push(50);
// singlyList.pop();
singlyList.unshift(5);
// singlyList.shift();

console.log(singlyList);

singlyList.print();
// console.log(singlyList.size());
// console.log(singlyList.getHead());
console.log(singlyList.get(2));

