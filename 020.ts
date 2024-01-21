const pairs = {
  ')': '(',
  ']': '[',
  '}': '{',
};
function isValid(s: string): any {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (Object.values(pairs).includes(curr)) {
      stack.push(curr);
    } else {
      let last = stack.pop();
      if (pairs[curr as keyof typeof pairs] !== last) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(isValid('()[]{}'));
