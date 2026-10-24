import {runTestCases} from "../TesterFunction.ts";

class Dates {
    month: number
    day: number

    constructor(date: string) {
        this.month = +date.split("-")[0]
        this.day = +date.split("-")[1]
    }
}

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
    let arrBob = new Dates(arriveBob)
    let levBob = new Dates(leaveBob)
    let arrAli = new Dates(arriveAlice)
    let levAli = new Dates(leaveAlice)

    if (isInOrder(levAli, arrBob)) return 0
    if (isInOrder(levBob, arrAli)) return 0

    if (isInOrder(arrAli, arrBob)) {
        return isInOrder(levAli, levBob) ? getDays(arrBob, levAli) : getDays(arrBob, levBob)
    } else {
        return isInOrder(levBob, levAli) ? getDays(arrAli, levBob) : getDays(arrAli, levAli)
    }
}

function isInOrder(date1: Dates, date2: Dates) {
    if (date2.month < date1.month) return false;
    if (date2.month > date1.month) return true;
    return date2.day >= date1.day;
}

function getDays(days1: Dates, days2: Dates): number {
    if (days1.month === days2.month) return days2.day - days1.day + 1;
    let ans = monthDays[days1.month - 1] - days1.day + 1
    days1.month++
    while (days2.month > days1.month) {
        ans += monthDays[days1.month++ - 1]
    }

    return ans + days2.day

}

const TestCases: any[] = [
    ["08-15", "08-18", "08-16", "08-19"],
    ["10-01", "10-31", "11-01", "12-31"],
    ["09-01", "10-19", "06-19", "10-20"],
]

const results: any[] = [3, 0, 49]

runTestCases(TestCases, results, [2], countDaysTogether)