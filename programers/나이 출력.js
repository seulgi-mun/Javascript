function solution(age) {
  var answer = 0;
  let today = new Date()
  let year = today.getFullYear()
  answer = year - age + 1
  return answer;
}