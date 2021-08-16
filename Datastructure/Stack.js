// LIFO
// used in back button of browser

class stack {
    stackList = [];
    maxSize = null;

    constructor(maxSize) {
        this.maxSize = Number(maxSize) || null;

    }

    get Size() {
        return this.stackList.length;
    }

    PushElement(element) {
        if (this.stackList.length === this.maxSize) {
            console.log("already full!")

        }
        else {
            this.stackList.push(element);
        }
    }

    PopElement() {
        if (this.stackList.length > 0) {
            const popper = this.stackList[this.stackList.length - 1];
            this.stackList.pop();
            return popper;
        }
        else {
            return null;
        }
    }

    Print() {
        console.log(this.stackList);
    }

}

arr = new stack(5);
arr.PushElement(2);
arr.PushElement(21);
arr.PushElement(22);
arr.PushElement(23);
arr.PushElement(23);
arr.Print();
console.log(arr.stackList.length);
arr.PopElement();
arr.PopElement();
arr.PopElement();
console.log(arr.stackList.length);
arr.Print();

// class Stack {
//     #list = [];
//     #capacity = null;

//     constructor(capacity = null) {
//         this.#capacity = Math.max(Number(capacity), 0) || null;
//     }

//     get size() {
//         return this.#list.length;
//     }

//     get isEmpty() {
//         return this.size === 0;
//     }

//     get isFull() {
//         return this.#capacity ? this.size === this.#capacity : false;
//     }

//     push(item) {
//         if (!this.isFull) {
//             this.#list.push(item);
//         }

//         return this.size;
//     }

//     pop() {
//         return this.#list.pop();
//     }

//     peek() {
//         return this.#list[this.size - 1];
//     }

//     toString() {
//         return this.#list.toString();
//     }
// }

// stc = new Stack(5);
// stc.push('232');
// stc.push('23oo2');
// stc.push('23fg2');
// console.log(stc.peek());
// stc.pop();
// console.log(stc.peek());