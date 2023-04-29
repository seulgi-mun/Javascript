function solution(num) {
  var answer = 0;
  
  let i = 0;
  while (num !== 1) {
      i++;
      if (i > 500) {
          answer = -1;
          break;
      }
      
      if (num % 2 === 0) {
          num = num / 2
      } else {
          num = (num * 3) + 1
      }
      
      if (num === 1) {
          answer = i
          break;
      }
  }
  
  return answer;
}