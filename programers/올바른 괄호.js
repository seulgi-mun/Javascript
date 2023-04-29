function solution(s){
  var answer = true;
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  let pair = 0
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          pair += 1
      }
      
      if (s[i] === ')') {
          if (pair >= 1) {
              pair -= 1
          } else {
              pair += 1
          }
      } 
  }
  
  if (pair != 0) {
      answer = false
  }
  return answer;
}