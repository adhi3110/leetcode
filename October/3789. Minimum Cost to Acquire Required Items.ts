import {runTestCases} from "../TesterFunction.ts";

function minimumCost(cost1: number, cost2: number, costBoth: number, need1: number, need2: number): number {
    let cost = 0;
    if (need1 === 0 && need2 === 0) return cost;
    if (need1 === 0) return need2 * Math.min(cost2, costBoth);
    if (need2 === 0) return need1 * Math.min(cost1, costBoth);

    if (costBoth < cost1 + cost2) {
        const commonNeed = Math.min(need1, need2)
        cost += costBoth * commonNeed;
        need1 -= commonNeed;
        need2 -= commonNeed;
        if (need1 > 0) {
            if (cost1 < costBoth) {
                cost += cost1 * need1
            } else {
                cost += costBoth * need1
            }
        }
        if (need2 > 0) {
            if (cost2 < costBoth) {
                cost += cost2 * need2
            } else {
                cost += costBoth * need2
            }
        }
    } else {
        cost = need1*cost1 + need2*cost2;
    }

    return cost;
}

function minimumCostBetterApproach(cost1: number, cost2: number, costBoth: number, need1: number, need2: number): number {
    if (cost1 + cost2 <= costBoth) return need1 * cost1 + need2 * cost2;

    if (costBoth <= cost1 && costBoth <= cost2) return costBoth * Math.max(need1, need2);

    if (costBoth <= cost2) return need2 * costBoth + Math.max(0, need1 - need2) * cost1;

    if (costBoth <= cost1) return need1 * costBoth + Math.max(0, need2 - need1) * cost2;

    const lo = Math.min(need1, need2);
    return lo * costBoth + (need1 - lo) * cost1 + (need2 - lo) * cost2;
}


const TestCases: any[] = []

const results: any[] = []

runTestCases(TestCases, results, [], minimumCost)