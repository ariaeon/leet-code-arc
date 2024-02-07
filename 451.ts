function frequencySort(s: string): string {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  let res = '';
  sortedMap.forEach((v, k) => {
    for (let j = 0; j < v; j++) {
      res += k;
    }
  });
  return res;
}

console.log(frequencySort('Aabb'));
