class DeQueue {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0;
    }

    addFront(element) {
        // this.items.unshift(element);

        for (let i = this.items.length; i > 0; i--) {
            this.items[i] = this.items[i - 1];
        }
        this.items[0] = element
    }

    addRear(element) {
        // this.items.push(element);

        this.items[this.items.length] = element;
    }

    removeFront() {
        // console.log(this.items.shift());
        console.log(this.items[0])
        for (let i = 0; i < this.items.length; i++) {
            this.items[i] = this.items[i + 1]
        }
        this.items.length--;
    }

    removeRear() {
        // console.log(this.items.pop());

        console.log(this.items[this.items.length - 1]);
        this.items.length--;
    }

    display() {
        console.log(this.items);
    }
}
const deQueue = new DeQueue();
deQueue.addFront(1);
deQueue.addFront(2);
deQueue.addFront(3);
deQueue.addFront(4);
deQueue.addFront(5);
deQueue.addRear(6);
deQueue.addRear(7);
deQueue.addRear(8);
deQueue.addRear(9);
deQueue.addRear(10);
deQueue.display();
deQueue.removeFront();
deQueue.removeFront();
deQueue.removeRear();
deQueue.removeRear();
deQueue.display();