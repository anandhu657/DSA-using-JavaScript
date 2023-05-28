import Insert from './Insert.mjs';

class Delete extends Insert {
    deleteHead() {
        if (this.isEmpty()) {
            return;
        } else {
            this.head = this.head.next
            this.size--;
        }
    }

    deleteSpecifedValue(value) {
        if (this.isEmpty()) {
            return;
        } else if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
        } else {
            let temp = this.head;

            while (temp.next.value !== value) {
                temp = temp.next;
            }

            if (temp.next) {
                const next = temp.next;
                temp.next = next.next;
                this.size--;
            }
        }
    }
}

const deleteNode = new Delete();
deleteNode.append(1);
deleteNode.append(2);
deleteNode.append(3);
deleteNode.append(4);
deleteNode.append(5);
deleteNode.deleteSpecifedValue(1);
deleteNode.deleteHead();
deleteNode.display();