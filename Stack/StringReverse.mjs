import Stack from './Implementation.mjs';

class StringReverse extends Stack {
    reverse(string) {
        for (let i = 0; i < string.length; i++) {
            this.push(string[i]);
        }

        this.print();
    }
}

const stringReverse = new StringReverse();
stringReverse.reverse('Hello World');