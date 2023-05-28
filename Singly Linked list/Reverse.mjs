import Insert from './Insert.mjs';

class Reverse extends Insert {
    reverseTraversal() {
        let current = this.head;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

const reverse = new Reverse();
reverse.append(1);
reverse.append(2);
reverse.append(3);
reverse.append(4);
reverse.append(5);
reverse.reverseTraversal();
reverse.display();