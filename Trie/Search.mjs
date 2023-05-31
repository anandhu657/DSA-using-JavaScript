import Trie from './Trie.mjs';

class Search extends Trie {
    search(word) {
        if (!word.length)
            return false
        let node = this.root
        for (let letter of word) {
            if (!node.children.has(letter))
                return false
            node = node.children.get(letter)
        }
        return node.isEnd
    }

    startWith(prefix) {
        if (!prefix.length)
            return false

        let node = this.root
        for (let letter of prefix) {
            if (!node.children.has(letter))
                return false
            node = node.children.get(letter)
        }
        return true
    }
}

const search = new Search()
search.insert("anandhu")
search.insert("anandh")
search.insert("hai")
console.log(search.search("anandhu"))
console.log(search.startWith("ha"))