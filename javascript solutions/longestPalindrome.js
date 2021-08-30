var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;
    var length = s.length;
    var num = 0;
    for (var i = 0; i < length; i++) {
      num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
      if (num > end - start) {
        start = i - Math.floor((num - 1) / 2);
        end = i + Math.floor(num / 2);
      }
    }
    return s.slice(start, end + 1);
  };
  
  var expandAroundCenter = function (s, left, right) {
    var left = left;
    var right = right;
    var length = s.length;
    while (left >= 0 && right < length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };