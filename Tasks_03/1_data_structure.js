// Linked List
//  [value, next] -> [value, next] -> [walue, next]
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insert(data) {
    const node = new Node(data)

    if (this.tail) {
      this.tail.next = node
    }

    if (!this.head) {
      this.head = node
    }

    this.tail = node
  }

  // O(1)
  insertBefore(data) {
    const node = new Node(data, this.head)

    this.head = node

    if(!this.tail) {
      this.tail = node
    }
  }

  // O(1)
  insertAfter(after, data) {
    const found = this.find(after)

    if (!found ){
      return``
    }

    found.next= new Node (data, found.next)
  }

  // O(n)
  find (data) {
    if(!this.head) {
      return
    }

    let current = this.head
    while (current) {
      if (current.data === data) {
        return current
      }
      current = current.next
    }
  }

  // O(n)
  toArray () {
    const output = []
    let current = this.head

    while(current) {
      output.push(current)
      current = current.next
    }

    return output
  }

  // O(n)
  delete(data) {
    if (!this.head) {
      return
    }

    while (this.head && this.head.data ===data) {
      this.head = this.head.next
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next
      } else  {
        current = current.next
      }
    }

    if (this.tail.data ===data) {
      this.tail = current
    }
  }
}

const list = new LinkedList();
list.insert('My');
list.insert('name');
list.insertBefore('Hi, ');
list.insert('Tatiana');
list.insert('!');

console.log(list.toArray());
console.log(list.find('Tatiana'));
list.insertAfter('name', 'is');
console.log(list.toArray());
list.delete('!')
console.log(list.toArray());