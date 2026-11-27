import {runTestCases} from "../../TesterFunction.ts";

class TrieNode {
    children = new Map<string, TrieNode>();
    words: string[] = [];

    constructor() {
    }
}

class Trie {
    private readonly root = new TrieNode();

    insert(word: string): void {
        let node = this.root; // mobile
        for (const char of word) { // m
            let next = node.children.get(char);
            if (!next) {
                next = new TrieNode();
                node.children.set(char, next);
            }
            node.words.length < 3 && node.words.push(word);
            node = next;
        }
        node.words.length < 3 && node.words.push(word);
    }

    printTrieNode(node: TrieNode | undefined, tab: number): void {
        if(!node) return
        console.log(" ".repeat(tab), JSON.stringify(node.words));
        for (let i of node.children.keys()) {
            console.log(" ".repeat(tab), i);
            this.printTrieNode(node.children.get(i), tab + 2)
        }
    }

    print() {
        this.printTrieNode(this.root,0)
    }


    find(str: string): string[]{
        let node: TrieNode | undefined = this.root;

        for (const char of str) {
            node = node.children.get(char);
            if (!node) return [];
        }

        return node.words;
    }
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort();
    const trie = new Trie()
    for(let i of products) {
        trie.insert(i)
    }


    let i = ""
    let ans:string[][]  = []
    for (let j  of searchWord) {
        i = i + j
        ans.push(trie.find(i))
    }
    return ans

}

const TestCases: any[] = [
    [["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"],
    [["havana"], "havana"],
]

const results: any[] = [[["mobile", "moneypot", "monitor"], ["mobile", "moneypot", "monitor"], ["mouse", "mousepad"], ["mouse", "mousepad"], ["mouse", "mousepad"]], [["havana"], ["havana"], ["havana"], ["havana"], ["havana"], ["havana"]]]

runTestCases(TestCases, results, [], suggestedProducts)
