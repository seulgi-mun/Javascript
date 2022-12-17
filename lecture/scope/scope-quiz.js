
{
  const x = 1
  {
    const y = 2
    console.log(x); // 1
  }
  console.log(x); // 1
  // console.log(y); // 오류 발생
}


const text = 'global' // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)

{
  // 지역 변수(로컬 변수), 지역 스코프(로컬 스코프)
  const text = 'inside block 1' // 주석 처리하면 global 출력 됨
  {
    console.log(text);
  }
}