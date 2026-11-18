import {runTestCases} from "../../TesterFunction.ts";

function predictPartyVictory(senate: string): string {
    let q = senate.split('');
    let bans = 0
    while(q.some(val => val === 'R') && q.some(val => val === 'D')) {
        let cur = q.shift()
        cur == 'R' ? bans++ : bans--
        if((cur == 'D' && bans < 0 )||(cur == 'R' && bans > 0 )) {
            q.push(cur)
        }
    }
    return q[0] == 'D' ? 'Dire' : 'Radiant';
}

const TestCases: any[] = [
    ["RD"],
    ["RDD"],
]

const results: any[] = ["Radiant", "Dire"]

runTestCases(TestCases, results, [], predictPartyVictory)
