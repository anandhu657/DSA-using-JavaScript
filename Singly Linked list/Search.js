class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Search {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    search(value) {
        let temp = this.head;

        while (temp) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.next;
        }
        return false
    }
}

const search = new Search();
search.append(1);
search.append(2);
search.append(3);
search.append(4);
search.append(5);
console.log(search.search(15));