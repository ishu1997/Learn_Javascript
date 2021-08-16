// FIFO
// used in browsers to set the order of execution

class Queue {

    #list = [];
    #capacity;

    constructor(capacity = 0) {
        this.#capacity = Math.max(Number(capacity), 0) || null;
    }

    get size() { return this.#list.length; }

    get isEmpty() { return this.size == 0 }

    get isFull() { return this.size === this.#capacity && this.#capacity !== null; }

    enqueue(item) {
        if (this.#capacity !== null && this.size < this.#capacity) {
            return this.#list.push(item);
        }

        return this.size;
    }

    dequeue() { return this.#list.shift(); }

    peek() { return this.#list[0]; }

    print() { console.log(this.#list); }

}

var queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());

