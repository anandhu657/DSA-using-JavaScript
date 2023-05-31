import Trie from './Trie.mjs';

class Suggestion extends Trie {
    suggest(prefix) {
        let node = this.root;
        let curr = "";

        for (let letter of prefix) {
            if (!node.children.has(letter))
                return []
            curr += letter
            node = node.children.get(letter)
        }

        let list = []
        this.suggestHelper(node, list, curr)
        return list
    }

    suggestHelper(node, list, curr) {
        if (node.isEnd)
            list.push(curr)
        if (!node.children.size)
            return
        for (let [char, child] of node.children)
            this.suggestHelper(child, list, curr + char)
    }
}

const trie = new Suggestion()
trie.insert("Anand")
trie.insert("Anandhu")
trie.insert("Anandhan")
trie.insert("Anandhini")
console.log(trie.suggest("Anan"))