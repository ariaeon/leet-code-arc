function isPalindrome(x: number): boolean {
  const str = x.toString().split('');
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
