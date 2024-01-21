function longestCommonPrefix(strs: string[]): any {
  //@ts-ignore
  const sortedStrings = strs.sort((a, b) => a > b);
  const first = sortedStrings[0];
  const last = sortedStrings[sortedStrings.length - 1];

  let result = '';
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      result += first[i];
    }
  }
  console.log(result);
}

longestCommonPrefix(['ac', 'ab', 'aa']);
