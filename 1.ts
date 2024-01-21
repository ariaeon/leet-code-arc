function twoSum(nums: number[], target: number): any {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num2 = target - nums[i];
    if (map.get(num2) !== undefined) {
      return [i, map.get(num2)];
    }
    map.set(nums[i], i);
  }
}

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
