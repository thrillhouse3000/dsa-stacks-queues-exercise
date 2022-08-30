/** Node: node for a queue. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val)
    this.size += 1

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return undefined
    }
    this.last.next = newNode
    this.last = newNode
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.isEmpty()) throw new Error
    let value = this.first.val
    this.size -= 1

    if(this.first === this.last) {
      this.first = null
      this.last = null
      return value
    }
    this.first = this.first.next
    return value
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.isEmpty()) throw new Error
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    let result = this.size === 0 ? true : false
    return result
  }
}

module.exports = Queue;
