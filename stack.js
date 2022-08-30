/** Node: node for a stack. */

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.data = [];
    this.first = null
    this.last = null
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this.data.push(val)
    if(!this.first) {
      this.first = this.data[0]
      this.last = this.data[0]
      return undefined
    }
    this.first = this.data[this.data.length-1]
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.isEmpty()) throw new Error
    if(this.first === this.last) {
      this.first = null;
      this.last = null;
      return this.data.pop()
    }
    this.first = this.data[this.data.length-2]
    return this.data.pop()
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.isEmpty()) throw new Error
    return this.data[this.data.length-1]
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    let result = this.data.length ? false : true
    return result
  }
}

module.exports = Stack;
