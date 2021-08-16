// FIFO
// used in browsers to set the order of execution

class Queue {
    queueSize = 0
    list = [];

    constructor(size = 0) {
        this.queueSize = size;
    }

    enqueue(element) {
        if (this.list.length <= this.queueSize) {
            this.list.push(element);
        }
        else {
            console.log("Queue is full");
        }
    }

    dequeue() {
        if (this.list.length === 0) {
            console.log("Queue is empty");
        }
        else {
            var pop = this.list.shift();
            console.log(`popped element ${pop}`);
        }
    }

    print() {
        console.log(this.list);
    }
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
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
