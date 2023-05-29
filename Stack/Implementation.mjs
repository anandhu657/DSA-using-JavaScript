export default class Stack {
    constructor() {
        this.items = [];
        this.size = 0
    }

    push(element) {
        if (this.size === 20) {
            console.log("Stack is full");
        } else {
            this.items.push(element);
            this.size++
        }
    }

    pop() {
        if (this.size === 0) {
            console.log('Stack is empty');
        } else {
            console.log(this.items.pop());
            this.size--;
        }
    }

    peek() {
        console.log(this.items[this.size - 1])
    }

    print() {
        for (let i = this.size - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.peek();
// stack.print();
// stack.pop();
// stack.pop();
