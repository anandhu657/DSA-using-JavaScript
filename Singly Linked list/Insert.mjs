class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class Insert {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const newNode = new Node(value)

        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    display() {
        let temp = this.head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

// const insert = new Insert();
// insert.append(1);
// insert.append(2);
// insert.append(3);
// insert.append(4);
// insert.prepend(10);
// insert.prepend(20)
// insert.display();