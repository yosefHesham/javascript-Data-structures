class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(number) {
    if (this.head === null) {
      this.head = new Node(number);
      this.tail = this.head;
      this.length ++;
      return;
    }
    this.#append(number)
  }

  getLast() {
    return this.tail.value;
  }
   #append(number) {
    let last = new Node(number);
  
    this.tail.next_node = last;
    this.tail = last
    this.length++;
  }

  insertAtFirst(number) {
    let newNode = new Node(number);
    newNode.next_node = this.head;
    this.head = newNode;
    this.length++;
  }
  add_at(index, number) {
    if (index === 0) {
      this.insertAtFirst(number);
      return;
    }
    else if(index === this.length) {
      this.append(number)
      return ;
    }
    let current = this.head;
    let iterator = 1;
    while (current !== null) {
      let newNode = new Node(number);
      if (iterator === index) {
        newNode.next_node = current.next_node;
        current.next_node = newNode;
        break;
      }
      current = current.next_node;
      iterator ++;
    }
    this.length ++;
  }

  remove(index) {
    if(index === 0) {
      this.removeFirst()
    }
    else if(index === this.length - 1) {
      this.removeLast()
    }
    else {
      let prev = this.#getNode(index - 1)
      prev.next_node = prev.next_node.next_node;
    }
    this.length --;
  }
  removeLast() {
    let temp = this.#getNode(this.length - 2)
    temp.next_node = temp.next_node.next_node
    this.tail = temp;

    }
  
  removeFirst() {
    this.head = this.head.next_node;
  }

  #getNode(index) {
    let iterator = 0;
    let current = this.head;
    while(current !== null) {
      if(index === iterator) {
        return current;
      }
      current = current.next_node;
      iterator++;
    }
  }
 
  get(index) {
    let iterator = 0;
    let current = this.head;
    while (current !== null) {
      if (iterator === index) {
        return current.value;
      }
      iterator++;
      current = current.next_node;
    }
  }
}

const list = new LinkedList(new Node());

list.add(3);
list.add(5);
list.add(3);
list.add(5);
list.add(3);
list.add(5);
list.add(7);
list.add(15);
list.remove(3)

// list.add_at(0, 10);
// list.add_at(list.length, 12);
// list.add_at(2, 14);
// list.add_at(3, 20);
// list.add_at(4, 16);


// let node = new Node(5);
// let anotherNode = new Node(10);
// node.next_node = anotherNode
// console.log(node)
// node.next_node = null;
// console.log(anotherNode)

// node = anotherNode
// node = null
// console.log(anotherNode)

for (var i = 0; i < list.length; i++) {
  console.log(list.get(i));
}


// // => 5
module.exports = LinkedList;
