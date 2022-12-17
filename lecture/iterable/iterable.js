// iterable 한 건 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 iterator를 리턴하는 것은
// 순회 가능한 객체라는 것을 알 수 있다
// 순회가 가능하면 무엇을 할 수 있나? -> for...of , spread

const arr = [1, 2, 3]

for (const item of arr) {
  console.log(item)
}

for (const item of arr.values()) {
  console.log(item)
}

const obj = { 0: 1, 1: 2 }
// for of 쓰면 오류남 > symbol.iterator를 가지지 않음, 규격 따르지 않음
for (const item in obj) { 
  console.log(item) // key 값 나타남
}

const iterator = arr.values()
console.log(iterator.next()) // { value: 1, done: false } > done 반복이 끝났는지 안 끝났는지 표시
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: undefined, done: true }

const iter = arr.values()
while (true) {
  const item = iter.next()
  console.log(item)
  if (item.done) break
  console.log(item.value, '반복')
}