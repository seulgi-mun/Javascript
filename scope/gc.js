// Garbage Collector
// 메모리를 자동으로 청소해 줌
// 글로벌 변수는 앱이 종료될 때까지 계속 메모리에 유지 됨

const global = 1;
{
  // 블럭 내부에서만 존재하고, 블럭이 끝나면 자동으로 소멸 됨 (GC에 의해)
  const local = 2;
}

function print() {
  // 함수 내부에서도 블럭안에서 필요한 경우
  // 필요한 곳, 블럭안에서 변수를 작성하고 사용해야 함
  if (true) {
    let temp = 0
  }
}