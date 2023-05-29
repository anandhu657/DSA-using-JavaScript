class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    deQueue() {
        console.log(this.queue.shift());
    }

    print() {
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
        }
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
queue.deQueue();
queue.deQueue();