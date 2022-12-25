function solution(angle) {
  var answer = 0;
  
  if (angle <= 89) {
      answer = 1
  } else if (angle === 90) {
      answer = 2
  } else if (angle < 180) {
      answer = 3
  } else {
      answer = 4
  }
  
  return answer;
}


// 다른 사람
function solution(angle) {
  return [0, 90, 91, 180].filter(x => angle>=x).length;
}

function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}