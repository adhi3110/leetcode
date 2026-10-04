function maxRotateFunction(nums: number[]): number {
  let sum = nums.reduce((a, b) => a + b, 0);
  let f = nums.reduce((a, b, i) => a + i * b, 0);
  let max = f;

  for (let i = nums.length - 1; i > 0; i--) {
    f += sum - nums.length * nums[i];
    max = Math.max(max, f);
  }

  return max;

}