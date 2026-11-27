class Trie {
    dict: any = {}
    word: {[key: string]: boolean} = {}
    constructor() {}

    insert(word: string): void {
        this.word[word] = true;
        let x = this.dict
        for(let i of word) {
            if(!x[i]) x[i] = {}
            x = x[i]
        }
        debugger
    }

    search(word: string): boolean {
        return !!this.word[word]
    }

    startsWith(prefix: string): boolean {
        let x = this.dict
        for(let i of prefix) {
            if(!x[i]) return false
            x = x[i]
        }

        return true

    }
}

const trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
console.log(trie.insert("app"));
console.log(trie.search("app"));     // return True