class Node {
    constructor(data) {
        this.data = data;
        this.prev = this.next = null;
    }
}

export default class Insert { // Doubly Linked List

    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(data) {
        const newNode = new Node(data);

        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    display() {
        let temp = this.head;

        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

// const insert = new Insert();
// insert.append(1);
// insert.append(2);
// insert.append(3);
// insert.append(4);
// insert.append(5);
// insert.display();