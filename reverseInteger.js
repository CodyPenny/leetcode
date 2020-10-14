/* Given a 32-bit signed integer, reverse digits of an integer.
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows. */


var reverse = function(x) {
  if (x < -2147483648 || x > 2147483647) return 0;
  
  let num = '' + x;
  
  if (x < 0) {
    num = num.split('').reverse();
    num.pop();
    num = parseInt('-' + num.join(''));
  } else {
    num = parseInt(num.split('').reverse().join(''));
  }
  
    return num > -2147483648 && num < 2147483647 ? num : 0;
      
  };

  // Runtime: 96 ms, faster than 66.58% of JavaScript online submissions for Reverse Integer.



