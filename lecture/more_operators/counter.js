
// 변수도 export 가능하나 getter 와 setter를 사용하는 게 더 좋음
let cnt = 0

// 딱 하나만 export 하려면 export default 를 쓰고
// 여러개 보내고 싶으면 default를 지우는데 받을 때 { 함수명(increase) } 로 import 해야됨
export function increase() {
  cnt++
  console.log(cnt);
}

export function getCount() {
  return cnt
}