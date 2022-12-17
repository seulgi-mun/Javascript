// Map
// 키와 값이 있음
// 순서가 없음
// 중복 가능

const map = new Map([
  ['key1', 'apple'],
  ['key2', 'banana'],
])

console.log(map)

// 사이즈 확인
console.log(map.size)


// 존재하는지 확인
console.log(map.has('key1'))
console.log(map.has('key6'))


// 순회
map.forEach((value, key) => console.log(value, key))
// 키값만
console.log(map.keys())
// 밸류만
console.log(map.values())
// 둘 다(전부)
console.log(map.entries())



// 찾기
console.log(map.get('key1'))
console.log(map.get('key2'))
console.log(map.get('key3'))


// 추가
map.set('key3', 'tomato')
console.log(map)


// 삭제
map.delete('key3')
console.log(map)


// 전부 삭제
map.clear()
console.log(map)


// 오브젝트와의 큰 차이점?
// 사용하는 함수가 다름
// 특정 키를 찾으려면 map은 get을 사용해서 가져와야 함
const key = { name: 'milk', price: 10 }
const milk = { name: 'milk', price: 10, description: '딸기우유' }
const obj = {
  [key]: milk,
}
console.log(obj)

const map2 = new Map([[key, milk]])
console.log(map2)