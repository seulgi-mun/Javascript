// 문자열 모든 캐릭터 하나씩 출력
const text = 'Hello World!'
for (let i = 0; i < text.length; i++) {
  console.log(text[i])
}

// 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4'
console.log(ids.split(','))

// 1초에 한 번씩 시계를 (날짜를) 출력
setInterval(() => {
  const now = new Date()
  console.log(now.toLocaleString('ko-KR'))
}, 1000)