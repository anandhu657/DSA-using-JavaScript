class CircularQueue {
    constructor() {
        this.items = []
        this.length = 0
        this.size = 5
        this.front = 0
        this.rear = -1
    }

    enQueue(element) {
        if (this.length >= this.size) {
            console.log("Queue is full");
        } else {
            this.rear++;
            this.items[this.rear % this.size] = element;
            this.length++;
        }
    }

    deQueue() {
        if (this.length === 0) {
            console.log("Queue is Empty");
        } else {
            console.log(this.items[this.front % this.size], " dequeue");
            this.items[this.front % this.size] = null;
            this.front++;
            this.length--;
        }
    }

    display() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

const queue = new CircularQueue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);
queue.deQueue();
queue.enQueue(6);
queue.deQueue();
queue.deQueue();
// queue.enQueue();
queue.display();