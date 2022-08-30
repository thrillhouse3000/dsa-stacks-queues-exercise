class DoubleNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.size = 0;

        for (let val of vals) this.push(val)
    }

    push(val) {
        let newNode = new DoubleNode(val)
    
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return undefined
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.size += 1
    }

    unshift(val) {
        let newNode = new DoubleNode(val)
    
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head
        this.head = newNode
        this.size += 1
    }
    
    shift() {
        if (this.size === 0) throw new Error
        let value = this.head.val
        this.size -= 1

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
            return value
        }
        this.head = this.head.next
        return value
    }

    reverseStr() {
        if(typeof(this.tail.val) !== 'string') throw new Error
        let currNode = this.tail
        while (currNode) {
            if (currNode === this.tail) {
                let currHead = this.head
                let currTail = this.tail
                this.tail = currHead
                this.head = currTail
                this.head.next = currTail.prev
                this.head.prev = null
                this.tail.next = currHead.prev
                this.tail.prev = currHead.next
            } else {
                let currNext = currNode.next
                let currPrev = currNode.prev
                currNode.next = currPrev
                currNode.prev = currNext
            }
            currNode = currNode.prev
        }
    }
}

module.exports = DoublyLinkedList;