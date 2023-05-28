import Insert from './Insert.mjs';

class Reverse extends Insert {
    reverseTraversal() {
        let temp = this.tail;

        while (temp) {
            console.log(temp.data);
            temp = temp.prev;
        }
    }
}
const reverse = new Reverse();
reverse.append(1);
reverse.append(2);
reverse.append(3);
reverse.append(4);
reverse.append(5);
reverse.reverseTraversal();
