class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // tail to track last item.
    this.tail = null;
    // to track list length;
    this.length = 0;
  }

  add(number) {
    // if the list is null, create a new one.
    if (this.head === null) {
      this.head = new Node(number);
      this.tail = this.head;
      this.length++;
      return;
    }
    this.append(number);
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
    } else if (index === this.length) {
      this.append(number);
      return;
    } else if (index > this.length) {
      return `index out of bound from ${0} to ${this.length - 1}`;
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
      iterator++;
    }
    this.length++;
  }

  append(number) {
    let last = new Node(number);

    this.tail.next_node = last;
    this.tail = last;
    this.length++;
  }
  get(index) {
    let iterator = 0;
    let current = this.head;
    if (current === null) {
      return "List is empty";
    } else if (index === this.length) {
      return `index out of bound: ${0} to ${this.length - 1}`;
    } else if (index === this.length - 1) {
      return this.getLast();
    } else if (index === 0) {
      return this.getFirst();
    }
    while (current !== null) {
      if (iterator === index) {
        return current.value;
      }
      iterator++;
      current = current.next_node;
    }
  }

  getLast() {
    return this.tail.value;
  }

  getFirst() {
    return this.head.value;
  }

  remove(index) {
    if (this.head == null) {
      return "List is empty";
    } else if (index === this.length) {
      return `index out of bound: ${0} to ${this.length - 1}`;
    }
    if (index === 0) {
      return his.removeFirst();
    } else if (index === this.length - 1) {
      return this.removeLast();
    } else {
      let prev = this.#getNode(index - 1);
      prev.next_node = prev.next_node.next_node;
      this.length++;
    }
  }
  removeLast() {
    if (this.head.next_node === null) {
      this.head = null;
      this.tail = this.head;
    } else {
      let temp = this.#getNode(this.length - 2);
      console.log(temp);
      temp.next_node = temp.next_node.next_node;
      this.tail = temp;
    }
    this.length--;
  }

  removeFirst() {
    this.head = this.head.next_node;
    this.length--;
  }

  #getNode(index) {
    let iterator = 0;
    let current = this.head;
    while (current !== null) {
      if (index === iterator) {
        return current;
      }
      current = current.next_node;
      iterator++;
    }
  }
}

const list = new LinkedList(new Node());

list.add(3);
list.add(5);
list.add(3);

list.removeLast();

list.removeLast();
list.removeLast();

// list.add_at(0, 10);
// list.add_at(list.length, 12);
// list.add_at(2, 14);
// list.add_at(3, 20);
// list.add_at(4, 16);

for (var i = 0; i < list.length; i++) {
  console.log(list.get(i));
}

// // => 5
module.exports = LinkedList;
