// Today we learned that early exit conditions are not worth it if the condition loops over every item anyway :)

function maxArea(height: number[]): number {
  let currArea = 0;
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left !== right) {
    let distance = right - left;
    currArea = Math.min(height[left], height[right]) * distance;
    maxArea = Math.max(currArea, maxArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    i++;
  }
  return maxArea;
}

function maxArea2(height: number[]): number {
  let currArea = 0;
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left !== right) {
    let distance = right - left;
    const smallest = Math.min(height[left], height[right]);
    currArea = smallest * distance;
    maxArea = Math.max(currArea, maxArea);
    if (height.slice(left, right).filter((x) => x > smallest).length < 1) {
      break;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    i++;
  }
  return maxArea;
}

function maxArea3(height: number[]): number {
  let currArea = 0;
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left !== right) {
    let distance = right - left;
    const smallest = Math.min(height[left], height[right]);
    currArea = smallest * distance;
    maxArea = Math.max(currArea, maxArea);
    if (Math.max(...height.slice(left, right)) <= smallest) {
      break;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    i++;
  }
  return maxArea;
}

let i = 0;
console.time('test');
console.log('result: ');
console.log('loops: ' + i);
console.timeEnd('test');
