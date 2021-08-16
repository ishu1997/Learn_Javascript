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

class Printer extends Queue {
    #isPrinting = false;
    constructor() {
        super(10);
        this.id = Math.floor(Math.random() * 10000);
    }

    #printDocs = () => {
        this.#isPrinting = true;

        setTimeout(() => {
            const docCall = this.dequeue();
            docCall();

            if (this.isEmpty) {
                this.#isPrinting = false;
            }
            else {
                this.#printDocs();
            }

        }, Math.floor(Math.random() * 2000));
    }

    print(doc) {
        return new Promise((resolve, reject) => {
            if (this.isFull) {
                reject('Printer is full');
            }
            else {
                this.enqueue(() => resolve(doc));

                if (!this.#isPrinting) {
                    this.#printDocs();
                }
            }
        })
    }
}

const printer = new Printer();
Array.from({ length: 15 }, (x, i) => i + 1)
    .forEach((element) => {
        printer.print(element).then(doc => console.log(`${element} 'printed' ${doc}`))
            .catch(msg => console.log(`${element} 'failed' ${msg}`));
    });
