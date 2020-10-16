/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. */

var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let num = 0;
  let first = 0;
  let second = 0;

  while (first < s.length) {
    second = first + 1;
    if (s[second]) {
      if (roman[s[second]] > roman[s[first]]) {
        num += roman[s[second]] - roman[s[first]];
        first += 2;
      } else if (roman[s[second]] < roman[s[first]]) {
        num += roman[s[first]];
        first++;
      } else {
        num += roman[s[first]];
        first++;
      }
    } else {
      num += roman[s[first]];
      first++;
    }
  }

  return num;
};
/*
Success
Details 
Runtime: 168 ms, faster than 60.50% of JavaScript online submissions for Roman to Integer.
Memory Usage: 44.8 MB, less than 5.32% of JavaScript online submissions for Roman to Integer.*/