export function runTestCase(testCase: any[], funct: (...args: any[]) => any): any {
    return funct(...testCase);
}

export function runTestCases(
    testCases: any[][],
    expected: any[],
    filteredTestCases: number[],
    funct: (...args: any[]) => any
): void {
    const indices = filteredTestCases.length === 0
        ? testCases.map((_, i) => i)
        : filteredTestCases;

    indices.forEach(i => {
        const actual = runTestCase(testCases[i], funct);
        const pass = JSON.stringify(actual) === JSON.stringify(expected[i]);
        console.log(i, ":", pass ? `PASS ${JSON.stringify(actual)}`: `FAIL (expected ${JSON.stringify(expected[i])}, got ${JSON.stringify(actual)})`);
    });
}