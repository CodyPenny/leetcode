/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "" */

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  let commonString = findcommonprefix(strs[0], strs[1]);

  for (let i = 2; i < strs.length; i++) {
    if (!commonString) {
      return '';
    }
    let common = findcommonprefix(commonString, strs[i]);
    commonString = common;
  }
  return commonString;
};

const findcommonprefix = function (str1, str2) {
  let shorter = '',
    longer = '';
  if (!str2) return '';

  if (str1.length <= str2.length) {
    shorter = str1;
    longer = str2;
  } else {
    shorter = str2;
    longer = str1;
  }
  while (shorter.length) {
    let regex = RegExp('^' + shorter);
    if (regex.test(longer)) {
      return shorter;
    }
    let arr = shorter.split('');
    arr.pop();
    shorter = arr.join('');
  }

  return '';
};


/* Success
Details 
Runtime: 76 ms, faster than 90.84% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 38.3 MB, less than 11.86% of JavaScript online submissions for Longest Common Prefix.*/

const verticalScan = (strs) => {
  if (!strs || strs.length == 0) return '';

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].charAt(i) !== char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}

/* Success
Details 
Runtime: 96 ms, faster than 23.63% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 39.8 MB, less than 11.86% of JavaScript online submissions for Longest Common Prefix. */