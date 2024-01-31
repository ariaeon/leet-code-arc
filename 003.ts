function lengthOfLongestSubstring(s: string): number {
  let trail = 0;
  let lead = 1;
  let longest = 0;

  while (lead <= s.length) {
    const substring = s.substring(trail, lead);
    if (substring.includes(s[lead])) {
      trail++;
    } else {
      lead++;
    }
    longest = Math.max(longest, substring.length);
  }
  return longest;
}
