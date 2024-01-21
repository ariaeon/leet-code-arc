function romanToInt(s: string): any {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = values[s[i] as keyof typeof values];
    const next = values[s[i + 1] as keyof typeof values];
    if (current < next && next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}
console.log(romanToInt('MDCLXVI'));
