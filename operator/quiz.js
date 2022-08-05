// num 의 숫자가 짝수면 😁, 홀수면 🥹 출력
// if로 작성
// 삼항연산자 ternary로 작성

let num = 2

// if
if (num % 2 === 0) {
  console.log('😁')
} else {
  console.log('🥹')
}

// 삼항연산자
num % 2 === 0 ? console.log('😁') : console.log('🥹')

// console.log 반복 줄이기

let isEven = num % 2 === 0 ? '😁' : '🥹'
console.log(isEven)