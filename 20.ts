function isValid(s: string): any {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === '(' || curr === '[' || curr === '{') {
      stack.push(curr);
    }
  }
}

isValid('()[]{}');
