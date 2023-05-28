import Insert from './Insert.mjs';

class Delete extends Insert {
    deleteSpecifiedValue(data) { // delete specified value
        if (this.isEmpty()) {
            return;
        } else if (this.head.data === data) {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
        } else if (this.tail.data === data) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
        } else {
            let temp = this.head;
            
            while (temp.data != data && temp.next) {
                temp = temp.next;
            }
            if (temp.next) {
                temp.prev.next = temp.next;
                temp.next.prev = temp.prev;
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
deleteNode.deleteSpecifiedValue(3);
deleteNode.display();