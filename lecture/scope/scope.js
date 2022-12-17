// 스코프 scope
// 변수를 참조할 수 있는(접근할 수 있는) 유효한 범위
// 선언된 위치에 따라 유효 범위가 결정됨
// 범위를 블럭으로 설정 > 블럭 안의 변수는 블럭안에서만 유효함
// 이름 충돌을 방지할 수 있고 메모리를 절약 할 수 있음

// 코드 블럭: { }, if() {}, for() {}, function() {}

// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없음
{
  const a = 'a';
}
console.log(a); // 오류 남
const b = 'b'


// 함수 외부에서는 내부의 변수를 참조할 수 없음
function print() {
  const message = 'Hello World'
  console.log(message);
}
console.log(message);


// 함수 외부에서는 함수의 매개변수를 참조할 수 없음
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);