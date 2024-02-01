// used some tips for this one

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const arr = new Array(numRows).fill('');

  let currIndex = 0;
  let step = 1;
  for (let i = 0; i < s.length; i++) {
    arr[currIndex] += s[i];
    currIndex += step;

    if (currIndex >= numRows - 1) {
      step = -1;
    } else if (currIndex === 0) {
      step = 1;
    }
  }
  return arr.join('');
}

console.log(convert('PAYPALISHIRING', 3));
